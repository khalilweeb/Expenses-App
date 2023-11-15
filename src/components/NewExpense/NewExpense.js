import './newExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const saveExpenseDataHandler =(entredExpenseData) => {
        const expenseData = {
            ...entredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData);
    }

  


    return (
        <div className='new-expense'>
            <form>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </form>
        </div>
    )


}

export default NewExpense;