import { createSelector } from 'reselect';    ////

const selectCategoryReducer = (state) => {
  console.log("selector 1 fired:", state);
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],                                   //(state=>state.categories.categories), şeklinde de olabiliyor
  (categories) =>{

   return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      console.log('----');
      return acc;
    },{})}
);

// export const selectCategoriesMap = (state) =>{
//   console.log("categories Selector fired");
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     console.log('-*-*-*');
//     return acc;

//   }, {})
// };
