## Not for use on production

To run this app use ```npm start```.

This simple app was created as recruitment task:

> Create a node.js application that calculates an average time of adding a block to the ethereum blockchain. This information should available through an API. Furthermore, API should be consumed by a FE application with the purpose of displaying the average time. FE should be written using react and a state manager of your choice (redux, mobx etc.). It would be considered a good practice to use Docker in the development process.

App is based on single node.js server, that contains dummy code insted of true calculation of time for adding block to blockchain.

Front end uses react + redux and basic webpack configuration (more solid configuration for production is recomended). Fore simplicity I decided to use clasic stylesheet method (switching from global styles to more component oriented styling by adding css loaders with autoprefixer). 

Unfortunately i didn't make it run on docker container *(First time working with it. I run into some problems with mounting working directory into container and i took too long to resolve issue)*.

## Improvements 

- Switching to async requests
- ~~Adding loader component to front end for pending requests~~
- Adding additional input to set number of blocks used in calculation 

### or
- change how app is working: from request based to more "live" approach with calls to api on interval and calculate the average time after each response
