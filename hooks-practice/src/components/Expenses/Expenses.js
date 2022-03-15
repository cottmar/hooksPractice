import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {

    const newAmountDataHandler = (updatedAmountData) => {
        console.log(updatedAmountData, 'updated data in expenses???')
        props.newAmountHandler(updatedAmountData)
    }

    //  In order to update state, we need:
        // - state for current amount, state for new amount
        // - Function that takes in the current state and sets the new amount with some division logic inside
        // - click handler that creates the new object, and can pass this up to parent where the source of truth is


    return (
        <Card className='expenses'>
            <div>
                { 
                    props.items.map((itemName) => {
                        return (
                            <ExpenseItem 
                                item={itemName.item}
                                amount={itemName.amount}
                                uses={itemName.uses}
                                key={itemName.id}
                                newAmountHandler={newAmountDataHandler}
                            />
                        )
                    })
                }
            </div>
        </Card>
    )
}

export default Expenses;