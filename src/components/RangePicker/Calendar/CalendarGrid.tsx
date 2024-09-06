import { useEffect } from "react";
import { useDateRangeContext } from "../../../context/DateRangeContext";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {

    const { initialCal1Date, initialCal2Date, setinitialCal1Date, setinitialCal2Date } = useDateRangeContext();
    useEffect(() => {
        if (initialCal1Date === null) return;
        if (initialCal2Date === null) return;
        if (initialCal1Date >= initialCal2Date) {
            const newTempDate = new Date(initialCal1Date.getFullYear(), initialCal1Date.getMonth() + 1, 1);
            setinitialCal2Date(newTempDate);
        }
        else if (initialCal2Date < initialCal1Date) {
            const newTempDate = new Date(initialCal2Date.getFullYear(), initialCal2Date.getMonth() - 1, 1);
            setinitialCal1Date(newTempDate);
        }
    }, [initialCal1Date, initialCal2Date])



    return (
        <div className=" flex flex-col md:flex-row gap-2">
            {/* you will have to send both dates to one header only. */}
            <CalendarHeader currentDate={initialCal1Date!} setcurrentDate={setinitialCal1Date} />
            <CalendarHeader currentDate={initialCal2Date!} setcurrentDate={setinitialCal2Date} />
        </div>
    )
}

export default Calendar