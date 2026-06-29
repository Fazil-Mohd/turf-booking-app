import { View,Text,TouchableOpacity,Image, BackHandler } from "react-native"
import homeStyle from "../stylesheet/homeStyle"
import historyStyle from "../stylesheet/historyStyle"
import bookStyle from "../stylesheet/bookStyle"
import {useState,useEffect} from "react"
import axios from "axios"
import backendurl from "../components/backendurl"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen({navigation}){

    const [completed,setCompleted]=useState(true)
    const [cancelled,setCancelled]=useState(false)
    const [turf,setTurf]=useState([])
    useEffect(()=>{
        getTurf()
    },[])

    async function getTurf(){
        let response=(await axios.get(backendurl+"/api/booked/")).data
        let username = await AsyncStorage.getItem('username')
        // console.log(response)
        try {
            const data = await Promise.all(response.map(async (turf) => {
                if (username === turf.user_name) {
                    try {
                        const turfobject = {};
                        const turfdata = (await axios.get(backendurl + "/api/turf/" + turf.turf)).data;
    
                        turfobject.id = turf.id;
                        turfobject.date = turf.date;
                        turfobject.time = turf.time;
                        turfobject.status = turf.status;
                        turfobject.name = turfdata.turf_name;
                        turfobject.location = turfdata.location;
                        return turfobject;
                    } catch (error) {
                        console.log(error);
                        return null; // return null for failed requests
                    }
                }
                return null; // return null for unmatched user names
            }));
    
            // Filter out null values (failed requests or unmatched user names)
            const filteredData = data.filter(item => item !== null);
            
            // Update state with the filtered data
            setTurf(filteredData);
        } catch (error) {
            console.log(error);
        }
    }
    function homeHandler(){

    }
    function backHandler(){
        navigation.navigate('Home')
    }
    function completedHandler(id){
        console.log(id)
        if(id==="completed"){
            setCompleted(true)
            setCancelled(false)
        }else{
            setCompleted(false)
            setCancelled(true)
        }
    }
    async function cancelHandler(id){
        console.log(id)
        let response=(await axios.patch(backendurl+"/api/booked/"+id,
            {
                status:false
            }
        )).data
        console.log(response)
        getTurf()
        // put request to cancel

    }

    return(
        <View style={historyStyle.maincontainer}>

            <View style={historyStyle.topcontainer}>
                <View style={historyStyle.topsubcontainer}>
                    <TouchableOpacity style={historyStyle.backbutton} onPress={backHandler} >
                        <Image source={require("../assets/back.png")}></Image>
                    </TouchableOpacity>
                    <Text style={historyStyle.toptext}>My Bookings</Text>

                </View>

                <View style={historyStyle.statuscontainer}>
                    <TouchableOpacity style={historyStyle.status} onPress={()=> completedHandler('completed')  } >
                        <Text style={completed ? historyStyle.statustext :historyStyle.statusfalsetext }>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={historyStyle.status}  onPress={()=> completedHandler('cancelled') } >
                        <Text style={cancelled ? historyStyle.statustext : historyStyle.statusfalsetext}>Cancelled</Text>
                    </TouchableOpacity>

                </View>

            </View>

            {/* here we give code to see completed and cancelled turfs*/}
            <View style={historyStyle.tufmaincontainer}>
            </View>

            {turf.map((turf)=>{
                if(completed && turf?.status ){
                    return(
                        <View style={historyStyle.turfcontainer} key={turf.id} >
                        <View style={historyStyle.turfsubcontainer}>
                            <Image style={historyStyle.turfimage} source={require("../assets/turf.png")} ></Image>
                        </View>
                        <View style={historyStyle.turftextcontainer}>
                            <Text style={historyStyle.turfheading}>{turf.name}</Text>
                            <Text style={historyStyle.turftext}>Date: {turf.date} </Text>
                            <Text style={historyStyle.turftext}>Time: {turf.time} </Text>
                            <TouchableOpacity style={historyStyle.cancelbutton} onPress={()=> cancelHandler(turf.id)} >
                                <Text style={historyStyle.canceltext} >Cancel</Text>
                            </TouchableOpacity>
    
                        </View>
                    </View>
    
                    )
                }
            })}
            {turf.map((turf)=>{
                if(cancelled && !turf?.status ){
                    console.log(turf)
                return(
                        <View style={historyStyle.turfcontainer} key={turf?.id} >
                        <View style={historyStyle.turfsubcontainer}>
                            <Image style={historyStyle.turfimage} source={require("../assets/turf.png")} ></Image>
                        </View>
                        <View style={historyStyle.turftextcontainer}>
                            <Text style={historyStyle.turfheading}>{turf?.name}</Text>
                            <Text style={historyStyle.turftext}>Date: {turf?.date} </Text>
                            <Text style={historyStyle.turftext}>Time: {turf?.time} </Text>

    
                        </View>
                    </View>
    
                    
                )
                }

            })}


            <View style={homeStyle.bottomcontainer}>
                <View style={homeStyle.bottomsubcontainer}>
                    <TouchableOpacity  onPress={homeHandler} >
                        <Image source={require("../assets/home.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={homeHandler} >
                        <Image source={require("../assets/notification.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={homeHandler} >
                        <Image source={require("../assets/chat.png")} style={homeStyle.image} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}