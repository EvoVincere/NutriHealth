import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity
} from 'react-native';
import CallAPI from "./CallAPI";


const HomeScreen = ({route,navigation}) => {
   return(

    <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-start',paddingTop:50,backgroundColor:'#FFF'}}>
        <View>
            <Text style={{color: '#3725A4',fontSize:25}}>Hello Daffa,</Text>
        </View>
        <View>
            <Text style={{color: '#7B7B7B',fontSize:18}}>Temukan Makanan Sehat Mu.</Text>
        </View>
        <View style={{marginTop:32}}>
            <TouchableOpacity style={{backgroundColor:'#2F80ED', borderRadius: 32, width: 332, height:90, justifyContent:'center'}}
                onPress={()=> {}} >
                <Text style={{color: '#FFF',fontSize:10,marginLeft:28}}>Artikel</Text>
                <Text style={{color: '#000',fontSize:17,marginLeft:28,fontWeight:'700'}}>Fast Food Untuk Makanan Pokok?</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:41}}>
            <Text style={{color:'#000',fontSize:22,marginRight:195}}>Topik Pilihan</Text>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:'#FFF2F0',marginTop:27,width:358,height:41,borderRadius:32,justifyContent:'center'}}>
                <Text style={{color:'#4D0A00',marginLeft:19}}>Menghilangkan lemak</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:'#EFF7EE',marginTop:27,width:358,height:41,borderRadius:32,justifyContent:'center'}}>
                <Text style={{color:'#1C3418',marginLeft:19}}>Rujak pedas yang menyegarkan </Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:'#EEF0F7',marginTop:27,width:358,height:41,borderRadius:32,justifyContent:'center'}}>
                <Text style={{color:'#1C3418',marginLeft:19}}>Sehat itu sulit</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:32}}>
            <TouchableOpacity style={{backgroundColor:'#2F80ED', borderRadius: 32, width: 332, height:90, justifyContent:'center'}}>
                <Text style={{color: '#FFF',fontSize:10,marginLeft:28}}>Tips Kesehatan</Text>
                <Text style={{color: '#000',fontSize:17,marginLeft:28,fontWeight:'700'}}>Susah Naikin Berat Badan?</Text>
            </TouchableOpacity>
        </View>
    </View>
   ); 
}

export default HomeScreen;