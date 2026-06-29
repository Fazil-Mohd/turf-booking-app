import { View,Text,Image, TouchableOpacity } from "react-native";

//import stylesheets here
import bookStyle from "../stylesheet/bookStyle";
import homeStyle from "../stylesheet/homeStyle";
import { useRoute } from '@react-navigation/native';
import {useEffect,useState} from "react"

import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-snap-carousel';


import axios from "axios"
import backendurl from "../components/backendurl";

export default function BookScreen({navigation}){
    const route=useRoute()
    const [currentid,setCurrentid]=useState(route.params ? route.params.id : null )

    const [date,setDate]=useState("")
    const [time,setTime]=useState("")
    const [turf,setTurf]=useState({})
    useEffect(()=>{
        if(currentid){
            async function getTurfById(){

        
                let turf=(await axios.get(backendurl+`/api/turf/${currentid}`)).data
                console.log(turf)
                setTurf(turf)
    
            }
            getTurfById()
    
        }
    },[currentid])
    function generateTimeSlots() {
        const timeSlots = [];
        for (let hour = 6; hour <= 21; hour++) {
          const displayHour = hour > 12 ? hour - 12 : hour;
          const amPm = hour < 12 ? 'AM' : 'PM';
          const timeSlot = `${displayHour}${amPm}`;
          timeSlots.push(timeSlot);
        }
        return timeSlots;
      }

    function getNextThreeDatesWithDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
        const dayAfterTomorrow = new Date(today);
        dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2); // Get day after tomorrow's date
      
        return [
          { date: today.getDate(), name: days[today.getDay()] },
          { date: tomorrow.getDate(), name: days[tomorrow.getDay()] },
          { date: dayAfterTomorrow.getDate(), name: days[dayAfterTomorrow.getDay()] }
        ];
      }
      
    
    function backHandler(){
        navigation.navigate('Home')
    }
    function favoriteHandler(){

    }
    function datepickHandler(date){
        console.log(date)
        setDate(date)
    }
    function reservationHandler(time){
        console.log(time)
        setTime(time)
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity style={bookStyle.datesubcontainer} onPress={()=>reservationHandler(item)} >
        <Text style={bookStyle.infotext} > {item} </Text>
        </TouchableOpacity> 
      );

    function bookHandler(){
        navigation.navigate('Payment',{id:currentid,date:date,time:time})
    }
    function locationHandler(cordinates){
        console.log(cordinates)
        navigation.navigate('Map',{cordinates:cordinates})
    }

    return(
        <View style={bookStyle.maincontainer}  >
            {/* this image should be from database
                          */}
            <Image style={bookStyle.image} source={require("../assets/turf.png")} ></Image>
            <View style={bookStyle.topbarcontainer}>
                <TouchableOpacity style={bookStyle.backbutton} onPress={backHandler} >
                    <Image style={homeStyle.button}  source={require("../assets/back.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={bookStyle.backbutton} onPress={favoriteHandler} >
                    <Image style={homeStyle.button}  source={require("../assets/heart.png")}></Image>
                </TouchableOpacity>
            </View>
            
            <View style={bookStyle.turfcontainer}>
                <View style={bookStyle.turfnamecontainer}>
                    {/* the name of the turf from db*/}
                    <Text style={bookStyle.turfheading}>{turf ? turf.turf_name :" loading" }</Text>
                    <TouchableOpacity style={[homeStyle.turflocationcontainer,bookStyle.turflocationcontainer]} onPress={()=> locationHandler(turf.cordinates)} >
                                <Image source={require("../assets/smallnearby.png")}></Image>
                                {/*   location name from db                               */}
                                <Text style={homeStyle.turftext} >{turf ? turf.location :" loading" }</Text>
                          
                    </TouchableOpacity>
                    <View style={bookStyle.mapcontainer}>
                        <Text style={bookStyle.maptext} >Direction</Text>
                        <Image style={bookStyle.mapimage} source={require("../assets/map.png")} ></Image>
                    </View>
                    
                    <View style={bookStyle.informationcontainer}>
                        <View style={bookStyle.infoview}>
                            {/*  this information from db rate                            */}
                            <Text style={bookStyle.infotext} >$1000/hr</Text>
                        </View>

                        <View style={bookStyle.infoview}>
                            {/*  this information from db rating   */}
                            <View style={bookStyle.ratingcontainer}>
                                <Image source={require("../assets/star.png")}></Image>
                                <Text style={bookStyle.infotext} >4.9</Text>   

                            </View>
                            <Text style={bookStyle.infotext} > 300 Reviews </Text>
                        </View>
                        <View style={bookStyle.infoview}>
                            {/*  this information from db rate                            */}
                            <Text style={bookStyle.infotext} >Facilities</Text>
                            <View style={bookStyle.facilitycontainer}>
                                <Image source={require("../assets/veed.png")}></Image>
                                <Image source={require("../assets/water.png")}></Image>
                                <Image source={require("../assets/locker.png")}></Image>

                            </View>

                        </View>


                    </View>
                    <View style={bookStyle.datemaincontainer}>
                        <View style={bookStyle.datecontainer}>
                                {getNextThreeDatesWithDay().map((dates)=>{
                                    
                                    return(
                                        <TouchableOpacity key={dates.date} style={bookStyle.datesubcontainer} onPress={()=> datepickHandler(dates.date)}  >
                                            <Text style={bookStyle.datetext} > {dates.date} </Text>
                                            <Text style={bookStyle.infotext} >{dates.name.slice(0,3).toUpperCase()}</Text>
                                        </TouchableOpacity>                                  
                                    )
                                })}

                        </View>
                        {/* RESERVATION FREE TIME HERE ENABLE LOGIC LATER */}
                        <View style={bookStyle.datecontainer}>
                            <Carousel
                                data={generateTimeSlots()}
                                renderItem={renderItem}
                                sliderWidth={300}
                                itemWidth={200}
                                />
 
                        </View>



                    </View>

                    <Text style={bookStyle.containertext} >Photos</Text>
                    
                    {/* implement a photo carousel here */}
                    <Image style={bookStyle.turfimage} source={require("../assets/turf.png")} ></Image>
                    <View style={bookStyle.bookbuttoncontainer}>
                        <TouchableOpacity style={bookStyle.bookbutton} onPress={bookHandler} >
                            <Text style={bookStyle.booktext} >Book Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </View>
    )

}