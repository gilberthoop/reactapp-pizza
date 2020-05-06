import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios';
import sweetalert from 'sweetalert';

class MenuItem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            modalOpen: false,
            feedback: "",
            name: ' ',
            image: ' ',
            toppings: [],
            size: '',
            crust: '',
            quantity: 1,
            price: 0
        };

        // Event handlers
        this.handleWindowOpen = this.handleWindowOpen.bind(this);
        this.handleWindowClose = this.handleWindowClose.bind(this);
        this.handleAddOrder = this.handleAddOrder.bind(this);
    }


    handleWindowOpen() {
        // Open the modal and assign/update pizza name and toppings states
        this.setState({
            modalOpen: true,
            name: this.props.menuItem.name,
            image: this.props.menuItem.image,
            toppings: this.props.menuItem.toppings
        });
    }


    handleWindowClose() {
        // Reset the states and close the modal
        this.setState({
            modalOpen: false,
            feedback: "",
            name: ' ',
            image: ' ',
            toppings: [],
            size: '',
            crust: '',
            quantity: 1,
            price: 0
        });
    }


    handleAddOrder() {
        let { size, crust, quantity } = this.state;

        // Validate inputs
        if (size === "" || crust === "") {
            return this.setState({ feedback: "Please choose the size and crust for your pizza" });
        }
        if (quantity <= 0 || quantity > 10) {
            return this.setState({ feedback: "Order quantity cannot be less than 1, or more than 10." });
        }

        // Send a async post request through axios
        this.addOrders();

        // Close the modal 
        this.handleWindowClose();
    }


    addOrders() {
        // Send the order request to the server
        axios.post('/api/orders', {
            pizza: this.state.name,
            image: this.state.image,
            toppings: this.state.toppings,
            size: this.state.size,
            crust: this.state.crust,
            quantity: this.state.quantity,
            price: this.state.price
        })
            .then(response => {
                this.setState({ feedback: response.data.status });
                sweetalert(this.state.feedback, 'Thank you!', 'success')
                    .then(() => this.setState({ feedback: " ", quantity: 1 }));

            })
            .catch(error => {
                console.log(error);
                this.setState({ feedback: error.response.data.errorMessage });
                sweetalert({
                    title: this.state.feedback,
                    text: 'Please try again.',
                    icon: 'error',
                    dangerMode: true
                })
                    .then(() => this.setState({ feedback: " ", quantity: 1 }))
            });
    }

    render() {
        return (
            <div className="column">
                <div className="ui piled segment">
                    <img className="ui fluid bordered image" src={this.props.menuItem.image} alt="" />
                    <div className="ui center aligned segment"><h3>{this.props.menuItem.name}</h3></div>
                    <p>
                        Toppings:&nbsp;
                {this.props.menuItem.toppings.map(topping => {
                        return (<span key={topping}>{topping}</span>)
                    })
                            .reduce((prev, curr) => [prev, ', ', curr])}
                    </p>

                    <p>
                        Small: ${this.props.menuItem.cost.small} <br />
                    Medium: ${this.props.menuItem.cost.medium} <br />
                    Large: ${this.props.menuItem.cost.large} <br />
                    </p>
                    <Modal
                        trigger={<Button onClick={this.handleWindowOpen} className="ui inverted orange button">Add to order</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleWindowClose}
                    >
                        <Modal.Header>{this.props.menuItem.name}</Modal.Header>
                        <Modal.Content>
                            <Form className="ui form">
                                <div className="inline fields">
                                    <Form.Field>
                                        <h4>Choose your size:</h4></Form.Field>
                                    {this.props.menuItem.size.map(size => {
                                        return (
                                            <Form.Field key={size}>
                                                <div className="ui radio checkbox">
                                                    <input
                                                        type="radio"
                                                        name="size"
                                                        value={size}
                                                        onChange={(e) => this.setState({ size: e.target.value })
                                                        }
                                                    />
                                                    <label>{size}</label>
                                                </div>
                                            </Form.Field>
                                        )
                                    })}
                                </div>
                                <br />
                                <div className="inline fields">
                                    <Form.Field><h4>Choose your crust:</h4></Form.Field>
                                    {this.props.menuItem.crust.map(crustType => {
                                        return (
                                            <Form.Field key={crustType}>
                                                <div className="ui radio checkbox">
                                                    <input
                                                        type="radio"
                                                        name="crust"
                                                        value={crustType}
                                                        onChange={(e) => this.setState({ crust: e.target.value })
                                                        }
                                                    />
                                                    <label>{crustType}</label>
                                                </div>
                                            </Form.Field>
                                        )
                                    })}
                                </div>
                                <br />
                                <h4>Quantity (Maximum of 10 orders per pizza only)</h4>
                                {
                                    <React.Fragment>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min="1"
                                            max="10"
                                            value={this.state.quantity}
                                            onChange={(e) => this.setState({
                                                quantity: e.target.value
                                            })}>
                                        </input>
                                    </React.Fragment>
                                }
                                <br />
                                <h4 className="ui negative message">{this.state.feedback}</h4>
                            </Form>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.handleWindowClose}>Cancel</Button>
                            <Button onClick={this.handleAddOrder}>Place order</Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default MenuItem;