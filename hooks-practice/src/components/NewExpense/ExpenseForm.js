import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [ enteredItem, setEnteredItem ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');

    // event is a default object we have access to
    const itemChangeHandler = (event) => {
        // this is setting our state
        setEnteredItem(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            item: enteredItem,
            amount: enteredAmount,
            uses: 0
        };

        props.onSaveItemData(itemData);
        setEnteredItem('');
        setEnteredAmount('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Item: </label>
                    <input 
                        type="text"
                        value={enteredItem}
                        onChange={itemChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount: </label>
                    <input 
                        type="number" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' >Add Item</button>
            </div>
        </form>
    ) 
};

export default ExpenseForm;