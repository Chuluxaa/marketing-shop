const products = [
  {
    name: "L'Oreal Revitalift Cream",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
    link: "https://www.amazon.com/"
  },
  {
    name: "The Ordinary Serum",
    price: "$14.50",
    image: "https://images.unsplash.com/photo-1585238342028-4bbc1f7a5f82",
    link: "https://www.sephora.com/"
  },
  {
    name: "La Roche-Posay Cleanser",
    price: "$16.00",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519b45c2",
    link: "https://www.ulta.com/"
  }
];

const productsDiv = document.getElementById("products");

products.forEach(product => {
  productsDiv.innerHTML += `
    <div class="product">
      <img src="${product.image}">
      <div class="product-content">
        <h3>${product.name}</h3>
        <div class="price">${product.price}</div>
        <button onclick="window.open('${product.link}', '_blank')">
          View Product
        </button>
      </div>
    </div>
  `;
});
