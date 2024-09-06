
interface moreOptionProps {
    isCalendarVisible: boolean;
    setisCalendarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreOptions = ({ isCalendarVisible, setisCalendarVisible }: moreOptionProps) => {

    const handleCancelClick = () => {
        setisCalendarVisible(false);
    }

    return (
        <div className='w-full flex flex-row   justify-around md:justify-between items-center bg-black rounded-xl md:px-2'>
            <div className="more-options-container ">
                <button className='more-options-button '>Last 7 days</button>
                <button className='more-options-button  '>Last 30 days</button>
            </div>
            <div className="more-options-container ">
                <button onClick={handleCancelClick} className='more-options-button  hover:scale-[0.8] '>
                    Cancel
                </button>
                <button className='more-options-button  hover:scale-105 font-black'>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default MoreOptions