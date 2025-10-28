const LinkCard = ({
  href,
  className = "",
  ariaLabel,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default LinkCard;
