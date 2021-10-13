import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

const Rresturant = () => {
  const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);

  const filteritem = (cagegory) => {

    if (cagegory ==="All") {
        setMenuData(Menu);
        return;
    }
    const updateList = Menu.filter((currElem) => {
      return currElem.category === cagegory;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <NavBar filteritem={filteritem}  menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Rresturant;
