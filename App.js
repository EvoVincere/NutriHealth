import React, { useState,Component } from "react";

import { SafeAreaView,View,Text,TouchableOpacity,Image,AsyncStorage  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import Search from "./Screens/Search";
import Favorite from "./Screens/Favorite";
import Profile from "./Screens/Profile";
import Food from "./Image/food.png";


import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./Screens/Login";
import LupaPassword from "./Screens/lupaPassword";
import Registrasi from "./Screens/Registrasi";
import OTPscreen from "./Screens/OTP";
import PasswordBaru from "./Screens/passwordbaru";
import SplashScreen from "./Screens/splashscreen";
import { AuthContext } from "./Screens/Context";
import Logout from "./Screens/Logout";
import Setting from "./Screens/SettingScreen";
import { GoogleSignin ,statusCodes} from "@react-native-community/google-signin";
import EditProfile from "./Screens/EditProfileScreen";


const SettingStack = createNativeStackNavigator();
const OpeningStack = createNativeStackNavigator();
const HomeStack= createNativeStackNavigator();
const SearchStack= createNativeStackNavigator();
const ProfileStack= createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const EditProfileStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tabs= createBottomTabNavigator();  


function OpeningStackScreen(){
    return(
    <NavigationContainer independent={true}>
      <OpeningStack.Navigator initialRouteName="Main">
        <OpeningStack.Screen component={Main} name="Main" options={{headerShown:false}}/>
        <OpeningStack.Screen component={Login} name="Login" options={{headerShown:false}}/>
        <OpeningStack.Screen component={LupaPassword} name="LupaPassword" options={{title:"",headerTintColor:'#FFF',headerStyle:{backgroundColor:'#3A86FF'}}}/>
        <OpeningStack.Screen component={HomeScreen} name="Home" options={{headerShown: false}}/>
        <OpeningStack.Screen component={Registrasi} name="Registrasi" options={{title:"",headerTintColor:'#FFF',
            headerStyle:{backgroundColor:'#3A86FF'}}}/>
        <OpeningStack.Screen component={OTPscreen} name="OTPscreen" options={{title:"",headerTintColor:'#FFF',headerStyle:{backgroundColor:'#3A86FF'}}}/>
        <OpeningStack.Screen component={PasswordBaru} name="PasswordBaru" options={{title:"",headerTintColor:'#FFF',headerStyle:{backgroundColor:'#3A86FF'}}}/>
        <OpeningStack.Screen component={Logout} name="Logout" />
       </OpeningStack.Navigator>
    </NavigationContainer>
    );
}


const HomeStackScreen = () => {
  return(

  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
  </HomeStack.Navigator>
  );
}
const SearchStackScreen = () => {
  return(

  <SearchStack.Navigator>
    <SearchStack.Screen name="SearchScreen" component={Search} options={{headerShown:false}}/>
  </SearchStack.Navigator>
  );
}

const SettingStackScreen = () => {
  return(

  <SettingStack.Navigator>
    <SettingStack.Screen name="SettingScreen" component={Setting} options={{headerShown:false}}/>
  </SettingStack.Navigator>
  );
}
const ProfileStackScreen = () => {
  return(
    
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileScreen" component={Profile} options={{headerShown:false}}/>
    <ProfileStack.Screen name="EditProfileScreen" component={EditProfile} options={{title:'Edit Profile'}} />
    <ProfileStack.Screen name="Setting" component={Setting} />
  </ProfileStack.Navigator>
  );
}

const FavoriteStackScreen = () =>{
  return(

  <FavoriteStack.Navigator>
    <FavoriteStack.Screen name="FavoriteScreen" component={Favorite} options={{headerShown:false}}/>
  </FavoriteStack.Navigator>
  );
}

const TabsScreen = () =>{
  return(

  <Tabs.Navigator screenOptions={{
    tabBarShowLabel: false,
}}>
      <Tabs.Screen name="HomeButton" component={HomeStackScreen} options={{title:"Home",headerShown:false}}/>
      <Tabs.Screen name="SearchButton" component={SearchStackScreen} options={{title:"Search",headerShown:false}}/>
      <Tabs.Screen name="FavoriteButton" component={FavoriteStackScreen} options={{title:"Favorite",headerShown:false}}/>  
      <Tabs.Screen name="ProfileButton" component={ProfileStackScreen} options={{headerShown:false}}/>  
    </Tabs.Navigator>
  );
}

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({userToken}) =>{
  return(
    <RootStack.Navigator screenOptions={{headerShown:false}}>
      {userToken? (
        <RootStack.Screen name="App" component={TabsScreen} options={{
          animationEnabled: false
        }}/>
      ):(
        <RootStack.Screen name="Auth" component={AuthStackScreen} options={{
          animationEnabled: false
        }}/>
      )}
    </RootStack.Navigator>
  );
}




const AuthStackScreen = () =>{
  return(
    <OpeningStackScreen />
  );
}
export default function App () {
  const[userToken,setUserToken]=React.useState(null)
  const authContext = React.useMemo(()=>{
    return{
      Login: async() =>{
        setUserToken('abc')
      },
      Registrasi: () =>{
        setUserToken('abc')
      },
      LupaPassword: () =>{
        setUserToken('abc')
      },
      Logout: () =>{
        setUserToken(null)
      },
      googleLogin: async() => {
        try{
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log("userInfo",userInfo)
        } catch(error) {
          console.log({error});
        }
         GoogleSignin.configure({
            webClientId: '820394232353-rs2cvtani3nv1shm5r662jno4vjn01c9.apps.googleusercontent.com',
          });
      },  
     
    }
  
  },[])
    return(
      <AuthContext.Provider value={authContext}>
        <NavigationContainer independent={true}>
         <RootStackScreen userToken={userToken}/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
}
 

const Main= ({navigation})  => {
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: '#3A86FF'}}>
          <Image source={Food} style={{width:100,height:100,marginVertical:45}}/>
        <View>
          <Text style={{color:'black', fontWeight: 'bold', fontSize:24,}}>NutriHealth</Text>
        </View>
        <View style={{marginTop: 25}}>
          <Text style={{color:'black',fontSize:14}}>Nutrisi Untuk Semua</Text>
        </View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Login')}
        style={{backgroundColor: '#4F3E65',justifyContent:'center',alignContent:'center',alignItems:'center',width:89,height:40,borderRadius: 7,flexDirection:'row',marginTop:59}}>
          <Text style={{fontWeight:'bold',fontSize:14,color:'#FFF',}}>Mulai</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  


