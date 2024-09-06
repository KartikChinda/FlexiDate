import CalendarCard from "./CalendarCard";
const Calendar = () => {

    const currentDate = new Date();


    return (
        <div>
            <CalendarCard currentDate={currentDate} />
        </div>
    )
}

export default Calendar