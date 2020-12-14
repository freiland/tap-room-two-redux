import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintsAvail, id } = action;
  switch (action.type) {
  case a.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsAvail: pintsAvail,
        id: id
      }
    });
  case a.POUR :
    const newState = {...state}
      if(newState[id].pintsAvail > 0) {
        newState[id].pintsAvail -= 1;
      } else if (newState[id].pintsAvail === 0) {
        newState[id].pintsAvail = "no more left";
      }
      return newState;
  default:
    return state;
  }
};