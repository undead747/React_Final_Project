import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Thanks extends Component {
    render() {
        return (
            <>
                <div className='col bg-dark text-white'>
                    <div className='navbar-brand'>SPORTS STORE</div>
                </div>            
                <div className='m-2 text-center'>
                    <h2>Thanks</h2>
                    <h2>Thanks for placing your order.</h2>
                    <p>Your order is #{this.props.order ? this.props.order.id : 0}</p>
                    <p>We ship your goods as soon as possible.</p>
                    <Link to={"/shop"} className="btn btn-primary">Return to Store</Link>
                </div>
            </>
        );
    }
}

export default Thanks;