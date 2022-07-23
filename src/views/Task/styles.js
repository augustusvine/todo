import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   },

   imageIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,

   }, 
   label: {
    color: '#707070',
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5
   },
   input: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#ee6b26',
    marginHorizontal: 10
   },

   inputarea: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderBottomWidth: 1,
    marginHorizontal: 10 ,
    borderRadius: 10,
    borderColor: '#ee6b26',
    textAlignVertical: 'top',
    padding: 10
   },

   inLine:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
   },

   inputInline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
   },
   switchLabe:{
    fontWeight: 'bold',
    color: '#ee6b26',
    textTransform: 'uppercase',
    fontSize: 16,
    paddingLeft: 10,
   },
   removeLabel:{
    fontWeight: 'bold',
    color: '#20295f',
    textTransform: 'uppercase',
    fontSize: 16,
   }

});

export default styles;