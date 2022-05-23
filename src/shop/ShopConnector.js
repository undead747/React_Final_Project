import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadData } from "../data/ActionCreators";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreator";
import { DataTypes } from "../data/Types";
import CartDetails from "./CartDetails";
import Shop from "./Shop";

const mapStateToProp = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProp = {
  loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
};

const filterProducts = (products = [], category) => {
  return (!category || category === "All") ? products : products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export const ShopConnector = connect(mapStateToProp, mapDispatchToProp)(
  class extends Component{
    render(){
      return <Switch>
          <Route path={"/shop/products/:category?"} render={(routerProp) => <Shop {...this.props} {...routerProp} products={filterProducts(this.props.products, routerProp.match.params.category)} />} />
          <Route path={"/shop/cart"} render={(routerProp) => <CartDetails {...routerProp} {...this.props} /> } />
          <Redirect to={"shop/products"} />
      </Switch>
    }

    componentDidMount(){
      this.props.loadData(DataTypes.CATEGORIES)
      this.props.loadData(DataTypes.PRODUCTS)
    }
  }
)
