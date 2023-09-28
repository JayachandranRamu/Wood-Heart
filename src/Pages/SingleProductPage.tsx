// import styled from "styled-components";
// import {style} from "./SingleProductPage.module.css";
import styles from "./styles/SingleProductPage.module.css";
// import { Box } from "@chakra-ui/react";
// import { styled } from "@chakra-ui/react";
// import styles "./styles/SingleProductPage.module.css"
export const SingleProductPage = () => {
  return (
    <div style={{ padding: "4%", backgroundColor: "#E0E0E0" }}>
      <div className={styles.wrapper}>
        <div style={{ width: "50%" }}>
          <img
            src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic4.webp"
            alt=""
          />
        </div>
        <div className={styles.details}>
          <h1>COZY ARMCHAIR</h1>
          <h4>$221.99</h4>
          <h5>⭐ 4.5</h5>
          <p>
            Sed lacinia justo vitae cursus natoque dolor vel risus turpis
            iaculis ut senectus metus tempus accumsan consectetur vivamus.
          </p>
          {/* <hr /> */}
          <div className={styles.color}>
            <h3>Color :</h3>
            <button></button> <button></button>
            <button></button>
          </div>
          <div className={styles.cont}>
            <div className={styles.quant}>
              <button>-</button>
              <h4>4</h4>
              <button>+</button>
            </div>
            <button className={styles.add}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
