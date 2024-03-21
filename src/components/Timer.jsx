import Cards from "./Cards";

const Timer = ({ data }) => {
  // console.log(data)
  return data.days > 99 ? (
    <div className="text-white p-3">Please put days less than 100</div>
  ) : ( 
    (data.days == 0 && data.hours==0 && data.minutes==0 && data.seconds==1)?<div className="text-white p-3">Time is Over Start Again</div>:

    <div className="flex justify-center items-center">
      <Cards time={data.days} unit="Days"/>
      <Cards time={data.hours} unit="Hours"/>
      <Cards time={data.minutes} unit="Minutes"/>
      <Cards time={data.seconds} unit="Seconds"/>
    </div>
  );
};

export default Timer;
