interface BadgeProps {
  startColor: string;
  endColor: string;
  text: string;
  classname?: string;
}

export default function ({
  classname,
  startColor,
  endColor,
  text,
}: BadgeProps) {
  return (
    <div
      className={`z-10  absolute ${classname}`}
      draggable
    >
      <span
        className={`inline-block px-6 py-2 border border-white text-white font-semibold rounded-full bg-gradient-to-r from-${startColor} to-${endColor} `}
        style={{
          background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        }}
      >
        {text}
      </span>
    </div>
  );
}
