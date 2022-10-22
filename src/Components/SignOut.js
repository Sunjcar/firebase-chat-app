import React from 'react'
import { auth } from '../Utilities/firebasekey'
import {BiPowerOff} from 'react-icons/bi'

const SignOut = () => {
    return auth.currentUser && (
        <button className="p-2 text-3xl hover:text-red-600"
            onClick={() => auth.signOut(auth)}><BiPowerOff/></button>
    )
}

export default SignOut
