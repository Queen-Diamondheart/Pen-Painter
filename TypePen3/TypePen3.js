/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TypePen3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size2", "./TypePen3/costumes/Size2.svg", {
        x: 12.055555555555543,
        y: 12.022221883138002
      })
    ];

    this.sounds = [new Sound("pop", "./TypePen3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.buttonValue4 = "wobble";
  }

  *whenIReceiveStart() {
    this.goto(-224, 100);
    this.vars.buttonValue4 = "wobble";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penType = this.vars.buttonValue4;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penType == this.vars.buttonValue4) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
