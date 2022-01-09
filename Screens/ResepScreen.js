import React from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";

import salad from './../Image/saladcaesar.jpeg';
import ayam from './../Image/ayampanggang.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ResepScreen = () => {
    return(
    <View>
        <TouchableOpacity style={{width:313, height:120, backgroundColor: '#CAB8F0',borderRadius:16,marginTop:31,marginLeft:39}}>
            
            <View>
                <Image source={salad} style={{width:82,height:64,marginBottom:30,marginLeft:32,marginTop:19}}/>   
            <View style={{marginLeft:128,alignItems:'center',marginRight: 120,position:'absolute',marginTop:19}}>
                <Text style={{color:'#2F80ED',fontWeight:'bold'}}>250 Kcal</Text>
            </View>
            <View style={{alignSelf:'center',position:'absolute', marginTop: 50,paddingLeft:30}}>
                <Text style={{fontWeight:'800'}}>Salad Caesar</Text>
            </View>
            <View style={{alignSelf:'center',position:'absolute', marginTop: 80,paddingLeft:60}}>
                <Text style={{fontWeight:'100',color:'#767676'}}>Selada dan Tomat</Text>
            </View>
            <Ionicons name="heart" color='#2F80ED'style={{alignSelf:'flex-end',width:16,height:16,position:'absolute',marginTop:5,}}/>
        </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={{width:313, height:120, backgroundColor: '#CAB8F0',borderRadius:16,marginTop:31,marginLeft:39}}>
            
            <View>
                
                <Image source={ayam} style={{width:82,height:64,marginBottom:30,marginLeft:32,marginTop:19}}/>   
            <View style={{marginLeft:130,alignItems:'center',marginRight: 120,position:'absolute',marginTop:19}}>
                <Text style={{color:'#2F80ED',fontWeight:'bold'}}>450 Kcal</Text>
            </View>
            <View style={{alignSelf:'center',position:'absolute', marginTop: 50,paddingLeft:60}}>
                <Text style={{fontWeight:'800'}}>Ayam Panggang</Text>
            </View>
            <View style={{alignSelf:'center',position:'absolute', marginTop: 80}}>
                <Text style={{fontWeight:'100',color:'#767676'}}>Ayam</Text>
            </View>
            <Ionicons name="heart" color='#2F80ED'style={{alignSelf:'flex-end',width:16,height:16,position:'absolute',marginTop:5,}}/>
        </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={{width:290,height:72, backgroundColor: '#2F80ED',alignItems:'center',justifyContent:'center',marginTop:182,alignSelf:'center',marginRight:30,borderRadius:24}}>
            <Text style={{color:'#fff'}}>Cari Resep</Text>
        </TouchableOpacity>
    </View>
    )
}

export default ResepScreen;