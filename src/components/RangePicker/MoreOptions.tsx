import { useDateRangeContext } from "../../context/DateRangeContext";
import { isAWeekday } from "../../utils/dateFunctions";

interface moreOptionProps {
    setisCalendarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreOptions = ({ setisCalendarVisible }: moreOptionProps) => {

    const { setStartingDate, setEndingDate, setareDatesSet } = useDateRangeContext();

    const handleCancelClick = () => {
        setisCalendarVisible(false);
        setStartingDate(null);
        setEndingDate(null);
        setareDatesSet(false);
    }

    const handleSubmitClick = () => {
        setisCalendarVisible(false);
    }

    const handleLastSevenDaysInput = () => {
        // the while loops are solely because weekends cannot be the starting or the ending point. 

        const currentDate = new Date();
        while (!isAWeekday(currentDate)) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        setEndingDate(new Date(currentDate));
        const sevenDaysBefore = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
        while (!isAWeekday(sevenDaysBefore)) {
            sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 1);
        }
        setStartingDate(new Date(sevenDaysBefore));

        return;
    }

    const handleLastThirtyDaysInput = () => {
        // the while loops are solely because weekends cannot be the starting or the ending point. 

        const currentDate = new Date();
        while (!isAWeekday(currentDate)) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        setEndingDate(new Date(currentDate));
        const thirtyDaysBefore = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 30);
        while (!isAWeekday(thirtyDaysBefore)) {
            thirtyDaysBefore.setDate(thirtyDaysBefore.getDate() - 1);
        }
        setStartingDate(new Date(thirtyDaysBefore));

        return;
    }

    return (
        <div className='w-full flex flex-row   justify-evenly md:justify-between items-center bg-black rounded-xl px-2'>
            <div className="more-options-container ">
                <button onClick={handleLastSevenDaysInput} className='more-options-button '>Last 7 days</button>
                <button onClick={handleLastThirtyDaysInput} className='more-options-button  '>Last 30 days</button>
            </div>
            <div className="more-options-container ">
                <button onClick={handleCancelClick} className='more-options-button  hover:scale-[0.8] '>
                    Cancel
                </button>
                <button onClick={handleSubmitClick} className='more-options-button  hover:scale-105 font-black'>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default MoreOptions