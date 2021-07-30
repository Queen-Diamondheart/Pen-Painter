/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ColorPurple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Color Green3", "./ColorPurple/costumes/Color Green3.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      }),
      new Costume(
        "Screenshot 2021-07-26 6",
        "./ColorPurple/costumes/Screenshot 2021-07-26 6.svg",
        { x: 11, y: 10.5 }
      )
    ];

    this.sounds = [new Sound("pop", "./ColorPurple/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      ),
      new Trigger(Trigger.BROADCAST, { name: "Show" }, this.whenIReceiveShow),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide Other Colors" },
        this.whenIReceiveHideOtherColors
      )
    ];

    this.vars.iconColor7 = "Purple";
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.goto(100, -164);
    this.vars.iconColor7 = "Purple";
  }

  *whenthisspriteclicked() {
    this.moveAhead();
    this.stage.vars.penColor = this.vars.iconColor7;
    this.broadcast("Pen Changed");
    this.broadcast("Hide Menu");
    this.broadcast("Hide Other Colors");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penColor == this.vars.iconColor7) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }

  *whenIReceiveShow() {
    this.visible = true;
    this.moveAhead();
    this.goto(-136, 90);
  }

  *whenIReceiveHideOtherColors() {
    this.visible = false;
  }
}
