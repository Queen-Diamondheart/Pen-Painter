/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Exit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Exit/costumes/costume1.svg", {
        x: 23.82894736842104,
        y: 23.25
      }),
      new Costume("blank", "./Exit/costumes/blank.svg", { x: 69, y: 58.5 })
    ];

    this.sounds = [new Sound("pop", "./Exit/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "View More" },
        this.whenIReceiveViewMore
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide Menu" },
        this.whenIReceiveHideMenu
      )
    ];
  }

  *whenIReceiveStart() {
    this.moveAhead();
    this.visible = false;
    while (!(this.costumeNumber == 2)) {
      if (this.costumeNumber == 2) {
        this.moveBehind();
      } else {
        this.moveAhead();
      }
      yield;
    }
  }

  *whenIReceiveViewMore() {
    this.visible = true;
    this.costume = "costume1";
    this.goto(194, 133);
  }

  *whenthisspriteclicked() {
    this.costume = "blank";
    this.broadcast("Hide");
    yield* this.wait(0.001);
    this.visible = false;
    this.penDown = false;
    this.goto(-140, 87);
    this.penDown = true;
    this.broadcast("Show SM");
  }

  *wait(secs) {
    yield* this.wait(secs);
  }

  *whenIReceiveHideMenu() {
    this.visible = false;
  }
}
