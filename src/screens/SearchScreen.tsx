import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SearchBox } from '../components/SearchBox'
import { SearchContent } from '../components/SearchContent'

export const SearchScreen = ()=> {

    const windowW = Dimensions.get('window').width;
    const windowH = Dimensions.get('window').height;
    console.log(windowH);

    const [image,setImage ] = useState(null);

    const getData = (data:any)=>{
        setImage(data)
        
    }

    return (
        <View style={{flex:1,backgroundColor:'white',position:'relative'}}>
            <ScrollView>
                <SearchBox/>
                <SearchContent datas={ getData }/>
                {
                    image ?(
                        <View style={{position:'absolute',zIndex:1,width:'100%',height:'100%',backgroundColor:'rgba(52,52,52,0.8)',justifyContent:'center',alignItems:'center'}}>
                            <StatusBar backgroundColor='#525252' barStyle='dark-content'/>
                            <View style={{
                                    position:'absolute',
                                    zIndex:1,
                                    backgroundColor:'white',
                                    width:300,
                                    height:450,
                                    borderRadius:16,
                                    elevation:50
                                }}
                            >
                                <View style={{flexDirection:'row',alignItems:'center',marginRight:10,padding:5}}>
                                    <Image source={image.image} style={{ width:40,height:40,borderRadius:100}}/>
                                    <Text>Anonimo</Text>
                                </View>
                                <View>
                                    <Image source={ image.image} style={{width:'100%',resizeMode:'cover'}} />
                                </View>
                            </View>
                        </View>
                    ):null
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{}
});
