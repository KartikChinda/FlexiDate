import React from "react";
import { getMonthName } from "../../../utils/dateFunctions";
import CalendarGrid from "./CalendarGrid";


interface CalendarCardProps {
    currentDate: Date | undefined;
    setcurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarHeader = ({ currentDate, setcurrentDate }: CalendarCardProps) => {


    // const [currentDate, setcurrentDate] = useState(currDate);

    const currentMonth = getMonthName(currentDate?.getMonth());

    let currentYear = currentDate?.getFullYear();
    let currMonthDigit = currentDate?.getMonth();


    const handlePrevMonth = () => {

        if (currMonthDigit === 0) {
            currentYear! -= 1;
            currMonthDigit = 11;
        } else {
            currMonthDigit!--;
        }

        const newDate = new Date(currentYear!, currMonthDigit!, currentDate?.getDay()! + 1);
        setcurrentDate(newDate)


    }

    const handleNextMonth = () => {

        if (currMonthDigit === 11) {
            currentYear! += 1;
            currMonthDigit = 0;
        } else {
            currMonthDigit!++;
        }

        // needed to be done because otherwise the initial change doesnt happen on changing next month. 
        const newDate = new Date(currentYear!, currMonthDigit!, currentDate?.getDay()! + 1);
        setcurrentDate(newDate)

    }

    const handlePrevYear = () => {
        if (currentYear === 0) return;
        const newDate = new Date(currentYear! - 1, currMonthDigit!, 1);
        setcurrentDate(newDate);
    }

    const handleNextYear = () => {
        if (currentYear === 9999) return;
        const newDate = new Date(currentYear! + 1, currMonthDigit!, 1);
        setcurrentDate(newDate);
    }




    return (

        <div className='w-[300px]   rounded-xl flex flex-col justify-start items-center p-4 text-white font-headings  bg-black'>
            {/* this is the header of the card */}
            <div className="w-full flex justify-between items-center text-xl">
                <button onClick={handlePrevYear}>&lt;&lt;</button>
                <button onClick={handlePrevMonth}>&lt;</button>
                <p className="min-w-[55%] text-center">{currentMonth}, {currentDate?.getFullYear()}</p>
                <button onClick={handleNextMonth}>&gt;</button>
                <button onClick={handleNextYear}>&gt;&gt;</button>
            </div>
            <div>
                <CalendarGrid currDate={currentDate} />
            </div>
        </div>

    )
}

export default CalendarHeader