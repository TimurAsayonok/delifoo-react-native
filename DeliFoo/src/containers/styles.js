import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    goBackContainer: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: '#f2f2f2'
    },
    goBackTitle: {
        color: '#333',
        fontSize: 16
    },
    recipeSection: {
        marginBottom: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    recipeIdContainer: {
        height: 50,
        width: 50,
        backgroundColor: '#333333',
        justifyContent: 'center', alignItems: 'center'
    },
    recipeIdTitle: {
        color: '#FFF',
        fontSize: 16
    },
    recipeTitleContainer: {
        backgroundColor: '#993366',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    recipeTitle: {
        color: '#fff',
        fontSize: 18
    },
    recipeIngredients: {
        padding: 10,
        fontSize: 16
    },
    image: {
        height: 300
    }
});

export default Styles;