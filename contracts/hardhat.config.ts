import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";


const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.18",
};

export default config;
