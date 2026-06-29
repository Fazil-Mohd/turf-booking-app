import React from "react";
import { View,Image, TouchableOpacity, TextInput } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import mapStyle from "../stylesheet/mapStyle";
import homeStyle from "../stylesheet/homeStyle";

// we can 
import { useRoute } from '@react-navigation/native';


export default function MapScreen({navigation}) {
    const route=useRoute()
    let {cordinates}=route.params
    let latitude=parseFloat(cordinates.split(',')[0])
    console.log(latitude)
    let longitude=parseFloat(cordinates.split(',')[1])
    function backHandler(){
        navigation.navigate('Home')
    }

  return (
    <>
    <View style={mapStyle.container}>
      <MapView
        style={mapStyle.map}
        initialRegion={{
          latitude: 10.8505, // Approximate latitude for Kerala
          longitude: 76.2711, // Approximate longitude for Kerala
          latitudeDelta: 1, // You can adjust these deltas according to your preference
          longitudeDelta: 1,
        }}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }} // Approximate coordinates for Palakkad
          title="Palakkad"
          description="This is Palakkad"
        />
      </MapView>

    </View>
    <View style={mapStyle.topbarcontainer}>
        <TouchableOpacity style={mapStyle.backbuttoncontainer} onPress={backHandler} >
        <Image source={require("../assets/back.png")}></Image>

        </TouchableOpacity>
        <TextInput style={mapStyle.textinput} placeholder="Search..."></TextInput>
     </View>
    </>
  );
}

