import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Painter from "./Painter/Painter.js";
import Intro from "./Intro/Intro.js";
import Size2 from "./Size2/Size2.js";
import Size4 from "./Size4/Size4.js";
import Size8 from "./Size8/Size8.js";
import Size12 from "./Size12/Size12.js";
import ColorBlack from "./ColorBlack/ColorBlack.js";
import ColorRed from "./ColorRed/ColorRed.js";
import ColorGreen from "./ColorGreen/ColorGreen.js";
import ColorOrange from "./ColorOrange/ColorOrange.js";
import ColorYellow from "./ColorYellow/ColorYellow.js";
import ColorTeal from "./ColorTeal/ColorTeal.js";
import ColorRosePink from "./ColorRosePink/ColorRosePink.js";
import Clear from "./Clear/Clear.js";
import TypePen from "./TypePen/TypePen.js";
import TypePen2 from "./TypePen2/TypePen2.js";
import TypePen3 from "./TypePen3/TypePen3.js";
import TypePen4 from "./TypePen4/TypePen4.js";
import TypePen5 from "./TypePen5/TypePen5.js";
import TypePen6 from "./TypePen6/TypePen6.js";
import TypePen7 from "./TypePen7/TypePen7.js";
import TypePen8 from "./TypePen8/TypePen8.js";
import TypePen9 from "./TypePen9/TypePen9.js";
import Toolbar from "./Toolbar/Toolbar.js";
import ColorPurple from "./ColorPurple/ColorPurple.js";
import Menu from "./Menu/Menu.js";
import Colors from "./Colors/Colors.js";
import Exit from "./Exit/Exit.js";
import ColorAdg from "./ColorAdg/ColorAdg.js";
import PenPaintingThumbnail from "./PenPaintingThumbnail/PenPaintingThumbnail.js";
import Music from "./Music/Music.js";
import ColorRosePink2 from "./ColorRosePink2/ColorRosePink2.js";
import BgIntro from "./BgIntro/BgIntro.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Painter: new Painter({
    x: -99,
    y: -50,
    direction: -141.17024089399536,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Intro: new Intro({
    x: 0,
    y: 0.4439011777552867,
    direction: 90,
    costumeNumber: 3,
    size: 95.33333333333333,
    visible: true,
    layerOrder: 30
  }),
  Size2: new Size2({
    x: -220,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 22
  }),
  Size4: new Size4({
    x: -190,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  Size8: new Size8({
    x: -160,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  Size12: new Size12({
    x: -130,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  ColorBlack: new ColorBlack({
    x: -80,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  ColorRed: new ColorRed({
    x: -50,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  ColorGreen: new ColorGreen({
    x: -20,
    y: -164,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  ColorOrange: new ColorOrange({
    x: 10,
    y: -164,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  ColorYellow: new ColorYellow({
    x: 40,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  ColorTeal: new ColorTeal({
    x: 70,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  ColorRosePink: new ColorRosePink({
    x: 100,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Clear: new Clear({
    x: -224,
    y: -110,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 23
  }),
  TypePen: new TypePen({
    x: -224,
    y: 160,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 24
  }),
  TypePen2: new TypePen2({
    x: -224,
    y: 130,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 21
  }),
  TypePen3: new TypePen3({
    x: -224,
    y: 100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 20
  }),
  TypePen4: new TypePen4({
    x: -224,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  TypePen5: new TypePen5({
    x: -224,
    y: 40,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 19
  }),
  TypePen6: new TypePen6({
    x: -224,
    y: 10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  }),
  TypePen7: new TypePen7({
    x: -224,
    y: -20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  }),
  TypePen8: new TypePen8({
    x: -224,
    y: -50,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  TypePen9: new TypePen9({
    x: -224,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 25
  }),
  Toolbar: new Toolbar({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  ColorPurple: new ColorPurple({
    x: 100,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  Menu: new Menu({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 26
  }),
  Colors: new Colors({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 32
  }),
  Exit: new Exit({
    x: -140,
    y: 87,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 33
  }),
  ColorAdg: new ColorAdg({
    x: -146,
    y: 90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 28
  }),
  PenPaintingThumbnail: new PenPaintingThumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 31
  }),
  Music: new Music({
    x: 171,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 1
  }),
  ColorRosePink2: new ColorRosePink2({
    x: 140,
    y: -164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  BgIntro: new BgIntro({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
