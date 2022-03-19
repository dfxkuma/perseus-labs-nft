pragma solidity ^0.5.6;

import "@klaytn/contracts/token/KIP17/KIP17Full.sol";
import "@klaytn/contracts/token/KIP17/KIP17Mintable.sol";
import "@klaytn/contracts/token/KIP17/KIP17MetadataMintable.sol";
import "@klaytn/contracts/token/KIP17/KIP17Burnable.sol";
import "@klaytn/contracts/token/KIP17/KIP17Pausable.sol";

contract KIP17TokenOwnable is KIP17Full, KIP17Mintable, KIP17MetadataMintable, KIP17Burnable, KIP17Pausable {
    constructor (string memory name, string memory symbol) public KIP17Full(name, symbol) {
    }
}

contract PerseusLabsNFT is KIP17TokenOwnable("PerseusLabsNFT", "PSERLAB") {

}