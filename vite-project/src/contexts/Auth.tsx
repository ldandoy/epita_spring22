import { createContext, FC, ReactNode, useState } from "react";

export const AuthContext = createContext({
    isAuth: false,
    updateAuth: (value: boolean) => {}
})

const AuthProvider: FC<{ children: ReactNode}> = ({ children }) => {
    const [isAuth, setAuth] = useState(false)

    const updateAuth = (value: boolean) => {
        setAuth(value)
    }
    
    return <AuthContext.Provider value={{isAuth, updateAuth}}>
        { children }
    </AuthContext.Provider>
}

export default AuthProvider