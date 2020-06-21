import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  slideView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  backBtnContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnIcon: {
    marginRight: 5,
    marginTop: 2,
  },
  backBtnText: {
    fontFamily: 'Raleway-SemiBoldItalic',
    fontSize: 18,
    color: '#72c4ff',
    marginVertical: 20,
  },
  titleStyle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 27,
    marginTop: 100,
    alignSelf: 'center',
  },
  textStyle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    width: '90%',
    alignSelf: 'center',
  },
  pageIcon: {
    marginVertical: 50,
    marginTop: 70,
    alignSelf: 'center',
  },
  continueBtnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtnText: {
    fontFamily: 'Raleway-SemiBoldItalic',
    fontSize: 18,
    color: '#72c4ff',
    marginVertical: 20,
  },
  continueBtnArrow: {
    marginLeft: 10,
    marginTop: 2,
  },
  swiperDot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  swiperActiveDot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  descriptionContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
    marginHorizontal: 15,
  },
  descriptionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    alignSelf: 'center',
    width: '100%',
  },
  descriptionItemIcon: {
    width: 60,
    height: 48,
    marginVertical: 0,
    flex: 1,
  },
  descriptionItemText: {
    flex: 4,
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  connectBtn: {
    marginTop: 40,
    alignSelf: 'center',
  },
  blackText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    color: 'black',
  },
  skyText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    color: '#72c4ff',
  },
  checkBoxDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxDescriptionTextContainer: {
    marginVertical: 10,
    marginLeft: -30,
    flexDirection: 'row',
  },
  page4InputSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default styles;
