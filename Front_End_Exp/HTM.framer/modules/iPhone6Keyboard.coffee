###
    iOS Keyboard for Framer
    http://github.com/supsupmo/iPhone6Keyboard-for-framer
###

# =======================================================
# Vars

iPhone6Keyboard = {}
keyboard = null
keyboardUp = false


# =======================================================
# Functions

iPhone6Keyboard.create = ->

    # TODO: Add other iPhone factors if there's demand

    props = iPhone6Props
    keyboard = new Layer
        height: props.height, width: props.width, y: props.screenHeight
        image: "modules/iphone6Keyboard.jpg"

    keyboard.states.animationOptions = {
        # TODO: Mimic the actual timing & curve
        time: props.keyboardSpeed, curve: "ease-in-out"
    }

    keyboard.states.add({
        show: { y: props.screenHeight - props.height }
    })


iPhone6Keyboard.keyPress = (letter) ->
    overlay = new Layer
        superLayer: keyboard, x: 0, y: 0, borderRadius: 6,
        width: iPhone6KeyProps.width, height: iPhone6KeyProps.height,
        backgroundColor: "rgba(0, 0, 0, 0.25)", opacity: 0

    overlay.x = iPhone6KeyLocation[letter].x if iPhone6KeyLocation[letter]
    overlay.y = iPhone6KeyLocation[letter].y if iPhone6KeyLocation[letter]
    overlay.width = iPhone6KeyLocation[letter].width if iPhone6KeyLocation[letter] and iPhone6KeyLocation[letter].width

    aTime = 0.05
    bDelay = 0.1
    bTime = 0.25

    animationA = new Animation({
        layer: overlay
        properties: { opacity: 1 }
        time:   aTime
        curve:  "linear"
    })

    animationB = new Animation({
        layer: overlay
        properties: { opacity: 0 }
        delay:  bDelay
        time:   bTime
        curve:  "linear"
    })

    animationA.on(Events.AnimationEnd, animationB.start)
    delay = aTime + bDelay + bTime
    animationB.on(Events.AnimationEnd, delayDestroy(delay, overlay))
    animationA.start()


delayDestroy = (delay, layer) ->
    Utils.delay delay, ->
        layer.destroy()


iPhone6Keyboard.show = (immediate = false) ->
    if immediate
        keyboard.states.switchInstant("show")
    else
        keyboard.states.switch("show")
    keyboardUp = true


iPhone6Keyboard.hide = (immediate = true) ->
    if immediate
        keyboard.states.switchInstant("default")
    else
        keyboard.states.switch("default")
    keyboardUp = false


# =======================================================
# Properties

iPhone6Props =
    height: 432
    width: 750
    screenHeight: 1334
    screenWidth: 750
    keyboardSpeed: 0.35

iPhone6KeyProps =
    width: 245, height: 108

iPhone6KeyLocation =
    # First Row of Keys
    num1: "x": 0, "y": 0,"width":245,"height":108
    num2: "x": 246, "y": 0,"width":258,"height":108
    num3: "x": 505, "y": 0,"width":245,"height":108

    # Second Row of Keys
    num4: "x": 0, "y": 109,"width":245,"height":107
    num5: "x": 246, "y": 109,"width":258,"height":107
    num6: "x": 505, "y": 109,"width":245,"height":107

    # Third Row of Keys
    num7: "x": 0, "y": 217,"width":245,"height":107
    num8: "x": 246, "y": 217,"width":258,"height":107
    num9: "x": 505, "y": 217,"width":245,"height":107

    # Misc Keys
    num0: "x": 246, "y": 325,"width":258,"height":107
    delete: "x": 505, "y": 0,"width":245,"height":107



_.extend(exports, iPhone6Keyboard)
