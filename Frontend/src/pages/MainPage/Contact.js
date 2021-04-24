import React,{Component} from 'react'
import contact from "../../assets/Images/con2.png"
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

import "./Contact.css"
class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                  {latitude: 47.359423, longitude: -122.021071},
                  {latitude: 47.2052192687988, longitude: -121.988426208496},
                  {latitude: 47.6307081, longitude: -122.1434325},
                  {latitude: 47.3084488, longitude: -122.2140121},
                  {latitude: 47.5524695, longitude: -122.0425407}]
        }
      }
    
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
    
    
    render(){
        const mapStyles = {
            width: '50%',
            height: '50%',
            marginLeft:'40%',
            marginTop:'20px'
          };
        return (
            <div>
            <img className="responsive-image " src={contact} alt="My logo" /> 
            <Map
            className="mapstyle"
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
        {this.displayMarkers()}
        </Map>
    
                <h2 className="contact-us">Contact Us</h2>
                <h5 className="district">Distric and Session Court</h5>
                <p className="sessionjudge">The District & Sessions Judge</p>
             <p className="addresscontact"> Address: Judicial Complex, District Courts, Rawalpindi</p>
            <p  className="phno">Phone No. 051-9286061</p>
            <p className="fax">Fax No. 051-9286062</p>
    <p className="emailcontactus">Email: mail@DistricCourt.gov.pk</p>
   
            </div>
            
        )
    }
   
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAhuHIfE7KZKpq6SqR3yZMNc2vnmhCpVek'
  })(Contact );




