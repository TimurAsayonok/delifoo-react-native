import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    scene: {
        flex: 1,
        marginTop: 20
    },
    searchSection: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#f2f2f2'
    },
    searchSectionTextInput: {
        flex: 0.7,
        paddingLeft: 10,
    },
    searchSectionButton: {
        flex: 0.3,
        backgroundColor: '#4d9900',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchSectionButtonText: {
        color: '#fff',
        fontSize: 16
    },
    scrollSection: {
        flex: 1,
    },
    recipeMain: {
        flexDirection: 'row'
    },
    recipeContainer: {
        height: 50,
        width: 50,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recipeId: {
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
    image: {
        height: 200,
    },
    searchText: {
        fontSize: 16,
        paddingLeft: 10
    }
});

export default Styles;