import { expect } from "chai";


const PLAYING_FEE = ethers.utils.parseEther("0.1");


describe("LearnToEarn", async () => {

  beforeEach(async () => {
    [deployer, player1, player2] = await ethers.getSigners();

    const LearnToEarn = await ethers.getContractFactory("LearnToEarn");
    const learnToEarn = await LearnToEarn.deploy();
    await learnToEarn.deployed();
  });

  describe("When its deployed and hasn't started yet", async () => {
    it("checks that all state variables contain default values", async () => {
      const gameTime = await prizeContract.startTime();
      const gameHighScore = await prizeContract.highestScore();
      const currentWinner = await prizeContract.winnerAddress();
      const prizePoolBalance = await prizeContract.prizePool();
      const gameState = await prizeContract.isOpen();
      const gameNumber = await prizeContract.gameId();
      expect(gameTime).to.eq(0);
      expect(gameHighScore).to.eq(0);
      expect(currentWinner).to.be.equal(ethers.constants.AddressZero);
      expect(prizePoolBalance).to.eq(0);
      expect(gameState).to.eq(false);
      expect(gameNumber).to.eq(1);
    });
  });


})