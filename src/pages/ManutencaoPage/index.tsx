import React, { useState } from 'react';

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native'

import { Header } from '../../components/Header'
import { HeaderPages } from '../../components/HeaderPages'

const wait = (timeout:any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export function ManutencaoPage() {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
     wait(2000).then(() => setRefreshing(false));
    }, []);

    const onPress = () => {
    }

    return(
        <ScrollView 
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <ActivityIndicator size= "small" color="#00A65A" animating />
            <Header />
            <View style= { styles.headerInspection }>
              <HeaderPages name="Manutenção"/>  
            </View>
            {/* Search bar here */}

        <View style={styles.content}>
            <TouchableOpacity onPress={ onPress } style={styles.cards}>
                <View style= { styles.cardHeader }>
                    <Text style= { styles.headerTextCard }>Equipamento:</Text>
                    <View style= { styles.status }>
                        <Text style= { styles.textStatus } >Realizado</Text>
                    </View>
                </View>
                <View style= { styles.cardContent }>
                    <Text style= { styles.textContent }>Bobina</Text>
                </View>
                <View style= { styles.cardFotter }>
                    <View style= { styles.statusFotter }> 
                        <Text style= { styles.textStatus }>Mancal</Text>
                    </View >
                    <View style= { styles.statusFotter }>
                        <Text style= { styles.textStatus }>Mancal + Voluta</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ onPress } style={styles.cards}>
                <View style= { styles.cardHeader }>
                    <Text style= { styles.headerTextCard }>Equipamento:</Text>
                    <View style= { styles.status }>
                        <Text style= { styles.textStatus } >Realizado</Text>
                    </View>
                </View>
                <View style= { styles.cardContent }>
                    <Text style= { styles.textContent }>Bobina</Text>
                </View>
                <View style= { styles.cardFotter }>
                    <View style= { styles.statusFotter }> 
                        <Text style= { styles.textStatus }>Mancal</Text>
                    </View >
                    <View style= { styles.statusFotter }>
                        <Text style= { styles.textStatus }>Mancal + Voluta</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ onPress } style={styles.cards}>
                <View style= { styles.cardHeader }>
                    <Text style= { styles.headerTextCard }>Equipamento:</Text>
                    <View style= { styles.status }>
                        <Text style= { styles.textStatus } >Realizado</Text>
                    </View>
                </View>
                <View style= { styles.cardContent }>
                    <Text style= { styles.textContent }>Bobina</Text>
                </View>
                <View style= { styles.cardFotter }>
                    <View style= { styles.statusFotter }> 
                        <Text style= { styles.textStatus }>Mancal</Text>
                    </View >
                    <View style= { styles.statusFotter }>
                        <Text style= { styles.textStatus }>Mancal + Voluta</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ onPress } style={styles.cards}>
                <View style= { styles.cardHeader }>
                    <Text style= { styles.headerTextCard }>Equipamento:</Text>
                    <View style= { styles.status }>
                        <Text style= { styles.textStatus } >Realizado</Text>
                    </View>
                </View>
                <View style= { styles.cardContent }>
                    <Text style= { styles.textContent }>Bobina</Text>
                </View>
                <View style= { styles.cardFotter }>
                    <View style= { styles.statusFotter }> 
                        <Text style= { styles.textStatus }>Mancal</Text>
                    </View >
                    <View style= { styles.statusFotter }>
                        <Text style= { styles.textStatus }>Mancal + Voluta</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        minWidth: 300,
        flexDirection: 'column',
    },
    headerInspection:{
        
    },

    content:{
        width: '100%',
        alignItems:'center',
        minWidth: 300,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    
    cards:{
        padding: 30,
        flexDirection: 'column',
        backgroundColor:'#E9E9E9',
        borderRadius: 40,
        width: 370,
        marginBottom: 30
    },
    cardHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerTextCard:{
        fontWeight: '700'
    },
    status:{
        backgroundColor: '#00A65A',
        padding: 6,
        borderRadius: 25,
        width: 80,
        alignItems: 'center'
    },
    textStatus:{
        color: '#fff',
    },
    cardContent:{
        alignItems:'center',
    },
    textContent:{
        fontSize: 30,
        fontWeight:'700'
    },
    cardFotter:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 30,
        
    },
    statusFotter:{
        backgroundColor: '#3992FA',
        padding: 6,
        borderRadius: 25,
        width: '40%',
        alignItems: 'center',
    }

})