task('trialanderror', 'Deploy and fill master', async (taskArgs, hre) => {
    // const AAVE_POOL_POLYGON = '0x794a61358D6845594F94dc1DB02A252b5b4814aD';
    // const AAVE_PROVIDER_POLYGON = '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654';
    // const USDC_POLYGON = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
    // const AUSDC_POLYGON = '0x625E7708f30cA75bfd92586e17077590C60eb4cD';

    // const ERC20Abi = require('../../test/abi/erc20.json');
    // const AaveProviderAbi = require('../../test/abi/AaveProvider.json');

    // const UiIncentiveDataProviderV3Abi = require("@aave/periphery-v3/artifacts/contracts/misc/UiIncentiveDataProviderV3.sol/UiIncentiveDataProviderV3.json")
    // const PoolRegistryAbi = require("@aave/core-v3/artifacts/contracts/protocol/configuration/PoolAddressesProviderRegistry.sol/PoolAddressesProviderRegistry.json");
    // const PoolAddressProvider = require("@aave/core-v3/artifacts/contracts/protocol/configuration/PoolAddressesProvider.sol/PoolAddressesProvider.json");
    // const INCENTIVE_POLYGON = '0x05E309C97317d8abc0f7e78185FC966FfbD2CEC0';
    // const POOLADDRESS_PROVIDER = '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb';
    // const POOLREGISTRY = '0x770ef9f4fe897e59daCc474EF11238303F9552b6';

    // const toBigNumber = (x) => {
    //     return new ethers.BigNumber.from(x).toString();
    // };

    // const toBytes32 = (bn) => {
    //     return ethers.utils.hexlify(ethers.utils.zeroPad(bn.toHexString(), 32));
    // };

    // const setStorageAt = async (address, index, value) => {
    //     await ethers.provider.send('hardhat_setStorageAt', [address, index, value]);
    //     await ethers.provider.send('evm_mine', []); // Just mines to the next block
    // };

    // const impersonateAccount = async (address) => {
    //     await ethers.provider.send('hardhat_impersonateAccount', [address]);
    // };

    // const Master = await ethers.getContractFactory('FixedPool');
    // MasterContract = await Master.deploy(
    //     USDC_POLYGON,
    //     'test',
    //     'test',
    //     AAVE_POOL_POLYGON,
    //     AAVE_PROVIDER_POLYGON,
    //     AUSDC_POLYGON
    // );
    // await MasterContract.deployed();

    // console.log('Master address ->', MasterContract.address);

    // const [owner] = await ethers.getSigners();
    // const ownerAddress = await owner.getAddress();
    // const USDC_SLOT = 0; // check https://github.com/kendricktan/slot20.git
    // const balanceWanted = '5000000000';
    // const locallyManipulatedBalance = ethers.utils.parseUnits(balanceWanted);

    // const index = ethers.utils.solidityKeccak256(
    //     ['uint256', 'uint256'],
    //     [ownerAddress, USDC_SLOT] // key, slot
    // );

    // await setStorageAt(
    //     USDC_POLYGON,
    //     index.toString(),
    //     toBytes32(locallyManipulatedBalance).toString()
    // );

    // const AaveProvider = new ethers.Contract(
    //     AAVE_PROVIDER_POLYGON,
    //     AaveProviderAbi,
    //     ethers.provider
    // );
    // const USDC = new ethers.Contract(USDC_POLYGON, ERC20Abi, ethers.provider);
    // const AUSDC = new ethers.Contract(AUSDC_POLYGON, ERC20Abi, ethers.provider);
    // const UiIncentiveDataProviderV3 = new ethers.Contract(INCENTIVE_POLYGON, UiIncentiveDataProviderV3Abi.abi, ethers.provider);
    // const PoolRegistry = new ethers.Contract(POOLREGISTRY, PoolRegistryAbi.abi, ethers.provider);
    // const PoolAddressesProvider = new ethers.Contract(POOLADDRESS_PROVIDER, PoolAddressProvider.abi, ethers.provider);

    // const amountToSupply = 5000000000000;

    // const AavePoolBefore = await AaveProvider.getATokenTotalSupply(
    //     USDC_POLYGON
    // );


    // console.log(AavePoolBefore);
    // await USDC.connect(owner).approve(MasterContract.address, amountToSupply);
    // await MasterContract.connect(owner).deposit(amountToSupply, owner.address);
    // const AavePoolAfter = await AaveProvider.getATokenTotalSupply(USDC_POLYGON);

    // const nbalance = await AUSDC.balanceOf(MasterContract.address);
    // const shouldBeResult = AavePoolBefore.add(toBigNumber(amountToSupply));

    // const xbalance = await AUSDC.balanceOf(MasterContract.address);
    // console.log(xbalance);

    // const userrewards = await UiIncentiveDataProviderV3.getUserReservesIncentivesData(POOLADDRESS_PROVIDER, MasterContract.address);
    // console.log(userrewards);

    // for (let i = 0; i < userrewards.length; i++) {
    //     console.log('----------assetdivide============');
    //     if (userrewards[i][0] == USDC_POLYGON) {
    //         console.log(userrewards[i])
    //     }
    // }

    // console.log('Mining a block...');
    // await hre.ethers.provider.send('evm_mine', []); // Just mines to the next block
});
