import React, { useState } from "react";
import googleLogo from '../Image/google.png';
import facebookLogo from '../Image/facebook.png';
import { GoogleSignin,GoogleSigninButton,statusCodes } from "@react-native-community/google-signin";
import {
    Text,
    View,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { AuthContext } from "./Context";
import LinearGradient from "react-native-linear-gradient";
import { signIn, signUp } from "./Database";

const Registrasi = ({navigation}) => {
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword,] = React.useState("");
    const [confirmPassword,setConfirmPassword,] = React.useState("");
    const {Registrasi}=React.useContext(AuthContext);
    
    
    return(
    <LinearGradient colors={['#3a86ff', '#db46c3', ]} style={styles.linearGradient}>
     <SafeAreaView style={{flex:1,justifyContent:'flex-end',}}>
       <View>
         <Text style={{color: 'black',fontSize:36,fontWeight:'bold',marginLeft:21}}>Daftar</Text>
        </View>  
        <View style={{marginLeft:21, marginTop:39}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Full Name</Text>
            <TextInput placeholder="cth: Ujang Spakbor" placeholderTextColor="grey" value={name} onChangeText={setName} style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Email</Text>
            <TextInput placeholder="cth: balbal12@gmail.com" placeholderTextColor="grey"  value={email} onChangeText={setEmail} style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Password</Text>
            <TextInput placeholder="Password" placeholderTextColor="grey" value={password} onChangeText={setPassword} secureTextEntry  style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Confirm Password</Text>
            <TextInput placeholder="Confirm Password" placeholderTextColor="grey" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={{shadowColor:"#3A86FF",shadowRadius:10, borderRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        
        <View style={{marginLeft:25,flexDirection:'row',marginTop:42}}>
            <TouchableOpacity>
                <Image source={googleLogo} style={{width:45, height:45,backgroundColor:'#FFF',borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Image source={facebookLogo} style={{width:45,height:45,backgroundColor:'#FFF',borderRadius:5,marginLeft:17}}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'flex-end', justifyContent: 'flex-end',marginRight:59,marginTop:21,marginBottom:60}}>
            <TouchableOpacity 
            onPress={()=> Registrasi({email,password,name},console.log(email,password))} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF'}}>Daftar</Text>
            </TouchableOpacity>
        </View>
     </SafeAreaView>
     </LinearGradient>
    ); 
 }  

 export default Registrasi;

 const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
  })