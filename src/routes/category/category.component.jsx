import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import {  useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';


const Category =()=>{
    console.log("Category component rendered/re-rendered");
    const {category} =useParams();
    const categoriesMap=useSelector(selectCategoriesMap);

    const [products,setProducts]=useState(categoriesMap[category]);
    
    useEffect(()=>{
              
        setProducts(categoriesMap[category]);

    },[category,categoriesMap])



    return(
        <>
        <h4>{category.toUpperCase()}</h4>
        <div className='category-container'>
            {
             products &&   products.map(product=><ProductCard key={product.id} product={product}/>)
            }
        </div>
        </>
    );
}

export default Category;