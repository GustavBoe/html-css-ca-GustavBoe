fetch("https://v2.api.noroff.dev/rainy-days")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
