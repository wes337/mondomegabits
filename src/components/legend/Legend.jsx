import "./Legend.scss";

const Legend = () => {
  return (
    <div className="legend">
      <div>
        <span className="italic">
          Enclose text in the specified symbol to get the desired effect.
        </span>
        <fieldset>
          <legend>Typography:</legend>
          <div>
            (default) <span className="green">Green</span>
          </div>
          <div>
            ## <span className="white">White</span> ##
          </div>
          <div>
            [[ <span className="yellow">Yellow</span> ]]
          </div>
          <div>
            == <span className="red">Red</span> ==
          </div>
          <div>
            ++ <span className="glow">Glowing</span> ++
          </div>
          <div>
            ** <span className="italic">Italic</span> **
          </div>
          <div>
            -&gt; <span className="arrow">Arrow</span> &lt;-
          </div>
          <div>
            &lt;&lt; <span className="double-arrow">Double arrow</span> &gt;&gt;
          </div>
          <div>
            (( <span className="wide">Wide</span> ))
          </div>
        </fieldset>
      </div>
      <div>
        <span className="italic">
          Use these symbols anywhere add layout pieces.
        </span>
        <fieldset>
          <legend>Layout:</legend>
          <div>
            --- <span className="italic">(Dotted line)</span>{" "}
            <hr className="dotted" />
          </div>
          <div>
            === <span className="italic">(Double dotted line)</span>{" "}
            <hr className="dotted-double" />
          </div>
          <div>
            ||| <span className="italic">(Tall dotted line)</span>{" "}
            <hr className="tall" />
          </div>
          <div>
            |--| <span className="italic">(Open bracket)</span>{" "}
            <hr className="top" />
          </div>
          <div>
            |__| <span className="italic">(Close bracket)</span>{" "}
            <hr className="bottom" />
          </div>
          <div>
            -- <span className="italic">(Bullet list)</span>{" "}
            <ul>
              <li>Example</li>
            </ul>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Legend;
