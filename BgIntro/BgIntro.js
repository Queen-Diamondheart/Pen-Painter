/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BgIntro extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BgIntro/costumes/costume1.svg", {
        x: 241.30557250976562,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./BgIntro/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
    this.moveBehind(4);
  }

  *whenIReceiveStart() {
    this.visible = false;
  }
}
