import React from "react";
import { View,Text } from "react-native";
import Favorite from "./Favorite";

const TopNavigation = ({index, setIndex}) => {
    return(
        <View style={{}}>
            <Favorite />
        </View>
    )
}

export default TopNavigation;