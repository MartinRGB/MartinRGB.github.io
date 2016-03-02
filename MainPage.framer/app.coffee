#####################################################  Asset Import ##################################################### 
sketch = Framer.Importer.load "imported/FramerJS"
Utils.globalLayers(sketch)

#####################################################  Audio Test ##################################################### 
disc2Music = new VideoLayer
	video: "images/Disc2HBFS.mp3"
	backgroundColor: "transparent"
disc2Music.opacity = 0

disc3Music = new VideoLayer
	video: "images/Disc3Amy.mp3"
	backgroundColor: "transparent"
disc3Music.opacity = 0

disc4Music = new VideoLayer
	video: "images/Disc4Grid.mp3"
	backgroundColor: "transparent"
disc4Music.opacity = 0

disc5Music = new VideoLayer
	video: "images/Disc5花火.mp3"
	backgroundColor: "transparent"
disc5Music.opacity = 0

#####################################################  Video Function & Use ##################################################### 	
videoLayer1 = new VideoLayer
	video: "images/唐嫣HTM.mp4"
	width: 1000, height: 780
	y: -120,x: -80
	
videoLayer2 = new VideoLayer
	video: "images/鹿晗HTM.mp4"
	width: 1000, height: 780
	y: -120,x: -80
	
videoLayer1.opacity = 0
videoLayer2.opacity = 0

videoStateStart = (A) ->
		Events.wrap(A.player).on "ended", ->
			A.animate
			properties:
				opacity: 0 
			curve:"ease-in-out"
			A.player.play()
			time:0.3
videoStateEnd = (A) ->
		Events.wrap(A.player).on "play", ->
			A.animate
		 	properties:
					opacity: 1 
			curve:"ease-in-out"
			time:0.3
videoStateStart(videoLayer1)
videoStateStart(videoLayer2)
videoStateEnd(videoLayer1)
videoStateEnd(videoLayer2)

allVideoPause = ->
	videoLayer1.player.pause()
	videoLayer2.player.pause()

allVideoPlay = ->
	videoLayer1.player.play()
	videoLayer2.player.play()

videoLayer3Container = new Layer
	backgroundColor: "transparent"
	width:750,height:450
	x:0,y:180
MoviePage.addSubLayer(videoLayer3Container)

##Video Player 3

Play.y = 385
Pause.y = 385
Play.sclae = 0
Pause.sclae = 0

videoLayer3 = new VideoLayer
	video: "images/唐嫣花絮.mp4"
	width: 1000, height: 740
	y: -100,x: -140
videoLayer3Container.addSubLayer(videoLayer3)
TimeLabel.placeBehind(WillMoveBar)
videoLayer3Container.placeBehind(TimeLabel)

videoLayer3.player.play()
Utils.delay 1, -> showPlay()  

#Functions for controls

showPlay = ->
  sketch.Play.visible = true
  sketch.Pause.visible = false
  videoLayer3.player.pause()
  Play.animate
  	properties:
  		scale: 1
  	curve: "spring(250, 40, 20)"
  Pause.animate
  	properties:
  		scale: 0
  	curve: "spring(250, 40, 20)"
   
showPause = ->
  sketch.Pause.visible = true
  sketch.Play.visible = false
  videoLayer3.player.play()
  Pause.animate
  	properties:
  		scale: 1
  	curve: "spring(250, 40, 20)"
  Play.animate
  	properties:
  		scale: 0
  	curve: "spring(250, 40, 20)"

# Video player interactions
sketch.Play.on Events.Click, -> 
  showPause()
  
  if videoLayer3.player.currentTime is videoLayer3.player.duration
    videoLayer3.player.currentTime = 0
    showPause()

sketch.Pause.on Events.Click, -> showPlay()
videoLayer3.player.onplaying = -> showPause()
videoLayer3.player.onended = -> showPlay()

#####################################################  Simple Slider Control ##################################################### 
slider = new SliderComponent
slider.x = 0
slider.y = 9
slider.backgroundColor = "transparent"
slider.fill.backgroundColor = "rgba(255,255,255,0.9)"
slider.height = 100
slider.width = 375
slider.borderRadius = 0
slider.knob.shadowY = 2
slider.knob.shadowBlur = 4
slider.knob.borderRadius = 32
slider.knobSize = 64
slider.knob.draggable.momentum = false
ProgressBar.addSubLayer(slider)

slider.addSubLayer(HandleLeft)
HandleLeft.x = -10
HandleLeft.y = 40

sliderinput1 = new Layer
	width: 688, height: 688, x: 0, y: 130
	backgroundColor: "transparent"
ProgressBar.addSubLayer(sliderinput1)
sliderinput1.html.font = "24px Lato"
sliderinput1.color = "#202020"

slider.knob.on "change:x", ->
	videoLayer3.player.currentTime = (slider.knob.x+32)/375*4.5 
	HandleLeft.x = slider.knob.x + 16
	
	sliderinput1.x = slider.knob.x
	sliderinput1.html ="00:0"+"#{Math.round((Math.round(this.x)+32)/375*4)}"

slider2 = new SliderComponent
slider2.x = 375
slider2.y = 9
slider2.backgroundColor = "transparent"
slider2.fill.backgroundColor = "transparent"
slider2.height = 100
slider2.width = 375
slider2.borderRadius = 0
slider2.knob.shadowY = 2
slider2.knob.shadowBlur = 4
slider2.knob.borderRadius = 32
slider2.knobSize = 64
slider2.knob.draggable.momentum = false
ProgressBar.addSubLayer(slider2)

slider2Mask = new Layer
	backgroundColor: "rgba(255,255,255,0.9)"
	y:9,x:375
	originX: 1
	width: 375
	height:100
ProgressBar.addSubLayer(slider2Mask)
slider2Mask.placeBehind(slider2)
	
slider2.addSubLayer(HandleRight)
HandleRight.x = -14
HandleRight.y = 41

sliderinput2 = new Layer
	width: 688, height: 688, x: 375, y: 130
	backgroundColor: "transparent"
ProgressBar.addSubLayer(sliderinput2)
sliderinput2.html.font = "24px Lato"
sliderinput2.color = "#202020"

slider2.knob.on "change:x", ->
	videoLayer3.player.currentTime = (slider2.knob.x+32)/375*4.5 + 4.5
	HandleRight.x = slider2.knob.x + 18
	slider2Mask.scaleX = 1 - (slider2.knob.x+32)/375
	
	sliderinput2.x = slider2.knob.x + 375
	sliderinput2.html ="00:0"+"#{Math.round((Math.round(this.x)+32)/375*4) + 4}"


#####################################################  Filter Click Effect ##################################################### 
Filter1.on Events.Click, ->
	Filter1.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	FilterText1.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)" 
	
	videoLayer3.animate
		properties:
			brightness:100
			saturate:100
			sepia: 0
		curve: "spring(300, 40, 20)"
	
	for count in [2..5]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"
	
Filter2.on Events.Click, ->
	
	videoLayer3.animate
		properties:
			brightness:120
			saturate:0
			sepia:0
		curve: "spring(300, 40, 20)"
			
	
	Filter2.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	FilterText2.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)" 

	Filter1.animate
		properties:
			scale: 1
		curve: "spring(300, 40, 20)" 
	
	FilterText1.animate
		properties:
			opacity: 0.4
		curve: "spring(300, 40, 20)" 
	
	for count in [3..5]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

Filter3.on Events.Click, ->
	
	videoLayer3.animate
		properties:
			brightness:110
			saturate:100
			sepia: 10
		curve: "spring(300, 40, 20)"
	
	for count in [1..2]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
		
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

	Filter3.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	FilterText3.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)"
	
	for count in [4..5]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
		
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

Filter4.on Events.Click, ->
	
	videoLayer3.animate
		properties:
			brightness:90
			saturate:120
			sepia: 10
		curve: "spring(300, 40, 20)"
	
	
	for count in [1..3]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
		
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"
	
	Filter4.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)"
	
	FilterText4.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)"	
	
	for count in [5]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

Filter5.on Events.Click, ->
	
	videoLayer3.animate
		properties:
			brightness:90
			saturate:150
		curve: "spring(300, 40, 20)"

	
	for count in [1..4]
		filterscales = sketch["Filter" + count]
		filterscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		filteropacity = sketch["FilterText" + count]
		filteropacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"
			
	Filter5.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	FilterText5.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)"

#####################################################  Music Function ##################################################### 
MusicPauseZero = (layer) ->
	layer.player.pause()
	layer.player.currentTime = 0
	
StopAllMusic = ->
	MusicPauseZero(disc2Music)
	MusicPauseZero(disc3Music)
	MusicPauseZero(disc4Music)
	MusicPauseZero(disc5Music)
	
##################################################### Disc Click Effect #####################################################
Disc1.on Events.Click, ->
	
	StopAllMusic()
	
	Disc1.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	DiscText1.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)" 
	
	for count in [2..5]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"
	
Disc2.on Events.Click, ->
	
	MusicPauseZero(disc3Music)
	MusicPauseZero(disc4Music)
	MusicPauseZero(disc5Music)
	disc2Music.player.play()
	
	Disc2.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	DiscText2.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)" 

	Disc1.animate
		properties:
			scale: 1
		curve: "spring(300, 40, 20)" 
	
	DiscText1.animate
		properties:
			opacity: 0.4
		curve: "spring(300, 40, 20)" 
	
	for count in [3..5]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

Disc3.on Events.Click, ->
	
	MusicPauseZero(disc2Music)
	MusicPauseZero(disc4Music)
	MusicPauseZero(disc5Music)
	disc3Music.player.play()
	
	for count in [1..2]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
		
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

	Disc3.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	DiscText3.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)"
	
	for count in [4..5]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
		
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

Disc4.on Events.Click, ->
	
	MusicPauseZero(disc2Music)
	MusicPauseZero(disc3Music)
	MusicPauseZero(disc5Music)
	disc4Music.player.play()
	
	for count in [1..3]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
		
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"
	
	Disc4.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)"
	
	DiscText4.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)"	
	
	for count in [5]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"

Disc5.on Events.Click, ->
	
	MusicPauseZero(disc2Music)
	MusicPauseZero(disc3Music)
	MusicPauseZero(disc4Music)
	disc5Music.player.play()
	
	for count in [1..4]
		discscales = sketch["Disc" + count]
		discscales.animate
			properties:
				scale:1
			curve: "spring(300,40,20)"
			
		discopacity = sketch["DiscText" + count]
		discopacity.animate
			properties:
				opacity: 0.4
			curve: "spring(300,40,20)"
			
	Disc5.animate
		properties:
			scale: 1.2
		curve: "spring(300, 40, 20)" 
		
	DiscText5.animate
		properties:
			opacity: 1
		curve: "spring(300, 40, 20)"	



##################################################### Movie Page Setting Init #####################################################
MoviePage.x = 1334
MoviePage.clip = true
TimeLabel.opacity = 0
MusicFilter.opacity = 1
MusicFilter.x = 277+750
MFSlider.x = -4
TimeLabel.y = 479+487
FinishText.y = 1027+487
Disc1.opacity = 0.4
MusicSection.opacity = 0.4

FilterBar.visible = false
FilterText1.opacity = 1
Filter1.scale = 1.2
FilterText2.opacity = 0.4
FilterText3.opacity = 0.4
FilterText4.opacity = 0.4
FilterText5.opacity = 0.4

DiscText1.opacity = 1
Disc1.scale = 1.2
DiscText2.opacity = 0.4
DiscText3.opacity = 0.4
DiscText4.opacity = 0.4
DiscText5.opacity = 0.4

##################################################### Element Property Init #####################################################
bg = new BackgroundLayer backgroundColor: "#202020"
PhotoPage.y = 1334
PhotoPage.clip = true
MainPage.clip = true
BG4.addSubLayer(videoLayer2)
BG2.addSubLayer(videoLayer1)
Card.opacity = 0.4
Chat.opacity = 0.4
User.opacity = 0.4
Pic1.scale = 0
Pic2.scale = 0
Pic3.scale = 0
Pic4.scale = 0
Pic5.scale = 0
Pic6.scale = 0
Pic7.scale = 0
Pic8.scale = 0
Pic9.scale = 0
Pic10.scale = 0
Pic11.scale = 0
Pic12.scale = 0
Pic13.scale = 0
Pic14.scale = 0
Pic15.scale = 0
Tag1.scale = 0
Tag2.scale = 0
Tag3.scale = 0
Tag8.scale = 0
Tag1.originX = 0
Tag2.originX = 0
Tag3.originX = 1
Tag4.originX = 1
NewTag4.originX = 1
Tag5.originX = 1
NewTag5.originX = 1
Tag6.originX = 0
NewTag6.originX = 0
Tag7.originX = 0
NewTag7.originX = 0
Tag8.originX = 0
NewTag8.originX = 1
X1.saturate = 100
X1.opacity = 0.4
X1.contrast = 75
MainPage.originY = 0.15
PhotoPage.originY = 0.25
Camera.opacity = 0.4
Capture.opacity = 0.4

##################################################### Launch State Setting #####################################################
Utils.delay .5, ->
	Tag2.animate
	 	properties:
				scale: 1
		curve:OpenStateanimation
Utils.delay .6, ->
	Tag3.animate
	 	properties:
				scale: 1
		curve:OpenStateanimation
Utils.delay .7, ->
	Tag1.animate
	 	properties:
				scale: 1
		curve:OpenStateanimation
##################################################### Animation Setting #####################################################
Framer.Defaults.Animation = curve: "spring(300,35,5)"
OpenStateanimation = "spring(400,20,0)"


##################################################### MainPage Scroll Animaimon Setting #####################################################

##MainPage Scroll Event Setting
scroll = ScrollComponent.wrap(Feed)
scroll.frame = Screen.frame
scroll.contentInset = top: 140, left: 0
scroll.scrollHorizontal = false
scroll.on Events.Move, ->
	scrolltoY(scroll.scrollY)	
##MainPage Scroll Event
scrolltoY = (y) ->
	NavTitle.opacity = Utils.modulate(y, [0, 50], [1, 0], true)
	NavTitle.y = Utils.modulate(y, [0, 200], [72, -128], true)
	Magnify.opacity = Utils.modulate(y, [0, 50], [1, 0], true)
	Magnify.y = Utils.modulate(y, [0, 200], [65, -135], true)
	NavBase.y = Utils.modulate(y, [0, 200], [0, -200], true)
	CountDown1.y = Utils.modulate(y, [190, 950], [0, 760], true)
	CountDown2.y = Utils.modulate(y, [1130, 1467], [946, 1283], true)
	CountDown3.y = Utils.modulate(y, [1650, 1990], [1464, 1802], true)
	CountDown4.y = Utils.modulate(y, [2170, 2498], [1982, 2310], true)
	CountDown5.y = Utils.modulate(y, [2680, 3425], [2490, 3235], true)
	Tag1.scale = Utils.modulate(y, [730, 880], [1,0], true)
	Tag2.scale = Utils.modulate(y, [430, 580], [1,0], true)
	Tag3.scale = Utils.modulate(y, [600, 750], [1,0], true)
	Tag4.scale = Utils.modulate(y, [1240, 1390], [1,0], true) 
	Tag5.scale = Utils.modulate(y, [1880, 2130], [1,0], true)
	Tag6.scale = Utils.modulate(y, [2350, 2500], [1,0], true)
	Tag7.scale = Utils.modulate(y, [3000, 3150], [1,0], true)
	NewTag4.scale = Utils.modulate(y, [100, 250], [0,1], true)
	NewTag5.scale = Utils.modulate(y, [660, 810], [0,1], true)
	NewTag6.scale = Utils.modulate(y, [1210, 1360], [0,1], true)
	NewTag7.scale = Utils.modulate(y, [1860, 2010], [0,1], true)
	Tag8.scale = Utils.modulate(y, [2780, 2930], [0,1], true)
	if (y<800 & y>200)
		videoLayer1.player.play()
	else
		videoLayer1.player.pause()
	if (y<2000 & y>1500)
		videoLayer2.player.play()
	else
		videoLayer2.player.pause()
		
		
##################################################### Open Camera #####################################################
Photo.on Events.Click, ->
	
	for i in [1...30]
		pics = sketch["Pic" + i]
		pics.animate
			properties:
				scale: 1
			curve:"spring(300, 40, 20)"
			delay: 0.05*i
		
	allVideoPause()
	MainPage.animate
		properties:
			scale: 0.8
			brightness:80
			opacity: 0
		curve:"bezier-curve(0.75, 0, 0.25, 1)"
		time: 0.5
	PhotoPage.animate
		properties:
			y: 0
			opacity: 1
		curve:"spring(300, 40, 20)"
		delay: 0.2
	
	

##################################################### Close Camera #####################################################
closePhoto.on Events.Click, ->
	
	for i in [1...30]
		pics = sketch["Pic" + i]
		pics.animate
			properties:
				scale: 0
			curve:"bezier-curve(0.75, 0, 0.25, 1)"
			time: 0.1
			delay: 0.3
	
	scroll.on Events.Move, ->
	scrolltoY(scroll.scrollY)	
	scrolltoY = (y) ->
		NavTitle.opacity = Utils.modulate(y, [0, 50], [1, 0], true)
		NavTitle.y = Utils.modulate(y, [0, 200], [72, -128], true)
		Magnify.opacity = Utils.modulate(y, [0, 50], [1, 0], true)
		Magnify.y = Utils.modulate(y, [0, 200], [65, -135], true)
		NavBase.y = Utils.modulate(y, [0, 200], [0, -200], true)
		CountDown1.y = Utils.modulate(y, [190, 950], [0, 760], true)
		CountDown2.y = Utils.modulate(y, [1130, 1467], [946, 1283], true)
		CountDown3.y = Utils.modulate(y, [1650, 1990], [1464, 1802], true)
		CountDown4.y = Utils.modulate(y, [2170, 2498], [1982, 2310], true)
		CountDown5.y = Utils.modulate(y, [2680, 3425], [2490, 3235], true)
		Tag1.scale = Utils.modulate(y, [730, 880], [1,0], true)
		Tag2.scale = Utils.modulate(y, [430, 580], [1,0], true)
		Tag3.scale = Utils.modulate(y, [600, 750], [1,0], true)
		Tag4.scale = Utils.modulate(y, [1240, 1390], [1,0], true) 
		Tag5.scale = Utils.modulate(y, [1880, 2130], [1,0], true)
		Tag6.scale = Utils.modulate(y, [2350, 2500], [1,0], true)
		Tag7.scale = Utils.modulate(y, [3000, 3150], [1,0], true)
		NewTag4.scale = Utils.modulate(y, [100, 250], [0,1], true)
		NewTag5.scale = Utils.modulate(y, [660, 810], [0,1], true)
		NewTag6.scale = Utils.modulate(y, [1210, 1360], [0,1], true)
		NewTag7.scale = Utils.modulate(y, [1860, 2010], [0,1], true)
		Tag8.scale = Utils.modulate(y, [2780, 2930], [0,1], true)
		if (y<800 & y>200)
			videoLayer1.player.play()
		else
			videoLayer1.player.pause()
		if (y<2000 & y>1500)
			videoLayer2.player.play()
		else
			videoLayer2.player.pause()
		
	MainPage.animate
		properties:
			scale: 1
			brightness:100
			opacity: 1
		curve:"spring(250, 40, 20)"
	PhotoPage.animate
		properties:
			y: 1334
		curve:"bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.45
		

##################################################### PhotoPage Scroll Event Setting #####################################################
scroll2 = ScrollComponent.wrap(Photo_Feed)
scroll2.frame = Screen.frame
scroll2.contentInset = top: 140, left: 0
scroll2.scrollHorizontal = false
scroll2.on Events.Move, ->
	scrollto2Y(scroll2.scrollY)
		
scrollto2Y = (y) ->
	NavTitle2.opacity = Utils.modulate(y, [0, 50], [1, 0], true)
	icon_close.opacity = Utils.modulate(y, [0, 50], [1, 0], true)
	NavTitle2.y = Utils.modulate(y, [0, 200], [70, -130], true)
	icon_close.y = Utils.modulate(y, [0, 200], [46, -154], true)
	NavBar.y = Utils.modulate(y, [0, 200], [0, -200], true)
	
##################################################### Click Pic1 #####################################################
Pic1.on Events.Click, ->
	videoLayer3.player.currentTime = 1
	Pic1.animate
		properties:
			scale:0.8
			brightness: 80
			opacity: 0.8
		curve:"bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.3
	PhotoPage.animate
		properties:
			x: -750/3
			brightness:80
			opacity: 0.8
			scale: 0.8
		curve:"bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.3
	MoviePage.animate
		properties:
			x: 0
		curve: "spring(300, 40, 20)"

##################################################### Filter & Disc State Machine #####################################################
for count in [1..5]
		  filters = sketch["Filter" + count]
		  filters.states.add
		    start: {x:filters.x+750}
		    middle: {x:filters.x-750}
		    end: {x:filters.x}
		  filters.states.switchInstant "start"
		  filters.animationOptions = curve: "bezier-curve(.95,0,.38,.68)"
for count in [1..5]
		  filtertexts = sketch["FilterText" + count]
		  filtertexts.states.add
		    start: {x:filtertexts.x+750}
		    middle: {x:filtertexts.x-750}
		    end: {x:filtertexts.x}
		  filtertexts.animationOptions = curve: "bezier-curve(.95,0,.38,.68)"
		  filtertexts.states.switchInstant "start"

for count in [1..5]
		  discs = sketch["Disc" + count]
		  discs.states.add
		    start: {x:discs.x+750}
		    end: {x:discs.x}
		  discs.animationOptions = curve: "bezier-curve(.95,0,.38,.68)"
		  discs.states.switchInstant "start"

for count in [1..5]
		  disctexts = sketch["DiscText" + count]
		  disctexts.states.add
		    start: {x:disctexts.x+750}
		    end: {x:disctexts.x}
		  disctexts.animationOptions = curve: "bezier-curve(.95,0,.38,.68)"
		  disctexts.states.switchInstant "start"

##################################################### Canel/Prev & Next Control Setting #####################################################
PhotoCancel = new Layer
	x:144,y:37
	backgroundColor: "transparent"
PhotoCancel.style =
	"font-size" : "24px","font-weight" : "400","color" : "#202020","text-aligin":"center","font-family":"PingFang-SC"
PhotoCancel.html = "取消"
PhotoTab.addSubLayer(PhotoCancel)

PhotoNext = new Layer
	x:536,y:37
	backgroundColor: "transparent"
PhotoNext.style =
	"font-size" : "24px","font-weight" : "400","color" : "#202020","text-aligin":"center","font-family":"PingFang-SC"
PhotoNext.html = "下一步"
PhotoTab.addSubLayer(PhotoNext)

##################################################### Click Cancel&Prev #####################################################
PhotoCancel.on Events.Click, ->
					
	if WillMoveBar.y == 846+487
		ParadaTag.brightness = 100
		SmallParada.animate
			properties:
				y:632-240
				scale:0
			curve: "bezier-curve(.95,0,.38,.68)"
			time: 0.6
			
		videoLayer3.player.pause()
		videoLayer3.player.currentTime = 1
		PhotoNext.animate
			properties: 
				opacity: 1
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		WillMoveBar.animate
			properties:
				y:846
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		FinishText.animate
			properties:
				y:1027+487
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		TimeLabel.animate
			properties:
				y:479+487
				opacity:0
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		videoLayer3Container.animate
			properties:
				y:180
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		Play.animate
			properties:
				opacity:1
				y:385
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		Pause.animate
			properties:
				opacity:1
				y:385
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
	else
		if ProgressBar.x == 0
			Pic1.animate
				properties:
					scale:1
					brightness: 100
					opacity: 1
				curve: "spring(250, 40, 20)"
			PhotoPage.animate
				properties:
					x: 0
					brightness:100
					opacity: 1
					scale: 1
				curve: "spring(250, 40, 20)"
			MoviePage.animate
				properties:
					x: 1334
				curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
				time: 0.6
		else
			ProgressBar.animate
				properties:
					x: 0
				curve: "bezier-curve(.95,0,.38,.68)"
				time: 0.5
				delay: 0.05
			Length.animate
				properties:
					x: 321
				curve: "bezier-curve(.95,0,.38,.68)"
				time: 0.5
				delay: 0.05
			MusicFilter.animate
				properties:
					x: 277+750
				curve:"bezier-curve(.95,0,.38,.68)"
				time: 0.5
				delay: 0.05
	
	
			if MFSlider.x == -4
				Utils.delay 0, ->
					timeFactor = 0.05
					Utils.delay 4 * timeFactor, -> sketch.Filter1.states.switch("start")
					Utils.delay 3 * timeFactor, -> sketch.Filter2.states.switch("start")
					Utils.delay 2* timeFactor, -> sketch.Filter3.states.switch("start")
					Utils.delay 1 * timeFactor, -> sketch.Filter4.states.switch("start")
					Utils.delay 0 * timeFactor, -> sketch.Filter5.states.switch("start")
					Utils.delay 4 * timeFactor, -> sketch.FilterText1.states.switch("start")
					Utils.delay 3 * timeFactor, -> sketch.FilterText2.states.switch("start")
					Utils.delay 2 * timeFactor, -> sketch.FilterText3.states.switch("start")
					Utils.delay 1 * timeFactor, -> sketch.FilterText4.states.switch("start")
					Utils.delay 0 * timeFactor, -> sketch.FilterText5.states.switch("start")
				Utils.delay 0.35, ->
					PhotoCancel.html = "取消"	 
				Utils.delay 1.0, ->
					 FilterBar.visible = true
			else if MFSlider.x == 136
				StopAllMusic()
				sketch.Filter1.states.switchInstant("start")
				sketch.Filter2.states.switchInstant("start")
				sketch.Filter3.states.switchInstant("start")
				sketch.Filter4.states.switchInstant("start")
				sketch.Filter5.states.switchInstant("start")
				sketch.FilterText1.states.switchInstant("start")
				sketch.FilterText2.states.switchInstant("start")
				sketch.FilterText3.states.switchInstant("start")
				sketch.FilterText4.states.switchInstant("start")
				sketch.FilterText5.states.switchInstant("start")
				Utils.delay 0, ->
					timeFactor = 0.05
					Utils.delay 4 * timeFactor, -> sketch.Disc1.states.switch("start")
					Utils.delay 3 * timeFactor, -> sketch.Disc2.states.switch("start")
					Utils.delay 2 * timeFactor, -> sketch.Disc3.states.switch("start")
					Utils.delay 1 * timeFactor, -> sketch.Disc4.states.switch("start")
					Utils.delay 0 * timeFactor, -> sketch.Disc5.states.switch("start")
					Utils.delay 4 * timeFactor, -> sketch.DiscText1.states.switch("start")
					Utils.delay 3 * timeFactor, -> sketch.DiscText2.states.switch("start")
					Utils.delay 2 * timeFactor, -> sketch.DiscText3.states.switch("start")
					Utils.delay 1 * timeFactor, -> sketch.DiscText4.states.switch("start")
					Utils.delay 0 * timeFactor, -> sketch.DiscText5.states.switch("start")	
				Utils.delay 0.35, ->
					PhotoCancel.html = "取消"	
					Disc3.scale = 1
					DiscText3.opacity = 0.4
					Disc1.scale = 1.2
					DiscText1.opacity = 1		
		
##################################################### Click Next #####################################################
PhotoNext.on Events.Click, ->
	if ProgressBar.x == 0
		FilterBar.visible = true
		ProgressBar.animate
			properties:
				x: -750
			curve: "bezier-curve(.95,0,.38,.68)"
			time: 0.6
		Length.animate
			properties:
				x: 321-750
			curve: "bezier-curve(.95,0,.38,.68)"
			time: 0.6
		MusicFilter.animate
			properties:
				x: 277
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		
		if MFSlider.x == -4	
			Utils.delay 0.35, ->
				timeFactor = 0.05
				Utils.delay 0 * timeFactor, -> sketch.Filter1.states.switch("end")
				Utils.delay 1 * timeFactor, -> sketch.Filter2.states.switch("end")
				Utils.delay 2 * timeFactor, -> sketch.Filter3.states.switch("end")
				Utils.delay 3 * timeFactor, -> sketch.Filter4.states.switch("end")
				Utils.delay 4 * timeFactor, -> sketch.Filter5.states.switch("end")
				Utils.delay 0 * timeFactor, -> sketch.FilterText1.states.switch("end")
				Utils.delay 1 * timeFactor, -> sketch.FilterText2.states.switch("end")
				Utils.delay 2 * timeFactor, -> sketch.FilterText3.states.switch("end")
				Utils.delay 3 * timeFactor, -> sketch.FilterText4.states.switch("end")
				Utils.delay 4 * timeFactor, -> sketch.FilterText5.states.switch("end")
			Utils.delay 0.35, ->
				PhotoCancel.html = "上一步"
		else
			sketch.Filter1.states.switchInstant("middle")
			sketch.Filter2.states.switchInstant("middle")
			sketch.Filter3.states.switchInstant("middle")
			sketch.Filter4.states.switchInstant("middle")
			sketch.Filter5.states.switchInstant("middle")
			sketch.FilterText1.states.switchInstant("middle")
			sketch.FilterText2.states.switchInstant("middle")
			sketch.FilterText3.states.switchInstant("middle")
			sketch.FilterText4.states.switchInstant("middle")
			sketch.FilterText5.states.switchInstant("middle")
			Utils.delay 0.35, ->
				timeFactor = 0.05
				Utils.delay 0 * timeFactor, -> sketch.Disc1.states.switch("end")
				Utils.delay 1 * timeFactor, -> sketch.Disc2.states.switch("end")
				Utils.delay 2 * timeFactor, -> sketch.Disc3.states.switch("end")
				Utils.delay 3 * timeFactor, -> sketch.Disc4.states.switch("end")
				Utils.delay 4 * timeFactor, -> sketch.Disc5.states.switch("end")
				Utils.delay 0 * timeFactor, -> sketch.DiscText1.states.switch("end")
				Utils.delay 1 * timeFactor, -> sketch.DiscText2.states.switch("end")
				Utils.delay 2 * timeFactor, -> sketch.DiscText3.states.switch("end")
				Utils.delay 3 * timeFactor, -> sketch.DiscText4.states.switch("end")
				Utils.delay 4 * timeFactor, -> sketch.DiscText5.states.switch("end")	
			Utils.delay 0.35, ->
				PhotoCancel.html = "上一步"	
	else
		videoLayer3.player.pause()
		videoLayer3.player.currentTime = 1
		PhotoNext.animate
			properties: 
				opacity: 0.4
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		WillMoveBar.animate
			properties:
				y:846+487
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		FinishText.animate
			properties:
				y:1027
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		TimeLabel.animate
			properties:
				y:479
				opacity:1
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		videoLayer3Container.animate
			properties:
				y:420
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		Play.animate
			properties:
				opacity:0
				y: 625
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
		Pause.animate
			properties:
				opacity:0
				y: 625
			curve:"bezier-curve(.95,0,.38,.68)"
			time: 0.6
			
		SmallParada.animate
			properties:
				y:632
			curve: "bezier-curve(.95,0,.38,.68)"
			time: 0.6		
		
		
		
			
#####################################################Click Music & Filter#####################################################
MusicSection.on Events.Click, ->
	MusicSection.animate
		properties:
			opacity: 1
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.4
	FilterSection.animate
		properties:
			opacity: 0.4
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.4
	MFSlider.animate
		properties:
			x:136
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.4
	
	Utils.delay 0.05, ->
		timeFactor = 0.05
		Utils.delay 0 * timeFactor, -> sketch.Filter1.states.switch("middle")
		Utils.delay 1 * timeFactor, -> sketch.Filter2.states.switch("middle")
		Utils.delay 2 * timeFactor, -> sketch.Filter3.states.switch("middle")
		Utils.delay 3 * timeFactor, -> sketch.Filter4.states.switch("middle")
		Utils.delay 4 * timeFactor, -> sketch.Filter5.states.switch("middle")
		Utils.delay 0 * timeFactor, -> sketch.FilterText1.states.switch("middle")
		Utils.delay 1 * timeFactor, -> sketch.FilterText2.states.switch("middle")
		Utils.delay 2 * timeFactor, -> sketch.FilterText3.states.switch("middle")
		Utils.delay 3 * timeFactor, -> sketch.FilterText4.states.switch("middle")
		Utils.delay 4 * timeFactor, -> sketch.FilterText5.states.switch("middle")
	
	Utils.delay 0.35, ->
		timeFactor = 0.05
		Utils.delay 0 * timeFactor, -> sketch.Disc1.states.switch("end")
		Utils.delay 1 * timeFactor, -> sketch.Disc2.states.switch("end")
		Utils.delay 2 * timeFactor, -> sketch.Disc3.states.switch("end")
		Utils.delay 3 * timeFactor, -> sketch.Disc4.states.switch("end")
		Utils.delay 4 * timeFactor, -> sketch.Disc5.states.switch("end")
		Utils.delay 0 * timeFactor, -> sketch.DiscText1.states.switch("end")
		Utils.delay 1 * timeFactor, -> sketch.DiscText2.states.switch("end")
		Utils.delay 2 * timeFactor, -> sketch.DiscText3.states.switch("end")
		Utils.delay 3 * timeFactor, -> sketch.DiscText4.states.switch("end")
		Utils.delay 4 * timeFactor, -> sketch.DiscText5.states.switch("end")
		
FilterSection.on Events.Click, ->
	
	StopAllMusic()
	
	FilterSection.animate
		properties:
			opacity: 1
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.4
	MusicSection.animate
		properties:
			opacity: 0.4
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.4
	MFSlider.animate
		properties:
			x:-4
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.4
	
	Utils.delay 0.35, ->
		timeFactor = 0.05
		Utils.delay 4 * timeFactor, -> sketch.Filter1.states.switch("end")
		Utils.delay 3 * timeFactor, -> sketch.Filter2.states.switch("end")
		Utils.delay 2 * timeFactor, -> sketch.Filter3.states.switch("end")
		Utils.delay 1 * timeFactor, -> sketch.Filter4.states.switch("end")
		Utils.delay 0 * timeFactor, -> sketch.Filter5.states.switch("end")
		Utils.delay 4 * timeFactor, -> sketch.FilterText1.states.switch("end")
		Utils.delay 3 * timeFactor, -> sketch.FilterText2.states.switch("end")
		Utils.delay 2 * timeFactor, -> sketch.FilterText3.states.switch("end")
		Utils.delay 1 * timeFactor, -> sketch.FilterText4.states.switch("end")
		Utils.delay 0 * timeFactor, -> sketch.FilterText5.states.switch("end")
		Disc3.scale = 1
		DiscText3.opacity = 0.4
		Disc1.scale = 1.2
		DiscText1.opacity = 1	
	
	Utils.delay 0.05, ->
		timeFactor = 0.05
		Utils.delay 4 * timeFactor, -> sketch.Disc1.states.switch("start")
		Utils.delay 3 * timeFactor, -> sketch.Disc2.states.switch("start")
		Utils.delay 2 * timeFactor, -> sketch.Disc3.states.switch("start")
		Utils.delay 1 * timeFactor, -> sketch.Disc4.states.switch("start")
		Utils.delay 0 * timeFactor, -> sketch.Disc5.states.switch("start")
		Utils.delay 4 * timeFactor, -> sketch.DiscText1.states.switch("start")
		Utils.delay 3 * timeFactor, -> sketch.DiscText2.states.switch("start")
		Utils.delay 2 * timeFactor, -> sketch.DiscText3.states.switch("start")
		Utils.delay 1 * timeFactor, -> sketch.DiscText4.states.switch("start")
		Utils.delay 0 * timeFactor, -> sketch.DiscText5.states.switch("start")
			

videoLayer3.on Events.Click, ->
	if FinishText.y == 1027
		MoviePage.animate
			properties:
				x: -750/3
				brightness:80
				scale: 0.81
			curve:"bezier-curve(0.215, 0.61, 0.355, 1)"
			time: 0.3
		TagPage.animate
			properties:
				x: 0
			curve: "spring(250, 40, 20)"
			
		ParadaTag.animate
			properties:
				brightness:100
			curve:"bezier-curve(0.215, 0.61, 0.355, 1)"
			time: 0
			
TagBack.on Events.Click, ->
	MoviePage.animate
		properties:
			x: 0
			brightness:100
			scale: 1
		curve: "spring(250, 40, 20)"
	TagPage.animate
		properties:
			x: 1334
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.6	

ParadaTag.on Events.Click, ->
	ParadaTag.animate
		properties:
			brightness:60
		curve:"bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.05
	MoviePage.animate
		properties:
			x: 0
			brightness:100
			scale: 1
		curve: "spring(250, 40, 20)"
	TagPage.animate
		properties:
			x: 1334
		curve: "bezier-curve(0.215, 0.61, 0.355, 1)"
		time: 0.6
	SmallParada.animate
		properties:
			scale:1
		curve: "spring(500, 25, 20)"
		delay: 0.6
	
	
##################################################### Keyboard #####################################################
TagPage.opacity = 1
TagPage.x = 1334
SmallParada.scale = 0
SmallParada.originX = 1
# our text layer 
myLayer = new Layer width:750,height:60,backgroundColor:'transparent'
myLayer.html = '输入品牌名称'	
myLayer.style = color:'#202020',fontSize:'28px',textAlign:'left',lineHeight:'60px'
myLayer.center()
myLayer.y = 150
myLayer.x = 40
myLayer.opacity = 0.4
TagTitle.y = 264+900
TagTitle.opacity = 0
ParadaTag.y = 327+900
ParadaTag.opacity =0

# animate button on click and start typing
myLayer.on Events.Click, ->
	@.scale = 1
	@.animate
		properties:
			scale:1
			opacity: 1
		curve:'spring(240,10,0)'
	
	# call this function to start typing
	# all you need to do is give it two params... 
	# the layer you want text to apear in and the string you want typed out
	type(myLayer,'Parada')
	
	Utils.delay 0.9, ->
		TagTitle.animate
			properties:
				y:264
				opacity:1
			curve:"spring(250, 40, 20)"
		ParadaTag.animate
			properties:
				y:327
				opacity:1
			curve:"spring(250, 40, 20)"

# THE FOLLOWING CODE DOES ALL THE WORK
# COPY THIS INTO YOU PROJECT AND RUN type(yourLayer,'string you want typed out')

# keyboard layer
keyboard = new Layer width:750,height:432,y:1334 - 432,image:"images/keyboard.png",clip:false
TagPage.addSubLayer(keyboard)
TagPage.addSubLayer(myLayer)
keyboard.placeBefore(StatusBarTag)


# set some variables
typeSpeed = .12
row1 = -114
row2 = -6
row3 = 102
space = 'images/space.png'
middle = 'images/key_middle.png'
left = 'images/key_left.png'
right = 'images/key_right.png'

# create the key layer
key = new Layer width:163,height:222,image:'images/key_middle.png',superLayer:keyboard,visible:false
key.html = ''	
key.style = color:'#000',textAlign:'center',fontSize:'82px',fontWeight:'100',paddingTop:'24px',lineHeight:'82px',textTransform:'uppercase'
		
# states for key positions		
key.states.add
	' ':{x:237,y:210,image:space}
	'.':{visible:false},',':{visible:false}
	':':{visible:false},';':{visible:false}
	'!':{visible:false},'?':{visible:false}
	'/':{visible:false},'@':{visible:false}
	'(':{visible:false},')':{visible:false}
	'{':{visible:false},'}':{visible:false}
	'[':{visible:false},']':{visible:false}
	# row 1
	q:{x:-18,y:row1,image:left},Q:{x:-18,y:row1,image:left}
	w:{x:31,y:row1,image:middle},W:{x:31,y:row1,image:middle}
	e:{x:106,y:row1,image:middle},E:{x:106,y:row1,image:middle}
	r:{x:181,y:row1,image:middle},R:{x:181,y:row1,image:middle}
	t:{x:256,y:row1,image:middle},T:{x:256,y:row1,image:middle}
	y:{x:331,y:row1,image:middle},Y:{x:331,y:row1,image:middle}
	u:{x:406,y:row1,image:middle},U:{x:406,y:row1,image:middle}
	i:{x:481,y:row1,image:middle},I:{x:481,y:row1,image:middle}
	o:{x:556,y:row1,image:middle},O:{x:556,y:row1,image:middle}
	p:{x:605,y:row1,image:right},P:{x:605,y:row1,image:right}
	# row 2
	a:{x:-7,y:row2,image:middle},A:{x:-7,y:row2,image:middle}
	s:{x:68,y:row2,image:middle},S:{x:68,y:row2,image:middle}
	d:{x:143,y:row2,image:middle},D:{x:143,y:row2,image:middle}
	f:{x:218,y:row2,image:middle},F:{x:218,y:row2,image:middle}
	g:{x:293,y:row2,image:middle},G:{x:293,y:row2,image:middle}
	h:{x:368,y:row2,image:middle},H:{x:368,y:row2,image:middle}
	j:{x:443,y:row2,image:middle},J:{x:443,y:row2,image:middle}
	k:{x:518,y:row2,image:middle},K:{x:518,y:row2,image:middle}
	l:{x:593,y:row2,image:middle},L:{x:593,y:row2,image:middle}
	# row 3
	z:{x:68,y:row3,image:middle},Z:{x:68,y:row3,image:middle}
	x:{x:143,y:row3,image:middle},X:{x:143,y:row3,image:middle}
	c:{x:218,y:row3,image:middle},C:{x:218,y:row3,image:middle}
	v:{x:293,y:row3,image:middle},V:{x:293,y:row3,image:middle}
	b:{x:368,y:row3,image:middle},B:{x:368,y:row3,image:middle}
	n:{x:443,y:row3,image:middle},N:{x:443,y:row3,image:middle}
	m:{x:518,y:row3,image:middle},M:{x:518,y:row3,image:middle}
			
type = (textField,filler_text) ->		
	filler_text = filler_text.split('')
	totalDelay = 0
	counter = 0
	textField.html = ''
	textField.style = color:'#333'

	typeLetter = (letter, delay) ->
		totalDelay += typeSpeed
		Utils.delay totalDelay, ->
			counter += 1 
			key.visible = true
			textField.html += letter
			key.html = letter
			key.states.switchInstant(letter)
			if counter == filler_text.length
				Utils.delay typeSpeed, ->
					key.visible = false
					
	for letter,i in filler_text
		typeLetter letter, i
		total = i
		
##################################################### CountDown Input #####################################################

text = new Layer 
  width: 140, height: 280, x: 144, y: 161
  backgroundColor: "transparent"

text.input = document.createElement("input")
text._element.appendChild(text.input)
text.input.maxlength = "2"
text.input.type = "tel"
text.input.style.fontSize = "171px"
text.input.style.fontFamily = "DINCond-Light"
text.input.style.backgroundColor = "transparent"
text.input.style.height = "#{text.height}px"
text.input.style.width = "#{text.width}px"
text.input.style.textAlign = "center"
text.input.style.color = "#fff"
text.input.value = "00"
text.input.onfocus = -> document.body.scrollTop = 0

text1 = new Layer 
  width: 140, height: 280, x: 303, y: 161
  backgroundColor: "transparent"

text1.input = document.createElement("input")
text1._element.appendChild(text1.input)
text1.input.maxlength = "2"
text1.input.type = "tel"
text1.input.style.fontSize = "171px"
text1.input.style.fontFamily = "DINCond-Light"
text1.input.style.backgroundColor = "transparent"
text1.input.style.height = "#{text.height}px"
text1.input.style.width = "#{text.width}px"
text1.input.style.textAlign = "center"
text1.input.style.color = "#fff"
text1.input.value = "00"
text1.input.onfocus = -> document.body.scrollTop = 0

text2 = new Layer 
  width: 140, height: 280, x: 459, y: 161
  backgroundColor: "transparent"

text2.input = document.createElement("input")
text2._element.appendChild(text2.input)
text2.input.maxlength = "2"
text2.input.type = "tel"
text2.input.style.fontSize = "171px"
text2.input.style.fontFamily = "DINCond-Light"
text2.input.style.backgroundColor = "transparent"
text2.input.style.height = "#{text.height}px"
text2.input.style.width = "#{text.width}px"
text2.input.style.textAlign = "center"
text2.input.style.color = "#fff"
text2.input.value = "00"
text2.input.onfocus = -> document.body.scrollTop = 0
