#1. Import file "App" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/App@2x")

#2. Make 'sketch.' as global variable
Utils.globalLayers(sketch)

#3. Init Setting
TopBoard.x = 40
TopBoard.y = 40
maskBoard.addSubLayer(TopBoard)
maskBoard.clip = true

alldelaytime = 0
bezier1 = "bezier-curve(.35,.95,.56,.98)"
bezier2 = "bezier-curve(.33,0,.25,1)"
spring1 = 'spring(100,10,10)'

hitarea1 = new Layer
	x: 48,y:949,width: 138,height: 36, borderRadius: 2,opacity: 0, backgroundColor: "rgba(123,123,123,1)"
Page1.addSubLayer(hitarea1)

hitarea2= new Layer
	x: 365,y:550,width: 100,height: 100, borderRadius: 2,opacity: 0, backgroundColor: "rgba(123,123,123,1)"
maskBoard.addSubLayer(hitarea2)

hitarea1.states.add
	closed:
		opacity: 0
	opened:
		opacity: 0.3
hitarea1.states.animationOptions =
    curve: spring1
hitarea1.states.switchInstant("closed")

maskBoard.states.add
	closed:
		height:40
	opened:
		height:684
maskBoard.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0 + alldelaytime
maskBoard.states.switchInstant("closed")

collapsedBtn.states.add
	closed:
		y:-32+12
	opened:
		y:277*2+12
collapsedBtn.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0 + alldelaytime
collapsedBtn.states.switchInstant("closed")

App_Icon.states.add
	closed:
		#x:72
		opacity:0
		y:294
	opened:
		#x:32
		opacity:1
		y:334
App_Icon.states.animationOptions =
    curve: bezier1
    time:0.5
    #delay:0.2 + alldelaytime
    delay:0.25 + alldelaytime
App_Icon.states.switchInstant("closed")

productTitle.states.add
	closed:
		#x:236
		opacity:0
		y:310
	opened:
		#x:256
		opacity:1
		y:350
productTitle.states.animationOptions =
    curve: bezier1
    time:0.5
    #delay:0.22 + alldelaytime
    delay:0.25 + alldelaytime
productTitle.states.switchInstant("closed")

describe.states.add
	closed:
		#x:238
		opacity:0
		y:398
	opened:
		#x:258
		opacity:1
		y:438
describe.states.animationOptions =
    curve: bezier1
    time:0.5
    #delay:0.24 + alldelaytime
    delay:0.25 + alldelaytime
describe.states.switchInstant("closed")

button.states.add
	closed:
		opacity: 0
		y:304
	opened:
		opacity: 1
		y:344
button.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.25 + alldelaytime
button.states.switchInstant("closed")

Bannber.states.add
	closed:
		y:-40
		opacity: 0
	opened:
		y:0
		opacity: 1
Bannber.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.25 + alldelaytime
Bannber.states.switchInstant("closed")


animationInArray = [hitarea1,maskBoard,App_Icon,productTitle,describe,collapsedBtn,button,Bannber]

hitarea1.onClick ->
	
	for animLayers in animationInArray
		animLayers.states.switch("opened")
		
hitarea2.onClick ->
	for animLayers in animationInArray
		animLayers.states.switch("closed")

########################################Transition Part########################################

blackMask = new Layer
	x: 0,y:0,width: 750,height: 1334, borderRadius: 0,opacity: 0, backgroundColor: "black"

blackMask.states.add
	opened:
		opacity: 0.5
	closed:
		opacity: 0
blackMask.states.animationOptions =
    curve: bezier2
    time:0.5
blackMask.states.switchInstant("closed")

Page1.states.add
	opened:
		x:-250
		scale:0.9
	closed:
		x:0
		scale:1
Page1.states.animationOptions =
    curve: bezier2
    time:0.5
Page1.states.switchInstant("closed")

Page2 = new Layer
	width: 750
	height: 1334
	image: "images/Page2.PNG"
Page2.originX = 0
Page2.originY = 0

Page2.states.add
	opened:
		x:0
	closed:
		x:750
Page2.states.animationOptions =
    curve: bezier2
    time:0.5
Page2.states.switchInstant("closed")

transitonArray = [blackMask,Page1,Page2]

button.onClick ->
	button.backgroundColor = "rgba(216, 216, 216, 0.5)"
	Utils.delay 0.1,->
		button.backgroundColor = "clear"
		for transitionLayers in transitonArray
			transitionLayers.states.switch("opened")

Page2.onClick ->
	for transitionLayers in transitonArray
			transitionLayers.states.switch("closed")


