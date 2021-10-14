import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { Header } from '../../components/Header'
import { Actions } from 'react-native-router-flux'

export function InitialPage(){


    return(
        <View style={ styles.container }>
            <ScrollView>
                <View style={ styles.logo }>
                    <Header/>
                </View>
            <View style={ styles.firstPageHeader }>
                <Text style={ styles.wellcomeMessage }>
                    Olá,{'\n'}Davi
                </Text>
                <Image 
                    source={ require('../../assets/fotoDePerfil.jpeg') }
                    style={ styles.profileImage }
                />
            </View>

            <View style={ styles.buttons }>
                <TouchableOpacity style={ styles.button } onPress = {() => { Actions.InspectionPage() }} >
                    <Text style={ styles.buttonText }>Inspeção</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress = {() => { Actions.ManutencaoPage() }} >
                    <Text style={ styles.buttonText }>Manutenção</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }>Relatórios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }> Realidade Aumentada</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
     width: '100%',
      alignItems: 'center',
      flex:1,
      flexDirection: 'column',
    },
    logo:{
        marginTop: 30,
        marginRight: 50
    },
    firstPageHeader:{
        width: '70%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex: 1,
        marginLeft: 40
    },
    wellcomeMessage:{
        fontSize: 40
    },
    profileImage:{
        width: 70,
        height: 70,
        borderRadius: 50
    },
    buttons:{
        flexDirection: 'column',
        marginTop: 100,
        alignItems:'center',
        width: '85%'

    },
    button:{
        padding: 25,
        borderRadius: 25,
        alignItems:'center',
        width:375,
        backgroundColor:"#00A65A",
        marginBottom: 40,
    },
    buttonText:{
        color: '#fff',
        fontSize: 20
    }
})

