export const productUrl =
  'https://flowersforschool.one/flower-power/wp-json/wc/store/products/';


async function data() {
  const response = await fetch("https://flowersforschool.one/flower-power/wp-json");
  console.log(response);
  const json = await response.json();
  console.log(json);
}

data();