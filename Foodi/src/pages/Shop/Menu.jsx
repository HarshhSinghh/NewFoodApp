import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortedMenu, setSortedMenu] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // loading Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("public/menu.json");
        const data = await response.json(); // Await the JSON parsing
        setMenu(data);
        setFilteredMenu(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //

  // filter Items
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category); // Compare category property
    setFilteredMenu(filtered);
    setSelectedCategory(category);
    if (filtered) {
      console.log(filtered);
    } else {
      console.log("Could Not be fetched");
    }
  };

  // Show All Data
  const showAll = () => {
    setFilteredMenu(menu); // Set filteredMenu to the entire menu
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // pagination logic

  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentItem = filteredMenu.slice(indexofFirstItem, indexofLastItem);
  const pagination = (pageNumber) => setCurrentPage(pageNumber);
  console.log("this is ", currentItem);
  // setFilteredMenu(currentItem);

  // Sorting Based On A-Z z-a Low high Pricing
  const handleSortedChange = (option) => {
    setSortedMenu(option);
    let sortedItems = [...filteredMenu];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break; // Do nothing for default case
    }
    setFilteredMenu(sortedItems);
  };

  return (
    <div>
      <div>
        {/* Menu banner  */}
        <div className="flex flex-col justify-center items-center mt-16 text-center p-4  ">
          <h1 className="text-5xl font-bold capitalize  ">
            For The Love Of Delicious Food
          </h1>
          <p className=" text-sm mt-6 text-center capitalize">
            Come with family and feel the joy of mouthwatering food <br /> such
            as Greek Salad, Lasagne Butternut Pumpkin, Butter Chicken, Tandoori
            Chicken, and Numerous Indian Non-Veg Dishes
          </p>
          <div>
            <button className="mt-6  py-3 px-5 bg-green rounded-full hover:text-white">
              Order now
            </button>
          </div>
        </div>

        {/* Sorting Of Data  */}
        <div className="section-container ">
          <div className=" mt-20 ml-10 flex flex-col flex-wrap md:flex-row md:justify-between items-center space-y-3 mb-8">
            <div className="flex flex-row gap-5 justify-start md:items-center md:gap-8  flex-wrap  px-4">
              <button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => filterItems("salad")}
                className={selectedCategory === "salad" ? "active" : ""}
              >
                Salad
              </button>
              <button
                onClick={() => filterItems("pizza")}
                className={selectedCategory === "pizza" ? "active" : ""}
              >
                Pizza
              </button>
              <button
                onClick={() => filterItems("soup")}
                className={selectedCategory === "soup" ? "active" : ""}
              >
                Soups
              </button>
              <button
                onClick={() => filterItems("dessert")}
                className={selectedCategory === "dessert" ? "active" : ""}
              >
                Deserts
              </button>
              <button
                onClick={() => filterItems("drinks")}
                className={selectedCategory === "drinks" ? "active" : ""}
              >
                Drinks
              </button>
            </div>

            <div className="flex justify-end mb-8 rounded-lg mr-10 px-2 mt-6 ">
              <div className="bg-black p-2">
                <FaFilter className="h-4 w-4 text-white" />
              </div>

              <select
                name="sort"
                id="sort"
                onChange={(e) => handleSortedChange(e.target.value)}
                value={sortedMenu}
                className="bg-black text-white rounded-sm"
              >
                <option value="A-Z">A-Z</option>
                <option value="a-z">a-z</option>
                <option value="Low to High">Low To High</option>
                <option value="High to Low">High To Low</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ml-8">
            {/* Render filteredMenu */}
            {currentItem.map((item, index) => (
              <Cards item={item} key={index} /> // Added key prop
            ))}
          </div>
        </div>
      </div>
      <div className=" text-center">
        {Array.from({
          length: Math.ceil(filteredMenu.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => pagination(index + 1)}
            className="p-2  text-blac rounded-full gap-4"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
