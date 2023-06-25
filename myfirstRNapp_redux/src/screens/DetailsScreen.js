import React, { useState } from "react";
import { View, Text, Button, Alert, TextInput, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default DetailsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const { GeneralResponse } = useSelector(state => state)
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome Details Screen</Text>
            <Text>Dear {GeneralResponse.name}, your age is {GeneralResponse.age}</Text>
            <Button title="Go Back!" onPress={navigation.goBack} />
        </View>
    )
}