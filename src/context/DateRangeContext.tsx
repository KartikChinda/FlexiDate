import React, { useState } from "react";

interface DateRangeContextProps {
    startingDate: Date | null;
    endingDate: Date | null;
    setStartingDate: (date: Date | null) => void;
    setEndingDate: (date: Date | null) => void;
    // value: String;
}

export const DateRangeContext = React.createContext<DateRangeContextProps | undefined>(undefined);




export const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
    const [startingDate, setStartingDate] = useState<Date | null>(null);
    const [endingDate, setEndingDate] = useState<Date | null>(null);

    return (
        <DateRangeContext.Provider value={{ startingDate, endingDate, setStartingDate, setEndingDate }}>
            {children}
        </DateRangeContext.Provider>
    )
};

