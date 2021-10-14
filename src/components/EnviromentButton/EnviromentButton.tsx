import React from 'react';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';

import {
    Text,
    StyleSheet
} from 'react-native'

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnviromentButton({
    title,
    active = false,
    ...rest
}: EnviromentButtonProps) {
    return(
        <RectButton
            style={ styles.container }
            {...rest}
        >
            <Text style={ styles.text }>{ title }</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#00A65A',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        marginRight: 10,
    
    },
    text:{
        color: '#fff',
    }
})