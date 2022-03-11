import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <div>
                {props.items.map((itemName) => {
                    return (
                        <ExpenseItem 
                            item={itemName.item}
                            amount={itemName.amount}
                            uses={itemName.uses}
                            key={itemName.id}
                        />
                    )
                })}
            </div>
        </Card>
    )
}

export default Expenses;