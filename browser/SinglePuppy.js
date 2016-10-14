import React, { Component } from 'react';

export default class SinglePuppy extends Component {

  render () {console.log('selectedPuppy',this.props);
    const {selectedPuppy} = this.props;
    return (
      <div>
        <h2>{selectedPuppy.name}</h2>
        <div>
          <img src={selectedPuppy.image}/>
        </div>
      </div>
    )
  }
}