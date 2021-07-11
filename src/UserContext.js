import React from 'react'


const UserContext = React.createContext({
    user: {isLoggedIn: false, username: ""},
    credentials: [],
    tasks: [],
    setUser: (a: any) => {
    },
    addUser: (a: any) => {
    },
    addTask: (a: any) => {
    },
});
export default UserContext;