/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Intro extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Back", "./Intro/costumes/Back.svg", {
        x: 248.20656532997842,
        y: 199.82587909073044
      }),
      new Costume("Text", "./Intro/costumes/Text.svg", {
        x: 248.206565,
        y: 199.82588
      }),
      new Costume("Complete", "./Intro/costumes/Complete.svg", {
        x: 248.206565,
        y: 199.82588
      })
    ];

    this.sounds = [new Sound("pop", "./Intro/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.yBounce = -0.020168814320799353;
  }

  *startAsClone() {
    while (!(Math.round(this.y) == -110)) {
      this.y += (-110 - this.y) / 4;
      this.size += (40 - this.size) / 6;
      yield;
    }
    while (!(Math.round(this.y) == 0)) {
      this.y += (0 - this.y) / 3;
      this.size += (100 - this.size) / 6;
      yield;
    }
    yield* this.wait(0.1);
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
    this.direction = 90;
    this.visible = true;
    this.costume = "Complete";
    this.size = 50;
    this.vars.yBounce = 30;
    for (let i = 0; i < 30; i++) {
      this.vars.yBounce = this.vars.yBounce * 0.7 + (50 - this.size) / 3;
      this.size += this.vars.yBounce;
      yield;
    }
    this.size = 50;
    this.costume = "Back";
    this.effects.clear();
    this.createClone();
    this.costume = "Text";
    while (!(Math.round(this.y) == 130)) {
      this.y += (130 - this.y) / 4;
      this.size += (40 - this.size) / 6;
      yield;
    }
    while (!(Math.round(this.y) == 0)) {
      this.y += (0 - this.y) / 3;
      this.size += (100 - this.size) / 6;
      yield;
    }
    this.costume = "Complete";
    yield* this.wait(0.1);
    while (!(Math.round(this.size) == 2)) {
      this.size += (2 - this.size) / 6;
      this.direction += (130 - this.direction) / 4;
      yield;
    }
    this.visible = false;
    this.broadcast("Start Thumbnail");
  }
}
