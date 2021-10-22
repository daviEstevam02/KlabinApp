import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { EnviromentButton } from '../../components/EnviromentButton/EnviromentButton'

import { Header } from '../../components/Header'


export function InspectionForm(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <Text style={ styles.title }>
                    Bobina
                </Text>

                <View>
                    <FlatList
                        data={[1,2,3,4]}
                        renderItem={({ item })=>(
                            <EnviromentButton 
                                title= 'teste'
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator = { false }
                        contentContainerStyle = { styles.enviromentList }
                    />
                </View>

                <View style={ styles.form }>
                    <View style={ styles.formFirstPart }> 
                        <View style={ styles.inputSection }>
                            <Text style={ styles.formText }> Cód. do equipamento:</Text>
                            <TextInput editable={ false } style={ styles.input } >X543s12</TextInput>
                        </View>
                        <View style={ styles.inputSection }>
                            <Text style={ styles.formText }> EPIs Necessários:</Text>
                            <TextInput editable={ false } style={ styles.input } >Coturno e Luvas</TextInput>
                        </View>
                    </View>
                    <View>
                        <View style={ styles.inputSection }>
                            <Text style={ styles.formText }> Processo de Inspeção:</Text>
                            <TextInput editable={ false } style={ styles.multilineInput } numberOfLines={6} multiline={true} >
                                1- Abra o notebook
                                2- Feche o notebook
                            </TextInput>
                        </View>
                    </View>
                    <View >
                        <View style={ styles.inputSection }>
                            <Text style={ styles.formText }> Comentário:</Text>
                            <TextInput editable={ true } style={ styles.multilineInput } numberOfLines={6} multiline={true} ></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={ styles.buttonForm }>
                        <Text style={ styles.buttonTextForm } >Ok</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems:'center',
        flexDirection:'column',
    },
    title:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '700'
    },
   
    enviromentList:{
        height: 50,
        justifyContent:'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 50,
    },
    form:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
    },
    formFirstPart:{
        flexDirection: 'row',
    },
    inputSection:{
        margin: 12,
    },
    input:{
        height: 55,
        width: 170,
        backgroundColor:'#E0E0E0',
        borderWidth: 1,
        borderColor:'#E0E0E0',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 12,
        fontSize: 17
        
    },
    formText:{
        fontSize: 16,
        fontWeight: '700'
    },
    multilineInput:{
        height: 110,
        fontSize: 17,
        marginTop: 12,
        borderColor:'#E0E0E0',
        backgroundColor:'#E0E0E0',
        width: 360,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center'
    },
    buttonForm:{
        padding: 20,
        borderRadius: 15,
        alignItems:'center',
        width:360,
        backgroundColor:"#00A65A",
        marginBottom: 40,
        marginTop: 12

    },
    buttonTextForm:{
        fontSize: 18,
        color: '#fff',
    }

})