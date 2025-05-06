import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCf74czuRnlYYDAfKyKYE8vmfvICD75vvY",
    authDomain: "netflix-clone-4dbab.firebaseapp.com",
    projectId: "netflix-clone-4dbab",
    storageBucket: "netflix-clone-4dbab.firebasestorage.app",
    messagingSenderId: "538558162415",
    appId: "1:538558162415:web:f4332a5dd4b13a5adc021a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const reponse = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = reponse.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};


const logOut = ()=>{
    signOut(auth)
}

export {auth , db, login,signup,logOut}