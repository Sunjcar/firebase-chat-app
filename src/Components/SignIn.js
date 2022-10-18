import firebase from 'firebase/compat/app';
import { auth } from '../Utilities/firebasekey'
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  return (
    <>    <button className='flex gap-4 p-8 m-auto text-xl text-center text-white list-none border-none rounded-full cursor-pointer max-w bg-sky-500 hover:-translate-y-2 disabled:opacity-50'
    onClick={signInWithGoogle}>  <FcGoogle className='text-3xl'/> Sign in with Google</button>
    </>
  )
}




export default SignIn