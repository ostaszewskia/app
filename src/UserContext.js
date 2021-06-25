import React from 'react'

const UserContext = React.createContext({
    user: {isLoggedIn: false, username: ""},
    setUser: (a: any) => {},
});
export default UserContext;