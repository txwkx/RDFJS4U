import firebase from 'firebase';
import _ from 'lodash';

export const GET_TABLE_TABS = 'GET_TABLE_TABS';
export const GET_TABLE_HEADER = 'GET_TABLE_HEADER';
export const GET_FEATURE_SETS = 'GET_FEATURE_SETS';

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

export function getTableHeaderList() {
  return (dispatch) => {
    rootRef.child('theaderList').once('value', snap => {
      dispatch({
        type: GET_TABLE_HEADER,
        payload: snap.val()
      });
    });
  };
}

export function getFeatureSets(){
  return (dispatch) => {
    rootRef.child('featuresSets').once('value', snap => {
      dispatch({
        type: GET_FEATURE_SETS,
        payload: snap.val()
      });
    });
  };
}
