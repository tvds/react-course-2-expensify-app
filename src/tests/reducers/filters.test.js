import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, {type : 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text:'',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
  const currentState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const text = 'something'
  const action = {type: 'SET_TEXT_FILTER', text};
  const state = filterReducer(currentState, action);
  expect(state.text).toBe(text);
})

test('should set startDate filter', () => {
  const currentState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const startDate =  moment(0);
  const action = {type: 'SET_START_DATE', startDate};
  const state = filterReducer(currentState, action);
  expect(state.startDate).toBe(startDate);
})

test('should set endDate filter', () => {
  const currentState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const endDate =  moment(0);
  const action = {type: 'SET_END_DATE', endDate};
  const state = filterReducer(currentState, action);
  expect(state.endDate).toBe(endDate);
})
