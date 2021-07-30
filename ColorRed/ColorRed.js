/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ColorRed extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Color Red", "./ColorRed/costumes/Color Red.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      })
    ];

    this.sounds = [new Sound("pop", "./ColorRed/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.buttonValue2 = "red";
  }

  *whenIReceiveStart() {
    this.goto(-50, -164);
    this.vars.buttonValue2 = "red";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penColor = this.vars.buttonValue2;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penColor == this.vars.buttonValue2) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
