import { View,Text,Button, TouchableOpacity,Image, TextInput, ScrollView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import axios from "axios"
//importing stylesheet here
import homeStyle from "../stylesheet/homeStyle";
import turfStyle from "../stylesheet/turfStyle";
import backendurl from "../components/backendurl";
export default function TurfScreen({navigation}){
    const [turfs,setTurfs]=useState([])
    useEffect(()=>{
        async function getTurfs(){
            try{
                let turfs=(await axios.get(backendurl+"/api/turf/") ).data
                console.log(turfs)
                setTurfs(turfs)
    
            }catch(error){
                console.log(error)
            }
        }
        getTurfs()
    },[])

    async function signoutHandler(){
        await AsyncStorage.removeItem("email")
        navigation.navigate("Login")
    }
    function homeHandler(){
        navigation.navigate("Home")
    }
    function formHandler(){
        navigation.navigate("Form")
    }
    function historyHandler(){

    }
    function favoriteHandler(){

    }
    function nearbyHandler(){

    }
    function bookHandler(){
        //here give logic to handle booking
    }
    return(
        <>
            <View style={homeStyle.maincontainer}>
                <View style={homeStyle.accountcontainer}>

                    <View style={homeStyle.searchcontainer}>
                        <TextInput placeholder="Search..." style={homeStyle.textinput} ></TextInput>
                    </View>
                </View>



            {/* options container*/}
          
            {/*nearby turfcontainer*/}
                <ScrollView contenntContainerStyle={homeStyle.turfmaincontainer}>
                {/*  here we map and return the turf first just create one                    */}
                {turfs.map((turf)=>{
                    return(
                        <View style={[homeStyle.turfcontainer,turfStyle.turfcontainer]} key={turf.id} >
                        <Image style={homeStyle.turfimage} source={require("../assets/banner.png")}></Image>
                        <View style={homeStyle.turftextcontainer}>
                            <Text style={turfStyle.turfheading} >{turf.turf_name}</Text>
                            <TouchableOpacity style={homeStyle.turflocationcontainer}>
                                <Image source={require("../assets/smallnearby.png")}></Image>
                                <Text style={homeStyle.turftext} >{turf.location}</Text>
          
                            </TouchableOpacity>
                            <Text style={turfStyle.turfrate} > $ 1000</Text>
    
                            {/*  here give a way to give ratings*/}
    
                            <TouchableOpacity style={homeStyle.bookbutton} onPress={bookHandler} >
                                    <Text style={homeStyle.booktext}  >Book Now</Text>
                                </TouchableOpacity>
                        </View>
                   </View>
    
                    )
                })}

                   


                
                </ScrollView>
            </View>



        </>
    )
}