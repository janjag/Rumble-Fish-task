## Not for use on production

This simple app was created as recruitment task:

> Create a node.js application that calculates an average time of adding a block to the ethereum blockchain. This information should available through an API. Furthermore, API should be consumed by a FE application with the purpose of displaying the average time. FE should be written using react and a state manager of your choice (redux, mobx etc.). It would be considered a good practice to use Docker in the development process.

App is based on single node.js server, that contains dummy code insted of true calculation of time for adding block to blockchain.

Front end uses react + redux and basic webpack configuration (more solid configuration for production is recomended). Fore simplicity I decided to use clasic stylesheet method (switching from global styles to more component oriented styling by adding css loaders with autoprefixer). 

Unfortunately i didn't make it run on docker container *(First time working with it. I run into some problems with mounting working directory into container and i took too long to resolve issue)*.
