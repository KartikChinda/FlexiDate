import React, { useContext, useEffect, useState } from "react";

interface DateRangeContextProps {
    startingDate: Date | null;
    endingDate: Date | null;
    weekendDates: Date[];
    areDatesSet: boolean;
    initialCal1Date: Date | null;
    initialCal2Date: Date | null;
    setStartingDate: (date: Date | null) => void;
    setEndingDate: (date: Date | null) => void;
    setWeekendDates: (dates: Date[]) => void;
    setinitialCal1Date: React.Dispatch<React.SetStateAction<Date>>;
    setinitialCal2Date: React.Dispatch<React.SetStateAction<Date>>;
}

export const DateRangeContext = React.createContext<DateRangeContextProps | undefined>(undefined);




export const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
    const [startingDate, setStartingDate] = useState<Date | null>(null);
    const [endingDate, setEndingDate] = useState<Date | null>(null);
    const [weekendDates, setWeekendDates] = useState<Date[]>([]);

    const [areDatesSet, setareDatesSet] = useState<boolean>(false);

    const [initialCal1Date, setinitialCal1Date] = useState<Date>(new Date());

    const [initialCal2Date, setinitialCal2Date] = useState<Date>(new Date());




    useEffect(() => {
        const nextMonthDate = new Date(initialCal1Date.getFullYear(), initialCal1Date.getMonth() + 1, initialCal1Date.getDate());
        setinitialCal2Date(nextMonthDate);
    }, [])



    // seeing if dates are set to decide what text to display. 
    useEffect(() => {
        if (startingDate && endingDate) {
            setareDatesSet(true);
        }





    }, [startingDate, endingDate, initialCal1Date])

    return (
        <DateRangeContext.Provider value={{ startingDate, endingDate, weekendDates, setStartingDate, setEndingDate, setWeekendDates, areDatesSet, initialCal1Date, initialCal2Date, setinitialCal1Date, setinitialCal2Date }}>
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