type Props = {
  onClick?: () => void;
  text: string;
  className?: string;
  spanStyle?: string;
  style?: React.CSSProperties; // Change type to React.CSSProperties
};

function Button({ onClick, text, spanStyle, className, style }: Props) {
  return (
    <button
      onClick={onClick}
      className={`relative ${className} font-bold text-white group`}
      style={style}
    >
      <span className="absolute inset-0 w-full h-full  border-2 "></span>
      <span className="absolute inset-0 w-full h-full border bg-black transition duration-300 ease-out transform group-hover:-translate-x-2 group-hover:-translate-y-2 flex justify-center items-center">
        <span className={` ${spanStyle}`}>{text}</span>
      </span>
    </button>
  );
}

export default Button;
