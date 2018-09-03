import React from 'react';
import GoogleMapReact from 'google-map-react';
// import classesImp from '../../Logo/Logo.css';
import Logo from '../assets/img/logo_napis_white.svg';

const AnyReactComponent = ({ text }) => (
  <img src={Logo} />
  );
  
  class SimpleMap extends React.Component {
    static defaultProps = {
      center: {lat: 51.117296, lng: 18.872705},
      zoom: 11
    };
  
    render() {
      return (
        //51.117296, 18.872705
        <div style={{ height: '300px', width: '100%' }}>
            <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent 
                lat={51.117296} 
                lng={18.872705} 
                text={'Dietetyka i Odchudzanie'} 
            />
            </GoogleMapReact>
        </div>
      );
    }
  }

export default SimpleMap;