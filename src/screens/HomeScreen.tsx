import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { Posts } from '../components/Posts'
import { Stories } from '../components/Stories'

export const HomeScreen = ()=> {
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true}/>
            <View style={{
                justifyContent:'space-between',
                flexDirection:'row',
                paddingHorizontal:15,
                alignItems:'center'
            }}>
                <Icon name='add-outline' size={ 24 }/>
                <Text style={{fontWeight:'800',fontSize:25}}>
                    Instagram
                </Text>
                <Icon name='navigate-outline' size={24} />
            </View>

            <ScrollView >
                <Stories/>
                <Posts/>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Icon name='refresh-circle-outline' size={40} style={{opacity:0.4}}/>
                </View>
            </ScrollView>
        </View>
    )
}
