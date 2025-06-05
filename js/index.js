const shopMen = document.getElementById("shop-men");
const shopWomen = document.getElementById("shop-women");
const shopAll = document.getElementById("shop-all");
shopMen.addEventListener("mouseover", () => {
  shopMen.style.cursor = "pointer";
});
shopWomen.addEventListener("mouseover", () => {
  shopWomen.style.cursor = "pointer";
});
shopMen.addEventListener("click", () => {
  window.location.href = "./products.html";
});
shopWomen.addEventListener("click", () => {
  window.location.href = "./products.html";
});
shopAll.addEventListener("mouseover", () => {
  shopAll.style.cursor = "pointer";
});
shopAll.addEventListener("click", () => {
  window.location.href = "./products.html";
});
