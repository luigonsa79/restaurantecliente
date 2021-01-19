import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/storage';

// base datos
import 'firebase/firestore';

class Firebase {
    constructor() {

        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.db = app.firestore();
        this.storage = app.storage();

    }
}

const firebase = new Firebase();
export default firebase;