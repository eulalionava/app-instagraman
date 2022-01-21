import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/Ionicons'

export const Stories =()=> {
    const navigation  = useNavigation();

    const storyInfo=[
        {
            id:1,
            name:'Your story',
            image:require('../images/playa.jpg')
        },
        {
            id:0,
            name:'Eulalio',
            image:require('../images/rios.jpg')
        },
        {
            id:0,
            name:'juan',
            image:require('../images/puente.jpg')
        },
        {
            id:0,
            name:'jorge',
            image:require('../images/rios.jpg')
        },
        {
            id:0,
            name:'galax',
            image:require('../images/rios.jpg')
        },
        {
            id:0,
            name:'gina',
            image:require('../images/rios.jpg')
        },
        {
            id:0,
            name:'Eulalio',
            image:require('../images/rios.jpg')
        }
    ]

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                storyInfo.map( (data,index)=>(
                    <TouchableOpacity 
                        key={ index }
                        onPress={ ()=>navigation.dispatch(CommonActions.navigate('Status',{
                            name:data.name,
                            image:data.image
                        })) }
                    >
                        <View style={{flexDirection:'row',paddingHorizontal:8,position:'relative'}}>
                            { 
                                data.id === 1 ? 
                                (
                                    <View style={{position:'absolute',bottom:0,left:50,zIndex:1}}>
                                        <Icon 
                                            name='add-outline' 
                                            size={ 24 } 
                                            style={{fontSize:20,color:'white',backgroundColor:'#58ACFA',borderRadius:100}}
                                        />
                                    </View>
                                ):null
                            }
                            <View style={styles.imageContainer}>
                                <Image source={ data.image } style={styles.imageStory}/>
                            </View>
                        </View>
                        <Text style={{fontSize:14,marginLeft:15,opacity:data.id == 0 ? 1:0.5}}>
                            { data.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:68,
        height:68,
        backgroundColor:'white',
        borderWidth:1.6,
        borderRadius:100,
        borderColor:'#c13584',
        justifyContent:'center',
        alignItems:'center'
    },
    imageStory:{
        resizeMode:'cover',
        width:'90%',
        height:'90%',
        borderRadius:100,
        backgroundColor:'orange'
    }
});