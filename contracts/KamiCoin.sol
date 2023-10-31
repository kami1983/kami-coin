// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract KamiCoin is Initializable, ERC20Upgradeable {
    function initialize(string memory name, string memory symbol, address _depositor, uint256 _totalSupply) public initializer {
        __ERC20_init(name, symbol);
        _mint(_depositor, _totalSupply * 10**uint256(decimals()));
    }

    function impVersion() public pure returns (string memory) {
        return '1.0.0';
    }
}