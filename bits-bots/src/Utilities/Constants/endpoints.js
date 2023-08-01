export const productUrl =
  'https://flowersforschool.one/flower-power/wp-json/wc/store/products/';

const testUrl = 'https://flowersforschool.one/flower-power/wp-json';


async function data() {
  const response = await fetch(`${testUrl}`);
  console.log(response);
  const json = await response.json();
  console.log(json);
}

data();
