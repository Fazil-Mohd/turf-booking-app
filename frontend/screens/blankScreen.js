import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text,Image, Button, TouchableOpacity } from "react-native";
import blankStyle from "../stylesheet/blankStyle";
export default function BlankScreen({navigation}){

    function loginHandler(){
        navigation.navigate('Login')
    }
    return(
        <View style={blankStyle.maincontainer} >
            <View style={blankStyle.imagecontainer} >
                <Image source={require("../assets/football.png")}/>
            </View>
            <Text style={blankStyle.textcontainer} >Enjoy with Turf Time</Text>
            <Text style={blankStyle.text} >Lorem ipsum dolor sit amet consectetur. Adipiscing id felis urna in vel lacus vitae id.</Text>
            <TouchableOpacity style={blankStyle.buttoncontainer} onPress={loginHandler}  >
                <Text style={blankStyle.buttontext} >Start</Text>
            </TouchableOpacity>
        </View>
    )
}