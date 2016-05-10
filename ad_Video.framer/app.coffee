#1. Import file "Video Framer Slice" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/Video Framer Slice@2x")

#2. Make 'sketch.' as global variable
Utils.globalLayers(sketch)

#3. Init Setting
adBoard.opacity = 1
adBoard.x = 40
adBoard.y = 40
Mask_Board.addSubLayer(adBoard)
Mask_Board.clip = true

hitarea1 = new Layer
	x: 85,y:979,width: 128,height: 36, borderRadius: 2,opacity: 0, backgroundColor: "rgba(123,123,123,1)"
Video.addSubLayer(hitarea1)

hitarea2= new Layer
	x: 320,y:510,width: 100,height: 100, borderRadius: 2,opacity: 0, backgroundColor: "rgba(123,123,123,1)"
adBoard.addSubLayer(hitarea2)

	#3.1font Insert
Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Montserrat:700);')

	#3.2 Cam Setting	
Cam_Video = new VideoLayer
	width: 750
	height: 422
	video: "images/Cam Video.mp4"
	
timenumber = new Layer
	x:42,y:3,height: 28,width: 60,backgroundColor: "clear"
Time_Label.addSubLayer(timenumber)
timenumber.html = "1:24"
timenumber.style.fontSize = "24px"
timenumber.style.fontFamily = "'Montserrat', sans-serif"
Video_Area.addSubLayer(Cam_Video)

	#3.3 Animation Properties Setting
alldelaytime = 0
bezier1 = "bezier-curve(.35,.95,.56,.98)"
bezier2 = "bezier-curve(.33,0,.25,1)"
spring1 = 'spring(100,10,10)'

	#3.4 Progress Cycle Animation & End
progressArray = [Progress1,Progress2,Progress3,Progress4]

progressInit = ->	
	for progresses in progressArray
		progresses.originY = 1
		progresses.scaleY = 0
		progresses.animateStop()
progressInit()
	#3.4.1 cycle Animation Function
reverseAnim = (mylayer,delaynumber) ->
	animationA = new Animation({
		layer: mylayer,
		properties: {scaleY: 0.2},
		curve: "linear",
		time: 0.3,
		delay: 0.05*delaynumber
	})
	animationB = new Animation({
		layer: mylayer,
		properties: {scaleY: 1.0},
		curve: "linear",
		time: 0.3,
		delay: 0.05*delaynumber
	})
	animationA.on(Events.AnimationEnd, animationB.start)
	animationB.on(Events.AnimationEnd, animationA.start)
	animationA.start()

progressBegin = ->
		
	for i in [1...5]
		myprogresses = sketch["Progress" + i]
		reverseAnim(myprogresses,i)
	
progressEnd = ->
	Progress1.animateStop()
	Progress2.animateStop()
	Progress3.animateStop()
	Progress4.animateStop()
	Utils.delay 0.2, ->
		Progress1.animate
			properties:
				scaleY:0.2
			curve: "linear"
			time: 0.3
		Progress2.animate
			properties:
				scaleY:0.4
			curve: "linear"
			time: 0.3
		Progress3.animate
			properties:
				scaleY:0.6
			curve: "linear"
			time: 0.3
		Progress4.animate
			properties:
				scaleY:0.8
			curve: "linear"
			time: 0.3
	
	
	#3.5 CountDown Function
countDownbeigin = ->
	#3.5.1 Play Video
	Cam_Video.player.play()
	
	#3.5.2 Cycle Animation
	progressBegin()
		
	#3.5.3 Time Label
	Utils.interval 1, ->
		if Cam_Video.player.currentTime <= 14
			timenumber.x = 42
			timenumber.html = "1:"+"#{24-Math.round(Cam_Video.player.currentTime)}"
		else if(Cam_Video.player.currentTime > 14 && Cam_Video.player.currentTime <= 24)
			timenumber.x = 42
			timenumber.html = "1:0"+"#{24-Math.round(Cam_Video.player.currentTime)}"
		else if(Cam_Video.player.currentTime > 24 && Cam_Video.player.currentTime <= 74)
			timenumber.x = 36
			timenumber.html = "0:"+"#{60-(Math.round(Cam_Video.player.currentTime-24))}"
		else
			timenumber.x = 36
			timenumber.html = "0:0"+"#{60-(Math.round(Cam_Video.player.currentTime-24))}"
	#3.6 Video Replay
rePlay = ->
	Cam_Video.currentTime = 0
	timenumber.html = "1:24"
	Cam_Video.player.play()
	
Cam_Video.player.onended = -> rePlay()

#4. State Machine Setting

	#4.1 animateIn Group
Tittle.states.add
	closed:
		y:504
		opacity: 0
	opened:
		y:464
		opacity: 1
Tittle.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.25 + alldelaytime
Tittle.states.switchInstant("closed")

Detail_button.states.add
	closed:
		opacity: 0
	opened:
		opacity: 1
Detail_button.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.25 + alldelaytime
Detail_button.states.switchInstant("closed")

describe.states.add
	closed:
		y:560
		opacity: 0
	opened:
		y:510
		opacity: 1
describe.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.28 + alldelaytime
describe.states.switchInstant("closed")

	#4.2 baseIn Group
Spinner.states.add
	closed:
		scale:0
		opacity:0
		y:184
		rotation:0
	opened:
		scale:1
		opacity:1
		y:184
	fadeout:
		scale:0.6
		opacity:0
		y:165
Spinner.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.3 + alldelaytime
Spinner.states.switchInstant("closed")

Star.states.add
	closed:
		x:78
		y:148
		scale:0.6
		opacity:0
	opened:
		x:78
		y:148
		scale:1
		opacity:1
	fadeout:
		x:78
		y:128
		scale:1
		opacity:0
Star.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.25 + alldelaytime
Star.states.switchInstant("closed")

Kuang.states.add
	closed:
		scale:1
		y:-65
		opacity: 0
	opened:
		scale:1
		y:-25
		opacity: 1
	fadeout:
		scale:1
		y:-45
		opacity:0
Kuang.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.2 + alldelaytime
Kuang.states.switchInstant("closed")

Mask_Board.states.add
	closed:
		height:42
	opened:
		height:684
Mask_Board.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0 + alldelaytime
Mask_Board.states.switchInstant("closed")

collapsedBtn.states.add
	closed:
		y:-32
	opened:
		y:277*2
collapsedBtn.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0 + alldelaytime
collapsedBtn.states.switchInstant("closed")

hitarea1.states.add
	closed:
		opacity: 0
	opened:
		opacity: 0.3
hitarea1.states.animationOptions =
    curve: spring1
hitarea1.states.switchInstant("closed")

	#4.3 fadeIn Group
Video_Area.states.add
	closed:
		opacity:0
		scale:1
	fadeout:
		opacity:0
		scale:0.8
	fadein:
		opacity:1
		scale:1
Video_Area.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.25 + alldelaytime
Video_Area.states.switchInstant("fadeout")

Play_Button.states.add
	closed:
		opacity:0
		scale:1
	fadeout:
		opacity:0
		scale:0.8
	fadein:
		opacity:1
		scale:1
Play_Button.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.3 + alldelaytime
Play_Button.states.switchInstant("fadeout")

Time_Label.states.add
	closed:
		opacity:0
		scale:1
	fadeout:
		opacity:0
		scale:0.8
	fadein:
		opacity:1
		scale:1
Time_Label.states.animationOptions =
    curve: bezier1
    time:0.5
    delay:0.3 + alldelaytime
Time_Label.states.switchInstant("fadeout")

#5. Array Setting
animationInArray = [hitarea1,collapsedBtn,Mask_Board,Kuang,Star,describe,Tittle,Detail_button,Spinner]
fadeOutArray = [Spinner,Kuang,Star]
fadeInArray = [Play_Button,Video_Area,Time_Label]

#6. Animation Setting
hitarea1.onClick ->
	
	for animLayers in animationInArray
		animLayers.states.switch("opened")
	
	#6.1 Spinner Rotate
	Spinner.animate
		properties:
			rotation:720
		curve:"linear"
		time:1.5
		repeat:Infinity
		
	#6.2 Star Scale Anim
	Utils.interval 0.7, ->
		Star.animate
			properties:
				x: Utils.randomNumber 68, 88
				y: Utils.randomNumber 138, 158
				scale: Utils.randomNumber 0.95, 1.05
			curve:"bezier-curve(0,0.33,0.66,1)"
			time:1
			
	#6.3 Video FadeIn (Delay 3s)
	Utils.delay 3,->
		for fadeoutLayers in fadeOutArray
			fadeoutLayers.states.switch("fadeout")
		Utils.delay 0.25,->
			for fadeinLayers in fadeInArray
				fadeinLayers.states.switch("fadein")
		Utils.delay 1,->
			countDownbeigin()
			Play_Button.states.switch("fadeout")

Video_Area.onClick ->
	if Cam_Video.player.onplaying = true
		Play_Button.states.switch("fadein")
		Cam_Video.player.pause()
		progressEnd()
		
Play_Button.onClick ->
	Play_Button.states.switch("fadeout")
	Cam_Video.player.play()
	countDownbeigin()

hitarea2.onClick ->
	# Must be clean instantly
	Star.animateStop()
	Spinner.animateStop()
	Cam_Video.player.pause()
	
	for animLayers in animationInArray
		animLayers.states.switch("closed")
	
	# Clean ,back to init
	Utils.delay 0.5,->
		for animLayers2 in fadeInArray
			animLayers2.states.switchInstant("fadeout")
		Cam_Video.player.currentTime = 0
		progressInit()

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

Video.states.add
	opened:
		x:-250
		scale:0.9
	closed:
		x:0
		scale:1
Video.states.animationOptions =
    curve: bezier2
    time:0.5
Video.states.switchInstant("closed")

Page2 = new Layer
	width: 750
	height: 1334
	image: "images/Page2.png"
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

transitonArray = [blackMask,Video,Page2]

Detail_button.onClick ->
	Detail_button.backgroundColor = "rgba(216, 216, 216, 0.5)"
	Utils.delay 0.1,->
		Detail_button.backgroundColor = "clear"
		for transitionLayers in transitonArray
			transitionLayers.states.switch("opened")
		
		#Player Fix
		Play_Button.states.switch("fadein")
		Cam_Video.player.pause()
		progressEnd()

Page2.onClick ->
	for transitionLayers in transitonArray
			transitionLayers.states.switch("closed")

