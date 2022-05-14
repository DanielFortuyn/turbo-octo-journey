task('mine', 'Just mines a block', async (taskArgs, hre) => {
    const AUSDC_POLYGON = '0x625E7708f30cA75bfd92586e17077590C60eb4cD';
    const ERC20Abi = require('../../test/abi/erc20.json');
    const fillMasterContractAddress = '0x6DC1bEbb8e0881aCa6F082F5F53dD740c2DDF379';
    await ethers.provider.send('evm_mine', []); // Just mines to the next block
    const AUSDC = new ethers.Contract(AUSDC_POLYGON, ERC20Abi, ethers.provider);
    console.log(await AUSDC.balanceOf(fillMasterContractAddress));
});
