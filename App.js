import React, { useState,Component, useEffect } from "react";

import { SafeAreaView,View,Text,TouchableOpacity,Image,StyleSheet,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import Search from "./Screens/Search";
import Favorite from "./Screens/Favorite";
import Profile from "./Screens/Profile";
import Food from "./Image/food.png";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import firestore from '@react-native-firebase/firestore';

import Ionicons from 'react-native-vector-icons/Ionicons'
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
import LinearGradient from 'react-native-linear-gradient';
import Context from "./Screens/API/ContextAPI";
import {ArticleView1 , ArticleView2, ArticleView3,ArticleView4,ArticleView5,SearchArticle1,
  SearchArticle2,SearchArticle3, TrendingArticle1, TrendingArticle4, TrendingArticle2,TrendingArticle3,googleSearch } from "./Screens/ContentView";
import auth from '@react-native-firebase/auth';




const SettingStack = createNativeStackNavigator();
const OpeningStack = createNativeStackNavigator();
const HomeStack= createNativeStackNavigator();
const SearchStack= createNativeStackNavigator();
const ProfileStack= createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const Tabs= createBottomTabNavigator();  




function OpeningStackScreen(){
    return(
    <NavigationContainer independent={true}>
      <OpeningStack.Navigator initialRouteName={"Main"} screenOptions={{headerTransparent: true}}>
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

  <HomeStack.Navigator initialRouteName="HomeScreen">
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
    <HomeStack.Screen name="ArticleView1Screen" component={ArticleView1} options={{title:''}}/>
    <HomeStack.Screen name="ArticleView2Screen" component={ArticleView2} options={{title:''}}/>
    <HomeStack.Screen name="ArticleView3Screen" component={ArticleView3} options={{title:''}}/>
    <HomeStack.Screen name="ArticleView4Screen" component={ArticleView4} options={{title:''}}/>
    <HomeStack.Screen name="ArticleView5Screen" component={ArticleView5} options={{title:''}}/>
  </HomeStack.Navigator>
  );
}
const SearchStackScreen = () => {
  return(

  <SearchStack.Navigator>
    <SearchStack.Screen name="SearchScreen" component={Search} options={{headerShown:false}}/>
    <SearchStack.Screen name="SearchArticle1Screen" component={SearchArticle1} options={{title:''}}/>
    <SearchStack.Screen name="SearchArticle2Screen" component={SearchArticle2} options={{title:''}}/>
    <SearchStack.Screen name="SearchArticle3Screen" component={SearchArticle3} options={{title:''}}/>
    <SearchStack.Screen name="TrendingArticle1Screen" component={TrendingArticle1} options={{title:''}}/>
    <SearchStack.Screen name="TrendingArticle2Screen" component={TrendingArticle2} options={{title:''}}/>
    <SearchStack.Screen name="TrendingArticle3Screen" component={TrendingArticle3} options={{title:''}}/>
    <SearchStack.Screen name="TrendingArticle4Screen" component={TrendingArticle4} options={{title:''}}/>
    <SearchStack.Screen name="googleSearch" component={googleSearch} options={{title:''}}/>
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

// Screen Names

const HomeButton = "Home";
const SearchButton = "Search";
const FavoriteButton = "Favorite";
const ProfileButton = "Profile";
const TabsScreen = () =>{
  return(
  <Tabs.Navigator initialRouteName={HomeButton} 
    screenOptions={({route}) =>({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === HomeButton){
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === SearchButton) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (rn === FavoriteButton) {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (rn === ProfileButton) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color}/>

        }, tabBarShowLabel : false,
    })}>
      <Tabs.Screen name={HomeButton} component={HomeStackScreen} options={{title:"Home",headerShown:false}}/>
      <Tabs.Screen name={SearchButton} component={SearchStackScreen} options={{title:"Search",headerShown:false}}/>
      <Tabs.Screen name={FavoriteButton} component={FavoriteStackScreen} options={{title:"Favorite",headerShown:false}}/>  
      <Tabs.Screen name={ProfileButton} component={ProfileStackScreen} options={{headerShown:false}}/>  
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
const App = ({children})=> {
  const[userToken,setUserToken]=React.useState(null);
  
  const authContext = React.useMemo(()=>{
    return{
     
      Login: async(email,password) =>{
      
        setUserToken('abc')
       /* try{
         await auth().signInWithEmailAndPassword(email,password);
        } catch(e) {
          console.log(e);
        } */
      },
      Registrasi: async(email,password) =>{
        try{
          await auth().createUserWithEmailAndPassword(email,password)
          .then(()=>{
            firestore().collection('users').doc(auth().currentUser.uid)
            .set({
              fname: '',
              lname: '',
              email: email,
              createAt: firestore.Timestamp.fromDate(new Date()),
              userImg: null,
            })
            .catch(error =>{
              console.log('Something wrong with added user to firestore',error);
            })
          })
          .catch(error => {
            console.log('Something wrong with sign up',error);
          });
        }catch (e) {
          console.log(e);
        }
      },
      LupaPassword: () =>{
        setUserToken('abc')
      },
      Logout: async() =>{
        try{
          await auth().signOut();
        } catch (e){
          console.log(e);
        }
        setUserToken(null);
      },
      googleLogin: async() => {
        try{
          const idToken = await GoogleSignin.signIn();
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          await auth().signInWithCredential(googleCredential);
        } catch(error){
          console.log({error});
        }
        
        
         GoogleSignin.configure({
            webClientId: '820394232353-rs2cvtani3nv1shm5r662jno4vjn01c9.apps.googleusercontent.com',
          });
      },  
      fbLogin: async () => {
        try {
          // Attempt login with permissions
          const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

          if (result.isCancelled) {
            throw 'User cancelled the login process';
          }

          // Once signed in, get the users AccesToken
          const data = await AccessToken.getCurrentAccessToken();

          if (!data) {
            throw 'Something went wrong obtaining access token';
          }

          // Create a Firebase credential with the AccessToken
          const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

          // Sign-in the user with the credential
          await auth().signInWithCredential(facebookCredential)
          .catch(error => {
              console.log('Something went wrong with sign up: ', error);
          });
        } catch(error) {
          console.log({error});
        }
        
      },
     
    }

  
  },[])
    return(
      <AuthContext.Provider value={authContext}>
        {children}
        <NavigationContainer independent={true}>
         <RootStackScreen userToken={userToken}/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
    
} 
 

const Main= ({navigation})  => {
    return (
      
        <LinearGradient colors={['#3a86ff', '#db46c3', ]} style={styles.linearGradient}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
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
        </View>
        </LinearGradient>
     
    );
  };
  

export default () => {
  return (
  <Context>
    <App />
  </Context>
  );
}



const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
})