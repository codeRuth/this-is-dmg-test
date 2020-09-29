import React from "react";
import { Header } from "./components/Header";
import { FilterChip } from "./components/FilterChip";
import productImage from "./components/assets/product-image.png";
import { ProductCard } from "./components/ProductCard";
import { ProductCardList } from "./components/ProductCardList";
import "./style.css";

function HomePage() {
  const filters = [
    { id: "continental", name: "Continental" },
    { id: "premium", name: "Premium" },
  ];
  const sortOptions = [
    { id: "popularity", name: "Popularity" },
    { id: "price", name: "Price" },
    { id: "stock", name: "Stock" },
  ];

  const featuredProducts = [
    {
      variant: "featured",
      featuredText: "Premium Bestseller",
      image: productImage,
      id: 223,
      name: "Continental - Contiecocontact 5",
      price: 340,
      stock: 45,
      productCode: "205/55 R16 H",
      productFor: "SUV",
      stampShown: true,
    },
    {
      variant: "featured",
      featuredText: "Economy Bestseller",
      image: productImage,
      id: 223,
      name: "Continental - Contiecocontact 5",
      price: 340,
      stock: 0,
      productCode: "205/55 R16 H",
      productFor: "SUV",
      stampShown: true,
    },
  ];

  const products = [
    {
      variant: "list",
      image: productImage,
      id: 223,
      name: "Continental - Contiecocontact 5",
      price: 340,
      stock: 45,
      productCode: "205/55 R16 H",
      productFor: "SUV",
      stampShown: true,
    },
    {
      variant: "list",
      image: productImage,
      id: 223,
      name: "Continental - Contiecocontact 5",
      price: 340,
      stock: 62,
      productCode: "205/55 R16 H",
      productFor: "SUV",
      stampShown: true,
    },
    {
      variant: "list",
      image: productImage,
      id: 223,
      name: "Continental - Contiecocontact 5",
      price: 340,
      stock: 9,
      productCode: "205/55 R16 H",
      productFor: "SUV",
      stampShown: true,
    },
    {
      variant: "list",
      image: productImage,
      id: 223,
      name: "Continental - Contiecocontact 5",
      price: 340,
      stock: 0,
      productCode: "205/55 R16 H",
      productFor: "SUV",
      stampShown: true,
    },
  ];

  return (
    <div className="home-root">
      <Header />
      <section className="home-body container">
        <h2 className="section-title">Recommended Products</h2>
        <div className="options-panel">
          <div className="filter">
            <span>Selected Filters&nbsp;:&nbsp;</span>
            {filters.map((val) => (
              <FilterChip name={val.name} id={val.id} key={val.id} />
            ))}
          </div>
          <div className="sort">
            <select className="sort-select" name="sort">
              {sortOptions.map((val) => (
                <option value={val.id}>{val.name}</option>
              ))}
            </select>
            <span>
              Sort By&nbsp;:&nbsp;
            </span>
          </div>
        </div>
        <hr style={{ marginTop: 16, marginBottom: 16 }} />
        <div className="product-list-container">
          <div className="product-list-highlighted">
            {featuredProducts.map((val) => (
              <ProductCard
                name={val.name}
                id={val.id}
                price={val.price}
                featuredText={val.featuredText}
                image={val.image}
                productCode={val.productCode}
                productFor={val.productFor}
                stampShown={val.stampShown}
                stock={val.stock}
                variant={val.variant}
              />
            ))}
          </div>
          <div style={{ marginTop: 24 }} className="product-list">
            {products.map((val) => (
              <ProductCardList
                name={val.name}
                id={val.id}
                price={val.price}
                image={val.image}
                productCode={val.productCode}
                productFor={val.productFor}
                stampShown={val.stampShown}
                stock={val.stock}
                variant={val.variant}
              />
            ))}
          </div>
        </div>
        <div className="load-more" style={{ marginTop: 24 }}>
          Load More Results
        </div>
      </section>
    </div>
  );
}

export default HomePage;
