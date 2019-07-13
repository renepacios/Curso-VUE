import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp=firebase.initializeApp(settings);

export const db = firebase.database()
export default firebaseApp