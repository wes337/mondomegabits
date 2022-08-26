import { useStore } from "../../store";
import "./Body.scss";

const Body = () => {
  const { html, borderColor } = useStore(({ html, borderColor }) => ({
    html,
    borderColor,
  }));

  return (
    <div className={`body ${borderColor}`}>
      <div
        className="body-text"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

export default Body;
