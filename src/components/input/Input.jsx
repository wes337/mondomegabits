import { useState, useEffect, useCallback } from "react";
import { textToHtml } from "../../html";
import { useStore } from "../../store";
import "./Input.scss";

const nanites = `## ** "They eat magnets." ** ##\n
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

const id1 = `## ** "Not feeling well? Well, maybe it's 'cause you're always on that phone." ** ##

  -o-
  
  ## Materials Needed to Craft: ## 4x ++ San Francisco roadside needle ++, 1x ++ Malaysian Airlines black box ++ wireless receiver, used ++ 9mm hollow point round ++ :* (commonly found inside dead gangstalkers) *:, ++ vaccine/ prodrug concentrate of choice ++
  
  ## Retail Cost: ## ++ $155,000 ++ ($5.23 if you have insurance :* (you don't) *:)
  
  ## Network Test: ## ++ 7.7 Gbps Download / 35 Mbps upload ++
  
  Remotely inject any known vaccine into another person's genome - yeah, get it in there, let it mess around inside.. Commonly utilized near elementary schools and fast food joints. Once applied to a target they become sluggish and weak, also they can't get hard anymore, ++ permanently. ++
  
  -o-
  
  ## << Rapivax >>: ## Deals ++ %( ㉕ )% damage ++ for each vaccine loaded into the mix;
  -- ++ Unlimited uses; ++
  -- ## 12.5% chance of turning enemy 100% gay ## ** (flip a coin three (3) times). ** Player may not calculate odds using anything other than a coin.
  -- ## Rapivax ## is double-certified ++ __ "SAFE 100%" __ ++ by both the ++ FDA ++ and ++ Dept. of Agriculture. ++
  
  ## << Bugelsil >>: ## Deals ++ no damage; ++
  -- ++ One ** (1) ** use only; ++
  -- ## Bugelsil ## only affects enemy creatures which have already been vaccinated ++ ** (no effect on unvaccinated cards); ** ++
  -- == Strange side effect: == The high acidity of the ## Bugelsil ## vaccine causes all metal enemy item cards to ++ corrode and break ++;
  -- 50/50% chance enemy card(s) ++ become gay __OR__ asexual ++ (flip a coin);
  -- ## Bugelsil ## is ++ triple-certified Goldsafe ++ by the ++ D.O.T. ++, the ++ Office on Violence Against Women ++, and the ++ FDA. ++
  
  ## << Provaxtrin >>: ## Blocks ++ HIV ++ and ++ HIV Ex Plus a ++ for ++ ten (10) turns; ++
  -- Can choose multiple targets for a dose but it is one-time use only;
  -- ++ Lowers target INT by 2; ++
  -- Player may ++ target either his own creatures or opponent's, or both. ++ A good strategic choice if you have many (( homosexual )) cards and your opponent has many high Intelligence cards. 
  -- ## Provaxtrin ## has not yet received any safety certification ++ (FDA ++ and ++ Dept. of Vaxxsafety ++ pending as of publication).`;

const id2 = `## ** "Awesome! PLEASE [[ RAPE ]] my mind again!!!" ** ##

===

ThiS ++ amazing invention ++ is capable of intercepting any sensory data and digitally processing it, all for the ++ low price ++ of your ## eternal soul. ##

[[ __ Drinkable advertisements: __ ]] Every time you drink water, you'll be rewarded free credits or Gems deposited in your account after enjoying the complimentary advertisement Viewing experience and fUlfilling a (q)uick consumer (q)uestionnaire!

The ## time (d)ilation processor ## means that longForm promotions such as adVuementaries ** (documentary-length advertisements) ** can be fully experienced in the Blink of an eye! In your mind, you just watched three hours of Liam Neeson explain why ++ Posh Society ++ is the best brand of ++ Anal Freshness Inserts ++, while in real life __mere seconds have paSsed.__

Or maybe you'd like some tailored ++ MyNewsBytes? ++ Eat a bag of sponsored chips and get the hottest headlines delivered directly to your cerebral cortex! Gone are the days of fumbling for the remote to keep up with twelve different sitcoms and three opinion stations simultaneously on the 360-degree ++ PeEnCu ++ ** (Personal Entertainment Cube). ** ## DomeHomie ## gives you what __YOU__ want, straight to the dome!

===

## PermiTech: ## One (1) enemy card becomes [[ → ]] ## ** Fake Tech ** ## faction. ** Use tactically. **
-- ++ 50 MindFuck DMG ++ upon conversion. ++ 2X DMG ++ from your ## ** Fake Tech ** ## attacks or spells.

## Paid Programming: ## One (1) ++ INT 3 or lower ++ opponent creature cannot be used unless they are paired with a ## ** __ Product and/or Service We Do Enjoy™ __ ** ## card.`;

const defaultValue = `\"Awesome! PLEASE r*** my mind again!!!\"\n\n ThiS amazing invention is capable of intercepting any sensory data and digitally processing it, all for the low price of your eternal soul. This allows amazing achievements like, for example, drinkable advertisements. Every time you drink water, you'll be rewarded free sredits or gems deposited in your account after enjouing the complimentary advertisement viewing experience and fulfilling a quick consumer questionpaire!\n\nThe time dilation processor means that longform promotions such as advuementaries (documentary-length advertisements) can be fully experiensed in the blink of an eye! In your mipd, you just watched three hours of Liam Neeson explain why High Society is the best brand of Anal Freshness Inserts, while in real life mere seconds have passed. Or maybe you'd like some tailored MyNewsBytes? Eat a bag of sponsored chips and get a dose of the hottest headlines delivered directly to your cerebral cortex! Gope are the days of fumbling for the remote to keep up with twelve different sitcoms and three pews stations simultapeously on the 360-degree PeEnCu (Personal Entertainment Cube) - DomeHomie gives you what YOU want, straight to the dome!\n\nPermiTech: One (1) enemy card becomes  Fake Tech faction. Use tactically.\n\nPaid Programming: One (1) INT 3 or lower Opponent creature cannot be used unless they are paired with a Product and/or Service We Do EnjoyTM card.`;

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
