/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Size4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size4", "./Size4/costumes/Size4.svg", {
        x: 12.055555555555543,
        y: 12.022221883138002
      })
    ];

    this.sounds = [new Sound("pop", "./Size4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.iconWidth = 4;
  }

  *whenIReceiveStart() {
    this.goto(-190, -164);
    this.vars.iconWidth = 4;
  }

  *whenthisspriteclicked() {
    this.stage.vars.penSize = this.vars.iconWidth;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penSize == this.vars.iconWidth) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
