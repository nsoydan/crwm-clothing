import { createContext, useState,useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';


//After send firebase,we don't need these codes
// import SHOP_DATA from '../../src/shop-data.js';

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  
  const [categoriesMap,setCategoriesMap]=useState([]);  
  //console.log(SHOP_DATA);
 
  // useEffect(()=>{
  //     addCollectionsAndDocuments('categories', SHOP_DATA)   // This is for reading SHOP_DATA and send them to Firbase once
  // },[])

  useEffect(()=>{
      const getCategoriesMap=async ()=>{
        const categoryMap=await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap); 
      };

      getCategoriesMap();
  },[])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};