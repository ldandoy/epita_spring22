import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

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
        <div><Link to={`/messages/${message._id}/edit`}>Editer</Link> <Link to={`/messages/${message._id}/delete`}>Supprimer</Link></div>
      </div>)}

    </div>
  )
}

export default MessagesPage