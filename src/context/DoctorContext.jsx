import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    const value = {
        // doctor-related data here
    };

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;
