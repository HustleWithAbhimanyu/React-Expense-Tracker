import { useAddTransaction } from "../../hooks/useAddTransactions";
import { useState } from "react";


export const ExpenseTracker =() => {

    const { addTransaction} =useAddTransaction();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const onSubmit =(e) =>{
        e.preventDefault()
        addTransaction({description , transactionAmount,transactionType})
    };



    return (
    <>
    <div className="expense-tarcker">
      <div className="conatiner">
        <h1>Expemse Tracker </h1>
        <div className="balance">
            <h3>Your balance</h3>
            <h2>$0.00</h2>
        </div>
        <div className="summary">
            <div className="income">
                <h4>Income</h4>
                <p>$0.00</p>
            </div>
            <div className="expenses">
            <h4>Expenses</h4>
                <p>$0.00</p>
            </div>
        </div>
        <form className="add-transaction" onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Description" 
            recquired 
            onChange={(e) => setDescription(e.target.value)}
            />
            <input 
             type="number"
             placeholder="Amount" 
             recquired
             onChange={(e) => setTransactionAmount(e.target.value)}
             />
            <input 
            type="radio" 
            id="expense" 
            value="expense"
            checked={transactionType === "expense"}
            onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expenses</label>
            <input 
            type="radio"
             id="income" 
             value="income" 
             checked={transactionType === "income"}
             onChange={(e) => setTransactionType(e.target.value)}
             />
            <label htmlFor="income">Income</label>

            <button type="submit">Add Transaction</button>

        </form>
      </div>
    </div>
    <div className="transactions">
        <h3>Transactions</h3>
    </div>
    </>
    );
}