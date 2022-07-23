import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
        card: {
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            width: '90%',
            marginVertical: 2,
            height: 80,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        
        },

        cardLeft: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        typeActive: {
            width: 47,
            height: 47
        },
        cardTitle: {
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 16
        },
        cardRight: {
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        },

        cardDate: {
            color: '#ee6b26',
            fontWeight: 'bold',
            fontSize: 16
        },

        cardTime: {
            color: '#707070'
        },
        cardDone: {
            opacity: 0.5 ,
        }


})

export default styles;