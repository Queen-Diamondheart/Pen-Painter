/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TypePen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size2", "./TypePen/costumes/Size2.svg", {
        x: 12.055544999999995,
        y: 12.022220000000004
      })
    ];

    this.sounds = [new Sound("pop", "./TypePen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.buttonValue3 = "pen";
  }

  *whenIReceiveStart() {
    this.goto(-224, 160);
    this.vars.buttonValue3 = "pen";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penType = this.vars.buttonValue3;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penType == this.vars.buttonValue3) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
