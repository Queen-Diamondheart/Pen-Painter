/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("Voiceover", "./Stage/sounds/Voiceover.mp3"),
      new Sound(
        "Bloxburg Building music",
        "./Stage/sounds/Bloxburg Building music.mp3"
      ),
      new Sound("Believer", "./Stage/sounds/Believer.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Set Music" },
        this.whenIReceiveSetMusic
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Delete Songs" },
        this.whenIReceiveDeleteSongs
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];

    this.vars.penSize = 4;
    this.vars.penColor = "Black";
    this.vars.penType = "Rainbow";
    this.vars.log = 0;
    this.vars.listOps = "Hide";
    this.vars.checkTimer = 30.130000000000003;
    this.vars.songs = [];

    this.watchers.songs = new Watcher({
      label: "Songs",
      style: "normal",
      visible: false,
      value: () => this.vars.songs,
      x: 248,
      y: 174,
      width: 465,
      height: 265
    });
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 100;
    this.vars.songs = [];
    this.vars.listOps = "Hide";
    while (!(this.vars.listOps == "Show")) {
      yield* this.playSoundUntilDone("Bloxburg Building music");
      yield;
    }
  }

  *whenIReceiveSetMusic() {
    this.watchers.songs.visible = true;
    this.vars.songs.push("s1 - Bloxburg Building music");
    yield* this.wait(0.2);
    this.vars.songs.push("s2 - Imagine Dragons - Believer");
    yield* this.wait(0.2);
    this.vars.listOps = "Show";
    yield* this.askAndWait(
      "What song would you like to play? (Put the first 2 letters of the options as your answer. Example: s1)"
    );
    this.vars.listOps = "Hide";
    this.watchers.songs.visible = false;
    if (this.answer == "s1") {
      while (!(this.vars.listOps == "Show")) {
        yield* this.playSoundUntilDone("Bloxburg Building music");
        yield;
      }
    } else {
      if (this.answer == "s2") {
        while (!(this.vars.listOps == "Show")) {
          yield* this.playSoundUntilDone("Believer");
          yield;
        }
      } else {
        if (this.answer == "s3") {
          while (!(this.vars.listOps == "Show")) {
            null;
            yield;
          }
        } else {
          if (this.answer == "s4") {
            while (!(this.vars.listOps == "Show")) {
              null;
              yield;
            }
          } else {
            null;
          }
        }
      }
    }
  }

  *whenIReceiveDeleteSongs() {
    this.vars.songs = [];
  }

  *whenIReceiveStart() {}
}
