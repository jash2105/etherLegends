# etherLegends


1. **Navigate to the web3 directory:** In your terminal, change the current directory to the web3 directory of your project by running the following command:
   ```
   cd web3
   ```

2. **Initialize the Hardhat project:** Run the following command to initialize the Hardhat project:
   ```
   npx hardhat
   ```
   When prompted, select the following options:
   - Choose "Create a new Hardhat project."
   - Select "TypeScript" as the language.
   - Press Enter twice to confirm the default settings.

3. **Install required packages:** Install the necessary packages by running the following command:
   ```
   npm install @openzeppelin/contracts dotenv @nomiclabs/hardhat-ethers
   ```

4. **Install Hardhat packages:** Install additional Hardhat packages with the following command:
   ```
   npm install --save-dev "hardhat@^2.12.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"
   ```

5. **Install Core:** Install Core, a Metamask smart wallet alternative built for Avalanche dApps. You can find installation instructions for Core on their website.

6. **Enable Testnet mode in Core:** Open the Core extension, click the hamburger menu on the top left, go to "Advanced," and enable Testnet mode.

7. **Fund your wallet:** Obtain some test AVAX by using the Avalanche Faucet. Follow the instructions on the faucet website to receive test AVAX in your wallet.

8. **Create .env file:** Create a new file named `.env` in the web3 directory. Add the following line to the file, replacing `PRIVATE_KEY` with your private key obtained from Core:
   ```
   PRIVATE_KEY=YOUR_PRIVATE_KEY
   ```

9. **Copy hardhat.config.ts file:** Copy the contents of the `hardhat.config.ts` file from a GitHub gist or another source and replace the existing `hardhat.config.ts` file in the web3 directory with the copied contents. This file defines the configuration for your Hardhat project.

10. **Copy deploy.ts script:** Copy the contents of the `deploy.ts` script from a GitHub gist or another source and save it as `deploy.ts` in the `scripts` directory of your web3 project. This script deploys the smart contract to the network.

11. **Copy AvaxGods.sol contract:** Copy the contents of the `AvaxGods.sol` smart contract code from a GitHub gist or another source and save it as `AvaxGods.sol` in the `contracts` directory of your web3 project.

12. **Compile the contract:** Run the following command to compile the smart contract:
    ```
    npx hardhat compile
    ```

13. **Deploy the smart contract:** Deploy the smart contract to the Fuji test network by running the following command:
    ```
    npx hardhat run scripts/deploy.ts --network fuji
    ```
    This command will deploy the contract and display the contract address in the terminal.

14. **Move contract artifact file:** Move the `AVAXGods.json` file from the `artifacts/contracts` directory to the `contract` directory of your frontend application. This file contains the ABI and other contract information.

15. **Update frontend contract address:** Open the `index.js` file in the `contract` directory of your frontend application. Replace the existing contract address with the one obtained from the previous step.

