/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Toolbar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Toolbar/costumes/costume1.svg", {
        x: 251,
        y: 185.5
      })
    ];

    this.sounds = [new Sound("pop", "./Toolbar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.moveBehind();
    this.goto(0, 0);
  }
}
