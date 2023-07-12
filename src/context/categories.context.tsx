"use client";

import React, { createContext, Dispatch, useReducer } from "react";

type StateType = {
  categories: string[];
  activeCategory: null | string;
  activeSlide: number;
};

type ActionType = {
  type?: string;
  payload?: any;
};

const initialState: StateType = {
  categories: ["interior", "architecture", "object"],
  activeCategory: null,
  activeSlide: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  if (action.type === "CHANGE_CATEGORY") {
    return { ...state, activeCategory: action.payload };
  } else if (action.type === "CHANGE_SLIDE") {
    return { ...state, activeSlide: action.payload };
  } else {
    return initialState;
  }
};

export const CategoriesContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const CategoriesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CategoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoriesContext.Provider>
  );
};
