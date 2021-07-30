/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ColorBlack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Color Black", "./ColorBlack/costumes/Color Black.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      })
    ];

    this.sounds = [new Sound("pop", "./ColorBlack/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];

    this.vars.iconColor = "black";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penColor = this.vars.iconColor;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penColor == this.vars.iconColor) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }

  *whenIReceiveStart() {
    this.goto(-80, -164);
    this.vars.iconColor = "black";
  }
}
