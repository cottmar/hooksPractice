import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <div>
                {props.items.map((itemName) => {
                    {console.log(itemName, 'ITEMS in expenses.js'); console.log(props.items, 'EXPENSES in expenses')}
                    return (
                        <ExpenseItem 
                            item={itemName.item}
                            amount={itemName.amount}
                            uses={itemName.uses}
                        />
                    )
                })}
            </div>
        </Card>
    )
}

export default Expenses;