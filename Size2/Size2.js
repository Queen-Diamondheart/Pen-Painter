/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Size2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size2", "./Size2/costumes/Size2.svg", {
        x: 12.055555555555543,
        y: 12.022221883138002
      })
    ];

    this.sounds = [new Sound("pop", "./Size2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];

    this.vars.buttonValue = 2;
  }

  *whenthisspriteclicked() {
    this.stage.vars.penSize = this.vars.buttonValue;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penSize == this.vars.buttonValue) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }

  *whenIReceiveStart() {
    this.goto(-220, -164);
    this.vars.buttonValue = 2;
  }
}
