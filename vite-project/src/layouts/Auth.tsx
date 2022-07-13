import React, {FC, ReactNode} from 'react'

const Auth: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div style={{ 
        width: '30%', 
        margin: 'auto', 
        padding: '20px', 
        border: "1px solid silver",
        borderRadius: "20px"
    }}>
        { children }
    </div>
  )
}

export default Auth