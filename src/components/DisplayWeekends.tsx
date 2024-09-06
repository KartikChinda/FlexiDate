import { useEffect, useState } from "react";
import { useDateRangeContext } from "../context/DateRangeContext"

const DisplayWeekends = () => {

    const { areDatesSet, startingDate, endingDate, weekendDates } = useDateRangeContext();


    console.log(weekendDates);
    return (
        <div className="w-[85%] rounded-xl  bg-palette-purpleLight flex flex-col gap-4 justify-center items-left p-4">
            <div className="display-weekends-text">
                {areDatesSet ? "" : "Please select a range of dates."}
            </div>
            {areDatesSet ?
                <div className="display-weekends-text">
                    {weekendDates && weekendDates.length > 0 ?
                        <div>
                            {/* if the dates are set and have weekends in them then we work that here.  */}

                            <div>
                                List of weekends:
                            </div>
                            {weekendDates.map((currentWeekend) => {
                                return (
                                    <div>
                                        Hello
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