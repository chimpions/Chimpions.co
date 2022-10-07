import React, { useState } from "react";
import merchRedemptionList from "./merchRedemptionList.json";

const MerchRedemption = () => {
  const [searchInput, setSearchInput] = useState("");
  console.log("list", merchRedemptionList);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Merch Redemption List</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <h2
            className={styles.subsectionHeading}
            style={{ marginRight: "12px" }}
          >
            Search by Chimp Name:
          </h2>
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            className="font-body right-0 mx-3 mt-0 p-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
          />
        </div>
        <div>
          <span style={{ color: "red" }}>Red </span> names have been claimed
        </div>
        <ul
          style={{
            width: "50%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {merchRedemptionList
            .filter((chimp) =>
              chimp.Name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((chimp) => (
              <li
                style={{
                  color: chimp.Claimed.toLowerCase() === "y" ? "red" : "white",
                }}
              >
                {chimp.Name}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default MerchRedemption;

const styles = {
  container:
    "max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6 font-display",
  heading: "text-4xl md:text-6xl mb-8 md:mb-12",
  subsectionHeading: "text-2xl md:text-4xl",
};
