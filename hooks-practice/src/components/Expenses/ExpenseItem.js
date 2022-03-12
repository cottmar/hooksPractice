import React, {useState} from "react";
import Card from '../UI/Card'
import './ExpenseItem.css';

// this is where the date goes, but i want to turn the date into a button, maybe??? date goes on far left empty space

const ExpenseItem = (props) => {

    const divideAmount = () => {
        const dividedAmount = props.amount / 2;

        props.newAmountHandler(dividedAmount)
    }


    // the component function WILL be executed again when state updating function is called
    const clickHandler = () => {
        divideAmount();
    }

    //  In order to update state, we need:
        // - state for current amount, state for new amount
        // - Function that takes in the current state and sets the new amount with some division logic inside
        // - click handler that creates the new object, and can pass this up to parent where the source of truth is


    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <h2>{props.item}</h2>
                <div className="expense-item__price">
                    <p>${props.amount}</p>
                    <button onClick={clickHandler}>Add Use</button>
                </div>
                <div className="expense-item__price">
                    <p>{props.uses}</p>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem;