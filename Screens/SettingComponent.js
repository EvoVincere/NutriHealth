import React from "react";
import {View,Text, TouchableOpacity} from 'react-native';
import Container from "./Container";

const SettingsComponent = ({settingsOptions}) => {
    return(
        <Container>
            {settingsOptions.map(({title,subTitle,onPress},index)=>
            <TouchableOpacity key={title}>
                <View>
                    <Text>{title}</Text>
                </View>
            </TouchableOpacity>)}
        </Container>
    );
}

export default SettingsComponent;