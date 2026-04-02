const ExpenseCard = ({ name, type, amount }) => {
  return (
    <div className="
      w-60 h-60
      bg-white 
      rounded-2xl
      flex 
      flex-col 
      justify-center 
      p-6
      hover:scale-110 
      transition duration-300
      relative
      group
    ">
      {/* Gradient border using pseudo-element */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 -z-10" />
      <div className="absolute inset-[2px] bg-white rounded-2xl -z-5" />
      
      {/* Inner content */}
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-500 mb-3">{type}</p>
        <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {amount} RWF
        </p>
      </div>
    </div>
  );
};

export default ExpenseCard;