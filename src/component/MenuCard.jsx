import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((currElem) => {
          const { id, name, category, image, price, description } = currElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <h2 className="card-author subtle">{name}</h2>
                    <samp className="car-description subtle">
                      {description}
                    </samp>
                    <div className="card-read">read</div>
                  </div>
                  <img src={image} alt="image" className="card-media" />
                  <span className="card-tag subtle">order Now</span>
                  <span className="card-tag subtle">{price}</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
