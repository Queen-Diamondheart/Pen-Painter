/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Painter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Cat-a", "./Painter/costumes/Cat-a.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      })
    ];

    this.sounds = [new Sound("Meow", "./Painter/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Pen" },
        this.whenIReceiveDrawPen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Smooth" },
        this.whenIReceiveDrawSmooth
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Wobble" },
        this.whenIReceiveDrawWobble
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Splatter" },
        this.whenIReceiveDrawSplatter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Zipper" },
        this.whenIReceiveDrawZipper
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Frost" },
        this.whenIReceiveDrawFrost
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Rays" },
        this.whenIReceiveDrawRays
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Draw - Homing" },
        this.whenIReceiveDrawHoming
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];

    this.vars.dist = 0;
    this.vars.ang = -90;
    this.vars.sx = 0;
    this.vars.sy = 0;
  }

  *setupPen() {
    this.penDown = false;
    this.penSize = this.stage.vars.penSize;
    if (this.stage.vars.penColor == "Black") {
      this.penColor = Color.rgb(38, 38, 38);
    } else {
      if (this.stage.vars.penColor == "Red") {
        this.penColor = Color.rgb(255, 0, 0);
      } else {
        if (this.stage.vars.penColor == "Green") {
          this.penColor = Color.rgb(66, 255, 0);
        } else {
          if (this.stage.vars.penColor == "Orange") {
            this.penColor = Color.rgb(255, 182, 24);
          } else {
            if (this.stage.vars.penColor == "Yellow") {
              this.penColor = Color.rgb(250, 255, 0);
            } else {
              if (this.stage.vars.penColor == "Teal") {
                this.penColor = Color.rgb(38, 243, 254);
              } else {
                if (this.stage.vars.penColor == "Rose Pink") {
                  this.penColor = Color.rgb(255, 196, 255);
                } else {
                  if (this.stage.vars.penColor == "Purple") {
                    this.penColor = Color.rgb(154, 100, 255);
                  } else {
                    if (this.stage.vars.penColor == "Purple") {
                      this.penColor = Color.rgb(154, 100, 255);
                    } else {
                      if (this.stage.vars.penColor == "Aqua Dark Green") {
                        this.penColor = Color.rgb(53, 226, 177);
                      } else {
                        if (this.stage.vars.penColor == "White") {
                          this.penColor = Color.rgb(255, 255, 255);
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveDrawPen() {
    this.penDown = true;
    while (!!this.mouse.down) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenIReceiveDrawSmooth() {
    this.penDown = true;
    while (!!this.mouse.down) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.move(Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) / 4);
      yield;
    }
  }

  *whenIReceiveDrawWobble() {
    this.penDown = true;
    while (!!this.mouse.down) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.direction += 40 * Math.sin(this.degToRad(this.timer * 1600));
      this.move(Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) / 6);
      yield;
    }
  }

  *whenIReceiveDrawSplatter() {
    while (!!this.mouse.down) {
      yield* this.splatter();
      yield;
    }
  }

  *whenIReceiveDrawZipper() {
    this.vars.ang = 90;
    this.penDown = true;
    while (!!this.mouse.down) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.vars.dist =
        Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) / 4;
      this.direction -= this.vars.ang;
      this.move(this.vars.dist / 2);
      this.direction += this.vars.ang;
      this.move(this.vars.dist);
      this.direction += this.vars.ang;
      this.move(this.vars.dist / 2);
      this.direction -= this.vars.ang;
      this.vars.ang = 0 - this.vars.ang;
      yield;
    }
  }

  *whenIReceiveDrawFrost() {
    this.penDown = true;
    while (!!this.mouse.down) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.vars.dist = Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y);
      this.move(this.vars.dist);
      this.direction += 180;
      this.move(this.vars.dist / 1.5);
      yield;
    }
  }

  *whenIReceiveDrawRays() {
    this.penDown = true;
    while (!!this.mouse.down) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.vars.dist = Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y);
      this.move(this.vars.dist);
      this.direction += 180;
      this.move(this.vars.dist);
      yield;
    }
  }

  *whenIReceiveDrawHoming() {
    this.penDown = true;
    this.vars.sx = 0;
    this.vars.sy = 0;
    while (!!this.mouse.down) {
      this.vars.sx += (this.mouse.x - this.x) / 10;
      this.vars.sy += (this.mouse.y - this.y) / 10;
      this.vars.sx = this.vars.sx * 0.9;
      this.vars.sy = this.vars.sy * 0.9;
      this.goto(this.x + this.vars.sx, this.y + this.vars.sy);
      yield;
    }
  }

  *splatter() {
    for (let i = 0; i < 10; i++) {
      this.goto(this.mouse.x, this.mouse.y);
      this.direction = this.random(0, 359);
      this.move(this.random(0, 4 * this.stage.vars.penSize));
      this.penDown = true;
      this.penDown = false;
    }
  }

  *whenIReceivePenChanged() {
    yield* this.setupPen();
    while (!!this.mouse.down) {
      yield;
    }
    while (true) {
      while (!this.mouse.down) {
        yield;
      }
      this.goto(this.mouse.x, this.mouse.y);
      yield* this.broadcastAndWait("" + "Draw - " + this.stage.vars.penType);
      this.penDown = false;
      yield;
    }
  }

  *whenIReceiveStart() {
    this.stage.vars.penType = "pen";
    this.stage.vars.penSize = 4;
    this.stage.vars.penColor = "Black";
    this.visible = false;
    this.clearPen();
    this.broadcast("Pen Changed");
  }
}
