import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from '../data/Database';
import { SingleReels } from './SingleReels';

export const Reels = () => {

    const[ currenIndex,setCurrenIndex ] = useState(0);

    const handChange = (index:number)=>{
        setCurrenIndex( index );
    }

    return (
        <SwiperFlatList
            data={ videoData }
            vertical={ true }
            onChangeIndex={  ()=> handChange }
            renderItem={ ({item,index})=>(
                <SingleReels item={ item } index={index} currenIndex={ currenIndex } />
            )}
        />
    )
};
