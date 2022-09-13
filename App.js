import ExpenseItem from "./components/ExpenseItem.js";

let items = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 100,
    date: new Date(2022, 0, 1),
    location: "Shimla",
  },
  {
    id: 2,
    title: "Petrol",
    amount: 500,
    date: new Date(2022, 0, 2),
    location: "Una",
  },
  {
    id: 3,
    title: "Diesel",
    amount: 400,
    date: new Date(2022, 0, 3),
    location: "Kullu",
  },
  {
    id: 4,
    title: "LPG",
    amount: 1000,
    date: new Date(2022, 0, 4),
    location: "Mandi",
  },
];

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        date={items[0].date}
        title={items[0].title}
        location={items[0].location}
        price={items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={items[1].date}
        title={items[1].title}
        location={items[1].location}
        price={items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={items[2].date}
        title={items[2].title}
        location={items[2].location}
        price={items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={items[3].date}
        title={items[3].title}
        location={items[3].location}
        price={items[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;


//Here we are passing data in Expenseitems.js through props(properties)
//here we are re using same copmonent to do so
// previously we have only one list of expense , but now we have four list of expenses
// to print them all we use four  "ExpenseItem" elements
// here we are putting values dynamically i.e expense items are not build in html but we are trasfering from outside

//here  date={items[0].date}   title={items[0].title}  location={items[0].location}   price={items[0].amount}
//are basically attributes, these are different from HTML attributes, 
//here we can make attributes dynamic
// attribute name can be anything , but variable contain array and name of key in object should be same


