import React, { useEffect } from "react";
import { View,Text } from "react-native";

const CallAPI = () => {
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))

const DataforAPI = {
    name: "morpheus",
    job: "leader"
}        

console.log('data object: ',DataforAPI)
console.log('data string: ',JSON.stringify(DataforAPI));
    fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataforAPI)
    })    
    .then(response => response.json())
    .then(json => {
        console.log('post response: ',json)
    })
    },[]);
    return (
        <View>
            <Text>Call API</Text>
        </View>
    )
}

export default CallAPI;