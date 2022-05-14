//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "../external/ERC4626.sol";
import {ERC20} from "@rari-capital/solmate/src/tokens/ERC20.sol";

contract  LeveragePool is ERC4626 {
    uint256 public immutable leverageMultiple;

    constructor(
        address _asset,
        string memory _name,
        string memory _symbol,
        uint256 _leverageMultiple
    ) ERC4626(ERC20(_asset), _name, _symbol) {
        leverageMultiple = _leverageMultiple;
    }

    /*//////////////////////////////////////////////////////////////
                            ERC4626 OVERRIDES
    //////////////////////////////////////////////////////////////*/

    function totalAssets() public view virtual override returns (uint256) {
        return asset.balanceOf(address(this));
    }

    // function beforeWithdraw(uint256 assets, uint256 shares) internal override {}

    // function afterDeposit(uint256 assets, uint256 shares) internal override {}
}
