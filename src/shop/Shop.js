import React, { Component } from 'react'
import CartSummary from './CartSummary'
import CategoryNavigation from './CategoryNavigation'
import ProductList from './ProductList'

export default class Shop extends Component {
  handleAddToCart = (...arg) => {
      this.props.addToCart(...arg)
      this.props.history.push("/shop/cart")
  }

  render() {
    return (
      <div className='container-fluid'>
          <div className='row'>
                <div className='col bg-dark text-white'>
                    <div className='navbar-brand'>SPORTS STORE</div>
                    <CartSummary {...this.props} />
                </div>
          </div>
          <div className='row'>
                <div className='col-3 p-2'>
                    <CategoryNavigation baseUrl='/shop/products' categories={this.props.categories}  />
                </div>
                <div className='col-9 p-2'>
                    <ProductList products={this.props.products} addToCart={this.handleAddToCart} />
                </div>
          </div>
      </div>
    )
  }
}
