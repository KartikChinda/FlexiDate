import { useEffect, useState, useRef } from "react";
import { useDateRangeContext } from "../context/DateRangeContext"
import { wordDateFormat } from "../utils/dateFunctions";

const DisplayWeekends = () => {
    const { areDatesSet, startingDate, endingDate } = useDateRangeContext();
    const [weekendDates, setWeekendDates] = useState<Date[] | null>(null);
    const [visibleCount, setVisibleCount] = useState(10); // Start with showing 10 weekends
    const loadMoreRef = useRef<HTMLDivElement | null>(null); // Ref to detect the viewport

    useEffect(() => {
        const countWeekends = (startingDate: Date | null, endingDate: Date | null) => {
            if (!startingDate || !endingDate) return;
            let currentDate = new Date(startingDate);
            const tempWeekendsContainer = [];

            while (currentDate <= endingDate) {
                if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                    tempWeekendsContainer.push(new Date(currentDate));
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            setWeekendDates(tempWeekendsContainer);
        };
        countWeekends(startingDate, endingDate);
    }, [startingDate, endingDate]);

    // Lazy load more weekends when the user scrolls down
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prev) => prev + 10); // Load 10 more weekends when in view
                }
            },
            { threshold: 1.0 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, []);

    return (
        <div className="w-[85%] rounded-xl bg-palette-colLight flex flex-col justify-center items-left p-4">
            <div className="display-weekends-text">
                {areDatesSet ? "" : "Please select a range of dates."}
            </div>
            {areDatesSet ? (
                <div className="text-base font-text p-2">
                    {weekendDates && weekendDates.length > 0 ? (
                        <div>
                            {/* Display the weekends between the selected range */}
                            <div className="mb-10">
                                Here is a list of weekends between{" "}
                                <span className="weekend-dates">{wordDateFormat(startingDate!)}</span> and{" "}
                                <span className="weekend-dates">{wordDateFormat(endingDate!)}</span>:
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                                {weekendDates.slice(0, visibleCount).map((currentWeekend, _idx) => (
                                    <div
                                        key={_idx}
                                        className="p-4 flex justify-center items-center  rounded-xl border-2 border-black bg-black text-white text-[15px] hover:bg-palette-colLight duration-150 hover:text-black hover:text-[17px]"
                                    >
                                        {wordDateFormat(currentWeekend!)}
                                    </div>
                                ))}
                            </div>

                            {/* This div is used to detect when to load more weekends */}
                            <div ref={loadMoreRef} className="load-more-trigger" style={{ height: '20px' }} />
                        </div>
                    ) : (
                        "The selected dates have no weekends available in them."
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default DisplayWeekends;
