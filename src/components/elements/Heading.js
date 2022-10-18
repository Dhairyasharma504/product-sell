export default function Heading({ children, size, className }) {
  return (
    <h3
      className={`${className} ${size ? `text-${size}` : ''} font-bold mb-3 `}
    >
      {children}
    </h3>
  );
}
