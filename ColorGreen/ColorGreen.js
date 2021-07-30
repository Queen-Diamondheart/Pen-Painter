/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ColorGreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Color Black", "./ColorGreen/costumes/Color Black.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      }),
      new Costume("Color Red", "./ColorGreen/costumes/Color Red.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      }),
      new Costume("Color Green", "./ColorGreen/costumes/Color Green.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      })
    ];

    this.sounds = [new Sound("pop", "./ColorGreen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.iconColor2 = "green";
  }

  *whenIReceiveStart() {
    this.goto(-20, -164);
    this.vars.iconColor2 = "green";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penColor = this.vars.iconColor2;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penColor == this.vars.iconColor2) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
