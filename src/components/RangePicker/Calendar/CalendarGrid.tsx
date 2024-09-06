import { useEffect, useState } from "react";
import { getDaysOfTheWeek, generateDatesOfTheMonth, isAWeekday } from "../../../utils/dateFunctions";
import { useDateRangeContext } from "../../../context/DateRangeContext";
interface CalendarGridProps {
    currDate: Date | undefined;
}

const CalendarGrid = ({ currDate }: CalendarGridProps) => {


    const daysOfTheWeek = getDaysOfTheWeek();
    const [calendarMatrix, setCalendarMatrix] = useState<(Date | null)[][]>([[]]);


    useEffect(() => {
        setCalendarMatrix(generateDatesOfTheMonth(currDate!));
    }, [currDate])

    // here starts the import for setting the start and end dates. 
    const { startingDate, setStartingDate, endingDate, setEndingDate, hoverDate, setHoverDate } = useDateRangeContext();

    const handleDateClick = (date: Date) => {
        if (!startingDate || (startingDate && endingDate)) {
            setStartingDate(date);
            setEndingDate(null);
        } else if (startingDate && !endingDate) {
            if (date > startingDate) {
                setEndingDate(date);
            } else {
                setStartingDate(date);
            }
        }
    }

    const handleMouseEnter = (date: Date | null) => {
        if (startingDate && !endingDate) {
            setHoverDate(date);
        }
    };

    const handleMouseLeave = () => {
        setHoverDate(null);
    };

    const isDateInGivenRange = (date: Date) => {
        if (!startingDate || !hoverDate) return false;
        if (!endingDate) {
            return date > startingDate && date <= hoverDate;
        }
        return date > startingDate && date < endingDate;
    };



    return (
        <div className='w-[300px] bg-black rounded-xl flex flex-col justify-start items-center p-4 text-white font-headings'>



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
                                        <button onClick={() => handleDateClick(currDay)}
                                            onMouseEnter={() => handleMouseEnter(currDay)}
                                            onMouseLeave={handleMouseLeave}
                                            key={_idx} className={`w-full p-1 rounded-full  ${startingDate === currDay || endingDate === currDay ? 'bg-palette-purpleDark text-black font-black ' : isDateInGivenRange(currDay) ? 'bg-palette-purpleLight text-slate-800' : !isAWeekday(currDay) ? ' bg-slate-800 text-slate-500' : ''} `}>
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

export default CalendarGrid