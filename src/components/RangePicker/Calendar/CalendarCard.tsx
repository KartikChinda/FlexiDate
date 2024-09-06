import { useEffect, useState } from "react";
import { getMonthName, getDaysOfTheWeek, generateDatesOfTheMonth } from "../../../utils/dateFunctions";
interface CalendarCardProps {
    currDate: Date | undefined;
    // setcurrDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarCard = ({ currDate }: CalendarCardProps) => {


    const daysOfTheWeek = getDaysOfTheWeek();
    const [calendarMatrix, setCalendarMatrix] = useState<(Date | null)[][]>([[]]);


    useEffect(() => {
        setCalendarMatrix(generateDatesOfTheMonth(currDate!));
    }, [currDate])

    const handleClick = () => {
        console.log()
    }



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
                                        <button onClick={handleClick} key={_idx} className="w-full flex justify-around p-1 ">
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