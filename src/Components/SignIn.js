import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import { auth } from '../Utilities/firebasekey'
import GoogleButton from 'react-google-button'

const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(auth, provider)
    }
  return (
    <>    <GoogleButton className='flex justify-center'
    onClick={signInWithGoogle}/>
    </>
  )
}




export default SignIn