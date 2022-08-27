import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
}
from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Spacer from '../components/Spacer';

interface CustomInputProps {
    placeholder: string,
    icon: string
}

const CustomInput : React.FC<CustomInputProps> = ({placeholder = 'Enter', icon}) => {
    return (
        <View style={styles.container}>
           <Icon name={icon} size={20} />
           <Spacer width={20} />
           <TextInput style={styles.input} placeholder={placeholder} /> 
        </View>
    );
}

const styles  = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        paddingLeft: 15,
    },
    input: {
        width: '100%',
        height: '100%',
    }
});

export default CustomInput;
