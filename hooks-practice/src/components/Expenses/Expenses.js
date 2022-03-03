import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {    
    return (
        <Card className='expenses'>
            <div>
                <ExpenseItem 
                    item={props.expenses[0].item}
                    amount={props.expenses[0].amount}
                    uses={props.expenses[0].uses}
                />
                <ExpenseItem 
                    item={props.expenses[1].item}
                    amount={props.expenses[1].amount}
                    uses={props.expenses[1].uses}
                />
            </div>
        </Card>
    )
}

export default Expenses;