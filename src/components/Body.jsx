import ProductCard from "./ProductCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react"; //importing the useState hook
import Shimmer from "./Shimmer";

// using useState hook to dynamically re-render the component.
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); //array destructuring
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const fetchData = () => {
    const data = restaurants;
    setRestaurantList(data);
    setFilteredRestaurant(data);
  };
  //conditional rendering for shimmer effect...

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search">

          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            search
          </button>

        </div>

        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantList.filter((res) => res.rating > 4.5);
            setRestaurantList(filteredList); //updating the useState variable
          }}
        >
          TOP RATED ONES
        </button>
      </div>

      <div className="cards">
        {filteredRestaurant.map((restaurant) => (
          <ProductCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
