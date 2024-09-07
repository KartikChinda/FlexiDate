import { useEffect, useState } from "react";
import { useDateRangeContext } from "../context/DateRangeContext"
import { wordDateFormat } from "../utils/dateFunctions";

const DisplayWeekends = () => {

    const { areDatesSet, startingDate, endingDate } = useDateRangeContext();

    const [weekendDates, setWeekendDates] = useState<Date[] | null>(null);

    useEffect(() => {
        const countWeekends = (startingDate: Date | null, endingDate: Date | null) => {
            if (startingDate === null || endingDate === null) return;
            let currentDate = new Date(startingDate);
            const tempWeekendsContainer = [];

            while (currentDate <= endingDate) {
                console.log(currentDate);
                if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                    // do you know what will happen if you push just currentData? 
                    tempWeekendsContainer.push(new Date(currentDate));
                    console.log("The array is: ", tempWeekendsContainer)
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            setWeekendDates(tempWeekendsContainer);
            console.log(tempWeekendsContainer)
        }
        countWeekends(startingDate, endingDate);

    }, [areDatesSet])


    return (
        <div className="w-[85%] rounded-xl bg-palette-purpleLight flex flex-col justify-center items-left p-4">
            <div className="display-weekends-text">
                {areDatesSet ? "" : "Please select a range of dates."}
            </div>
            {areDatesSet ?
                <div className="text-base font-text p-2">
                    {weekendDates && weekendDates.length > 0 ?
                        <div>
                            {/* if the dates are set and have weekends in them then we work that here.  */}

                            <div className="mb-10">
                                Here is a list of weekends between <span className="weekend-dates">{wordDateFormat(startingDate!)}</span> and <span className="weekend-dates">
                                    {wordDateFormat(endingDate!)}
                                </span>:
                            </div>
                            {weekendDates.map((currentWeekend, _idx) => {
                                return (
                                    <div key={_idx}>
                                        {wordDateFormat(currentWeekend!)}
                                    </div>
                                )

                            })}
                        </div>
                        :
                        "The selected dates have no weekends available in them."
                    }
                </div>
                :
                ""
            }
        </div>
    )
}

export default DisplayWeekends