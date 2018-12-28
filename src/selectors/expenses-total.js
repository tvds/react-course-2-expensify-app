
// Get visible expenses
export default (expenses ) => {
  if(expenses.length <= 0 ){
    return 0;
  } else {
    return parseFloat(expenses.reduce((sum, expense) => sum + expense.amount, 0) / 100);
  }
 /*  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return expenses.map((expense) => expense.amount).reduce(reducer); */
}
