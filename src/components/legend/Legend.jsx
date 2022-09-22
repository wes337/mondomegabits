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
            $$ <span className="color-change">Changing</span> $$
          </div>
          <div>
            ** <span className="italic">Italic</span> **
          </div>
          <div>
            :* <span className="italic-alt">Italic Alt</span> *:
          </div>
          <div>
            __ <span className="underline">Underline</span> __
          </div>
          <div>
            -&gt; <span className="arrow">Arrow</span> &lt;-
          </div>
          <div>
            &lt;&lt; <span className="double-arrow">Double arrow</span> &gt;&gt;
          </div>
          <div>
            &#47;&#47; <span className="bracket">Brackets</span> &#47;&#47;
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
            -o- <span className="dotted-circles">(Dotted circles line)</span>{" "}
            <hr className="dotted-circles" />
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
