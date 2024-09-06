import { useDateRangeContext } from "./context/DateRangeContext";
import DisplayWeekends from "./components/DisplayWeekends";

const App = () => {

  const { startingDate, setStartingDate, endingDate, setEndingDate } = useDateRangeContext();

  console.log(startingDate, endingDate);

  return (
    <div className="min-h-screen p-4 bg-purplePalette-background flex flex-col items-center justify-start gap-10">
      App
      <DisplayWeekends />
    </div>
  )
}

export default App