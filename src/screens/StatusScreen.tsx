import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet, StatusBar, Image,TextInput, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParam } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParam,'Status'>{};

export const StatusScreen=({route,navigation}:Props)=> {
    const { name,image } = route.params;
    const [progress,setProgress ] = useState( new Animated.Value(0));

    const progresAnimated = progress.interpolate({
        inputRange:[0,5],
        outputRange:['0%','100%']
    });

    useEffect( ()=>{
        let timer = setTimeout(()=>{
            navigation.goBack();
        },5000);

        Animated.timing(progress,{
            toValue:5,
            duration:5000,
            useNativeDriver:false
        }).start();

        return () => clearTimeout(timer);
    });

    return (
        <View style={styles.contentStatus}>
            <StatusBar backgroundColor='black' barStyle='light-content'/>
            <View style={styles.contentProgress}>
                <Animated.View style={{...styles.progres,width:progresAnimated}}>

                </Animated.View>
            </View>
            <View style={{padding:15,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{borderRadius:100,width:30,height:30,marginRight:10}}>
                        <Image source={ image } style={styles.imag}/>
                    </View>
                    <Text style={{color:'white'}}>{ name }</Text>
                </View>
                <TouchableOpacity onPress={ ()=>navigation.goBack()}>
                    <Icon name='close-circle-outline' size={25} color='white'/>
                </TouchableOpacity>
            </View>
            <Image source={ image } style={{ height:600,width:'100%'}}/>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:10}}>
                <TextInput placeholder='Enviar mensaje' placeholderTextColor='white' style={styles.input}/>
                <TouchableOpacity
                    onPress={ ()=>navigation.goBack() }
                >
                    <Icon name='navigate-outline' size={30} color='white'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentStatus:{
        backgroundColor:'black',
        flex:1
    },
    contentProgress:{
        height:3,
        width:'100%',
        borderWidth:1,
        backgroundColor:'gray',
        marginTop:10
    },
    progres:{
        height:'100%',
        backgroundColor:'white',
    },
    imag:{
        borderRadius:100,
        backgroundColor:'orange',
        resizeMode:'cover',
        width:'100%',
        height:'100%'
    },
    input:{
        borderColor:'white',
        width:'85%',
        height:50,
        paddingLeft:20,
        borderWidth:1,
        fontSize:20,
        borderRadius:25,
        color:'white'
    }
});
