async function main() {
    // Grab the contract factory 
    const MyNFT = await ethers.getContractFactory("MyNFT");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", myNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });



//  Contract deployed to address: 0x332f6d642A2F760cf3cb5314113447dF2F9Cd575
