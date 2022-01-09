import React,{useState,useContext} from "react";
import {
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
    Image,
    useWindowDimensions,
} from 'react-native';
import { TabView, SceneMap } from "react-native-tab-view";


import MakananScreen from "./MakananScreen";
import ResepScreen from "./ResepScreen";


const Favorite = () => {
    const layout = useWindowDimensions();
    const renderScene = SceneMap({
        first: MakananScreen,
        second: ResepScreen,
      });
    const [index, setIndex] = useState(1);
    const [routes] = useState([
        {key: 'first', title: 'Makanan'},
        {key: 'second', title: 'Resep'},
        
    ]);

    return(
     <View style={{flex:1}}>
         <View>
            <Text style={{color: 'black',fontSize:22,fontWeight:'bold',marginTop:27,marginLeft:67}}>Favorit</Text>
         </View>
        
         <TabView 
            navigationState={{index,routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            intialLayout={{width: layout.width}}
            style={{marginTop:26,borderRadius: 16,}}
            />
          
        
     </View>
    ); 
 } 
 

 export default Favorite;