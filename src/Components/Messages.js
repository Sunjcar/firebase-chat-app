import React from 'react'
import { auth, db } from '../Utilities/firebasekey';
import { RiDeleteBin6Line } from 'react-icons/ri'
import {deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';

const Messages = ({ message }) => {
  const messageClass = message.uid === auth.currentUser.uid ? 'sent' : 'received';

  const handleDelete = async () => {
    const docRef = doc(db, 'messages', message.id)
    await deleteDoc(docRef)
  }

  return (
    <>
      <div className={`message ${messageClass}  `}>
        <img src={message.photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt={'avatar'} />
        <div className='flex gap-4'>
          <p>
            {message.text}
          </p>
          <button onClick={() => handleDelete()}>
            <RiDeleteBin6Line className='text-xl text-indigo-500 hover:rounded-xl hover:bg-red-600' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Messages
