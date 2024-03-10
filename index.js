const axios = require('axios');
const { gweiToEther } = require('ftm-gas-convert');

async function getGasPrice() {
  try {
    const gweiValue = 2000000000; // 1 Gwei
    const etherValue = gweiToEther(gweiValue);
    console.log(etherValue); // Output: 1 Ether

    const response = await axios.get('https://www.etherchain.org/api/gasPriceOracle');
    if (response.status === 200) {
      const gasPrice = response.data.fast / 10; // Convert from Wei to GWei
      return gasPrice;
    } else {
      throw new Error('Failed to fetch gas price');
    }
  } catch (error) {
    throw new Error('Failed to fetch gas price');
  }
}

module.exports = {
  getGasPrice
};
