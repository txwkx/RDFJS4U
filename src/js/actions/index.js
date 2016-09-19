import firebase from 'firebase';
import _ from 'lodash';

export const GET_TABLE_TABS = 'GET_TABLE_TABS';
export const GET_TABLE_HEADER = 'GET_TABLE_HEADER';
export const GET_TABLE_CONTENT = 'GET_TABLE_CONTENT';
export const GET_FEATURE_SETS = 'GET_FEATURE_SETS';
export const QUERY_TABLE = 'QUERY_TABLE';

const config = {
    apiKey: 'AIzaSyDm7TPKpzOPvcAgqwA4X5v0iTWN3wmam6o',
    authDomain: 'rdfjsapp.firebaseapp.com',
    databaseURL: 'https://rdfjsapp.firebaseio.com',
    storageBucket: 'rdfjsapp.appspot.com'
  };
firebase.initializeApp(config);

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

export function getTableHeaderList(index) {
  return (dispatch) => {
    rootRef.child('theaderList').child(index).once('value', snap => {
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

export function getTableContent(index){
  return (dispatch) => {
    rootRef.child(`tcontent/${index}`).on('value', snap => {
      dispatch({
        type: GET_TABLE_CONTENT,
        payload: snap.val()
      });
    });
  };
}

export function queryTable(index, query){
  return (dispatch) => {
    rootRef.child(`tcontent/${index}`).on('value', snap => {
      const queried_libs = snap.val();

      //TODO reduce the amount of iterations
      Object.keys(query).map(key => {
        const value = query[key];
        queried_libs.map(lib => {
          lib[key] === value ? lib['passed'] = lib['passed'] && true : lib['passed'] = false;
        });
      });

      const filtered_libs = queried_libs.filter(lib => lib['passed'] === true);

      dispatch({
        type: QUERY_TABLE,
        payload: filtered_libs
      });
    });
  };
}
