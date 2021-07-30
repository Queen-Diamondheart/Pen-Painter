/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TypePen9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size2", "./TypePen9/costumes/Size2.svg", {
        x: 12.055524999999989,
        y: 12.022220000000004
      })
    ];

    this.sounds = [new Sound("pop", "./TypePen9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart2)
    ];

    this.vars.iconType7 = "More";
  }

  *whenIReceiveStart() {
    this.goto(-224, -80);
    this.vars.iconType7 = "More";
  }

  *whenthisspriteclicked() {
    this.broadcast("View More");
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 0;
      } else {
        this.effects.brightness = 15;
      }
      yield;
    }
  }
}
