import { useEffect, useState } from "react";
import { getMonthName, getDaysOfTheWeek, generateDatesOfTheMonth } from "../../../utils/dateFunctions";
interface CalendarCardProps {
    currDate: Date | undefined
}

const CalendarCard = ({ currDate }: CalendarCardProps) => {

    const [currentDate, setCurrentDate] = useState(currDate);
    const currentMonth = getMonthName(currentDate?.getMonth());


    const daysOfTheWeek = getDaysOfTheWeek();
    const [calendarMatrix, setCalendarMatrix] = useState<(Date | null)[][]>([[]]);


    const handlePrevMonth = () => {
        let currentYear = currentDate?.getFullYear();
        let currMonthDigit = currentDate?.getMonth();
        if (currMonthDigit === 0) {
            currentYear! -= 1;
            currMonthDigit = 11;
        } else {
            currMonthDigit!--;
        }

        const newDate = new Date(currentYear!, currMonthDigit!, 1);
        setCurrentDate(newDate)

        setCalendarMatrix(generateDatesOfTheMonth(newDate));
    }

    const handleNextMonth = () => {
        let currentYear = currentDate?.getFullYear();
        let currMonthDigit = currentDate?.getMonth();
        if (currMonthDigit === 11) {
            currentYear! += 1;
            currMonthDigit = 0;
        } else {
            currMonthDigit!++;
        }

        const newDate = new Date(currentYear!, currMonthDigit!, 1);
        setCurrentDate(newDate)

        setCalendarMatrix(generateDatesOfTheMonth(newDate));
    }

    useEffect(() => {
        setCalendarMatrix(generateDatesOfTheMonth(currentDate!));
    }, [])



    return (
        <div className='w-[300px] h-[300px] bg-black rounded-xl flex flex-col justify-start items-center p-4 text-white font-headings'>
            {/* this is the header of the card */}
            <div className="w-full flex justify-between items-center  text-xl">
                <button onClick={handlePrevMonth}>&lt;</button>
                <p>{currentMonth}, {currentDate?.getFullYear()}</p>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>

            {/* here goes the days of the week */}
            <div className="w-full mt-4 flex justify-between">
                {daysOfTheWeek.map((day) => {
                    return (
                        <p key={day}>{day}</p>
                    )
                })}
            </div>
            {/* let's make the main matrix */}
            <div className="w-full mt-2">
                {calendarMatrix.map((currWeek, _idx) => {
                    return (
                        <div key={_idx} className="w-full flex justify-center items-center gap-4 ">
                            {currWeek.map((currDay, _idx) => {
                                // here, we are making sure that null values are not clickable and settable as a date. Limiting this on UI so we dont have to do it using Scripts. 
                                if (currDay !== null)
                                    return (
                                        <button key={_idx} className="w-full flex justify-around p-1 ">
                                            {currDay?.getDate()}
                                        </button>
                                    )
                                return (
                                    <div key={_idx} className="w-full flex justify-around p-1 ">

                                    </div>
                                )


                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CalendarCard