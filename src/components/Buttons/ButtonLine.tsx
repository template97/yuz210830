import classNames from "classnames";
import CircularSpinner from "components/Spinner/CircularSpinner";
import React from "react";
import "./Button.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "medium" | "large" | "extra-large";
  color?: "abnormal" | "normal";
  isLoading?: boolean;
}

const ButtonLine = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    className,
    disabled,
    size,
    color,
    isLoading,
    children,
    ...defaultProps
  } = props;
  const colorTheme = "light";

  const getSpinnerRadius = (size: string) => {
    switch (size) {
      case "extra-large":
        return 16;
      case "large":
      case "medium":
        return 12;
      case "small":
      default:
        return 9;
    }
  };

  return (
    <button
      ref={ref}
      className={classNames(
        "custom-button",
        className,
        colorTheme,
        "line",
        color,
        size
      )}
      disabled={disabled || isLoading}
      {...defaultProps}
    >
      {!isLoading && children}
      {isLoading && (
        <CircularSpinner radius={getSpinnerRadius(size)} color={"white"} />
      )}
    </button>
  );
});

export default ButtonLine;
