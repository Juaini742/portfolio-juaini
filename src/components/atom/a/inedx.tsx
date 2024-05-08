type Props = {
  href: string;
  text: string;
  className?: string;
  spanStyle?: string;
  target?: string;
};

function ALink({ href, text, spanStyle, className, target }: Props) {
  return (
    <a
      href={href}
      target={target}
      className={`relative ${className} font-bold text-white group`}
    >
      <span className="absolute inset-0 w-full h-full  border-2 "></span>
      <span className="absolute inset-0 w-full h-full border bg-black transition duration-300 ease-out transform group-hover:-translate-x-2 group-hover:-translate-y-2 flex justify-center items-center">
        <span className={` ${spanStyle}`}>{text}</span>
      </span>
    </a>
  );
}

export default ALink;
