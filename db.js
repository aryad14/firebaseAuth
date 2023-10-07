import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDmD_9f6bppW56VGu1rAE4gHFbRoHTpSUI",
    authDomain: "street-light-monitoring-93f01.firebaseapp.com",
    databaseURL: "https://street-light-monitoring-93f01-default-rtdb.firebaseio.com",
    projectId: "street-light-monitoring-93f01",
    storageBucket: "street-light-monitoring-93f01.appspot.com",
    messagingSenderId: "547949594310",
    appId: "1:547949594310:web:ab3deef7e01da11f2af9c7",
    measurementId: "G-G4738JXNST"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function writeData(uname, email, password) {
    try {
        await set(ref(db, 'users/' + uname), {
            mail: email,
            pass: password
        });
    } catch (e){
        console.log(e)
    }
}

export default writeData;