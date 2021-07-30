/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TypePen4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size2", "./TypePen4/costumes/Size2.svg", {
        x: 12.055555555555543,
        y: 12.022221883138002
      })
    ];

    this.sounds = [new Sound("pop", "./TypePen4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.iconType2 = "splatter";
  }

  *whenIReceiveStart() {
    this.goto(-224, 70);
    this.vars.iconType2 = "splatter";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penType = this.vars.iconType2;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penType == this.vars.iconType2) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
