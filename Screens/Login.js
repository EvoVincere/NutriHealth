import React, { useContext, useState } from "react";

import googleLogo from '../Image/google.png';
import facebookLogo from '../Image/facebook.png';
import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { AuthContext } from "./Context";
import LinearGradient from "react-native-linear-gradient";
import { signIn, signUp } from "./Database";


const Login = ({navigation}) => {
    const {Login,googleLogin, fbLogin}=React.useContext(AuthContext);
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [mode, setMode] = useState('signUp')
    const [name,setName] = React.useState('');
    
    
    
    return(
    <LinearGradient colors={['#3a86ff', '#db46c3', ]} style={styles.linearGradient}>
        
     <View style={{flex:1,justifyContent:'flex-end',}}>
       <View>
         <Text style={{color: 'black',fontSize:36,fontWeight:'bold',marginLeft:21}}>Masuk</Text>
        </View>  
        <View style={{marginLeft:21, marginTop:39}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Email</Text>
            <TextInput placeholder="bal@gmail.com" placeholderTextColor="grey" value={email} onChangeText={text => setEmail(text)} style={{borderRadius:10,shadowColor:"#3A86FF", shadowRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{marginLeft:21, marginTop:17}}>
            <Text style={{color:'black',fontSize:14,marginBottom:5}}>Password</Text>
            <TextInput placeholder="Enter Your Password" placeholderTextColor="grey" value={password} onChangeText={text =>setPassword(text)} secureTextEntry style={{borderRadius:10,shadowColor:"#3A86FF", shadowRadius:10, height:48, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 58, color: 'black'}}/>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('LupaPassword')} >
                <Text style={{color: 'black',marginRight:58,marginTop:14}}>Lupa Password</Text>
            </TouchableOpacity>   
        </View>
        <View style={{marginLeft:25,flexDirection:'row'}}>
            <TouchableOpacity onPress={() => googleLogin()}>
                <Image source={googleLogo} style={{width:45, height:45,backgroundColor:'#FFF',borderRadius:5}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => fbLogin()}>
                <Image source={facebookLogo} style={{width:45,height:45,backgroundColor:'#FFF',borderRadius:5,marginLeft:17}}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'flex-end', justifyContent: 'flex-end',marginRight:59,marginTop:21,marginBottom:60}}>
            <TouchableOpacity 
            onPress={()=> Login({email,password,name},console.log(typeof(email),typeof(password)))} style={{backgroundColor:'#4F3E65',width:89,height:40,justifyContent:'center',alignItems:'center',borderRadius:7}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF'}}>Masuk</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Registrasi')} >
                <Text style={{color:'black',fontSize:16,marginLeft:21,marginBottom:22}}>Daftar?</Text>
            </TouchableOpacity>
        </View>
     </View>
     </LinearGradient>
    ); 
 }  

 export default Login;

 const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
  })