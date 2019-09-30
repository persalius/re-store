import React from "react";
import {connect} from "react-redux";
import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from "../../actions";
import "./cart-table.css";

const CartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, i) => {
                            const {id, title, count, total} = item;

                            return (
                                <tr key={id}>
                                    <td>{i + 1}</td>
                                    <td>{title}</td>
                                    <td>{count}</td>
                                    <td>${total}</td>
                                    <td>
                                        <button 
                                            onClick={() => onDelete(id)} 
                                            className="btn btn-outline-danger btn-sm float-right">
                                            <i className="fa fa-trash-o"></i>
                                        </button>
                                        <button 
                                            onClick={() => onIncrease(id)} 
                                            className="btn btn-outline-success btn-sm float-right">
                                            <i className="fa fa-plus-circle"></i>
                                        </button>
                                        <button 
                                            onClick={() => onDecrease(id)} 
                                            className="btn btn-outline-warning btn-sm float-right">
                                            <i className="fa fa-minus-circle "></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <div className="total">Total: ${total}</div>
        </div>
    );
};

const mapStatetoProps = state => {
    return {
        items: state.shopingCart.cartItems,
        total: state.shopingCart.orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStatetoProps, mapDispatchToProps)(CartTable);