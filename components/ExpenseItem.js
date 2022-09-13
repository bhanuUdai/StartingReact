import "./ExpenseItem.css";

function ExpenseItem(prop) {
  let month = prop.date.toLocaleString("en-US", { month: "long" });
  let day = prop.date.toLocaleString("en-US", { day: "2-digit" });
  let year = prop.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        <h2>{prop.title} </h2>
        <h2 className="expense-item__description h2">{prop.location}</h2>
        <div className="expense-item__price">Rs {prop.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

//here we are using a method toLocaleString() which make date user readable
// insted of wrtting inside JSX we store them in variables and then put variable in jsx to keep code clean












