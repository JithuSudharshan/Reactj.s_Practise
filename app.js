import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
        <h3 className="brand-name">Chewsy</h3>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Your Cart</li>
          <li>Offers</li>
        </ul>
      </div>
    </div>
  );
};

const ProductCard = (props) => {
  const { resData } = props;
  const { name, cuisines, rating, timeToDelivery} = resData;

  return (
    <div className="product-card">
      <img
        className="product-img"
        src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"
      />
      <h4>{name}</h4>
      <h5>{cuisines}</h5>
      <h5>{rating}</h5>
      <h5>{timeToDelivery}</h5>
    </div>
  );
};

const restaurants = [
  {
    id: 1,
    name: "Spice Villa",
    rating: 4.5,
    cuisines: ["Indian", "Chinese"],
    timeToDelivery: "30 mins",
    priceForTwo: 500,
  },
  {
    id: 2,
    name: "Ocean's Delight",
    rating: 4.2,
    cuisines: ["Seafood", "Continental"],
    timeToDelivery: "40 mins",
    priceForTwo: 800,
  },
  {
    id: 3,
    name: "Pasta Paradise",
    rating: 4.7,
    cuisines: ["Italian", "Desserts"],
    timeToDelivery: "25 mins",
    priceForTwo: 600,
  },
  {
    id: 4,
    name: "Grill House",
    rating: 4.1,
    cuisines: ["BBQ", "Steakhouse"],
    timeToDelivery: "35 mins",
    priceForTwo: 900,
  },
  {
    id: 5,
    name: "Tandoor Tales",
    rating: 4.6,
    cuisines: ["North Indian", "Mughlai"],
    timeToDelivery: "30 mins",
    priceForTwo: 700,
  },
  {
    id: 6,
    name: "Burger Hub",
    rating: 4.0,
    cuisines: ["American", "Fast Food"],
    timeToDelivery: "20 mins",
    priceForTwo: 400,
  },
  {
    id: 7,
    name: "Sushi Street",
    rating: 4.8,
    cuisines: ["Japanese", "Asian"],
    timeToDelivery: "45 mins",
    priceForTwo: 1000,
  },
  {
    id: 8,
    name: "Curry Kingdom",
    rating: 4.4,
    cuisines: ["Indian", "Thai"],
    timeToDelivery: "30 mins",
    priceForTwo: 650,
  },
  {
    id: 9,
    name: "Veggie Vibes",
    rating: 4.3,
    cuisines: ["Vegetarian", "Vegan"],
    timeToDelivery: "25 mins",
    priceForTwo: 550,
  },
  {
    id: 10,
    name: "Pizza Planet",
    rating: 4.5,
    cuisines: ["Italian", "Fast Food"],
    timeToDelivery: "20 mins",
    priceForTwo: 450,
  },
  {
    id: 11,
    name: "Biryani Bazaar",
    rating: 4.7,
    cuisines: ["Hyderabadi", "Mughlai"],
    timeToDelivery: "35 mins",
    priceForTwo: 750,
  },
  {
    id: 12,
    name: "Noodle Nest",
    rating: 4.2,
    cuisines: ["Chinese", "Asian"],
    timeToDelivery: "25 mins",
    priceForTwo: 500,
  },
  {
    id: 13,
    name: "Street Eats",
    rating: 4.0,
    cuisines: ["Street Food", "Fast Food"],
    timeToDelivery: "15 mins",
    priceForTwo: 300,
  },
  {
    id: 14,
    name: "Royal Feast",
    rating: 4.8,
    cuisines: ["Indian", "Royal Cuisine"],
    timeToDelivery: "40 mins",
    priceForTwo: 1200,
  },
  {
    id: 15,
    name: "Healthy Harvest",
    rating: 4.1,
    cuisines: ["Healthy", "Salads"],
    timeToDelivery: "20 mins",
    priceForTwo: 500,
  },
  {
    id: 16,
    name: "Taco Town",
    rating: 4.3,
    cuisines: ["Mexican", "Tex-Mex"],
    timeToDelivery: "25 mins",
    priceForTwo: 550,
  },
  {
    id: 17,
    name: "Dessert Den",
    rating: 4.9,
    cuisines: ["Desserts", "Bakery"],
    timeToDelivery: "15 mins",
    priceForTwo: 350,
  },
  {
    id: 18,
    name: "Wok Wonders",
    rating: 4.4,
    cuisines: ["Chinese", "Thai"],
    timeToDelivery: "30 mins",
    priceForTwo: 600,
  },
  {
    id: 19,
    name: "Kebab Korner",
    rating: 4.6,
    cuisines: ["Mughlai", "Middle Eastern"],
    timeToDelivery: "35 mins",
    priceForTwo: 800,
  },
  {
    id: 20,
    name: "Pan Asian Pavilion",
    rating: 4.7,
    cuisines: ["Asian", "Japanese", "Thai"],
    timeToDelivery: "40 mins",
    priceForTwo: 950,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search bar</div>
      <div className="cards">
        {restaurants.map((restaurant) => (
          <ProductCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
