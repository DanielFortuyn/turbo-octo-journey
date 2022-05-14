task('deploy', 'Deploy and fill master', async (taskArgs, hre) => {
    const AAVE_POOL_POLYGON = '0x794a61358D6845594F94dc1DB02A252b5b4814aD';
    const AAVE_PROVIDER_POLYGON = '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654';
    const USDC_POLYGON = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
    const AUSDC_POLYGON = '0x625E7708f30cA75bfd92586e17077590C60eb4cD';

    const ERC20Abi = require('../../test/abi/erc20.json');
    const AaveProviderAbi = require('../../test/abi/AaveProvider.json');

    const toBytes32 = (bn) => {
        return ethers.utils.hexlify(ethers.utils.zeroPad(bn.toHexString(), 32));
    };

    const setStorageAt = async (address, index, value) => {
        await ethers.provider.send('hardhat_setStorageAt', [address, index, value]);
        await ethers.provider.send('evm_mine', []); // Just mines to the next block
    };

    const Master = await ethers.getContractFactory('FixedPool');
    MasterContract = await Master.deploy(
        USDC_POLYGON,
        'test',
        'test',
        AAVE_POOL_POLYGON,
        AAVE_PROVIDER_POLYGON,
        AUSDC_POLYGON
    );
    await MasterContract.deployed();

    console.log('Master address ->', MasterContract.address);

    const [owner] = await ethers.getSigners();
    const ownerAddress = await owner.getAddress();
    const USDC_SLOT = 0; // check https://github.com/kendricktan/slot20.git
    const balanceWanted = '5000000000000';
    const locallyManipulatedBalance = ethers.utils.parseUnits(balanceWanted);

    const index = ethers.utils.solidityKeccak256(
        ['uint256', 'uint256'],
        [ownerAddress, USDC_SLOT] // key, slot
    );

    await setStorageAt(
        USDC_POLYGON,
        index.toString(),
        toBytes32(locallyManipulatedBalance).toString()
    );

    const AaveProvider = new ethers.Contract(
        AAVE_PROVIDER_POLYGON,
        AaveProviderAbi,
        ethers.provider
    );
    const USDC = new ethers.Contract(USDC_POLYGON, ERC20Abi, ethers.provider);
    const AUSDC = new ethers.Contract(AUSDC_POLYGON, ERC20Abi, ethers.provider);

    const amountToSupply = balanceWanted;

    const AavePoolBefore = await AaveProvider.getATokenTotalSupply(
        USDC_POLYGON
    );


    console.log(AavePoolBefore);
    await USDC.connect(owner).approve(MasterContract.address, amountToSupply);
    await MasterContract.connect(owner).deposit(amountToSupply, owner.address);
    const xbalance = await AUSDC.balanceOf(MasterContract.address);
    console.log(xbalance);
});
