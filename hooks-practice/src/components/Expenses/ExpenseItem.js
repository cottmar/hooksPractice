import React, {useState} from "react";
import Card from '../UI/Card'
import './ExpenseItem.css';

// this is where the date goes, but i want to turn the date into a button, maybe??? date goes on far left empty space

const ExpenseItem = (props) => {

    // returns an array, first value is value itself, second value is the updating function
    // use array destructuring to store both elements in separate constants

    // the FIRST element is the current state value
    // the second element is a fucntion for updating that value
    const [ item, setItem ] = useState(props.item)

    // the component function WILL be executed again when state updating function is called
    const clickHandler = () => {
        setItem('Updated')
    }

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <h2>{item}</h2>
                <div className="expense-item__price">
                    <p>${props.amount}</p>
                </div>
                <div className="expense-item__price">
                    <p>{props.uses}</p>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;