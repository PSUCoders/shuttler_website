import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Maps extends Component {
  render() {
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBgD068RgxVZl4JPABCxUXl88F-jLjX_nI'
  })(Maps);