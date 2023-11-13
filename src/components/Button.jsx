const Button = ({
  lable,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "text-white bg-coral-red border-coral-red"
      } 
      ${fullWidth && "w-full"}
      flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full border`}
    >
      {lable}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right img"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
