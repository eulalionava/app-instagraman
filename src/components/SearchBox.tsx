import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/Ionicons'

export const SearchBox = ()=> {
    return (
        <View style={{position:'relative',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:10}}>
            <Icon name='search-outline' size={20} style={styles.icon}/>
            <TextInput 
                placeholder='Buscar'  
                placeholderTextColor='#909090'
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        position:'absolute',
        left:20,
        zIndex:1,
    },
    input:{
        width:'94%',
        backgroundColor:'#EBEBEB',
        borderRadius:20,
        justifyContent:'center',
        fontSize:15,
        paddingLeft:40
    }
});
