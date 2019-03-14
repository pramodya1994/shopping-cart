import React, {Component} from 'react';
import './App.css';

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Shopping list",
        }
    }

    render() {
        return (
            <div>
                <p className="Add-header">{this.state.name}</p>
                <table>
                    <thead>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    </thead>
                    <tbody>
                    {this.props.items.map(row =>
                        <tr>
                            <td>{row.name}</td>
                            <td>Rs. {row.price}</td>
                            <td>{row.qty}</td>
                            <td>Rs. {row.price * row.qty}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <br/><br/>
            </div>
        )
    }
}

export default ShoppingList;