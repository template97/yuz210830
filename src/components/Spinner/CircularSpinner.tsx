import React from "react";
import "./CircularSpinner.scss";

interface Props {
  color?: string;
  radius?: number;
}

const CircularSpinner: React.FC<Props> = (props) => {
  const getStyle = () => {
    if (props.radius && props.color)
      return {
        width: props.radius * 2,
        height: props.radius * 2,
        borderWidth: Math.ceil(props.radius * 0.15),
        borderLeftColor: props.color,
        borderRightColor: props.color,
        borderBottomColor: props.color,
      };
    else if (props.radius)
      return {
        width: props.radius * 2,
        height: props.radius * 2,
        borderWidth: Math.ceil(props.radius * 0.15),
      };
    else if (props.color)
      return {
        borderLeftColor: props.color,
        borderRightColor: props.color,
        borderBottomColor: props.color,
      };
    else return {};
  };
  return (
    <div className="circular-spinner-container">
      <div className={`circular-spinner`} style={getStyle()} />
    </div>
  );
};

export default CircularSpinner;
