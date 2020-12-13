import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';



function KegList(props) {
  return (
    <React.Fragment>
      <h3>Add a Keg below, or click on an existing keg to see its details.</h3>

  
      
      {props.kegList.map((keg, index) =>
      
      <Keg 
      whenKegClicked = { props.onKegSelection }
      whenPourClicked = { props.onPourKeg }
      whenReStockClicked = { props.onReStockKeg }
      //onKegSelection = { props.onKegSelection}

      name = {keg.name} key={index} id = {keg.id}

      pintsAvail = {keg.pintsAvail} />
      
      )}
      
    </React.Fragment>

      );

};

KegList.propTypes = {
  kegList: PropTypes.array, 
  onKegSelection: PropTypes.func,
  onPourKeg: PropTypes.func, 
  onReStockKeg: PropTypes.func

}

export default KegList; 


// function handlePouringKegSubmission(event) {
//   event.preventDefault();
//   console.log(event.target.quantity.value);
