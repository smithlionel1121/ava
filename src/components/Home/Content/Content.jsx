import React from "react";
import "./Content.css";

export default function Content({ backgroundImage, contentImage }) {
  const backgroundContrast = !!backgroundImage ? "grey-box" : "";
  return (
    <div className={`content ${backgroundImage}`}>
      <div className="container">
        <div className="content-container ">
          <div className={`content-order-1 ${backgroundContrast}`}>
            <div className="header-order-1">
              <h3>Justo petentium te vix, scripta regione urbanitas</h3>
            </div>

            <div className="body-order-1">
              <p>
                Populo facilisi nam no, dolor delenti deseruisse ne cum, nam
                quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo
                accumsan at vix. Ad vix legere impetus, nam consequat
                reformidans ut. No sit consul integre voluptatibus, omnium
                lucilius ne mel. Et ancillae recteque deterruisset sed, ea nec
                odio option, ferri assum eum et.
              </p>

              <ul>
                <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
                <li>
                  Te nam dolorem rationibus repudiandae, ne ius falli aliquip
                  consetetur
                </li>
                <li>Ut qui dicant copiosae interpretaris</li>
                <li>
                  Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
                </li>
              </ul>
            </div>
            <div className="footer-order-1" style={{ opacity: 1 }}>
              <button>Learn more</button>
            </div>
          </div>
          <div className={`content-order-2 content-image ${contentImage}`} />
        </div>
      </div>
    </div>
  );
}
