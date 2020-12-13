import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import * as a from '../actions';
import * as c from '../actions/ActionTypes';
import { connect } from 'react-redux';

class KegControl extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false, 
    masterKegList: [{name: 'Coastal IPA', price: 2, pintsAvail: 12, id: 1}, {name: 'Fresh Hop Lager', pintsAvail: 12, id: 2}],
  
    selectedKeg: null
  };
  //this.handleClick = this.handleClick.bind(this);
}

handleAddingNewKegToList = (newKeg) => {
  const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }


handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      selectedKeg: null
    });
  } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}

handleChangingSelectedKeg= (id) => {

  const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  console.log(selectedKeg.name);
  this.setState({selectedKeg: selectedKeg});
}

handlePouringKeg = (id) => {
  const { dispatch } = this.props;
    const action = {
      type: c.POUR,
      id: id
    }
    dispatch(action);
  }

// handleReStockKeg = (id) => {
//   const newMasterKegList = this.state.masterKegList;
//   newMasterKegList.map((keg) => {
//     if (keg.id === id && keg.pintsAvail !== 'empty') {
//       keg.pintsAvail += 1; 
//     } else if (keg.id === id && keg.pintsAvail === 'empty') 
//     {
//       keg.pintsAvail = 1;
//     } 
//     return keg;
//   });
//   this.setState({masterKegList: newMasterKegList});
// };

render(){
  
  let currentlyVisibleState = null;
  
  let buttonText = null;
  
  if (this.state.selectedKeg != null) {
    
    currentlyVisibleState = <KegDetail item = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
    buttonText = 'Return to Keg List'

  }
  
  else if(this.state.formVisibleOnPage) {
    
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
    buttonText = "Return to Keg List";
  
  } 
  
  else {
    
    currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onPourKeg={this.handlePouringKeg} onReStockKeg={this.handleReStockKeg} />;
    
    // currentVisibleState = <ItemList onBuyItem={this.state.handleBuyingItem} />;
    buttonText = "Add New Keg"
  } 
  return (
    <React.Fragment>
      <div className='test'>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterFlavorList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);



export default KegControl;
