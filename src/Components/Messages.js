import React from 'react'
import { auth, db } from '../Utilities/firebasekey';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { deleteDoc, doc } from 'firebase/firestore';

const Messages = ({ message }) => {
  const messageClass = message.uid === auth.currentUser.uid ? 'sent' : 'received';

  const handleDelete = async () => {
    const docRef = doc(db,'messages', message.id)
   await deleteDoc(docRef)
}
  return (
    <>
      <div className={`message ${messageClass}  `}>
        <img src={message.photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt={'avatar'} />
        <div className='relative'>
          <p>{message.text}</p>
          <button className='absolute right-3 bottom-3' onClick={() => handleDelete()}> <RiDeleteBin6Line/></button>
        </div>
      </div>
    </>
  )
}

export default Messages
