import React from "react";
import Card from "./Card";
import './ExpenseItem.css';

// this is where the date goes, but i want to turn the date into a button, maybe??? date goes on far left empty space

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <h2>{props.item}</h2>
                <div className="expense-item__price">
                    <p>${props.amount}</p>
                </div>
                <div className="expense-item__price">
                    <p>{props.uses}</p>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem;