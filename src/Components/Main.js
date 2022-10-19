import React, { useRef, useState } from 'react';
import { auth, firestore } from '../Utilities/firebasekey';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import Messages from './Messages';

const Main = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className='flex flex-col w-auto h-5/6 '>
      {messages && messages.map(msg => <Messages key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
    <div className='bottom-bar'>
      <form onSubmit={sendMessage}  className='flex w-screen rounded-full'>
          <input className='bottom-bar-input' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder=" Message" />
          <button type="submit" disabled={!formValue}>Send</button> 
      </form>
    </div>
    </>
  )
}

export default Main