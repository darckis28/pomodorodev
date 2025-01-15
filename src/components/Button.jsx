const Button = ({ onclick, color, children }) => {
  return (
    <button
      onClick={onclick}
      className={`${color} rounded-lg p-3 text-white text-2xl font-bold`}
    >
      {children}
    </button>
  );
};
export default Button;
