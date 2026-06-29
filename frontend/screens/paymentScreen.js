import { StyleSheet,View,Text, TouchableOpacity,Image, ScrollView, Alert } from "react-native"
import {useState} from "react"

//importing stylesheet
import paymentStyle from "../stylesheet/paymentStyle"
import { useRoute } from '@react-navigation/native';

import axios from "axios"
import backendurl from "../components/backendurl";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PaymentScreen({navigation}){
    const route=useRoute()
    const [date,setDate]=useState(route.params? route.params.date :  null) 
    const [time,setTime]=useState(route.params? route.params.time : null)
    const [id,setId]=useState(route.params? route.params.id : null)

    function backHandler(){
        navigation.navigate('Book')
    }
    function cardselectHandler(){

    }
    function cardaddHandler(){

    }
    function  upiselectHandler(){

    }
    function upiaddHandler(){

    }
    async function proceedHandler(){
        let username=await AsyncStorage.getItem('username')
        try{
            let response=(await axios.post(backendurl+"/api/booked/",
            {
                user_name:username,
                turf:id,
                date:date,
                time:time,
                status:true
            }) ).data
            console.log(response)
            Alert.alert("successfully booked")

            navigation.navigate('Success')
    
        }catch(error){
            console.log(error)
            Alert.alert("Try Booking Again")
        }

    }
    return(
        <ScrollView contentContainerStyle={paymentStyle.maincontainer} >
           <View style={paymentStyle.topcontainer}>
                <TouchableOpacity style={paymentStyle.backbuttoncontainer} onPress={backHandler} >
                    <Image source={require("../assets/back.png")}></Image>
                </TouchableOpacity>
           </View>
           <Text style={paymentStyle.paytext} >Credit & Debit Cards</Text>

            <View style={paymentStyle.cardcontainer}>
                {/* map this with users card details */}
                <View style={paymentStyle.cardsubcontainer}>
                    <Image source={require("../assets/mastercard.png")}></Image>
                    <Text style={paymentStyle.cardtext} >Axis Bank **** **** **** 8395</Text>
                    <TouchableOpacity style={paymentStyle.cardselectcontainer}  ></TouchableOpacity>
                </View>

                <View style={paymentStyle.cardsubcontainer}>
                    <Image source={require("../assets/mastercard.png")}></Image>
                    <Text style={paymentStyle.cardtext} >Axis Bank **** **** **** 8395</Text>
                    <TouchableOpacity style={paymentStyle.cardselectcontainer} onPress={cardselectHandler} ></TouchableOpacity>
                </View>
                <TouchableOpacity style={paymentStyle.addcardcontainer} onPress={cardaddHandler} >
                    <Image source={require("../assets/add.png")}></Image>
                    <Text style={paymentStyle.addcardtext} >Add New Card</Text>
                </TouchableOpacity>

            </View>

            <Text style={paymentStyle.paytext} >UPI</Text>

            <View style={paymentStyle.cardcontainer}>
                <View style={paymentStyle.cardsubcontainer}>
                    <Image source={require("../assets/gpay.png")}></Image>
                    <Text style={paymentStyle.cardtext} >Google Pay</Text>
                    <TouchableOpacity style={paymentStyle.cardselectcontainer} onPress={upiselectHandler} ></TouchableOpacity>
                </View>
                <View style={paymentStyle.cardsubcontainer}>
                    <Image source={require("../assets/gpay.png")}></Image>
                    <Text style={paymentStyle.cardtext} >Google Pay</Text>
                    <TouchableOpacity style={paymentStyle.cardselectcontainer} onPress={upiselectHandler} ></TouchableOpacity>
                </View>
                <TouchableOpacity style={paymentStyle.addcardcontainer} onPress={upiaddHandler} >
                    <Image source={require("../assets/add.png")}></Image>
                    <Text style={paymentStyle.addcardtext} >Add New UPI ID</Text>
                </TouchableOpacity>

            </View>

            <Text style={paymentStyle.paytext}>More Payment Options</Text>

            <View style={[paymentStyle.cardcontainer,paymentStyle.othercontainer]}>
                <View style={paymentStyle.cardsubcontainer}>
                    <Image source={require("../assets/wallet.png")}></Image>
                    <Text style={paymentStyle.cardtext} >Wallet</Text>
                    <TouchableOpacity style={paymentStyle.cardselectcontainer} onPress={upiselectHandler} ></TouchableOpacity>
                </View>
                <View style={paymentStyle.cardsubcontainer}>
                    <Image source={require("../assets/cod.png")}></Image>
                    <Text style={paymentStyle.cardtext} >Cash On Delivery</Text>
                    <TouchableOpacity style={paymentStyle.cardselectcontainer} onPress={upiselectHandler} ></TouchableOpacity>
                </View>
            </View>

            <View style={paymentStyle.bottomcontainer}>
                <View style={paymentStyle.firstcontainer}>
                    <Text style={paymentStyle.firsttext}  >$1000</Text>
                </View>
                <TouchableOpacity style={paymentStyle.proceedbutton} onPress={proceedHandler} >
                    <Text style={paymentStyle.proceedtext} >Proceed to Pay</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}