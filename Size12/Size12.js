/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Size12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size8", "./Size12/costumes/Size8.svg", {
        x: 12.055544999999995,
        y: 12.022220000000004
      })
    ];

    this.sounds = [new Sound("pop", "./Size12/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];

    this.vars.iconWidth3 = 12;
  }

  *whenthisspriteclicked() {
    this.stage.vars.penSize = this.vars.iconWidth3;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penSize == this.vars.iconWidth3) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }

  *whenIReceiveStart() {
    this.goto(-130, -164);
    this.vars.iconWidth3 = 12;
  }
}
