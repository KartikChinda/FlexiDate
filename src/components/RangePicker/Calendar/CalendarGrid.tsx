import { useEffect, useMemo, useState } from "react";
import { getDaysOfTheWeek, generateDatesOfTheMonth, isAWeekday } from "../../../utils/dateFunctions";
import { useDateRangeContext } from "../../../context/DateRangeContext";
interface CalendarGridProps {
    currDate: Date | undefined;
}

const CalendarGrid = ({ currDate }: CalendarGridProps) => {


    const daysOfTheWeek = getDaysOfTheWeek();
    const [calendarMatrix, setCalendarMatrix] = useState<(Date | null)[][]>([[]]);
    const [datesInRange, setdatesInRange] = useState<Set<Date>>(new Set());

    // here starts the import for setting the start and end dates. 
    const { startingDate, setStartingDate, endingDate, setEndingDate, hoverDate, setHoverDate } = useDateRangeContext();

    const generateHighlightedDates = useMemo(() => {
        const highlightedDates = new Set<Date>();

        if (startingDate === null || endingDate === null) return highlightedDates;

        let start = startingDate;
        let end = endingDate || hoverDate || startingDate;

        // Ensure start is before end
        if (start > end) {
            [start, end] = [end, start];
        }

        let currDate = new Date(startingDate);
        while (currDate <= endingDate) {
            if (currDate.getDay() !== 0 && currDate.getDay() !== 6) {
                highlightedDates.add(new Date(currDate));
            }
            currDate.setDate(currDate.getDate() + 1);
        }
        // console.log("The dates are: ", highlightedDates)
        return highlightedDates;
    }, [startingDate, endingDate]);

    useEffect(() => {
        setCalendarMatrix(generateDatesOfTheMonth(currDate!));
        setdatesInRange(generateHighlightedDates);
    }, [currDate, datesInRange])



    const handleDateClick = (date: Date) => {
        if (!startingDate || (startingDate && endingDate)) {
            setStartingDate(date);
            setEndingDate(null);
        } else if (startingDate && !endingDate) {
            if (date > startingDate) {
                setEndingDate(date);
            } else {
                setEndingDate(startingDate);
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

        if (!startingDate) return false;

        const start = startingDate;
        const end = endingDate || hoverDate;

        if (!end) return false;
        // Ensure the range is always from the earlier to the later date
        const rangeStart = end < start ? end : start;
        const rangeEnd = end > start ? end : start;

        return date >= rangeStart && date <= rangeEnd;
    };



    return (
        <div className='w-[300px] bg-black rounded-xl flex flex-col justify-start items-center p-3 text-white font-headings'>



            {/* here goes the days of the week */}
            <div className="w-full mt-4 flex justify-around">
                {daysOfTheWeek.map((day) => {
                    return (
                        <p key={day}>{day}</p>
                    )
                })}
            </div>
            {/* let's make the main matrix */}
            <div className="w-full ">
                {calendarMatrix.map((currWeek, _idx) => {
                    return (
                        // w-full flex justify-center items-center gap-4

                        <div key={_idx} className="
                        w-full mt-2 grid grid-cols-7 gap-1
                        ">

                            {currWeek.map((currDay, _idx) => {
                                // here, we are making sure that null values are not clickable and settable as a date. Limiting this on UI so we dont have to do it using Scripts. 
                                if (currDay !== null)

                                    return (

                                        <button
                                            onClick={() => handleDateClick(currDay)}
                                            onMouseEnter={() => handleMouseEnter(currDay)}
                                            onMouseLeave={handleMouseLeave}
                                            key={_idx}
                                            disabled={!isAWeekday(currDay)}
                                            className={
                                                `w-full p-1 h-8 rounded-full
                                               ${(() => {
                                                    // done this way so you can map the ending and starting dates. 
                                                    if (startingDate?.toDateString() === currDay.toDateString() || endingDate?.toDateString() === currDay.toDateString()) {
                                                        console.log("i am here")
                                                        return 'bg-palette-colDark text-black font-black';
                                                    } else if (isDateInGivenRange(currDay) && isAWeekday(currDay)) {
                                                        console.log("In given range");
                                                        return 'bg-palette-colLight text-slate-800';
                                                    } else if (!isAWeekday(currDay)) {
                                                        return 'bg-slate-800 text-slate-500 cursor-not-allowed';
                                                    } else if (datesInRange?.has(currDay)) {
                                                        return "bg-palette-colLight text-slate-800";
                                                    } else {
                                                        return '';
                                                    }
                                                })()}`
                                            }
                                        >
                                            {currDay?.getDate()}
                                        </button>
                                    )



                                return (
                                    <div key={_idx} className="w-full h-8 flex justify-around p-1 ">

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