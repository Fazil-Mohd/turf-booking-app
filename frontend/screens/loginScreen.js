import { View,Text, TextInput, Button, Touchable, TouchableOpacity, Pressable,Keyboard,Image, Alert } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
import { useState,useEffect } from "react";
import axios from "axios"
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

import backendurl from "../components/backendurl";


export default function LoginScreen({navigation}){
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    //form inputs
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    
    //handling api response here
    const [apiresponse,setApiresponse]=useState("")

    //handling loading animation
    const [loading,setLoading]=useState(false)


    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        }
      );
  
      // Cleanup listeners when the component unmounts
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);

    const [visibility,setVisibility]=useState(true)
    
    
    
    async function loginHandler(){
      let Username=username
      try{
        let response=(await axios.post(backendurl+"/api/token/",{
          username:username,
          password:password
        })).data
        console.log(response)
        if(response){
          await AsyncStorage.setItem('username',Username)
          let username=await AsyncStorage.getItem('username')

          navigation.navigate("Home")

        }
  
      }
      catch(error){
        console.log(error)
        Alert.alert("check credentials")
      }


    }
    function forgotpasswordHandler(){

    }
    function createaccountHandler(){
        navigation.navigate("Signup")
    }

    function passwordvisibleHandler(){
      visibility ? setVisibility(false) : setVisibility(true) 
    }
    function forgotHandler(){
      //navigate to forgot password screen

    }

    return(
        <View style={loginStyle.container}  >

          <Text style={loginStyle.mainheading}>Welcome</Text>
          <Text style={loginStyle.subheading}>Login to your account</Text>

          <View style={loginStyle.logincontainer}>
            
            <Text style={loginStyle.logintext}   >Username</Text>
            <TextInput style={loginStyle.textinput} value={username} onChangeText={(text)=>setUsername(text)}    placeholder=" Username" ></TextInput>

            <Text style={loginStyle.logintext}>Password</Text>
            <TextInput style={loginStyle.textinput} value={password} onChangeText={(text)=>setPassword(text)}    placeholder=" Password" ></TextInput>
            
            <TouchableOpacity style={loginStyle.forgotcontainer} onPress={forgotHandler} >
              <Text style={loginStyle.forgottext} >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={loginStyle.loginbutton} onPress={loginHandler} >
              <Text style={loginStyle.loginbuttontext} >Login</Text>
            </TouchableOpacity>
            <View style={loginStyle.createcontainer}>
              <Text style={loginStyle.createtext} >Don't have an account</Text>

              <TouchableOpacity style={loginStyle.createbutton} onPress={createaccountHandler} >
                <Text style={loginStyle.createbuttontext} >Create Now</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
    )
}