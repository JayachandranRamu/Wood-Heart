import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Filter: React.FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [category, setCategory] = useState<string[]>(
    searchParam.getAll('category') || []
  );
  const [gender, setGender] = useState<string[]>(searchParam.getAll('gender') || []);
  const [price, setPrice] = useState<string>(
    searchParam.get('price_lte')
      ? `${searchParam.get('price_gte')},${searchParam.get('price_lte')}`
      : ''
  );

  const HandleFilterByCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;
    const newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const HandleSortByPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const HandleFilterByGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;
    const newGender = [...gender];
    if (gender.includes(option)) {
      newGender.splice(newGender.indexOf(option), 1);
    } else {
      newGender.push(option);
    }
    setGender(newGender);
  };

  useEffect(() => {
    let search = searchParam.get('query');
    let a = price.split(',');

    if (search) {
      setSearchParam({
        category,
        gender,
        price_gte: a[0],
        price_lte: a[1],
        query: searchParam.get('query'),
      });
    } else if (a[1] !== undefined) {
      setSearchParam({ category, gender, price_gte: a[0], price_lte: a[1] });
    } else {
      setSearchParam({ category, gender });
    }
  }, [category, gender, price, searchParam]);

  return (
    <DIV>
      <div>
        <h3>Filter By Gender</h3>
        <div>
          <input
            type="checkbox"
            checked={gender.includes('men')}
            onChange={HandleFilterByGender}
            value="men"
          />
          <label>Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={gender.includes('female')}
            onChange={HandleFilterByGender}
            value="female"
          />
          <label>Women</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={gender.includes('kids')}
            onChange={HandleFilterByGender}
            value="kids"
          />
          <label>Kids</label>
        </div>
      </div>
      <br />
      <h3>Filter By Category</h3>
      <div>
        <div>
          <input
            type="checkbox"
            checked={category.includes('top-wear')}
            onChange={HandleFilterByCategory}
            value="top-wear"
          />
          <label>Top Wear</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={category.includes('foot-wear')}
            onChange={HandleFilterByCategory}
            value="foot-wear"
          />
          <label>Foot Wear</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={category.includes('bottom-wear')}
            onChange={HandleFilterByCategory}
            value="bottom-wear"
          />
          <label>Bottom Wear</label>
        </div>
      </div>
      <br />
      <h3>Sort By Price</h3>
      <div>
        <div>
          <input
            type="radio"
            checked={price === '0,1999'}
            onChange={HandleSortByPrice}
            value="0,1999"
          />
          <label>₹0 - ₹1999</label>
        </div>
        <div>
          <input
            type="radio"
            checked={price === '1999,3999'}
            onChange={HandleSortByPrice}
            value="1999,3999"
          />
          <label>₹1999 - ₹3999</label>
        </div>
        <div>
          <input
            type="radio"
            checked={price === '3999,5999'}
            onChange={HandleSortByPrice}
            value="3999,5999"
          />
          <label>₹3999 - ₹5999</label>
        </div>
        <div>
          <input
            type="radio"
            checked={!price}
            onChange={HandleSortByPrice}
            value=""
          />
          <label>All Prices</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  // Your styles here
`;

export default Filter;
