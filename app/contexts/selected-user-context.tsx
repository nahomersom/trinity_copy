// SelectedUserProvider.tsx
"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Users } from '../api/student';

// Define the type for the context value
interface SelectedUserContextType {
    selectedUserData: Users | null;
    setSelectedUser: React.Dispatch<React.SetStateAction<Users | null>>;
}

// Create a context to manage the state data
const SelectedUserContext = createContext<SelectedUserContextType | null>(null);

// Create a provider component to wrap your application
export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedUserData, setSelectedUserState] = useState<Users | null>(() => {
        const storedUserData = localStorage.getItem('selectedUserData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    // Update local storage whenever selectedUserData changes
    useEffect(() => {
        localStorage.setItem('selectedUserData', JSON.stringify(selectedUserData));
    }, [selectedUserData]);

    const setSelectedUser: SelectedUserContextType['setSelectedUser'] = (user) => {
        setSelectedUserState(user);
    };

    return (
        <SelectedUserContext.Provider value={{ selectedUserData, setSelectedUser }}>
            {children}
        </SelectedUserContext.Provider>
    );
};

// Custom hook to access the context
export const useSelectedUser = () => {
    const context = useContext(SelectedUserContext);
    if (!context) {
        throw new Error('useSelectedUser must be used within a SelectedUserProvider');
    }
    return context;
};
