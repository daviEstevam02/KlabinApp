import * as React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export const HeaderPages = (props: any) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                
            </TouchableOpacity>
            <Text style={styles.textHeader}>
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 50,
        marginBottom:30,
    },
    textHeader:{
        fontSize: 30,
        fontWeight: '700'
    }
})