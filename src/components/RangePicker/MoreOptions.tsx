
interface moreOptionProps {
    isCalendarVisible: boolean;
    setisCalendarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreOptions = ({ isCalendarVisible, setisCalendarVisible }: moreOptionProps) => {

    const handleCancelClick = () => {
        setisCalendarVisible(false);
    }

    return (
        <div className='w-full flex justify-between  items-center bg-black rounded-xl h-16'>
            <div>
                <button className='more-options-button  ml-4'>Last 7 days</button>
                <button className='more-options-button mx-1'>Last 30 days</button>
            </div>
            <div>
                <button onClick={handleCancelClick} className='more-options-button mx-1 hover:scale-[0.8]'>
                    Cancel
                </button>
                <button className='more-options-button mr-4  hover:scale-105 font-black'>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default MoreOptions