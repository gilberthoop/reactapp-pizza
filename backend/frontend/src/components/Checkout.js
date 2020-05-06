import React from 'react';
import axios from 'axios';
import sweetalert from 'sweetalert';

class Checkout extends React.Component {
    constructor(props) {
        super();

        this.state = { name: "", phone: "", total: 0 };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        // Retrieve the total price for the order
        axios.get('/api/orders')
            .then(response => {
                this.setState({
                    total: response.data.total
                });
            })
            .catch(error => console.log(error));
    }


    handleSubmit(event) {
        event.preventDefault();

        let { name, phone } = this.state;

        // Validate inputs
        if (name === "" || name.length < 2) {
            sweetalert({
                title: 'Name is invalid.',
                text: 'Please try again.',
                icon: 'error',
                dangerMode: true
            });
            return;
        }
        if (phone === "" || phone.length < 10) {
            sweetalert({
                title: 'Phone number is invalid.',
                text: 'Please try again.',
                icon: 'error',
                dangerMode: true
            });
            return;
        }

        // Validation passed, save the customer to db
        this.saveCustomer(name, phone);

        // Delete the entire order after submitting it
        this.deleteOrder();
    }


    saveCustomer(name, phone) {
        axios.post('/api/customers', { name, phone })
            .then(response => {
                return sweetalert('Your order is on the way.', 'Thank you!', 'success')
            })
            .catch(error => {
                sweetalert({
                    title: error.response.data.errorMessage,
                    text: 'Please try again.',
                    icon: 'error',
                    dangerMode: true
                });
                return;
            });
    }


    deleteOrder() {
        axios.post('/api/orders/delete')
            .then((response) => {
                sweetalert('Your order is on the way.', 'Thank you!', 'success')
                    .then(() => window.location.replace("/"));
            })
            .catch((error) => {
                sweetalert({
                    title: 'Ooops. There was an error deleeting your order.',
                    text: 'Please try again.',
                    icon: 'error',
                    dangerMode: true
                })
            });
    }




    render() {
        return (
            <div className="ui text container">
                <h2 className="ui header centered">
                    <img className="ui image" src="https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png" alt="" />
                    <div className="content">Checkout</div>
                </h2>
                <h3>Your balance is: {this.state.total}</h3>
                <br />
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} required
                        />
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={(e) => this.setState({ phone: e.target.value })}
                            required
                        />
                    </div>
                    <input class="ui green button" type="submit" value="Submit Order" />
                </form>

                <div className="ui piled segment">
                    <p>Please note that this app is only for a testing; not a real app.</p>
                </div>
                <br /><br /><br />
            </div>
        )
    }

}

export default Checkout;