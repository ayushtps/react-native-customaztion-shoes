import { StyleSheet } from "react-native";
import { fonts } from "../../../constants/fonts";

export const styling=(theme) => StyleSheet.create({
    wishListContainer: {
      flex:1,
      backgroundColor: theme.primaryColor,
      padding: 20,
      height:'81%'
    },
    itemContainer: {
      marginHorizontal: 10,
      backgroundColor: theme.secondColor,
      borderRadius: 16,
      width: 156,
      overflow: 'hidden',
    },
    emptyView:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:150
    },
    imgContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    productName: {
      fontFamily: fonts.medium,
    },
    addCartBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.buttonColor,
      borderTopLeftRadius: 20,
      height: 40,
      width: 39,
    },
    bottomCart: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 0,
      margin: 0,
    },
    priceText: {
      margin: 12,
      fontFamily: fonts.medium,
    },
    txtContainer: {
      marginLeft: 12,
    },
    wishListContainer1: {
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 5,
      backgroundColor: theme.primaryColor,
      borderRadius: 40,
      zIndex: 9999,
    },
  });