import { useHtmlStore } from "../../html";
import "./Body.scss";

const Body = () => {
  const html = useHtmlStore((state) => state.html);

  return (
    <div className="body">
      <div className="body-text" dangerouslySetInnerHTML={{ __html: html }}>
        {/* <p>
          <span className="white italic">"They eat magnets."</span>
        </p>
        <hr className="dotted" />
        <p>
          A metallic tennis-ball-sized sphere containing a swarm of{" "}
          <span className="white">"nanites"</span> that burst out and swarm a
          target on impact.
        </p>
        <p>
          <span className="white">Nanites</span> with quickly disperse and begin
          chewing down the target's weapons and gear. Nanites are incredibly
          fast-moving and can swim through vents to bypass airlocks.{" "}
          <span className="glow">Swatting them away is</span>{" "}
          <span className="white arrow">futile</span> due to self-replication
          and <span className="glow wide">miniscule</span> size. They know how
          to pick locks and ride the elevator. They're usually only visible when
          consuming something en masse, shimmering about in a fluttering
          metallic sludge form, like a school of fish in a starved frenzy.
        </p>
        <hr className="dotted" />
        <p>
          <span className="white">Nanites</span> are primarily used to{" "}
          <span className="glow">destroy robots</span> and chew through
          spacecraft hulls, breach metal doors, etc.
          <br />
          <span className="glow italic">
            Reduced DMG against biological creatures.
          </span>
        </p>
        <p>
          <span className="white">|Swarmed:</span> The mercury cloud casts dread
          upon your enemies.
          <ul>
            <li>
              <span className="glow">
                775 <span className="double-arrow">DMG</span>
              </span>{" "}
              to robots.
            </li>
            <li>
              <span className="glow">
                175 <span className="double-arrow">DMG</span>
              </span>{" "}
              to biological creatures.
            </li>
            <li>
              <span className="glow">Instantly destroys</span> weapons, armor,
              bomb shelters, metallic buildings, equipped electronic devices.
            </li>
          </ul>
        </p> */}
      </div>
    </div>
  );
};

export default Body;
