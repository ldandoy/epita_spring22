import React, {useEffect, useState} from 'react'

import {getMessages} from '../services/message'
import { Message } from '../types/message'
import CreateMessage from '../components/CreateMessage'

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const getData = async () => {
      setMessages(await getMessages())
    }

    getData()
  }, [])

  return (
    <div id="jokes">
      <CreateMessage />

      { messages.map(message => <div className='joke' key={message._id}>
        {message.name}
        { message.user && <div>{message.user.username}</div> }
      </div>)}

    </div>
  )
}

export default MessagesPage