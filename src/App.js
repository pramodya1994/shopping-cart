import React, {Component} from 'react';
import ShoppingList from './ShoppingList';
import ItemAdder from './ItemAdder';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Nandika",
            items: [
                {name: "Apple i pad", price: 65000, qty: 1},
                {name: "USB cable", price: 1200, qty: 1},
                {name: "Mouse", price: 450, qty: 1},
                {name: "Note book", price: 145, qty: 2}
            ],
            total: 0,
        };

        this.addItems = this.addItems.bind(this);
        this.getInitialTotal = this.getInitialTotal.bind(this);
    }

    addItems(item) {
        // this.state.items.push(item);
        this.setState(prevState => ({
            items: [...prevState.items, item],
            total: prevState.total + item.price * item.qty,
        }));
        console.log(this.state.items);
        console.log(this.state.total);
    }

    getInitialTotal() {
        let total = 0;
        this.state.items.map(row =>
            total += row.price * row.qty
        );
        console.log(total);
        return total;
    }

    componentDidMount(){
        this.setState({ total:this.getInitialTotal()});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Main-div">
                        <p className="Cart-Header">{this.state.name}'s Shopping Cart</p>
                        <p className="Col-33 Total-header">Total</p>
                        <p className="Col-33 Total-header">Rs. {this.state.total}.00</p>
                        <input type="submit" value="Checkout" onClick={this.handleSubmit} className="Col-33"/>
                        <br/><br/><br/>
                        <ItemAdder itemsHandler={this.addItems}/>
                        <ShoppingList items={this.state.items}/>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
