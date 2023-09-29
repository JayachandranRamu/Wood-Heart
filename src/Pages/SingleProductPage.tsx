import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/SingleProductPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "./yourRootStateFile"; // Import RootState from your Redux setup
import { Text } from "@chakra-ui/react";

export const SingleProductPage: React.FC = () => {
  let { id } = useParams<{ id: string }>(); // Assuming 'id' is a string

  const { products, isLoading, isError } = useSelector(
    (store: RootState) => ({
      products: store.productReducer.products,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
    })
  );

  const filteredProducts = products.filter((el) => el.id === +id);
console.log(products,filteredProducts)
  return (
    <div style={{ padding: "4%", backgroundColor: "#E0E0E0" }}>
      <div className={styles.wrapper}>
        <div style={{ width: "50%" }}>
          <img src={filteredProducts[0]?.image} alt="" />
        </div>
        <div className={styles.details}>
          <Text textTransform={"uppercase"} color={"#0b3954"}  fontSize={"42"} >{filteredProducts[0]?.name}</Text>
          <h4>$ {filteredProducts[0]?.price}</h4>
          <h5>{filteredProducts[0].rating}</h5>
          <p>
           {filteredProducts[0].about}
          </p>
          {/* <hr /> */}
          {/* <div className={styles.color}>
            <h3>Color :</h3>
            <button></button> <button></button>
            <button></button>
          </div> */}
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
