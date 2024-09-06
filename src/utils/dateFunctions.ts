export const isAWeekday = (inputDate: Date) => {
    const currentDay = inputDate.getDay();
    if (currentDay >= 1 && currentDay <= 5) return true;
    return false;
}

export const getWeekendsInSelectedRange = (startingDate: Date, endingDate: Date): Date[] => {
    const resultWeekends: Date[] = [];
    const tempDatePointer = new Date(startingDate);
    while (tempDatePointer <= endingDate) {
        if (isAWeekday(tempDatePointer) === false) {
            resultWeekends.push(new Date(tempDatePointer));
        }
        tempDatePointer.setDate(tempDatePointer.getDate() + 1);
    }

    return resultWeekends;
}

