import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native'

import { Header } from '../../components/Header'

export function InspectionForm(){
    return(
        <View style={styles.container}>
            <Header />
            <Text style={ styles.title }>
                Bobina
            </Text>

            <View>
                
            </View>

            <View style={ styles.form }>
                <View >
                    <Text> Cód. do equipamento:</Text>
                    <TextInput style={ styles.input } placeholder='Digite o código do equipamento'></TextInput>
                </View>
                <View>
                    <Text> EPIs Necessários:</Text>
                    <TextInput  style={ styles.input } placeholder='Digite o código do equipamento'></TextInput>
                </View>
                <View>
                    <Text> Processo de Inspeção:</Text>
                    <TextInput   style={ styles.input } numberOfLines={6} placeholder='Digite o código do equipamento'></TextInput>
                </View>
            </View>
        </View>        
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems:'center',
        flexDirection:'column',
        flex:1        
    },
    title:{

    },
    form:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
    },
    input:{
        height: 40,
        width: '100%',
        borderWidth: 25,
        borderColor:'#E0E0E0',
        borderRadius: 15
    }

})