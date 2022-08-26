import { useState, useEffect, useCallback } from "react";
import { textToHtml } from "../../html";
import { useStore } from "../../store";
import "./Input.scss";

const defaultValue = `## ** "They eat magnets." ** ##\n
---\n
A metallic tennis-ball-sized sphere containing a swarm of ## "nanites" ## that burst out and swarm a target on impact.\n
## Nanites ## with quickly disperse and begin chewing down the target's weapons and gear. Nanites are incredibly fast-moving and can swim through vents to bypass airlocks. ++ Swatting them away is ++ ## -> futile <- ## due to self-replication and ++ (( miniscule )) ++ size. They know how to pick locks and ride the elevator. They're usually only visible when consuming something en masse, shimmering about in a fluttering metallic sludge form, like a school of fish in a starved frenzy.\n
---\n
## Nanites ## are primarily used to ++ ┋destroy robots┋ ++ and chew through spacecraft hulls, breach metal doors, etc.\n
++ Reduced << DMG >> against biological creatures. ++\n
## |Swarmed: ## The mercury cloud casts dread upon your enemies.
  -- ++ 775 << DMG >> ++ to robots.
  -- ++ 175 << DMG >> ++ to biological creatures.
  -- ++ Instantly ++ destroys weapons, armor, bomb shelters, metallic buildings, equipped electronic devices.`;

const Input = () => {
  const [value, setValue] = useState(defaultValue);
  const setHtml = useStore(({ setHtml }) => setHtml);

  const updateHtml = useCallback(() => {
    const html = textToHtml(value);
    setHtml(html);
  }, [setHtml, value]);

  useEffect(() => {
    updateHtml();
  }, [updateHtml]);

  const onChange = (event) => {
    const { value } = event.target;

    setValue(value);
    updateHtml();
  };

  return (
    <div className="input">
      <textarea cols="75" value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
