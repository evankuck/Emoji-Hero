import React from 'react';

export const UserContext = React.createContext({
    _id: null,
    email: null,
    token: null,
    password: null,
});

