import { StyleSheet } from 'react-native';

// create stylesheet
export default StyleSheet.create({
  app_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  home_title: {
    fontSize: 28,
    color: 'white'
  },

  home_title_container: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040'
  },

  loading_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },

  title_container: {
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title_item: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  body_container: {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  body_item: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center'
  },

  count_text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },

  home_body_item: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },

  question_container: {
    backgroundColor: 'white',
    padding: 40,
    shadowColor: 'black',
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#404040'
  },
  question_num_container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer_container: {
    paddingBottom: 35,
    alignItems: 'center'
  },

  truefalse_footer_container: {
    paddingBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button_container: {
    padding:10,
    height:55,
    width:200,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'orange'
  },

  true_button_container: {
    margin: 10,
    padding:10,
    height:55,
    width:150,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'green'
  },

  false_button_container: {
    margin: 10,
    padding:10,
    height:55,
    width:150,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'red'
  },

  button_text: {
    fontSize: 25,
    color: 'white'
  },

  result_title_container: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040'
  },

  result_title_item: {
    fontSize: 28,
    color: 'white'    
  },

  result_body_item: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }
});