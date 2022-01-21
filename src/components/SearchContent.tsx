import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native';

interface Props{
    datas:any
}

export const SearchContent = ({datas}:Props)=> {
    

    const searchData = [
        {
            id:1,
            image:require('../images/playa.jpg'),
        },
        {
            id:2,
            image:require('../images/rios.jpg'),
        },
        {
            id:3,
            image:require('../images/puente.jpg'),
        },
        {
            id:4,
            image:require('../images/image1.jpg'),
        },
        {
            id:5,
            image:require('../images/image2.jpg'),
        },
        {
            id:6,
            image:require('../images/image5.jpg'),
        },
        {
            id:7,
            image:require('../images/playa.jpg'),
        },
        {
            id:8,
            image:require('../images/rios.jpg'),
        },
        {
            id:9,
            image:require('../images/puente.jpg'),
        },
        {
            id:10,
            image:require('../images/image1.jpg'),
        },
        {
            id:11,
            image:require('../images/image2.jpg'),
        },
        {
            id:12,
            image:require('../images/image5.jpg'),
        },
        {
            id:13,
            image:require('../images/puente.jpg'),
        },
        {
            id:14,
            image:require('../images/image1.jpg'),
        },
        {
            id:15,
            image:require('../images/image2.jpg'),
        },
        {
            id:16,
            image:require('../images/image5.jpg'),
        }
    ]
    return (
        <View>
            {
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {searchData.map( (dataImage,imgIndex)=>(
                        <TouchableOpacity
                            onPressIn={ ()=> datas(dataImage) }
                            onPressOut={ () => datas(null) } 
                            style={{paddingBottom:2}} 
                            activeOpacity={0.8}
                            key={imgIndex}
                        >
                            <Image source={ dataImage.image } style={{ width:130,height:130,marginRight:2}}/>
                        </TouchableOpacity>
                    ))}
                </View>
            }
        </View>
    )
}
