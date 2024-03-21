const Cards = ({ time, unit }) => {
  return (
    <div className="border-2 border-white text-white text-3xl font-semibold p-2 rounded-md m-10 h-[100px] w-[120px] flex justify-center items-center gap-2">
      {time} {unit}
    </div>
  );
};

export default Cards;
