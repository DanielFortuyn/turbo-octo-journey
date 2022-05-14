//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./LeveragePool.sol";

//maybe create a whitelist to let only known investors to create new tranches to avoid that the array become too big
contract FactoryPool {
    address public owner;
    address[] public Pools;
    mapping(address => address[]) public AssetExistingTranches;

    event NewPoolCreated(address indexed, address indexed);

    constructor() {
        owner = msg.sender;
    }

    // don't let pool created with the same structure as the one before
    function createNewPool(address _asset, string calldata _name, string calldata _symbol,  uint256 _leverageRatio) public {
        LeveragePool pool = new LeveragePool(_asset, _name, _symbol, _leverageRatio);
        require(
            address(pool) != address(0),
            "There was an issue while creating the pool"
        );
        Pools.push(address(pool));
        AssetExistingTranches[_asset].push(address(pool));

        emit NewPoolCreated(_asset, address(pool));
    }

    function returnAssetTranches(address _asset) public view returns (address[] memory) {
        return AssetExistingTranches[_asset];
    }

    function returnAssetsLists() public view returns (address[] memory) {
        return Pools;
    }


    //create function to Remove if necessary
}
