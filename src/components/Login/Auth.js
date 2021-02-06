import firebase from 'firebase/app';
import 'firebase/auth';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

export const Auth = () => {
    //Login in user information
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    //Redirect methods
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    //Sign up
    const signUp = (email, password, name) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        const { displayName, email } = res.user;
                        const signInUser = { name: displayName, email: email }
                        setLoggedInUser(signInUser);
                        getToken()
                    })
            })
    }


    //Sign In
    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                const { displayName, email } = res.user;
                const signInUser = { name: displayName, email: email }
                setLoggedInUser(signInUser);
                getToken();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    //Google sign in
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const {displayName, email, photoURL} = res.user;
                const signInUser = { name: displayName, email: email, photo:photoURL }
                hanldeResponse(signInUser, true);
                getToken()
            }).catch((error) => {
                var errorMessage = error.message;
            });
    }

    //get token
    const getToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            localStorage.setItem('token', idToken)
        }).catch(function (error) {
        });
    }

    //hanlde response
    const hanldeResponse = (res, redirect) => {
        setLoggedInUser(res)
        if(redirect){
            history.replace(from)
        }
    }

    return {
        loggedInUser,
        signUp,
        signIn,
        googleSignIn
    }
}