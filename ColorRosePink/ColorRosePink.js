/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ColorRosePink extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Color Green3", "./ColorRosePink/costumes/Color Green3.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      })
    ];

    this.sounds = [new Sound("pop", "./ColorRosePink/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.iconColor6 = "Rose Pink";
  }

  *whenIReceiveStart() {
    this.goto(100, -164);
    this.vars.iconColor6 = "Rose Pink";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penColor = this.vars.iconColor6;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penColor == this.vars.iconColor6) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
