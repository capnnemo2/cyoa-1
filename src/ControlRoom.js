import React from "react";
import Context from "./Context";
import Switches from "./Switches";
import ManualCheck from "./ManualCheck";

export default class ControlRoom extends React.Component {
  static contextType = Context;

  render() {
    const hero = this.context.userName;
    const coffee = this.context.coffee.length;
    const realCoffee = coffee < 7;
    const instantCoffee = coffee > 4;
    const noSnooze = !this.context.snooze1;
    const oneSnooze = this.context.snooze1 && !this.context.snooze2;
    return hero ? (
      <div className="ControlRoom">
        {/* ZERO SNOOZE BUT NO COFFEE */}
        {noSnooze && !coffee ? (
          <div>
            <p>
              "Good morning, {hero}. You have five minutes to manually override
              the automatic depressurization."
            </p>
            <p>
              Unfortunately, you're drawing a blank and don't remember how to do
              that. Fortunately, it seems you have five minutes to figure it
              out. Or maybe you're feeling lucky?
            </p>
            <ManualCheck />
            <Switches />
          </div>
        ) : (
          ""
        )}
        {/* ZERO SNOOZE AND REAL COFFEE */}
        {noSnooze && coffee && realCoffee ? (
          <div>
            <p>
              "Good morning, {hero}. You have five minutes to manually override
              the automatic depressurization."
            </p>
            <p>
              Ah yes, the automatic depressurization. A terrible failsafe to
              ensure that if you perish that no evidence of Operation Space
              Chicken will be left behind.
            </p>
            <p>
              {" "}
              Every morning you have to override depressurization to prove
              you're still there and willing to continue the mission. Of course,
              if you decide you don't want to continue the mission you can
              always flip the blue switch. Otherwise, flip that red switch and
              enjoy the rest of your day.
            </p>
            <Switches />
          </div>
        ) : (
          ""
        )}
        {/* ZERO SNOOZE AND INSTANT COFFEE */}
        {noSnooze && coffee && instantCoffee ? (
          <div>
            <p>
              "Good morning, {hero}. You have two minutes to manually override
              the automatic depressurization."
            </p>
            <p>
              Unfortunately, you're drawing a blank and don't remember how to do
              that. Fortunately, it seems you have two minutes to figure it out.
              Or maybe you're feeling lucky?
            </p>
            <ManualCheck />
            <Switches />
          </div>
        ) : (
          ""
        )}
        {/* ONE SNOOZE AND NO COFFEE */}
        {oneSnooze && !coffee ? (
          <div>
            <p>one snooze and no coffee</p>
          </div>
        ) : (
          ""
        )}

        {/* ONE SNOOZE AND REAL COFFEE */}
        {/* ONE SNOOZE AND INSTANT COFFEE */}

        {/* TWO SNOOZE AND NO COFFEE */}
        {/* TWO SNOOZE AND REAL COFFEE */}
        {/* TWO SNOOZE AND INSTANT COFFEE */}

        {/* THREE SNOOZE */}
        {this.context.snooze3 ? (
          <div>
            <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
            <p>"Depressurization will commence in 3 seconds. 3...2..."</p>
            <p>
              No time! Either the red switch or the blue switch will cancel the
              automatic depressurization. Choose quickly!
            </p>
            <Switches />
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
