import "./ExpenseItem.css";

function ExpenseItem(prop) {
  return (
    <div className="expense-item">
      <div>{prop.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{prop.title} </h2>
        <h2 className="expense-item__description h2">{prop.location}</h2>
        <div className="expense-item__price">Rs {prop.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

// here ExpenseItem is a single component returning JSX
//in react functional parameters are called as prop
// here we use prop as "prop" but it can be any variable (e.g "data" etc)
// text content in JSX have {parameter.name of attribute we have used in ExpenseItem element in App.js}
//Note :
// .toISOString() returns date as string