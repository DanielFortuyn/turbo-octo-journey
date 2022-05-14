//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import {IPool} from '@aave/core-v3/contracts/interfaces/IPool.sol';
import {ERC20} from "@rari-capital/solmate/src/tokens/ERC20.sol";
import {DataTypes} from '@aave/core-v3/contracts/protocol/libraries/types/DataTypes.sol';
import '@aave/core-v3/contracts/misc/AaveProtocolDataProvider.sol';
import "../external/ERC4626.sol";

contract FixedPool is ERC4626 {
    address                                           owner;
    address                                           underlyingToken;
    address                                           atoken;
    IPool                                             pool;
    AaveProtocolDataProvider                          dataProvider;

    constructor(
        address _asset,
        string memory _name,
        string memory _symbol,
        address _aave_pool, 
        address _aave_provider,
        address _atoken
    ) ERC4626(ERC20(_asset), _name, _symbol) {
        owner = msg.sender;
        pool = IPool(_aave_pool);
        dataProvider = AaveProtocolDataProvider(_aave_provider);
        atoken = _atoken;
        underlyingToken = _asset;
    }

    /*//////////////////////////////////////////////////////////////
                            ERC4626 OVERRIDES
    //////////////////////////////////////////////////////////////*/

    function totalAssets() public view virtual override returns (uint256) {
        return ERC20(atoken).balanceOf(address(this));
    }

    /*//////////////////////////////////////////////////////////////
                            FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    function getLiquidityRate(address _asset) public view returns (uint128) {
        DataTypes.ReserveData memory reserve = pool.getReserveData(_asset);
        require(reserve.lastUpdateTimestamp != 0, "The pool was not updated recently");
        return reserve.currentLiquidityRate;
    }

    function getAvailableTokenPools() public view returns (AaveProtocolDataProvider.TokenData[] memory) {
        return dataProvider.getAllReservesTokens();
    }

    /*//////////////////////////////////////////////////////////////
                    OVERRIDING ERC4626 FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    function beforeWithdraw(uint256 assets, uint256 shares) internal override {
        pool.withdraw(underlyingToken, assets, address(this));
    }

    function afterDeposit(uint256 assets, uint256 shares) internal override {
        ERC20(asset).approve(address(pool), assets);
        pool.supply(underlyingToken, assets, address(this), 0);
    }

    function mint(uint256 shares, address receiver) override public view returns (uint256 assets) {
        require(1 == 0, 'only way to provide liquidity is by using deposit');
        return 0;
    }

    function redeem(
        uint256 shares,
        address receiver,
        address owner
    ) public virtual override returns (uint256 assets) {
        require(1 == 0, 'only way to provide liquidity is by using deposit');
        return 0;
    }
}
