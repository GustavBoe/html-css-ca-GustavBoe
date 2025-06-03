const rainyDaysAPI = "https://v2.api.noroff.dev/rainy-days";
const productContainer = document.getElementById("product-container");
let cart = JSON.parse(localStorage.getItem("cart-data")) || [];
let allProducts = [];
async function getProducts(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    allProducts = await json.data;
  } catch (error) {
    console.log("Something went wrong");
  } finally {
  }
}
getProducts();
let generateProducts = () => {
  return (productContainer.innerHTML = allProducts.map((x) => {
    let { id } = x;
    let search = allProducts.find((y) => y.id === id) || {};
    if (search.onSale) {
      return ` 
        <div class="product">
          <a href="./specific.html?${search.id}">
            <img
              src="${search.image.url}"
              alt="${search.image.alt}"
            />
            <h2>${search.title}</h2>
            <h3>${search.discountedPrice}</h3>
          </a>
        </div>`;
    }
  }));
};
