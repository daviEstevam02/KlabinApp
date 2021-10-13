import React from 'react'
import {
    Text,
    ScrollView,
    View,
    StyleSheet
} from 'react-native'

export function PaginaDeEquipamento() {
    return(
        <View style = { styles.container }>
            <ScrollView>
                <Text>
                    Hello World
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
