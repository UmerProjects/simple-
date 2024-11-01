import React, { createContext, useContext, useState } from "react";


// create a context


const UserContext = createContext();


// create a provider Component

export default function UserProvider ({ children }){
    const [user, setUser] = useState({ name: 'ali', age: 25})


    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}


// Now consume data with usecontext hook


export  function UserProfile (){
    const user = useContext(UserContext);

    return(
        <div>
            <h1>Name: {user.name}</h1>
            <p>Age: {user.age}</p>
        </div>
    )
}