const Button = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="nm-concave-blue-400-xs rounded-lg p-3 text-white text-2xl font-bold"
    >
      Comenzar
    </button>
  );
};
export default Button;
