import React, {useEffect} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import {deleteMessage} from '../services/message'

const MessagesDeletePage = () => {
  let {messageId} = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const deleteMsg = async () => {
      await deleteMessage(messageId)
      navigate('/messages')
    }

    deleteMsg()
  }, [])

  return (
    <div>MessagesDeletePage</div>
  )
}

export default MessagesDeletePage