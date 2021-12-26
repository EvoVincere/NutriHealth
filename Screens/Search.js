import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchIcon from "./../Icon/search.png"
import {
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    SafeAreaView,
    Image
} from 'react-native';


const Search = ({navigation}) => {
    return(
 
     <SafeAreaView style={{flex:1}}>
         <View style={{flexDirection:'row',paddingTop:15,marginHorizontal:17,position:'relative',marginLeft:30,marginTop:30}}>
             <Image source={SearchIcon} style={{width:16,height:16,position:'absolute',top:40,left:20}}/>
             <TextInput placeholder="Artikel, Makanan" placeholderTextColor="grey" style={{borderWidth:2,borderColor:'#E8E8E8', borderRadius:24, height:64, fontSize: 16, paddingLeft:50,color:'black',width:292}}/>
         </View>
         <View>   
            <Text style={{color: 'black',fontSize:22,marginTop:35,marginLeft:32}}>Yang Sedang Panas</Text>
         </View>
     </SafeAreaView>    
    ); 
 }

 export default Search;