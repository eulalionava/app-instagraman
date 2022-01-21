import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/Ionicons'

export const Posts = ()=> {

    const postInfo =[
        {
            postTitle:'juan',
            postPersonImage:require('../images/puente.jpg'),
            postImage:require('../images/rios.jpg'),
            likes:765,
            isLiked:false
        },
        {
            postTitle:'Eulalio nava',
            postPersonImage:require('../images/rios.jpg'),
            postImage:require('../images/puente.jpg'),
            likes:755,
            isLiked:false
        }
    ]

    return (

        <View>
            {
                postInfo.map( (data,index)=>{
                    const [like,setLike] = useState(data.isLiked);
                    return(
                        <View style={styles.postContainer} key={index}>
                            <View style={styles.postPefil}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={ data.postPersonImage} style={{width:40,height:40,borderRadius:100,marginRight:10}}/>
                                    <Text style={{fontSize:15,fontWeight:'bold'}}>
                                        { data.postTitle }
                                    </Text>
                                </View>
                                <Icon name='ellipsis-vertical-outline' size={20}/>
                            </View>
                            <View>
                                <Image source={data.postImage} style={{width:'100%',height:400}}/>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <TouchableOpacity onPress={ ()=>setLike(!like)}>
                                        <Icon name='heart-outline' size={28} color={like ? 'red':'black'}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name='chatbubble-outline' size={25}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name='navigate-outline' size={25}/>
                                    </TouchableOpacity>
                                </View>
                                <Icon name='bookmark-outline' size={25}/>
                            </View>
                            <Text>
                                Les gusta { like ? ' y te gusta ':''}
                                { like ? data.likes + 1:data.likes } otros
                            </Text>
                            <Text style={{fontWeight:'bold'}}>Si te gusto ! Por favor dale me gusta y subcribete :)</Text>
                            <Text style={{opacity:0.4}}>Ver comentarios</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={data.postPersonImage} style={{width:25,height:25,borderRadius:100,marginRight:10}}/>
                                <TextInput placeholder='Escribre un comentario'/>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer:{
        borderBottomColor:'gray',
        borderBottomWidth:0.1,
        marginTop:15
    },
    postPefil:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:10
    }
});
