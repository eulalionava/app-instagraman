import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Reels } from '../components/Reels';


export const ReelsScreen = ()=> {
    const { height:alto,width:ancho} = Dimensions.get('window');

    return (
        <SafeAreaView
            style={{
                width:ancho,
                height:alto,
                backgroundColor:'black',
                position:'relative'
            }}
        >
            <View style={ styles.reels}>
                <Text 
                    style={{
                        color:'white',
                        fontSize:20

                    }}
                >
                    Reels
                </Text>
                <Icon name='camera-outline' size={ 30 } color='white'/>
            </View>

            <Reels/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    reels:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        marginHorizontal:10,
        marginVertical:10,
        top:0,
        left:0,
        right:0
    }
});
