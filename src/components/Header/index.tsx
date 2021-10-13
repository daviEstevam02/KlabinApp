import React from 'react'
import{ View, Image, StyleSheet } from 'react-native'

export function Header() {
    return(
        <View style={ styles.container }>
            <Image
                style = {styles.logoImage}
                source={ require('../../assets/defaultLogo.png') }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginRight: 50        
    },
    logoImage:{
        width: 150,
        height: 150,
        marginTop:40,
    }
})