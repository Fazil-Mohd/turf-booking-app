import { View,Text,Button, TouchableOpacity,Image, TextInput, ScrollView,StyleSheet,DrawerLayoutAndroid } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useRef,useState } from "react";
import backendurl from "../components/backendurl"
//drawer library

import axios from "axios"

//importing stylesheet here
import homeStyle from "../stylesheet/homeStyle";
import drawerStyle from "../stylesheet/drawerStyle";


//external components
import NavigationView from "../components/drawer";
import { Axios } from "axios";
export default function HomeScreen({navigation}){

    const drawerRef = useRef(null);


    const [username,setUsername]=useState("")
    const [turf,setTurf]=useState([])
    useEffect(()=>{
        async function getUsername(){
            let username=await AsyncStorage.getItem('username')
            console.log(username)
            setUsername(username)
        }
        async function getTurfs(){
            try{
                let turfs=(await axios.get(backendurl+"/api/turf/") ).data
                console.log(turfs)
                setTurf(turfs)
    
            }catch(error){
                console.log(error)
            }
        }
        getTurfs()
        getUsername()
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
        navigation.navigate('History')
    }
    function favoriteHandler(){
        navigation.navigate('Turf')


    }
    function nearbyHandler(){

    }
    function bookHandler(id){
        //here give logic to handle booking\
        console.log(id)
        navigation.navigate('Book',{id:id})

    }
    function moreHandler(){
        
        navigation.navigate('Turf')
    }
    function drawerHandler(){
        console.log(drawerRef.current.openDrawer())
        try{

            // drawerRef.current.openDrawer();

        }catch(error){
            console.log(error)
        }

    }
    function notificationHandler(){
        navigation.navigate('Notification')
    }
    function chatHandler(){
        navigation.navigate('Chat')
    }
    return(

        <DrawerLayoutAndroid
        ref={drawerRef}
        drawerWidth={200}
        drawerPosition={'left'}
        renderNavigationView={() => <NavigationView drawerRef={drawerRef}  />}
      >
            <View style={homeStyle.maincontainer}>
                <TouchableOpacity style={homeStyle.accountcontainer} onPress={drawerHandler} >
                    <View style={homeStyle.userbannercontainer}>
                        <Image source={require("../assets/account.png")}  ></Image>
                        <Text style={homeStyle.userbannertext} >HEY {username ? username : "User"}</Text>
                    </View>
                    <View style={homeStyle.searchcontainer}>
                        <TextInput placeholder="    Search..." style={homeStyle.textinput} ></TextInput>
                    </View>
                </TouchableOpacity>

                <View style={homeStyle.bannercontainer}>
                    <Image  style={homeStyle.bannerimage}  source={require("../assets/banner.png")}></Image>
                </View>

            {/* options container*/}
                <View style={homeStyle.optionscontainer}>
                    <TouchableOpacity style={homeStyle.options} onPress={historyHandler}   >
                        <Image style={homeStyle.optionsimage} source={require("../assets/history.png")}></Image>
                        <Text style={homeStyle.optionstext} >History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.options} onPress={nearbyHandler} >
                        <Image style={homeStyle.optionsimage} source={require("../assets/nearby.png")}></Image>
                        <Text style={homeStyle.optionstext} >Nearby</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.options} onPress={favoriteHandler} >
                        <Image style={homeStyle.optionsimage} source={require("../assets/favorite.png")}></Image>
                        <Text style={homeStyle.optionstext} >Favorite</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={homeStyle.turfcontainerbanner} onPress={moreHandler} >
                    <Text style={homeStyle.bannertext} >Nearby Turfs</Text>
                    <Text style={homeStyle.bannertext} >More</Text>
                </TouchableOpacity>
            {/*nearby turfcontainer*/}
                <ScrollView contenntContainerStyle={homeStyle.turfmaincontainer}>
                {/*  here we map and return the turf first just create one                    */}
                    
                    {turf.map((turf)=>{
                        return(
                            <View style={[homeStyle.turfcontainer,homeStyle.special]} key={turf.id} >
                            <Image style={homeStyle.turfimage} source={require("../assets/banner.png")}></Image>
                            <View style={homeStyle.turftextcontainer}>
                                <Text style={homeStyle.turfheading} >{turf.turf_name}</Text>
                                <TouchableOpacity style={homeStyle.turflocationcontainer}>
                                    <Image source={require("../assets/smallnearby.png")}></Image>
                                    <Text style={homeStyle.turftext} >{turf.location}</Text>
              
                                </TouchableOpacity>
                                {/*  here give a way to give ratings*/}
    
                                <TouchableOpacity style={homeStyle.bookbutton} onPress={()=> bookHandler(turf.id)}   >
                                        <Text style={homeStyle.booktext} >Book Now</Text>
                                    </TouchableOpacity>
                            </View>
                       </View>
    
                        )
                    })}

                </ScrollView>
            </View>


            <View style={homeStyle.bottomcontainer}>
                <View style={homeStyle.bottomsubcontainer}>
                    <TouchableOpacity  onPress={homeHandler} >
                        <Image source={require("../assets/home.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={notificationHandler} >
                        <Image source={require("../assets/notification.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={chatHandler} >
                        <Image source={require("../assets/chat.png")} style={homeStyle.image} />
                    </TouchableOpacity>

                </View>
            </View>
        </DrawerLayoutAndroid>
    )
}



