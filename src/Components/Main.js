import React, { useEffect, useRef, useState } from 'react';
import { db } from '../Utilities/firebasekey';

import Messages from './Messages';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import SendMessage from './SendMessage';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();


  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className='flex flex-col w-auto h-5/6 '>
        {messages &&
          messages.map(message => (
            <Messages key={message.id} message={message}/>
          ))}
        <span ref={scroll}></span>
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Main