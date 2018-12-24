import React from 'react';
import {RentalCard} from './RentalCard';
import { connect } from 'react-redux';

class RentalList extends React.Component {
  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      console.log(rental);
      return (
        <RentalCard key={index}
                    rental={rental}
                    colNum='col-md-3 col-xs-6'/>
      )
    });
  }

  render() {
    debugger;
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals()}
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalList)
