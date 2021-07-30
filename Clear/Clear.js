/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Clear extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bin", "./Clear/costumes/Bin.svg", {
        x: 12.055544999999995,
        y: 12.022220000000004
      }),
      new Costume("Bin2", "./Clear/costumes/Bin2.svg", {
        x: 52.5,
        y: 20.052083333333343
      })
    ];

    this.sounds = [new Sound("pop", "./Clear/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Pen Changed");
    yield* this.askAndWait("Are you sure you want to delete your work?");
    if (this.answer == "yes") {
      this.visible = false;
      this.clearPen();
      this.costume = "Bin2";
      this.visible = true;
      this.size = 150;
      this.goto(0, 0);
      yield* this.wait(2);
      this.costume = "Bin";
      this.goto(-224, -110);
      this.size = 100;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.goto(-224, -110);
    this.costume = "Bin";
    this.visible = true;
  }
}
