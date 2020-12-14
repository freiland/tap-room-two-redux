import * as a from './../actions/ActionTypes';

export default (state = null, action) => {
  const {name, brand, price, alcoholContent, pintsAvail, id} = action;
  switch (action.type) {
    case a.SELECT_KEG:
      return {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsAvail: pintsAvail,
        id: id
      }
    }
  };
  //   case a.DESELECT_KEG:
  //      return null;
  //   default:
  //     return state;
  // }
