//all external dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//user defined screens
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import HomeScreen from './screens/homeScreen';
import BlankScreen from './screens/blankScreen';
import TurfScreen from './screens/turfScreen';
import BookScreen from './screens/bookScreen';
import MapScreen from './screens/mapScreen';
import PaymentScreen from './screens/paymentScreen';
import SuccessScreen from './screens/successScreen';
import ProfileScreen from './screens/profileScreen';
import HistoryScreen from './screens/historyScreen';
import NotificationScreen from './screens/NotificationScreen';
import ChatScreen from './screens/ChatScreen';

//creating the stack for navigator
const Stack=createNativeStackNavigator()

//common color
const Backgroundcolor="#7727C8"


export default function App() {
  return (
    
    <NavigationContainer>

    <Stack.Navigator initialRouteName='Blank' screenOptions={{ headerShown: false }}>
        
        <Stack.Screen options={ {title:"",backgroundColor:"" } } name='Blank' component={BlankScreen}/>      
        <Stack.Screen options={ {title:"" ,headerLeft:()=><></>} } name='Login' component={LoginScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Signup' component={SignupScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Home' component={HomeScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Turf' component={TurfScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Book' component={BookScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Map' component={MapScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Payment' component={PaymentScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Success' component={SuccessScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Profile' component={ProfileScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='History' component={HistoryScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Notification' component={NotificationScreen}/>
        <Stack.Screen options={ {title:"",headerLeft:()=><></> } } name='Chat' component={ChatScreen}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}