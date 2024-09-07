import { useState } from "react";
import { useDateRangeContext } from "../../context/DateRangeContext";

import MoreOptions from "./MoreOptions";
import CalendarCard from "./Calendar/CalendarCard";
import { properDateFormat } from "../../utils/dateFunctions";


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
                    <div>
                        You have selected from <span className="date-text">{properDateFormat(startingDate!)}</span> to <span className="date-text">{properDateFormat(endingDate!)}</span>
                    </div>

                    :
                    isCalendarVisible ? "Select a start and end date." :
                        "Click here to select a range of dates."
                }
            </button>
            <div className="mt-2">
                {isCalendarVisible ? <CalendarCard /> : ""}
            </div>
            {isCalendarVisible && <div className="w-full mt-3">
                <MoreOptions setisCalendarVisible={setisCalendarVisible} />
            </div>}
        </section>


    )
}

export default RangePicker