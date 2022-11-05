async function main() {
  const contractAddress = "0xd605cFf9D1E360679910E89Ce9d2036FF62A7d41";
  const myContract = await hre.ethers.getContractAt(
    "VDOChain",
    contractAddress
  );

  const txn1 = await myContract.uploadContent(
    "This is my content",
    "This is my thumbnail",
    "This is my details"
  );
  console.log("Txn hash:", txn1.hash);

  const txn2 = await myContract.likeContent(1);
  console.log("Txn hash:", txn2.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
