export function IconPhone({
  size = "1rem",
  color = "#2c3e50",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      <path d="M15 7a2 2 0 0 1 2 2" />
      <path d="M15 3a6 6 0 0 1 6 6" />
    </svg>
  );
}
