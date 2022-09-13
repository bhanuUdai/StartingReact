import "./ExpenseItem.css";

const expenseDate=new Date(2020,0,26);
const expenseName="Car Insurance";
const expensePrice=500;
const locationOfExpenditure="Shimla"

function ExpenseItem() {
  return (
    <div className="expense-item">
      {/* <h1>Expense Items</h1> */}

      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseName} </h2>
        <h2 className="expense-item__description h2">{locationOfExpenditure}</h2>
        <div className="expense-item__price">Rs {expensePrice}</div>
      </div>
    
      {/* <div className="expense-item__description">
        <h2>Petrol</h2>
        <div className="expense-item__price">RS 100</div>
      </div>

      <div className="expense-item__description">
        <h2>Movie</h2>
        <div className="expense-item__price">Rs 200</div>
      </div> */}
    </div>
  );
}

export default ExpenseItem;

//Note : There should be only one <div> present to root, you cannot write another <div> in its parallel
// but write inside this paerent <div>
