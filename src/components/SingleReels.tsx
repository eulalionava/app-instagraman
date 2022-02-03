import React, { useRef, useState } from 'react';
import { Dimensions,TouchableOpacity, View } from 'react-native';
import { videoIn } from '../interfaces/interface';

interface Props{
    item:videoIn,
    index:number,
    currenIndex:number
}

export const SingleReels = ({item,index,currenIndex}:Props) => {
    const { height:alto,width:ancho } = Dimensions.get('window');

    const videoRef = useRef(null);
    const [ mute,setMute ] = useState(false);

    const onBuffer = (buffer:any) =>{

    }

    const onError = (error:any) =>{

    }

    return (
        <View
            style={{
                width:ancho,
                height:alto
            }}
        >
            <TouchableOpacity
                onPress={ ()=> setMute(!mute) }
            >
                

            </TouchableOpacity>
        </View>
    )
};
