import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import "../App.css"
class main extends Component {
  static defaultProps = {
    center: {
      lat: 15.1355,
      lng: 78.1829
    },
    zoom: 5
  };

  render() {
    
    return (
      <div className='maps' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBvhUjQdDOGNJVE4pKpcUsMucSbR0Ts-Qo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
          
            lat={15.1355}
            lng={78.1829}
            logo="My Marker"
          />
        </GoogleMapReact>
       
      </div>
    );
  }
}

export default main;