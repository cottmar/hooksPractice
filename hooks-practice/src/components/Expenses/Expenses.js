import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <div>
                {props.expenses.map((item) => {
                    return (
                        <ExpenseItem 
                            item={item.item}
                            amount={item.amount}
                            uses={item.uses}
                        />
                    )
                })}
            </div>
        </Card>
    )
}

export default Expenses;