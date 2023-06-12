import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imgContainer:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'3vw',
        borderWidth:1,
        borderRadius:15,
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    line:{
        width: '100%',
        margin:10,
        height: 1,
        backgroundColor:'gray'
    },
    button:{
        marginTop:10,
        padding:5,
        borderRadius:5,
        
    },
    highlighted: {
        backgroundColor: '#d4e4ff',
    },
    card: {
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#F8F8F8',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginHorizontal: 10,
      },
      poster: {
        flex: 0.5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
      },
      info: {
        fontFamily: 'Roboto-Regular',
        padding: 20,
        flex: 0.8,
        width:400,
        height:350
      },
})

export default styles