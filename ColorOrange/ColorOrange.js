/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ColorOrange extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Color Black", "./ColorOrange/costumes/Color Black.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      }),
      new Costume("Color Red", "./ColorOrange/costumes/Color Red.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      }),
      new Costume("Color Green", "./ColorOrange/costumes/Color Green.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      }),
      new Costume("Color Green2", "./ColorOrange/costumes/Color Green2.svg", {
        x: 12.111109999999996,
        y: 12.111109999999996
      })
    ];

    this.sounds = [new Sound("pop", "./ColorOrange/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.iconColor3 = "orange";
  }

  *whenIReceiveStart() {
    this.goto(10, -164);
    this.vars.iconColor3 = "orange";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penColor = this.vars.iconColor3;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penColor == this.vars.iconColor3) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
