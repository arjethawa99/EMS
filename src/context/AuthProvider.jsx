import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setuserData] = useState(null)
    
    useEffect(() => {
        setLocalStorage();
        const { employeeData, AdminData } = getLocalStorage();
        setuserData({ employeeData,AdminData,setuserData})
        // console.log(employeeData);
    }, [])


    return (
        <AuthContext.Provider value={userData}>
            <div>{children}</div>
        </AuthContext.Provider>

    )
}

export default AuthProvider