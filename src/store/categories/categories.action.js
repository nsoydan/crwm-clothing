import CATEGORY_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer/reducer';



export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);