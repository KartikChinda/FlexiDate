import DisplayWeekends from "./components/DisplayWeekends";
import RangePicker from "./components/RangePicker/RangePicker";

const App = () => {

  return (
    <div className="min-h-screen p-4 bg-purplePalette-background flex flex-col items-center justify-start gap-10">
      <RangePicker />
      <DisplayWeekends />
    </div>
  )
}

export default App