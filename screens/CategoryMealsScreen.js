import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoryMealsScreen = () => {
    rreturn (
        <View style={styles.screen}>
            <Text>The categories Meals screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen
