import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [entredTitle , setEntredTitle] = useState('');
    const [entredAmount , setEntredAmount] = useState('');
    const [entredDate , setEntredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEntredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEntredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEntredDate(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate =  {
            title: entredTitle,
            amount : entredAmount,
            date: new Date(entredDate)
        }
        props.onSaveExpenseData(expenseDate);
        setEntredAmount('');
        setEntredDate('');
        setEntredTitle('');
        

        }

    return (
        <form >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'  onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'  onChange={amountChangeHandler} min="1.1" max="500.0"/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit' onClick={submitHandler} >Add expense</button>

            </div>
        </form>
    )


}

export default ExpenseForm;