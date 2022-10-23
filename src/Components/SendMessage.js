import React from 'react'
import { useState } from 'react'
import { auth, db } from '../Utilities/firebasekey'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


const SendMessage = ({ scroll, message }) => {
  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()
    if (formValue === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, photoURL} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: formValue,
        photoURL,
        uid,
        timestamp: serverTimestamp()
    })
    setFormValue('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='bottom-bar'>
    <form onSubmit={sendMessage} className='flex w-screen rounded-full'  >
      <input
        className='bottom-bar-input'
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        type='text'
        placeholder='Message'
      />
      <button  type='submit' disabled={!formValue}>
        Send
      </button>
    </form>
    </div>

  )
}

export default SendMessage
