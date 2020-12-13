import * as actions from '../../actions';
import * as c from '../../actions/ActionTypes';

describe('keg actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: "Red House Lager", brand: "Mississippi Ale", price: 2, pintsAvail: 124, alcoholContent: 4, id:1})).toEqual({
            type: c.ADD_FLAVOR,
            name: "Red House Lager", 
            brand: "Mississippi Ale", 
            price: 2, 
            alcoholContent: 4,
            quantity: 124, 
            id:1
    });
  });
});