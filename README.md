# Ether Legends Online - NFT Based Web3.0 Multiplayer Game

Introducing Ether Legends Online, a groundbreaking multiplayer game set in the immersive world of web3.0. Embracing the concept of "play-to-earn" and "learn-to-earn," our game revolutionizes the gaming landscape by empowering the young generation to embark on an exciting journey of adventure, knowledge, and prosperity.

Step into a realm where entertainment and education seamlessly intertwine. Ether Legends Online is not just a game; it's an opportunity for players to unlock their full potential. We have crafted an experience that captivates the imagination while fostering a deep understanding of web3.0 technologies in an enjoyable and interactive manner.

Prepare to embark on a thrilling adventure where every action has a purpose. As you explore the vast virtual world, you'll encounter challenges, solve puzzles, and conquer foes, all while honing your skills and accumulating valuable rewards. Unlike traditional games that require upfront fees or restrict access to key features, Ether Legends Online provides equal opportunities for all. We start you off with an impressive collection of 10 unique Non-Fungible Tokens (NFTs) upon registration, enabling you to immediately start earning and building your digital empire.

## Problem Statement

Traditional gaming models often require players to pay upfront fees or make in-app purchases to access certain features or acquire valuable in-game assets. This creates a barrier for entry and limits the earning potential for players. Additionally, many educational resources for learning web3.0 technologies lack interactive and practical elements, making the learning process less engaging.

## Solution

Ether Legends Online aims to solve these challenges by offering an inclusive play-to-earn and learn-to-earn gaming experience. We differentiate ourselves from other games by providing 10 free Non-Fungible Tokens (NFTs) to every player upon registration, allowing them to immediately start earning rewards. Our game is built on cutting-edge web3.0 technologies, including Solidity, JavaScript, Ethers.js, CSS3, Web3j, Tailwind CSS, Truffle Suite, Hardhat, Avalanche, and Vite.js.

## Tech Stack

### Solidity

Solidity is a programming language specifically designed for writing smart contracts on various blockchain platforms. It allows us to create the logic and rules governing the behavior of our in-game assets, ensuring transparency, security, and immutability.

### JavaScript ( React )

JavaScript is a widely-used programming language for both frontend and backend development. In Ether Legends Online, we leverage JavaScript to create interactive and dynamic user interfaces, handle game logic, and facilitate communication with the Ethereum blockchain.

### Ethers.js

Ethers.js is a powerful JavaScript library that provides a concise and intuitive API for interacting with Ethereum. We utilize Ethers.js to manage wallets, send transactions, and interact with smart contracts seamlessly within our game.

### CSS3 and Tailwind CSS

CSS3 and Tailwind CSS enable us to design and style captivating user interfaces, enhancing the visual appeal and user experience of Ether Legends Online. We leverage the flexibility and responsiveness of these technologies to create an immersive gaming environment.

### Web3j

Web3j is a Java library that simplifies the integration of applications with Ethereum and other web3.0 technologies. By utilizing Web3j, we ensure compatibility with Java-based backend systems and facilitate seamless communication between different components of our game.

### Truffle Suite and Hardhat

Truffle Suite and Hardhat are development frameworks that provide an array of tools for building, testing, and deploying smart contracts. We utilize these frameworks to streamline the development process, automate testing, and ensure the reliability and security of our game's smart contracts.

### Avalanche

Avalanche is a high-performance blockchain platform that offers fast and low-cost transactions. By integrating Avalanche into Ether Legends Online, we provide players with a seamless gaming experience, reducing transaction fees and enabling quick and efficient in-game asset transfers.

### Vite.js

Vite.js is a next-generation web application framework that leverages blockchain technology to enhance performance and scalability. We utilize Vite.js to create a fast and efficient frontend for Ether Legends Online, ensuring smooth gameplay and an optimal user experience.



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

