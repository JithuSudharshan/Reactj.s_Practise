import ProductCard from "./ProductCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react"; //importing the useState hook

// using useState hook to dynamically re-render the component.
const Body = () => {
  let [restaurantList, setRestaurantList] = useState(restaurants); //array destructuring

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.553692&lng=76.217991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(json);
  };

  return (
    <div className="body">
      <div className="search">search bar</div>
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = restaurantList.filter((res) => res.rating > 4.5);
          setRestaurantList(filteredList); //updating the useState variable
        }}
      >
        TOP RATED ONES
      </button>
      <div className="cards">
        {restaurantList.map((restaurant) => (
          <ProductCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
