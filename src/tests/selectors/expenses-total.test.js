import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
  
  const result = totalExpenses([]);
  expect(result).toBe(0);
});

test('should calculate total amount of all expenses', () => {
  
  const result = totalExpenses(expenses);
  expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});