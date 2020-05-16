import React from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import axios from 'axios';
import sweetalert from 'sweetalert';

class Orders extends React.Component {
    constructor(props) {
        super();

        this.state = { orders: [], total: 0, feedback: " ", pizza: " ", open: false, id: "" };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }


    fetchOrders() {
        // Retrieve all the orders from the database
        axios.get('/api/orders')
            .then(response => {
                this.setState({
                    orders: response.data.order,
                    total: response.data.total
                });
            })
            .catch(error => console.log(error));
    }


    componentDidMount() {
        this.fetchOrders();
    }


    handleOpenModal(id, pizza) {
        // Open the modal and set pizza value for the modal content
        this.setState({ open: true, id: id, pizza: pizza });
    }


    handleDeleteItem() {
        // Issue a post request for item delete
        let url = `/api/orders/delete/${this.state.id}`;
        axios.post(url, { itemId: this.state.id })
            .then(response => {
                this.setState({ feedback: response.data.status });
                sweetalert(this.state.feedback, 'You may close this window now', 'success')
                    .then(() => this.setState({ feedback: " " }));

                // Re-fetch the orders
                this.fetchOrders();
            })
            .catch(error => {
                this.setState({ feedback: error.response.data.errorMessage });
                sweetalert({
                    title: this.state.feedback,
                    text: 'Please try again.',
                    icon: 'error',
                    dangerMode: true
                })
                    .then(() => this.setState({ feedback: " " }))
            });

        // Close the modal
        this.setState({ open: false });
    }


    handleCancel() {
        // Close the modal
        this.setState({ open: false });
    }


    render() {
        if (!this.state.orders.length) {
            return (
                <div className="ui text container">
                <div className="ui big warning message">
                    <p>Your order queue is currently empty.</p>
                </div>
            </div>
            )
        }

        if (!Array.isArray(this.state.orders)) {
            return (
                
                <div className="ui text container">
                    <div>
                        <p>Loading...</p>
                    </div>
                </div>
            )
        }

        return (
            <div className="ui container">
                <h2 className="ui header centered">
                    <img className="ui image" src="https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png" alt="" />
                    <div className="content">Your Orders</div>
                </h2>
                <br/>
                <div className="ui two column stackable grid container">
                    {this.state.orders.map(item => {
                        return (
                            <div key={item._id} className="column">
                                <div className="ui piled segment">
                                    <img className="ui fluid bordered image" src={item.image} alt="" />
                                    <div className="ui center aligned segment"><h3>{item.pizza}</h3></div>
                                    <p>
                                        Toppings:&nbsp;
                                {item.toppings.map(topping => {
                                        return (<span key={topping}>{topping}</span>)
                                    })
                                            .reduce((prev, curr) => [prev, ', ', curr])}
                                    </p>
                                    <p>Size: {item.size}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                    <Button className="ui inverted red button" onClick={() => this.handleOpenModal(item._id, item.pizza)}>Remove</Button>
                                    <Confirm
                                        open={this.state.open}
                                        header="Please confirm to delete item"
                                        content={this.state.pizza}
                                        onCancel={this.handleCancel}
                                        onConfirm={this.handleDeleteItem}
                                    />
                                    <br />
                                </div>
                            </div>
                        );
                    })}
                    <div className="ui header centered">
                        <h3>Total price: {this.state.total}</h3>
                        <a className="ui green button" href="/checkout">Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders;