import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchIcon from "./../Icon/search.png"
import labu from "./../Image/labu2.jpg"
import kol from "./../Image/kol.jpg"
import wortel from "./../Image/carrot.jpg"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ListItem,Avatar, SearchBar } from "react-native-elements";

import {
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

import {getData} from './API/CallAPI.js';
import { SearchArticle1 } from "./ContentView";


const Search = ({navigation}) => {
    const [filterData,setFilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=> {
        fetchPosts();
        return () => {

        }
    },[])
    const fetchPosts = () => {
        const api_url = 'https://www.fruityvice.com/api/fruit/all';
        fetch(api_url)
        .then((response)=>response.json())
        .then((responseJson)=>{
            setFilterData(responseJson);
            setMasterData(responseJson);
        }).catch((error) => {
            console.error(error);
        })
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setSearch(text);
        }else {
            setFilterData(masterData);
            setSearch(text);
        }
    }
    
    const ItemView = ({item}) => {
        return (
            <Text style={styles.itemStyle}>
                {item.id} {'. '}{item.name.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return(
            <View 
                style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
            />
        )
    }

    const [selectedId, setSelectedId] = useState();


    return(
 
     <SafeAreaView style={{flex:1}}>
         <View style={{flexDirection:'column',paddingTop:15,marginHorizontal:17,position:'relative',marginLeft:30,marginTop:30}}>
             <Image source={SearchIcon} style={{width:16,height:16,position:'absolute',top:40,left:20}}/>
             <TextInput 
             placeholder="Artikel, Makanan" placeholderTextColor="grey" 
             style={{borderWidth:2,borderColor:'#E8E8E8', borderRadius:24, height:64, fontSize: 16, paddingLeft:50,color:'black',width:292}}
             value={search} underlineColorAndroid="transparent" 
             onChangeText={(text) => searchFilter(text)} />

             <FlatList 
                data={filterData}
                keyExtractor={(item,index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                stickyHeaderHiddenOnScroll={true}
                extraData={selectedId}
        
      />
         </View>
         <ScrollView scrollEnabled={true}>
         <View>   
            <Text style={{color: 'black',fontSize:22,marginTop:35,marginLeft:32}}>Yang Sedang Panas</Text>
         </View>
         
         <ScrollView horizontal={true} style={{flexDirection:'row',paddingLeft:16}}>
            <TouchableOpacity style={{marginTop:24,marginHorizontal:16}}
                onPress={()=> navigation.navigate('SearchArticle1Screen')}>
                <Image source={labu} style={{width:200, height:159,borderTopLeftRadius:16, borderTopRightRadius:16}} />
                <Text style={{color:'#000',marginTop:13,alignSelf:'center',fontSize:14}}>Rahasia Labu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:24,marginHorizontal:4}}
                onPress={()=> navigation.navigate('SearchArticle2Screen')}>
                <Image source={kol} style={{width:200, height:159,borderTopLeftRadius:16, borderTopRightRadius:16}} />
                <Text style={{color:'#000',marginTop:13,alignSelf:'center',fontSize:14}}>Rahasia Kol</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:24,marginHorizontal:16}}
                onPress={()=> navigation.navigate('SearchArticle3Screen')}>
                <Image source={wortel} style={{width:200, height:159,borderTopLeftRadius:16, borderTopRightRadius:16}} />
                <Text style={{color:'#000',marginTop:13,alignSelf:'center',fontSize:14}}>Rahasia Wortel</Text>
            </TouchableOpacity>
         </ScrollView>
         
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}
                onPress={()=> navigation.navigate('googleSearch')}>
                <Text style={{color:'#FF8473',fontSize:16}}>Artikel kurang? sini cari di google</Text> 
                <Ionicons name="search" color='#FF8473'/>
            </TouchableOpacity>

            <View style={{marginTop:74,marginLeft:40}}>
                <Text style={{color:'#000',fontSize:22}}>Trending</Text>
            </View>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}
                onPress={()=> navigation.navigate('TrendingArticle1Screen')}>
                <Text style={{color:'#FF8473',fontSize:16}}>Resep Sayuran Terkini</Text> 
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}
                onPress={()=> navigation.navigate('TrendingArticle2Screen')}>
                <Text style={{color:'#FF8473',fontSize:16}}>Fast Food VS Healthy Food</Text>
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}
                onPress={()=> navigation.navigate('TrendingArticle3Screen')}>
                <Text style={{color:'#FF8473',fontSize:16}}>Resep Ayam Rendah Kalori</Text>
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40,marginTop:32,flexDirection:'row'}}
                onPress={()=> navigation.navigate('TrendingArticle4Screen')}>
                <Text style={{color:'#FF8473',fontSize:16}}>Sup</Text>
                <Ionicons name="analytics" color='#FF8473'/>
            </TouchableOpacity>
            </ScrollView>
     </SafeAreaView>    
    ); 
 }

 export default Search;

 const styles = StyleSheet.create({
     container: {
         backgroundColor: 'white',
     },
     itemStyle: {
         padding : 15,
         color: '#000',
         backgroundColor:'#e4e6eb'
     },
 })