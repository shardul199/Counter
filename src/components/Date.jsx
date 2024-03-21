import { useRef, useState } from "react";
import Timer from "./Timer";

const Date = () => {
  const [btn, setBtn] = useState("Start Timer");
  const [selectedDate, setSelectedDate] = useState(null);
  const [counter, setCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [intervalId, setIntervalId] = useState(null); // Store interval ID here
  const dateRef = useRef();

  const handleBtn = () => {
    const selectedDateTime = dateRef.current.value;
    setSelectedDate(selectedDateTime);
    setBtn(btn === "Start Timer" ? "Cancel Timer" : "Start Timer");

    if (btn === "Start Timer") {
      // Start the timer
      const newInterval = setInterval(() => {
        const targetDate = new window.Date(selectedDateTime);
        const currentDate = new window.Date();
        const difference = targetDate.getTime() - currentDate.getTime();
        const seconds = Math.floor(difference / 1000);
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;
        if (difference < 0) {
          clearInterval(newInterval);
        } else {
          setCounter({
            days,
            hours,
            minutes,
            seconds: remainingSeconds,
          });
        }
      }, 1000);
      setIntervalId(newInterval); // Store the interval ID
    } else {
      // Cancel the timer
      clearInterval(intervalId);
      setIntervalId(null); // Reset the interval ID
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <input
        type="datetime-local"
        name="date"
        className="border-white border-2 m-2 text-white bg-[#14dae0] rounded-lg"
        ref={dateRef}
      />
      <button
        className="border-white border-2 text-white p-1 rounded-md m-5"
        onClick={handleBtn}
      >
        {btn}
      </button>
      {counter && <Timer data={counter} />}
    </div>
  );
};

export default Date;
