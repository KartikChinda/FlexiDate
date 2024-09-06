import CalendarCard from "./CalendarCard";
const Calendar = () => {

    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());



    return (
        <div className=" flex flex-col md:flex-row gap-2">
            <CalendarCard currDate={currentDate} />
            <CalendarCard currDate={nextMonthDate} />
        </div>
    )
}

export default Calendar