const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("KamiCoin", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const KamiCoin = await ethers.getContractFactory("KamiCoin");
    const coin = await upgrades.deployProxy(KamiCoin, ["KAM Coin", "KAM", "0xbfcd2d7a4193d2e77e72b94388f07e4ea54de0ae", '1000000000'], { initializer: 'initialize' });
    await coin.deployed();

    return { coin, owner, otherAccount };
  }

  describe("KamiCoin", function () {

    it("Should set the right unlockTime", async function () {
      const { coin, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);
      const balance = await coin.balanceOf('0xbfcd2d7a4193d2e77e72b94388f07e4ea54de0ae');
      expect(balance).to.equal(ethers.utils.parseEther('1000000000').toString());
    });


  });
});
