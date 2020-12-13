import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Keg (props) {

  // let pourButton;
  // let restockButton;

  return (
    <React.Fragment>
      <div class='card'>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h2>Keg name: {props.name}</h2>
      </div>
      
      
        
        <h5>Remaining Pints: {props.pintsAvail}</h5>
      
        
      <Button onClick={() => props.whenPourClicked(props.id)}>Pour!</Button>
        <button onClick={() => props.whenReStockClicked(props.id)}>Restock</button>
        </div>
      
        
    </React.Fragment>
  )

}

Keg.propTypes = {
  name: PropTypes.string,
  pintsAvail: PropTypes.number,
  brand: PropTypes.string,
  price: PropTypes.number,
  pintsAvail: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func,
  WhenPourClicked: PropTypes.func, 
  WhenReStockClicked: PropTypes.func

};

export default Keg; 





