/* eslint-disable react/button-has-type */
export default function Button({
  children,
  loading,
  isSmall,
  variant,
  fullWidth,
  ...props
}) {
  let className = 'bg-primary';
  if (variant === 'secondary') {
    className = 'bg-secondary';
  }

  return (
    <button
      className={`font-medium rounded-lg text-sm text-white  min-w-max ${className} ${
        isSmall ? 'px-4 py-1' : 'px-5 py-3'
      } ${loading ? 'bg-opacity-50' : ''} ${fullWidth ? 'w-full' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
