import { View,Text, TextInput, Button, Touchable, TouchableOpacity, Pressable,KeyboardAvoidingView, ScrollView, Keyboard,Image, Alert } from "react-native";
import loginStyle from "../stylesheet/loginStyle";
import { useState,useEffect } from "react";
import backendurl from "../components/backendurl";
import axios from "axios"
//importing url here

import Spinner from 'react-native-loading-spinner-overlay';

//form handler

export default function SignupScreen({navigation}){
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    
    //handling form input
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")

    
    //handling api response
    const [apiresponse,setApiresponse]=useState("")

    //loading animation
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
  
    function loginHandler(){
        console.log("hey")
    }
    const [visibility,setVisibility]=useState(true)
    function loginHandler(){
        navigation.navigate('Login')
    }
    function forgotpasswordHandler(){

    }
    async function createaccountHandler(){
        if(password===confirmpassword){
            try{
              let response =(await axios.post(backendurl+"/auth/users/",{
                username:username,
                email:email,
                password:password
            })).data
            console.log(response)
            if(response){
              navigation.navigate('Login')
            }

            }catch(error){
              console.log(error)
              Alert.alert("check credentials details")
            }
            
        }

    }
    function passwordvisibleHandler(){
        visibility ? setVisibility(false) : setVisibility(true) 
      }
      function forgotHandler(){

      }

    return(

        <View style={loginStyle.container}  >

          <Text style={loginStyle.mainheading}>Register</Text>
          <Text style={loginStyle.subheading}>Create an account</Text>

          <View style={loginStyle.logincontainer}>

          <Text style={loginStyle.logintext}>Username</Text>
            <TextInput style={loginStyle.textinput}   placeholder=" Username" value={username} onChangeText={(text)=> setUsername(text)  }  ></TextInput>


            <Text style={loginStyle.logintext}>Email</Text>
            <TextInput style={loginStyle.textinput}   placeholder=" Enter email" value={email} onChangeText={text=> setEmail(text)}  ></TextInput>
           
            <Text style={loginStyle.logintext}>Password</Text>
            <TextInput style={loginStyle.textinput}   placeholder=" Password" value={password} onChangeText={(text)=> setPassword(text)}  ></TextInput>
            
            <TextInput style={loginStyle.textinput}   placeholder=" Confirm Password" value={confirmpassword} onChangeText={(text)=>setConfirmpassword(text)}   ></TextInput>
            <TouchableOpacity style={loginStyle.forgotcontainer} onPress={forgotHandler} >
              <Text style={loginStyle.forgottext} >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={loginStyle.loginbutton} onPress={createaccountHandler} >
              <Text style={loginStyle.loginbuttontext} >Create Account</Text>
            </TouchableOpacity>
            <View style={loginStyle.createcontainer}>
              <Text style={loginStyle.createtext} >Already have an account</Text>

              <TouchableOpacity style={loginStyle.createbutton} onPress={loginHandler} >
                <Text style={loginStyle.createbuttontext} >Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>


    )
}