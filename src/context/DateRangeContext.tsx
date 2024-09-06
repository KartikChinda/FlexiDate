import React, { useContext, useEffect, useState } from "react";

interface DateRangeContextProps {
    startingDate: Date | null;
    endingDate: Date | null;
    weekendDates: Date[];
    areDatesSet: boolean;
    setStartingDate: (date: Date | null) => void;
    setEndingDate: (date: Date | null) => void;
    setWeekendDates: (dates: Date[]) => void;
}

export const DateRangeContext = React.createContext<DateRangeContextProps | undefined>(undefined);




export const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
    const [startingDate, setStartingDate] = useState<Date | null>(null);
    const [endingDate, setEndingDate] = useState<Date | null>(null);
    const [weekendDates, setWeekendDates] = useState<Date[]>([]);

    const [areDatesSet, setareDatesSet] = useState<boolean>(false);


    // seeing if dates are set to decide what text to display. 
    useEffect(() => {
        if (startingDate && endingDate) {
            setareDatesSet(true);
        }

    }, [startingDate, endingDate])

    return (
        <DateRangeContext.Provider value={{ startingDate, endingDate, weekendDates, setStartingDate, setEndingDate, setWeekendDates, areDatesSet }}>
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