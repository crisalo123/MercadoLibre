import { createContext, useMemo, useState, useContext } from "react";



type User = {
  
   fullname: string;
   email: string;  
   address: string;
   country: string | number; 
}

export interface UserContextType {
   stateUser: User
    setStateUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType | undefined>({
    stateUser: {
        fullname: "",
        email: "",
        address: "",
        country: ""
    },
    setStateUser: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [stateUser, setStateUser] = useState<User>({
        fullname: "",
        email: "",
        address: "",
        country: ""
    });

    const value = useMemo(() => ({ stateUser, setStateUser }), [stateUser, setStateUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}


export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
}