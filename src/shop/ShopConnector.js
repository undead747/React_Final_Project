import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as ShopActions from "../data/ActionCreators";
import * as CartActions from "../data/CartActionCreator";
import { DataGetter } from "../data/DataGetter";
import { DataTypes } from "../data/Types";
import CartDetails from "./CartDetails";
import Shop from "./Shop";
import Checkout from "./Checkout";
import Thanks from "./Thanks";

const mapDispatchToProp = {
  ...ShopActions,
  ...CartActions
};

// const filterProducts = (products = [], category) => {
//   return !category || category === "All"
//     ? products
//     : products.filter(
//         (p) => p.category.toLowerCase() === category.toLowerCase()
//       );
// };

export const ShopConnector = connect(
  ds => ds,
  mapDispatchToProp
)(
  class extends Component {
    selectComponent = (routeProps) => {
      const wrap = (Component, Content) => {
        return <Component {...routeProps} {...this.props}>{Content && <Content {...routeProps} {...this.props}></Content>}</Component>
      }

      switch (routeProps.match.params.section) {
        case "products":
          return wrap(DataGetter, Shop);
        case "cart":
          return wrap(CartDetails);
        case "checkout":
          return wrap(Checkout);
        case "thanks":
          return wrap(Thanks);
        default:
          return <Redirect to="/shop/products/all/1" />
      }
    }

    render() {
      return <Switch>
        <Redirect from="/shop/products/:category"
          to="/shop/products/:category/1" exact={true} />
        <Route path={"/shop/:section?/:category?/:page?"}
          render={routeProps => this.selectComponent(routeProps)} />
      </Switch>
    }

    componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
  }
);
