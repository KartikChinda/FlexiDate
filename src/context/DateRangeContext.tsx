import React, { useContext, useState } from "react";

interface DateRangeContextProps {
    startingDate: Date | null;
    endingDate: Date | null;
    weekendDates: Date[];
    setStartingDate: (date: Date | null) => void;
    setEndingDate: (date: Date | null) => void;
    setWeekendDates: (dates: Date[]) => void;
}

export const DateRangeContext = React.createContext<DateRangeContextProps | undefined>(undefined);




export const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
    const [startingDate, setStartingDate] = useState<Date | null>(null);
    const [endingDate, setEndingDate] = useState<Date | null>(null);
    const [weekendDates, setWeekendDates] = useState<Date[]>([]);

    return (
        <DateRangeContext.Provider value={{ startingDate, endingDate, weekendDates, setStartingDate, setEndingDate, setWeekendDates }}>
            {children}
        </DateRangeContext.Provider>
    )
};

export const useDateRangeContext = () => {
    // created the import for useContext right here so it doesnt have to be done for each component. 
    const context = useContext(DateRangeContext);
    if (!context) {
        {
            throw new Error("The provider does not map this component. ")
        }
    }

    return context;
}