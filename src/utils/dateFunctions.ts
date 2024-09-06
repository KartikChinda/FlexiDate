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

export const generateDatesOfTheMonth = (date: Date) => {
    const calendarMatrix: (Date | null)[][] = [[]];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    let currentWeek = 0;

    // filling null till the day the month starts 
    for (let i = 0; i < firstDate.getDay(); i++) {
        calendarMatrix[currentWeek].push(null);
    }

    // filling the rest of the calendar. 
    for (let i = 1; i <= endDate.getDate(); i++) {
        if (calendarMatrix[currentWeek].length === 7) {
            currentWeek++;
            calendarMatrix[currentWeek] = []
        }
        calendarMatrix[currentWeek].push(new Date(year, month, i));
    }

    // filling from the end of the month to the end of the current week. 
    while (calendarMatrix[currentWeek].length < 7) {
        calendarMatrix[currentWeek].push(null);
    }

    return calendarMatrix;
}

export const getMonthName = (monthNumber: number | undefined): String => {
    if (typeof monthNumber === undefined) return "Invalid Month";
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (monthNumber! <= 11) {
        return months[monthNumber!];
    }
    return "Invalid month."
}

export const getDaysOfTheWeek = () => {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
}

export const properDateFormat = (date: Date): String => {
    if (!(date instanceof Date)) return "";
    const currYear = date.getFullYear();
    const currMonth = String(date.getMonth() + 1).padStart(2, '0') //so this is basically making 6 to 06. 
    const currDate = String(date.getDate()).padStart(2, '0');

    const finalFormat = `${currYear}-${currMonth}-${currDate}`;
    return finalFormat;
}