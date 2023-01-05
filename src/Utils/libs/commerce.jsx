import Commerce from '@chec/commerce.js';

const checAPIKey = "pk_test_28571c2e608a746379e3854e4d61ca9402b1b456812d3"

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};


export default new Commerce(
  checAPIKey,
  commerceConfig,
);