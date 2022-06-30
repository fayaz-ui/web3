require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/2laTLOefES5yNPSwntDP3iF14e2NB6mb',
      accounts: [
        'cab707c75149e3e7d44a69bc2f82501fa2cbb1be4daa2c52635b297d57913fdd',
      ],
    },
  },
}
