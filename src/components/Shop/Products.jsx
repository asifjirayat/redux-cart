import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "The first book I wrote",
  },
  {
    id: "p2",
    price: 9,
    title: "My second book",
    description: "The second book I wrote",
  },
  {
    id: "p3",
    price: 8,
    title: "My third book",
    description: "The third book I wrote",
  },
  {
    id: "p4",
    price: 18,
    title: "My fourth book",
    description: "The fourth book I wrote",
  },
  {
    id: "p5",
    price: 15,
    title: "My fifth book",
    description: "The fifth book I wrote",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
