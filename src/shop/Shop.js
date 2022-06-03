import React, { Component } from 'react'
import PaginationControls from '../PaginationControls'
import CartSummary from './CartSummary'
import CategoryNavigation from './CategoryNavigation'
import ProductList from './ProductList'
import { ProductPageConnector } from './ProductPageConnector'
import { Link } from 'react-router-dom'

const ProductPages = ProductPageConnector(PaginationControls)

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
                    <div className='navbar-brand'><Link to={"/shop/products"} style={{ color: '#FFF' }}>SPORTS STORE</Link></div>
                    <CartSummary {...this.props} />
                </div>
          </div>
          <div className='row'>
                <div className='col-3 p-2'>
                    <CategoryNavigation baseUrl='/shop/products' categories={this.props.categories}  />
                </div>
                <div className='col-9 p-2'>
                  <ProductPages />
                    <ProductList products={this.props.products} addToCart={this.handleAddToCart} />
                </div>
          </div>
      </div>
    )
  }
}
