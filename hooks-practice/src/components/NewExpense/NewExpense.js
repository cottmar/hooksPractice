import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveItemDataHandler= (enteredItemData) => {
        const itemData = {
            ...enteredItemData,
            id: Math.random().toString()
        };
        props.addItemHandler(itemData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveItemData={saveItemDataHandler}/>
        </div>
    );
};

export default NewExpense;