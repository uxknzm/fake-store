import { RootState } from './../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectAllTodos = (state: RootState) => state.product.product;
export const selectActiveFilter = (state: RootState) => state.categories;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {    
    if (activeFilter === "men's clothing") {
      return allTodos.filter((todo: any) => todo.category === "men's clothing");
    }
    if (activeFilter === "women's clothing") {
        return allTodos.filter((todo: any) => todo.category === "women's clothing");
    }
    if (activeFilter === 'electronics') {
        return allTodos.filter((todo: any) => todo.category === "electronics");
    }
    if (activeFilter === 'jewelery') {
        return allTodos.filter((todo: any) => todo.category === "jewelery");
    }

    return allTodos.filter((todo: any) => todo);
  },
);