/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Colors extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Colors/costumes/costume1.svg", {
        x: 91.5,
        y: 42.5
      }),
      new Costume("costume2", "./Colors/costumes/costume2.svg", {
        x: 154,
        y: 14
      })
    ];

    this.sounds = [new Sound("pop", "./Colors/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "View More" },
        this.whenIReceiveViewMore
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Check Ops" },
        this.whenIReceiveCheckOps
      ),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide Menu" },
        this.whenIReceiveHideMenu
      )
    ];
  }

  *whenIReceiveStart() {
    this.goto(0, 0);
    this.moveAhead();
    this.visible = false;
    this.costume = "costume1";
  }

  *whenIReceiveViewMore() {
    this.visible = true;
    this.goto(-102, 86);
    this.penDown = false;
  }

  *whenIReceiveCheckOps() {
    while (true) {
      if (this.touching(Color.rgb(166, 166, 166))) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.costume = "costume2";
    this.visible = true;
    this.goto(0, 90);
    this.broadcast("Show");
  }

  *whenIReceiveHideMenu() {
    this.visible = false;
    this.costume = "costume1";
  }
}
