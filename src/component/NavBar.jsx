import React from "react";

const NavBar = ({ filteritem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(currElem)}
              >
          {currElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
