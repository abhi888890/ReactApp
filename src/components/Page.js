import React from 'react'
import { useState } from 'react'
export default function Page() {

    const [TotalBalance,SetTotalBalance]=useState(0);
    const [Income,SetIncome]=useState(0);
    const [Expense,SetExpense]=useState(0);
    const [Cash,SetCash]=useState(0);

  return (
    <div>
        <div className="header">
            Expense Tracker
        </div>
        <div className="balance">
            Your balance <br />
            $ {TotalBalance}
        </div>
        <div className="IncomeExpsnse">
            <div className="income">
                Income <br />
                + $ {Income}
            </div>
            <div className="expense">
                Expense <br />
                + $ {Expense}
            </div>
        </div>
        <div className="history">
            cash    $ {Cash}
        </div>

        <div className="transaction">
            <div className="text">
                Test  <br />
                <input type="text" placeholder='Enter text'/>
            </div>
            <div className="amount">
                Amount  <br />
                <input type="text" name="" id="" />
            </div>
        </div>
        {/* <button type="submit">Add Transaction</button> */}
    </div>
  )
}
