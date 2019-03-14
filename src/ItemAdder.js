import React, {Component} from 'react';
import './App.css';

class ItemAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widgetName: "Add items to cart",
            name: "",
            price: 0,
            qty: 0,
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeQty = this.handleChangeQty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }

    handleChangePrice(event) {
        this.setState({price: event.target.value})
    }

    handleChangeQty(event) {
        this.setState({qty: event.target.value})
    }

    handleSubmit(event) {
        this.props.itemsHandler({name: this.state.name, price: this.state.price, qty: this.state.qty});
        this.setState({name: "", price: 0, qty: 0});
        event.preventDefault();
    }

    render() {
        return (
            <div className="Add-div">
                <p className="Add-header">{this.state.widgetName}</p>
                <span className="Col-33">
                <label className="Label">Item</label>
                <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                </span>
                <span className="Col-33">
                <label className="Label">Price</label>
                <input type="number" value={this.state.price} onChange={this.handleChangePrice}/>
                </span>
                <span className="Col-33">
                <label className="Label">Qty</label>
                <input type="number" value={this.state.qty} onChange={this.handleChangeQty}/>
                </span>
                <br/><br/><br/>
                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default ItemAdder;