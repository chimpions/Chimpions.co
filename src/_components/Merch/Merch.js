import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const merchItems = [
  { title: "White Tee", price: 25, img: "white_tshirt_back.jpg" },
  { title: "Black Tee", price: 25, img: "black_tshirt_back.jpg" },
  { title: "Cap", price: 25, img: "hat.jpg" },
  { title: "Hoodie", price: 25, img: "hoodie_back.jpg" },
];

const MerchRedemption = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Merch</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          backgroundColor: "red",
          borderRadius: 8,
          padding: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            padding: 12,
          }}
        >
          <FaShoppingBag size={24} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {merchItems.map((item) => {
            return <Item item={item}></Item>;
          })}
        </div>
      </div>
    </section>
  );
};

const Item = ({ item: { title, price, img } }) => {
  return (
    <div
      key={title}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "45%",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: 8,
        padding: 16,
        height: 600,
        margin: "10px 0px",
      }}
    >
      <img
        src={`/images/merch/${img}`}
        className="bg-cover w-full"
        alt="Chimpion"
      />
      <h3>{title}</h3>
      <button>Add to Cart</button>
    </div>
  );
};
export default MerchRedemption;

const styles = {
  container:
    "max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6 font-display",
  heading: "text-4xl md:text-6xl mb-8 md:mb-12",
  subsectionHeading: "text-2xl md:text-4xl",
};
