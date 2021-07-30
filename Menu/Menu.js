/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Menu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Menu/costumes/costume1.svg", {
        x: 220.5,
        y: 156.50000000000009
      })
    ];

    this.sounds = [new Sound("pop", "./Menu/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "View More" },
        this.whenIReceiveViewMore
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide Menu" },
        this.whenIReceiveHideMenu
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveViewMore() {
    this.visible = true;
    this.goto(0, 0);
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenIReceiveHideMenu() {
    this.visible = false;
    yield* this.broadcastAndWait("Show SM");
  }
}
