import { useDateRangeContext } from "./context/DateRangeContext";

const App = () => {

  const { startingDate, setStartingDate, endingDate, setEndingDate } = useDateRangeContext();

  console.log(startingDate, endingDate);

  return (
    <div className="min-h-screen p-4 bg-purplePalette-background flex flex-col items-center justify-between">
      App
    </div>
  )
}

export default App