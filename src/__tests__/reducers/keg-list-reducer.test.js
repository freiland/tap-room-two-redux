import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'test',
    brand: 'test keg',
    price: 2,
    alcoholContent: 5,
    pintsAvail: 124,
    id: 3
  };

  const testState = {1: {
    name: 'test',
    brand: 'test keg',
    price: 2,
    alcoholContent: 5,
    pintsAvail: 124,
    id: 1}, 
    2: {
      name: 'test2',
      brand: 'test keg2',
      price: 3,
      alcoholContent: 3,
      pintsAvail: 13,
      id: 2}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, pintsAvail, id } = flavorData;
    action = {
      type: c.ADD_FLAVOR,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsAvail: pintsAvail,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsAvail: pintsAvail,
      id: id
      }
    });
  });

  test('Should decrement the number of pints in a keg', () => {
    action = {
      type: c.BUY,
      id: 1
    };

    expect(kegListReducer(testState, action)).toEqual({
      1 : {
        name: 'test',
    brand: 'test keg',
    price: 2,
    alcoholContent: 5,
    pintsAvail: 123,
    id: 1
      }
    });
  });
});