import { useDateRangeContext } from "../../../context/DateRangeContext";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {

    const { initialCal1Date, initialCal2Date } = useDateRangeContext();



    return (
        <div className=" flex flex-col md:flex-row gap-2">
            <CalendarHeader currDate={initialCal1Date!} />
            <CalendarHeader currDate={initialCal2Date!} />
        </div>
    )
}

export default Calendar