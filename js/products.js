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

let generateProducts = () => {
  return (productContainer.innerHTML = allProducts
    .map((x) => {
      let { id } = x;
      let search = allProducts.find((y) => y.id === id) || {};
      let description =
        search.description.slice(0, 40) + " ... more information";
      if (search.onSale) {
        return ` 
          <a href="./specific.html?${search.id}"id="product" class="product">
            <h2>${search.title}</h2>
             <img
              src="${search.image.url}"
              alt="${search.image.alt}"
            />
            <h3 id="product-description" class="product-description">${description}</h3>
            <div class = "price-container">
            <h3 class = "old-price">$ ${search.price}</h3>
            <h3>$ ${search.discountedPrice}</h3>
            <h3> On Sale! </h3>
            </div>
          </a>
        `;
      } else {
        return ` 
        
          <a href="./specific.html?${search.id}" id="product" class="product">
            <h2>${search.title}</h2>
             <img
              src="${search.image.url}"
              alt="${search.image.alt}"
            />
            <h3 id="product-description" class="product-description">${description}</h3>
            <h3>$ ${search.price}</h3>
          </a>
        `;
      }
    })

    .join(""));
};

async function productRender() {
  try {
    await getProducts(rainyDaysAPI);
    await generateProducts();
  } catch (error) {
    alert(error);
  } finally {
  }
}
productRender();
