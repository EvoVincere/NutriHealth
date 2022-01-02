import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchIcon from "./../Icon/search.png"
import labu from "./../Image/labu2.jpg"
import kol from "./../Image/kol.jpg"
import wortel from "./../Image/carrot.jpg"
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native';


const Search = ({navigation}) => {
    return(
 
     <SafeAreaView>
         <View style={{flexDirection:'row',paddingTop:15,marginHorizontal:17,position:'relative',marginLeft:30,marginTop:30}}>
             <Image source={SearchIcon} style={{width:16,height:16,position:'absolute',top:40,left:20}}/>
             <TextInput placeholder="Artikel, Makanan" placeholderTextColor="grey" style={{borderWidth:2,borderColor:'#E8E8E8', borderRadius:24, height:64, fontSize: 16, paddingLeft:50,color:'black',width:292}}/>
         </View>
         <View>   
            <Text style={{color: 'black',fontSize:22,marginTop:35,marginLeft:32}}>Yang Sedang Panas</Text>
         </View>
         <ScrollView horizontal={true} style={{flexDirection:'row',paddingLeft:16}}>
            <TouchableOpacity style={{marginTop:24,marginHorizontal:16}}>
                <Image source={labu} style={{width:200, height:159,borderTopLeftRadius:16, borderTopRightRadius:16}} />
                <Text style={{color:'#000',marginTop:13,alignSelf:'center',fontSize:14}}>Rahasia Labu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:24,marginHorizontal:4}}>
                <Image source={kol} style={{width:200, height:159,borderTopLeftRadius:16, borderTopRightRadius:16}} />
                <Text style={{color:'#000',marginTop:13,alignSelf:'center',fontSize:14}}>Rahasia Kol</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:24,marginHorizontal:16}}>
                <Image source={wortel} style={{width:200, height:159,borderTopLeftRadius:16, borderTopRightRadius:16}} />
                <Text style={{color:'#000',marginTop:13,alignSelf:'center',fontSize:14}}>Rahasia Wortel</Text>
            </TouchableOpacity>
         </ScrollView>
            <View style={{marginTop:74,marginLeft:40}}>
                <Text style={{color:'#000',fontSize:22}}>Trending</Text>
            </View>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}>
                <Text style={{color:'#FF8473',fontSize:16}}>Resep Sayuran Terkini</Text> 
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}>
                <Text style={{color:'#FF8473',fontSize:16}}>Fast Food VS Healthy Food</Text>
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}>
                <Text style={{color:'#FF8473',fontSize:16}}>Resep Ayam Rendah Kalori</Text>
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}>
                <Text style={{color:'#FF8473',fontSize:16}}>Sup</Text>
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
     </SafeAreaView>    
    ); 
 }

 export default Search;