/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Music extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Music/costumes/costume1.svg", {
        x: 91.5,
        y: 42.5
      })
    ];

    this.sounds = [new Sound("pop", "./Music/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "View More" },
        this.whenIReceiveViewMore
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Show SM" },
        this.whenIReceiveShowSm
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.stage.watchers.songs.visible = false;
    this.goto(171, 153);
    this.size = 75;
    while (true) {
      this.moveBehind();
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Set Music");
    this.broadcast("Delete Songs");
  }

  *whenIReceiveViewMore() {
    this.visible = false;
  }

  *whenIReceiveShowSm() {
    this.visible = true;
  }
}
