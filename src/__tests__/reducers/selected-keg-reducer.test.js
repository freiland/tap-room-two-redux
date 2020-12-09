import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  test('Should return return null if no keg is selected', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });
});