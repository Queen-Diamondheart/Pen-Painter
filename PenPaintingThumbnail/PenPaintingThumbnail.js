/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PenPaintingThumbnail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Pen Painting Thumbnail",
        "./PenPaintingThumbnail/costumes/Pen Painting Thumbnail.svg",
        { x: 240, y: 180.8190155029297 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Thumbnail" },
        this.whenIReceiveStartThumbnail
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.checkTime = 103.25099999999999;
  }

  *whenIReceiveStartThumbnail() {
    this.broadcast("Start");
    while (true) {
      this.stage.vars.checkTimer = this.timer + 0.1;
      yield;
    }
  }

  *whengreaterthan() {
    this.goto(0, 0);
    this.visible = true;
    this.moveAhead();
    this.effects.clear();
    this.costume = "thumbnail";
    this.size = 100;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
