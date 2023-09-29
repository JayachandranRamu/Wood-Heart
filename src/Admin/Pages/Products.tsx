import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import AdminNavbar from '../Components/Admin-Navbar';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  // const data = useSelector((store: any) => store.productsReducer.products); // Adjust the store type
  // const isLoading = useSelector((store: any) => store.productsReducer.isLoading); // Adjust the store type
  //const [searchParam] = useSearchParams();
  const Navigate = useNavigate();

  // const params = {
  //   params: {
  //     q: searchParam.get('query'),
  //     category: searchParam.getAll('category'),
  //     gender: searchParam.getAll('gender'),
  //     price_gte: searchParam.get('price_gte'),
  //     price_lte: searchParam.get('price_lte'),
  //   },
  // };

  // useEffect(() => {
  //   dispatch(getProducts(params));
  // }, [searchParam, dispatch]);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <AdminNavbar />
      <div style={{ display: 'grid', gridTemplateColumns: '15% 85%' }}>
        {/* <Filter /> */}
        <DIV className=".product-list">
          <div className="product-list">
            {/* {data.length>0 && data.map((el: any) => {
              return (
                <div className="product-item" key={el.id}>
                  <div className="product-image">
                    <img src={el.image} alt="" />
                  </div>
                  <h2>{el.name}</h2>
                  <h3>₹{el.price}</h3>
                  <button
                    className="cart-btn"
                    onClick={() => Navigate(`/products/${el.id}`)}
                  >
                    More Details
                  </button>
                </div>
              );
            })} */}
          </div>
        </DIV>
      </div>
    </>
  );
};

const DIV = styled.div`
  // Your styles here
`;

export default Products;
