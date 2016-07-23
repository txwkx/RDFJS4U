import firebase from 'firebase';
import _ from 'lodash';

export const GET_TABLE_TABS = 'GET_TABLE_TABS';

const config = {
    apiKey: 'AIzaSyDm7TPKpzOPvcAgqwA4X5v0iTWN3wmam6o',
    authDomain: 'rdfjsapp.firebaseapp.com',
    databaseURL: 'https://rdfjsapp.firebaseio.com',
    storageBucket: '',
  };
const firebaseApp = firebase.initializeApp(config);
const rootRef = firebase.database().ref();


export function getTableTabs() {
  return dispatch => {
    rootRef.child('tabletabs').once('value', snap => {
      dispatch({
        type: GET_TABLE_TABS,
        payload: snap.val()
      });
    });
  };
}
