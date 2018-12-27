import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';










store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt:-2000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt:-1000}));
/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));


store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
 */
store.dispatch(sortByDate());
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setStartDate())
//store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the final payment for that adress',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
/* 
const user = {
    name: 'Jan',
    age: 24
};

console.log({
    ...user,
    location: "gent",
    age: 27
}) */