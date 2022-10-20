const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const myContract = await hre.ethers.getContractFactory("UNIVERSAL");
  const nfterc721 = await myContract.deploy();
  await nfterc721.deployed();

  console.log("NFTERC721 address: ", nfterc721.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
