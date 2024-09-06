import { useState } from "react";
import { useDateRangeContext } from "../../context/DateRangeContext";
import Calendar from "./Calendar/CalendarGrid";
import MoreOptions from "./MoreOptions";


const RangePicker = () => {

    const { startingDate, endingDate, areDatesSet } = useDateRangeContext();
    const [isCalendarVisible, setisCalendarVisible] = useState<boolean>(false);

    const handleButtonClick = () => {
        setisCalendarVisible(true);
    }


    return (
        <section className="flex justify-center items-center flex-col">
            <button className="py-4 px-6 rounded-xl bg-palette-purpleLight text-lg font-black " onClick={handleButtonClick}>
                {areDatesSet ?
                    "You have selected from " + <span className="date-text">{startingDate?.toDateString()}</span> + " to " + <span className="date-text">{endingDate?.toDateString()}</span>
                    :
                    "Click here to select a range of dates."
                }
            </button>
            <div className="mt-2">
                {isCalendarVisible ? <Calendar /> : ""}
            </div>
            {isCalendarVisible && <div className="w-full mt-3">
                <MoreOptions isCalendarVisible={isCalendarVisible} setisCalendarVisible={setisCalendarVisible} />
            </div>}
        </section>


    )
}

export default RangePicker