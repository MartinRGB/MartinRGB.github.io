require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iPhone6Keyboard":[function(require,module,exports){

/*
    iOS Keyboard for Framer
    http://github.com/supsupmo/iPhone6Keyboard-for-framer
 */
var delayDestroy, iPhone6KeyLocation, iPhone6KeyProps, iPhone6Keyboard, iPhone6Props, keyboard, keyboardUp;

iPhone6Keyboard = {};

keyboard = null;

keyboardUp = false;

iPhone6Keyboard.create = function() {
  var props;
  props = iPhone6Props;
  keyboard = new Layer({
    height: props.height,
    width: props.width,
    y: props.screenHeight,
    image: "modules/iphone6Keyboard.jpg"
  });
  keyboard.states.animationOptions = {
    time: props.keyboardSpeed,
    curve: "ease-in-out"
  };
  return keyboard.states.add({
    show: {
      y: props.screenHeight - props.height
    }
  });
};

iPhone6Keyboard.keyPress = function(letter) {
  var aTime, animationA, animationB, bDelay, bTime, delay, overlay;
  overlay = new Layer({
    superLayer: keyboard,
    x: 0,
    y: 0,
    borderRadius: 6,
    width: iPhone6KeyProps.width,
    height: iPhone6KeyProps.height,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    opacity: 0
  });
  if (iPhone6KeyLocation[letter]) {
    overlay.x = iPhone6KeyLocation[letter].x;
  }
  if (iPhone6KeyLocation[letter]) {
    overlay.y = iPhone6KeyLocation[letter].y;
  }
  if (iPhone6KeyLocation[letter] && iPhone6KeyLocation[letter].width) {
    overlay.width = iPhone6KeyLocation[letter].width;
  }
  aTime = 0.05;
  bDelay = 0.1;
  bTime = 0.25;
  animationA = new Animation({
    layer: overlay,
    properties: {
      opacity: 1
    },
    time: aTime,
    curve: "linear"
  });
  animationB = new Animation({
    layer: overlay,
    properties: {
      opacity: 0
    },
    delay: bDelay,
    time: bTime,
    curve: "linear"
  });
  animationA.on(Events.AnimationEnd, animationB.start);
  delay = aTime + bDelay + bTime;
  animationB.on(Events.AnimationEnd, delayDestroy(delay, overlay));
  return animationA.start();
};

delayDestroy = function(delay, layer) {
  return Utils.delay(delay, function() {
    return layer.destroy();
  });
};

iPhone6Keyboard.show = function(immediate) {
  if (immediate == null) {
    immediate = false;
  }
  if (immediate) {
    keyboard.states.switchInstant("show");
  } else {
    keyboard.states["switch"]("show");
  }
  return keyboardUp = true;
};

iPhone6Keyboard.hide = function(immediate) {
  if (immediate == null) {
    immediate = true;
  }
  if (immediate) {
    keyboard.states.switchInstant("default");
  } else {
    keyboard.states["switch"]("default");
  }
  return keyboardUp = false;
};

iPhone6Props = {
  height: 432,
  width: 750,
  screenHeight: 1334,
  screenWidth: 750,
  keyboardSpeed: 0.35
};

iPhone6KeyProps = {
  width: 245,
  height: 108
};

iPhone6KeyLocation = {
  num1: {
    "x": 0,
    "y": 0,
    "width": 245,
    "height": 108
  },
  num2: {
    "x": 246,
    "y": 0,
    "width": 258,
    "height": 108
  },
  num3: {
    "x": 505,
    "y": 0,
    "width": 245,
    "height": 108
  },
  num4: {
    "x": 0,
    "y": 109,
    "width": 245,
    "height": 107
  },
  num5: {
    "x": 246,
    "y": 109,
    "width": 258,
    "height": 107
  },
  num6: {
    "x": 505,
    "y": 109,
    "width": 245,
    "height": 107
  },
  num7: {
    "x": 0,
    "y": 217,
    "width": 245,
    "height": 107
  },
  num8: {
    "x": 246,
    "y": 217,
    "width": 258,
    "height": 107
  },
  num9: {
    "x": 505,
    "y": 217,
    "width": 245,
    "height": 107
  },
  num0: {
    "x": 246,
    "y": 325,
    "width": 258,
    "height": 107
  },
  "delete": {
    "x": 505,
    "y": 0,
    "width": 245,
    "height": 107
  }
};

_.extend(exports, iPhone6Keyboard);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTWFydGluUkdCL0Rlc2t0b3AvR2l0aHViL01hcnRpblJHQi5naXRodWIuaW8vRnJhbWVyX1Byb3RvL0hUTS5mcmFtZXIvbW9kdWxlcy9pUGhvbmU2S2V5Ym9hcmQuY29mZmVlIiwiL1VzZXJzL01hcnRpblJHQi9EZXNrdG9wL0dpdGh1Yi9NYXJ0aW5SR0IuZ2l0aHViLmlvL0ZyYW1lcl9Qcm90by9IVE0uZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBOzs7O0FBQUEsSUFBQTs7QUFRQSxlQUFBLEdBQWtCOztBQUNsQixRQUFBLEdBQVc7O0FBQ1gsVUFBQSxHQUFhOztBQU1iLGVBQWUsQ0FBQyxNQUFoQixHQUF5QixTQUFBO0FBSXJCLE1BQUE7RUFBQSxLQUFBLEdBQVE7RUFDUixRQUFBLEdBQWUsSUFBQSxLQUFBLENBQ1g7SUFBQSxNQUFBLEVBQVEsS0FBSyxDQUFDLE1BQWQ7SUFBc0IsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFuQztJQUEwQyxDQUFBLEVBQUcsS0FBSyxDQUFDLFlBQW5EO0lBQ0EsS0FBQSxFQUFPLDZCQURQO0dBRFc7RUFJZixRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFoQixHQUFtQztJQUUvQixJQUFBLEVBQU0sS0FBSyxDQUFDLGFBRm1CO0lBRUosS0FBQSxFQUFPLGFBRkg7O1NBS25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBaEIsQ0FBb0I7SUFDaEIsSUFBQSxFQUFNO01BQUUsQ0FBQSxFQUFHLEtBQUssQ0FBQyxZQUFOLEdBQXFCLEtBQUssQ0FBQyxNQUFoQztLQURVO0dBQXBCO0FBZHFCOztBQW1CekIsZUFBZSxDQUFDLFFBQWhCLEdBQTJCLFNBQUMsTUFBRDtBQUN2QixNQUFBO0VBQUEsT0FBQSxHQUFjLElBQUEsS0FBQSxDQUNWO0lBQUEsVUFBQSxFQUFZLFFBQVo7SUFB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RUFlQSxJQUFBLEVBQU07SUFBQSxHQUFBLEVBQUssR0FBTDtJQUFVLEdBQUEsRUFBSyxHQUFmO0lBQW1CLE9BQUEsRUFBUSxHQUEzQjtJQUErQixRQUFBLEVBQVMsR0FBeEM7R0FmTjtFQWdCQSxRQUFBLEVBQVE7SUFBQSxHQUFBLEVBQUssR0FBTDtJQUFVLEdBQUEsRUFBSyxDQUFmO0lBQWlCLE9BQUEsRUFBUSxHQUF6QjtJQUE2QixRQUFBLEVBQVMsR0FBdEM7R0FoQlI7OztBQW9CSixDQUFDLENBQUMsTUFBRixDQUFTLE9BQVQsRUFBa0IsZUFBbEI7Ozs7QUMxSEEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyNcbiAgICBpT1MgS2V5Ym9hcmQgZm9yIEZyYW1lclxuICAgIGh0dHA6Ly9naXRodWIuY29tL3N1cHN1cG1vL2lQaG9uZTZLZXlib2FyZC1mb3ItZnJhbWVyXG4jIyNcblxuIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIFZhcnNcblxuaVBob25lNktleWJvYXJkID0ge31cbmtleWJvYXJkID0gbnVsbFxua2V5Ym9hcmRVcCA9IGZhbHNlXG5cblxuIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIEZ1bmN0aW9uc1xuXG5pUGhvbmU2S2V5Ym9hcmQuY3JlYXRlID0gLT5cblxuICAgICMgVE9ETzogQWRkIG90aGVyIGlQaG9uZSBmYWN0b3JzIGlmIHRoZXJlJ3MgZGVtYW5kXG5cbiAgICBwcm9wcyA9IGlQaG9uZTZQcm9wc1xuICAgIGtleWJvYXJkID0gbmV3IExheWVyXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LCB3aWR0aDogcHJvcHMud2lkdGgsIHk6IHByb3BzLnNjcmVlbkhlaWdodFxuICAgICAgICBpbWFnZTogXCJtb2R1bGVzL2lwaG9uZTZLZXlib2FyZC5qcGdcIlxuXG4gICAga2V5Ym9hcmQuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgICMgVE9ETzogTWltaWMgdGhlIGFjdHVhbCB0aW1pbmcgJiBjdXJ2ZVxuICAgICAgICB0aW1lOiBwcm9wcy5rZXlib2FyZFNwZWVkLCBjdXJ2ZTogXCJlYXNlLWluLW91dFwiXG4gICAgfVxuXG4gICAga2V5Ym9hcmQuc3RhdGVzLmFkZCh7XG4gICAgICAgIHNob3c6IHsgeTogcHJvcHMuc2NyZWVuSGVpZ2h0IC0gcHJvcHMuaGVpZ2h0IH1cbiAgICB9KVxuXG5cbmlQaG9uZTZLZXlib2FyZC5rZXlQcmVzcyA9IChsZXR0ZXIpIC0+XG4gICAgb3ZlcmxheSA9IG5ldyBMYXllclxuICAgICAgICBzdXBlckxheWVyOiBrZXlib2FyZCwgeDogMCwgeTogMCwgYm9yZGVyUmFkaXVzOiA2LFxuICAgICAgICB3aWR0aDogaVBob25lNktleVByb3BzLndpZHRoLCBoZWlnaHQ6IGlQaG9uZTZLZXlQcm9wcy5oZWlnaHQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMjUpXCIsIG9wYWNpdHk6IDBcblxuICAgIG92ZXJsYXkueCA9IGlQaG9uZTZLZXlMb2NhdGlvbltsZXR0ZXJdLnggaWYgaVBob25lNktleUxvY2F0aW9uW2xldHRlcl1cbiAgICBvdmVybGF5LnkgPSBpUGhvbmU2S2V5TG9jYXRpb25bbGV0dGVyXS55IGlmIGlQaG9uZTZLZXlMb2NhdGlvbltsZXR0ZXJdXG4gICAgb3ZlcmxheS53aWR0aCA9IGlQaG9uZTZLZXlMb2NhdGlvbltsZXR0ZXJdLndpZHRoIGlmIGlQaG9uZTZLZXlMb2NhdGlvbltsZXR0ZXJdIGFuZCBpUGhvbmU2S2V5TG9jYXRpb25bbGV0dGVyXS53aWR0aFxuXG4gICAgYVRpbWUgPSAwLjA1XG4gICAgYkRlbGF5ID0gMC4xXG4gICAgYlRpbWUgPSAwLjI1XG5cbiAgICBhbmltYXRpb25BID0gbmV3IEFuaW1hdGlvbih7XG4gICAgICAgIGxheWVyOiBvdmVybGF5XG4gICAgICAgIHByb3BlcnRpZXM6IHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRpbWU6ICAgYVRpbWVcbiAgICAgICAgY3VydmU6ICBcImxpbmVhclwiXG4gICAgfSlcblxuICAgIGFuaW1hdGlvbkIgPSBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgbGF5ZXI6IG92ZXJsYXlcbiAgICAgICAgcHJvcGVydGllczogeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgZGVsYXk6ICBiRGVsYXlcbiAgICAgICAgdGltZTogICBiVGltZVxuICAgICAgICBjdXJ2ZTogIFwibGluZWFyXCJcbiAgICB9KVxuXG4gICAgYW5pbWF0aW9uQS5vbihFdmVudHMuQW5pbWF0aW9uRW5kLCBhbmltYXRpb25CLnN0YXJ0KVxuICAgIGRlbGF5ID0gYVRpbWUgKyBiRGVsYXkgKyBiVGltZVxuICAgIGFuaW1hdGlvbkIub24oRXZlbnRzLkFuaW1hdGlvbkVuZCwgZGVsYXlEZXN0cm95KGRlbGF5LCBvdmVybGF5KSlcbiAgICBhbmltYXRpb25BLnN0YXJ0KClcblxuXG5kZWxheURlc3Ryb3kgPSAoZGVsYXksIGxheWVyKSAtPlxuICAgIFV0aWxzLmRlbGF5IGRlbGF5LCAtPlxuICAgICAgICBsYXllci5kZXN0cm95KClcblxuXG5pUGhvbmU2S2V5Ym9hcmQuc2hvdyA9IChpbW1lZGlhdGUgPSBmYWxzZSkgLT5cbiAgICBpZiBpbW1lZGlhdGVcbiAgICAgICAga2V5Ym9hcmQuc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJzaG93XCIpXG4gICAgZWxzZVxuICAgICAgICBrZXlib2FyZC5zdGF0ZXMuc3dpdGNoKFwic2hvd1wiKVxuICAgIGtleWJvYXJkVXAgPSB0cnVlXG5cblxuaVBob25lNktleWJvYXJkLmhpZGUgPSAoaW1tZWRpYXRlID0gdHJ1ZSkgLT5cbiAgICBpZiBpbW1lZGlhdGVcbiAgICAgICAga2V5Ym9hcmQuc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJkZWZhdWx0XCIpXG4gICAgZWxzZVxuICAgICAgICBrZXlib2FyZC5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuICAgIGtleWJvYXJkVXAgPSBmYWxzZVxuXG5cbiMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIyBQcm9wZXJ0aWVzXG5cbmlQaG9uZTZQcm9wcyA9XG4gICAgaGVpZ2h0OiA0MzJcbiAgICB3aWR0aDogNzUwXG4gICAgc2NyZWVuSGVpZ2h0OiAxMzM0XG4gICAgc2NyZWVuV2lkdGg6IDc1MFxuICAgIGtleWJvYXJkU3BlZWQ6IDAuMzVcblxuaVBob25lNktleVByb3BzID1cbiAgICB3aWR0aDogMjQ1LCBoZWlnaHQ6IDEwOFxuXG5pUGhvbmU2S2V5TG9jYXRpb24gPVxuICAgICMgRmlyc3QgUm93IG9mIEtleXNcbiAgICBudW0xOiBcInhcIjogMCwgXCJ5XCI6IDAsXCJ3aWR0aFwiOjI0NSxcImhlaWdodFwiOjEwOFxuICAgIG51bTI6IFwieFwiOiAyNDYsIFwieVwiOiAwLFwid2lkdGhcIjoyNTgsXCJoZWlnaHRcIjoxMDhcbiAgICBudW0zOiBcInhcIjogNTA1LCBcInlcIjogMCxcIndpZHRoXCI6MjQ1LFwiaGVpZ2h0XCI6MTA4XG5cbiAgICAjIFNlY29uZCBSb3cgb2YgS2V5c1xuICAgIG51bTQ6IFwieFwiOiAwLCBcInlcIjogMTA5LFwid2lkdGhcIjoyNDUsXCJoZWlnaHRcIjoxMDdcbiAgICBudW01OiBcInhcIjogMjQ2LCBcInlcIjogMTA5LFwid2lkdGhcIjoyNTgsXCJoZWlnaHRcIjoxMDdcbiAgICBudW02OiBcInhcIjogNTA1LCBcInlcIjogMTA5LFwid2lkdGhcIjoyNDUsXCJoZWlnaHRcIjoxMDdcblxuICAgICMgVGhpcmQgUm93IG9mIEtleXNcbiAgICBudW03OiBcInhcIjogMCwgXCJ5XCI6IDIxNyxcIndpZHRoXCI6MjQ1LFwiaGVpZ2h0XCI6MTA3XG4gICAgbnVtODogXCJ4XCI6IDI0NiwgXCJ5XCI6IDIxNyxcIndpZHRoXCI6MjU4LFwiaGVpZ2h0XCI6MTA3XG4gICAgbnVtOTogXCJ4XCI6IDUwNSwgXCJ5XCI6IDIxNyxcIndpZHRoXCI6MjQ1LFwiaGVpZ2h0XCI6MTA3XG5cbiAgICAjIE1pc2MgS2V5c1xuICAgIG51bTA6IFwieFwiOiAyNDYsIFwieVwiOiAzMjUsXCJ3aWR0aFwiOjI1OCxcImhlaWdodFwiOjEwN1xuICAgIGRlbGV0ZTogXCJ4XCI6IDUwNSwgXCJ5XCI6IDAsXCJ3aWR0aFwiOjI0NSxcImhlaWdodFwiOjEwN1xuXG5cblxuXy5leHRlbmQoZXhwb3J0cywgaVBob25lNktleWJvYXJkKVxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
