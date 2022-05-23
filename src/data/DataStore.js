import { applyMiddleware, createStore } from "redux"
import { CommonReducer } from "./CommonReducer"
import { ShopReducer } from "./ShopReducer"
import { CartReducer } from "./CartReducer"
import { asyncAction } from "./AsyncMiddleware"

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncAction))