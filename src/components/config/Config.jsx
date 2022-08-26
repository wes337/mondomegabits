import { useStore } from "../../store";
import "./Config.scss";

const borderColors = [
  "red",
  "green",
  "yellow",
  "blue",
  "orange",
  "teal",
  "purple",
  "pink",
];

const Config = () => {
  const { borderColor, setBorderColor } = useStore(
    ({ borderColor, setBorderColor }) => ({
      borderColor,
      setBorderColor,
    })
  );

  const onChangeBorderColor = (color) => {
    setBorderColor(color);
  };

  return (
    <div className="config">
      <span>Border:</span>
      {borderColors.map((color) => {
        const isCurrentBorderColor = color === borderColor;
        return (
          <button
            key={color}
            className={`border-color-button ${color} ${
              isCurrentBorderColor ? "current" : ""
            }`}
            onClick={() => onChangeBorderColor(color)}
          />
        );
      })}
    </div>
  );
};

export default Config;
