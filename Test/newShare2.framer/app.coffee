# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

########################### init layer ###########################

## Window Responsive
# default_w = 1080
# default_h = 1920
# screen_width = Framer.Device.screen.width 
# screen_height = Framer.Device.screen.height
ratio = Screen.width / 1080
# Framer.Device.contentScale = ratio


Cool = new Layer
	width: 1080
	height: 1920
	originX: 0.00
	originY: 0.00
	scale: ratio

spring1 = 'spring(250,25,0)'	

Screenone = new Layer 
	width: 1080
	height:1920
	parent: Cool
	backgroundColor: "#000"
	
Screentwo = new Layer 
	width: 1080
	height:1920
	y:1920
	parent: Cool
	backgroundColor: "#000"
	
Screenthree = new Layer
	width: 1080
	height: 1920
	y:1920
	parent: Cool
	backgroundColor: "#000"

wechat_screen3 = new Layer
	width: 1080
	height: 1920
	parent: Screenthree
	image: "images/wechat_screen3.png"

wechat_screen4 = new Layer
	width: 1080
	height: 1920
	x:1080
	parent: Screenthree
	image: "images/wechat_screen4.png"

wechat_screen1 = new Layer
	width: 1080
	height: 1920
	parent: Screentwo
	image: "images/wechat_screen1.png"

wechat_hitarea = new Layer
	width: 200
	height: 120
	parent: wechat_screen1
	x:740
	y:1365
	opacity: 0
	
wechat_hitarea_cancel = new Layer
	width: 200
	height: 120
	parent: wechat_screen1
	x:560
	y:1365
	opacity: 0
	
wechat_hitarea2 = new Layer
	width: 1080
	height: 120
	parent: wechat_screen3
	x:0
	y:1234
	opacity: 0

wechat_screen2 = new Layer
	width: 1080
	height: 1920
	x:1080
	parent: Screentwo
	image: "images/wechat_screen2.png"

bgColor = new Layer
	width: 1080
	height: 1920
	parent: Screenone
	image: "images/bgColor.jpg"
	

tips_text = new Layer
	width: 190
	height: 29
	parent: Screenone
	x:446
	scale: 1.25
	y:-70
	image: "images/tips_text.png"
	
av_icon1A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:106
	y:2007
	image: "images/av_icon1.png"

av_icon2A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:292
	y:2007
	image: "images/av_icon2.png"

av_icon3A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:478
	y:2007
	image: "images/av_icon3.png"

av_icon4A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:664
	y:2007
	image: "images/av_icon4.png"

av_icon5A = new Layer
	width: 113
	height: 159
	parent: Screenone
	x:850
	y:2007
	image: "images/av_icon5.png"

av_icon6A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:1036
	y:2007
	image: "images/av_icon6.png"
	

	
weibo_Page = new Layer
	width: 1080
	height: 1920
	parent: Screenone
	image: "images/weibo_Page.jpg"


black_mask = new Layer
	width: 1080
	height: 1920
	opacity: 1
	scale: 1
	backgroundColor: "#000"

imageObj = new Image
imageObj.src = "https://source.unsplash.com/random/812x876"

darker_image = new Layer
	x:33
	y:690
	width: 1014
	height: 1095
	image: imageObj.src

darker_image_base = new Layer
	x:33
	y:690
	width: 1014
	height: 1095
	image: imageObj.src

weibo_Page.addSubLayer(darker_image_base)
darker_image_base.placeBehind(black_mask)

selection_copy = new Layer
	width: 852
	height: 250
	x:115
	y:380
	backgroundColor: "transparent"
	scale: 1
	
mask1 = new Layer
	width: 853
	height: 52
	x:0
	y:-1
	clip: true
	backgroundColor: "transparent"
	originX: 0.00
	originY: 0.00
	scaleY: 1.01
	
mask2 = new Layer
	width: 853
	height: 49
	x:0
	y:51
	clip: true
	backgroundColor: "transparent"
	originX: 0.00
	originY: 0.00
	scaleY: 1.01
	
mask3 = new Layer
	width: 853
	height: 50
	x:0
	y:100
	clip: true
	backgroundColor: "transparent"
	originX: 0.00
	originY: 0.00
	scaleY: 1.01
	
mask4 = new Layer
	width: 853
	height: 50
	x:0
	y:150
	clip: true
	backgroundColor: "transparent"
	scaleY: 1.01
	originX: 0.00
	originY: 0.00
	
mask5 = new Layer
	width: 682
	height: 53
	x:0
	y:200
	clip: true
	backgroundColor: "transparent"
	
l2 = new Layer
	width: 853
	height: 53
	image: "images/l2.png"

l3 = new Layer
	width: 853
	height: 53
	image: "images/l3.png"

l1 = new Layer
	width: 853
	height: 52
	image: "images/l1.png"

l4 = new Layer
	width: 853
	height: 53
	image: "images/l4.png"

l5 = new Layer
	width: 696
	height: 64
	image: "images/l5.png"

selection_copy.addSubLayer(mask1)
selection_copy.addSubLayer(mask2)
selection_copy.addSubLayer(mask3)
selection_copy.addSubLayer(mask4)
selection_copy.addSubLayer(mask5)

mask1.addSubLayer(l1)
mask2.addSubLayer(l2)
mask3.addSubLayer(l3)
mask4.addSubLayer(l4)
mask5.addSubLayer(l5)

##Selection_bar
selB = new Layer
	width: 122
	height: 138
	x: 743
	y: 204
	opacity:  0 


	
selB_real = new Layer
	width: 61
	height: 138
	image: "images/Selb.png"
	x: 743
	y: 204

selB.midX  = selB_real.midX

selD_real = new Layer
	width: 61
	height: 138
	image: "images/Seld.png"
	x: 0
	y: 0
	
	
selBConstraint = new Layer
	width: 1000
	height: 350
	backgroundColor: "transparent"
	x: 61
	y: 20
	
selB.draggable.enabled = false
selB.draggable.momentum = false
selB.draggable.overdrag = false
selB.draggable.bounce = false
selB.draggable.constraints = selBConstraint.frame

selection = new Layer 
	width: 1000
	height: 250
	x:54
	y:380
	backgroundColor: "transparent"
	scale: 1
	opacity: 1.00

selection.addSubLayer(selBConstraint)
selection.addSubLayer(selD_real)
selection.addSubLayer(selB_real)
selection.addSubLayer(selB)

	
wechat_diaglog = new Layer
	width: 860
	height: 654
	x:110
	y:633
	image: "images/wechat_diaglog.png"
	
wechat_diaglog_h1 = new Layer
	width: 160
	height: 100
	x:440
	y:520
	opacity: 0.0

wechat_diaglog_h2 = new Layer
	width: 200
	height: 100
	x:630
	y:520
	opacity: 0

wechat_black = new Layer
	width: 1080
	height: 1920
	image: "images/wechat_black.png"
	
wechat_screen3.addSubLayer(wechat_black)
wechat_screen3.addSubLayer(wechat_diaglog)
wechat_diaglog.addSubLayer(wechat_diaglog_h1)
wechat_diaglog.addSubLayer(wechat_diaglog_h2)

########################### state machine ###########################

wechat_diaglog.states.add
	showed:
		ignoreEvents:false
		opacity:1
		scale:1
	disappeared:
		ignoreEvents:true
		opacity:0
		scale:0.8
wechat_diaglog.states.animationOptions =		
	curve:"spring(250, 25, 0)"
wechat_diaglog.states.switchInstant("disappeared")

wechat_black.states.add
	showed:
		ignoreEvents:false
		opacity:1
	disappeared:
		ignoreEvents:true
		opacity:0
wechat_black.states.animationOptions =		
	curve:"spring(250, 25, 0)"
wechat_black.states.switchInstant("disappeared")
	
darker_image.states.add
	blacked:
		opacity: 0.5
	whited:
		opacity: 1
darker_image.states.switchInstant("whited")

black_mask.states.add
	showed:
		opacity: 0.5
	disappeared:
		opacity: 0
black_mask.states.animationOptions =
    curve: spring1
black_mask.states.switchInstant("disappeared")

selection_copy.states.add
	showed:
		opacity: 1
		scale:1
	disappeared:
		opacity: 0
		x:115
		y:380
		scale: 0.95
selection_copy.states.animationOptions =
	curve:"spring(250, 25, 0)"
selection_copy.states.switchInstant("disappeared")

selection.states.add
	showed:
		opacity: 1
		x:54
		y:380
		scale:1
	disappeared:
		opacity: 0
		scale:0.95
selection.states.animationOptions =		
	curve:"spring(250, 25, 0)"
selection.states.switchInstant("disappeared")

weibo_Page.states.add
	scaledown:
		scale: 0.8
		y: -100
	scaleup:
		y: 0
		scale:1
weibo_Page.states.animationOptions =		
	curve: "spring(250, 25, 0)"
	time: 0.3
weibo_Page.states.switchInstant("scaleup")

tips_text.states.add
	scaledown:
		scale: 1
		y: 30
	scaleup:
		y: -70
		scale:1.25
tips_text.states.animationOptions =		
	curve: "spring(250, 25, 0)"
	time: 0.3
tips_text.states.switchInstant("scaleup")

weibo_Page.addSubLayer(black_mask)
weibo_Page.addSubLayer(darker_image)
# weibo_Page.addSubLayer(selection_copy)
# weibo_Page.addSubLayer(selection)

Cool.addSubLayer(selection_copy)
Cool.addSubLayer(selection)

########################### some variable ###########################

constraintsA = new Layer
	width: 812
	height: 876
	parent: Screenone
	x: 134
	y: 644
	opacity: 0
	backgroundColor: "#000"
	ignoreEvents: true
	
constraintsB = new Layer
	width: 852
	height: 24
	parent: Screenone
	x: 115
	y: 380
	opacity: 0
	backgroundColor: "#000"
	ignoreEvents: true

topisOnTapped = 0
scaled = 0
prevent1 = 0
prevent2 = 0
Framer.Extras.Hints.disable()
layerArrays = [av_icon1A,av_icon2A,av_icon3A,av_icon4A,av_icon5A,av_icon6A]

########################### crop image ###########################

##容器&画布&图像素材
container = new Layer
	width: 812
	height: 876
	x:134
	y:644
	backgroundColor: "transparent"
	shadowSpread: 5
	shadowColor: "rgba(255,255,255,1)"
	opacity: 1.00
	
dragger_container = new Layer
	width: 846
	height: 914
	x:118
	y:630
	backgroundColor: "transparent"


Cool.addSubLayer(dragger_container)
Cool.addSubLayer(container)
container.placeBefore(Screenone)
dragger_container.placeBefore(container)

myCanvas = document.createElement "canvas"
myCanvas.setAttribute("width","812px")
myCanvas.setAttribute("height","876px")
myCanvas.setAttribute("style","border: 0px solid white;background:transparent")
myCanvas.style.backgroundSize = "cover";


container._element.appendChild(myCanvas)

#########1st ReRender()
##源头的裁剪位置
sourceX = 0;
sourceY = 0;
sourceWidth = 812;
sourceHeight = 876;

##目的地的裁剪位置
destWidth = sourceWidth;
destHeight = sourceHeight;
destX = myCanvas.width / 2 - destWidth / 2;
destY = myCanvas.height / 2 - destHeight / 2;

ctx = myCanvas.getContext "2d"
ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
ctx.drawImage(imageObj, sourceX, sourceY, sourceWidth*1, sourceHeight*1, destX, destY, destWidth, destHeight)

#########

selection_dragger_tl = new Layer
	width: 40
	height: 40
	scale:4
	backgroundColor: "transparent"
	borderRadius: 100
	x: 0
	y: 0
	
selection_dragger_tr = new Layer
	width: 40
	height: 40
	scale:4
	backgroundColor: "transparent"
	borderRadius: 100
	x: 812
	y: 0
	
selection_dragger_bl = new Layer
	width: 40
	height: 40
	scale:4
	backgroundColor: "transparent"
	borderRadius: 100
	x: 0
	y: 876
	
selection_dragger_br = new Layer
	width: 40
	height: 40
	scale:4
	backgroundColor: "transparent"
	borderRadius: 100
	x: 812
	y: 876
	
selectb_1 = new Layer
	width: 72
	height: 72
	scale: 0.23
	image: "images/selectb_1.png"
	x: -14
	y: -14
	scaleY: 1.05
	scaleX: 0.97

selectb_2 = new Layer
	width: 72
	height: 72
	scale: 0.23
	x: -20
	y: -14
	scaleY: 1.05
	scaleX: 0.97
	image: "images/selectb_2.png"
	
selectb_3 = new Layer
	width: 72
	height: 72
	scale: 0.23
	scaleY: 1.05
	scaleX: 0.97
	x: -14
	y: -21
	image: "images/selectb_3.png"

selectb_4 = new Layer
	width: 72
	height: 72
	scale: 0.23
	scaleY: 1.05
	scaleX: 0.97
	image: "images/selectb_4.png"
	x: -20
	y: -21
	
selectionbarArrays = [selection_dragger_bl,selection_dragger_br,selection_dragger_tl,selection_dragger_tr]
	
selection_dragger_tl.addSubLayer(selectb_1)
selection_dragger_tr.addSubLayer(selectb_2)
selection_dragger_bl.addSubLayer(selectb_3)
selection_dragger_br.addSubLayer(selectb_4)
	
selectiondragger_frame = new Layer
	width: 852
	height: 916
	x:0
	y:0
	backgroundColor: "transparent"
	opacity: 0
	
dragger_container.addSubLayer(selectiondragger_frame)

for imgselectLayers in selectionbarArrays
	dragger_container.addSubLayer(imgselectLayers)
	imgselectLayers.draggable.constraints = selectiondragger_frame.frame
	imgselectLayers.draggable.overdrag = false
	imgselectLayers.draggable.momentum = false
	imgselectLayers.draggable.bounce = false


#bl

selection_dragger_bl.on Events.Swipe, (event) ->
		blrr()
		
selection_dragger_bl.on Events.SwipeStart, (event) ->
		blrr()
		
selection_dragger_bl.on Events.SwipeEnd, (event) ->
		selection_dragger_tr.draggable.enabled = true
		selection_dragger_tl.draggable.enabled = true
		selection_dragger_br.draggable.enabled = true
		container.draggable.enabled = true

		selection_dragger_br.y = selection_dragger_bl.y
		selection_dragger_tl.x = selection_dragger_bl.x
		
		ReRender()
		
blrr = ->
		selection_dragger_tr.draggable.enabled = false
		selection_dragger_tl.draggable.enabled = false
		selection_dragger_br.draggable.enabled = false
		container.draggable.enabled = false

		selection_dragger_br.y = selection_dragger_bl.y
		selection_dragger_tl.x = selection_dragger_bl.x
		
		ReRender()

#br

selection_dragger_br.on Events.Swipe, (event) ->
		brrr()
		
selection_dragger_br.on Events.SwipeStart, (event) ->
		brrr()
		
selection_dragger_br.on Events.SwipeEnd, (event) ->
		selection_dragger_tr.draggable.enabled = true
		selection_dragger_tl.draggable.enabled = true
		selection_dragger_bl.draggable.enabled = true
		container.draggable.enabled = true
		
		selection_dragger_bl.y = selection_dragger_br.y
		selection_dragger_tr.x = selection_dragger_br.x
		
		ReRender()
		
brrr = ->
		##禁止其他手柄拖动
		selection_dragger_tr.draggable.enabled = false
		selection_dragger_tl.draggable.enabled = false
		selection_dragger_bl.draggable.enabled = false
		container.draggable.enabled = false
		
		selection_dragger_bl.y = selection_dragger_br.y
		selection_dragger_tr.x = selection_dragger_br.x
		
		ReRender()

##tl

selection_dragger_tl.on Events.Swipe, (event) ->
		tlrr()
		
selection_dragger_tl.on Events.SwipeStart, (event) ->
		tlrr()
		
selection_dragger_tl.on Events.SwipeEnd, (event) ->
	
		selection_dragger_tr.draggable.enabled = true
		selection_dragger_bl.draggable.enabled = true
		selection_dragger_br.draggable.enabled = true
		container.draggable.enabled = true
		
		selection_dragger_tr.y = selection_dragger_tl.y
		selection_dragger_bl.x = selection_dragger_tl.x
		
		ReRender()

tlrr = ->
		##禁止其他手柄拖动
		selection_dragger_tr.draggable.enabled = false
		selection_dragger_bl.draggable.enabled = false
		selection_dragger_br.draggable.enabled = false
		container.draggable.enabled = false
		
		selection_dragger_tr.y = selection_dragger_tl.y
		selection_dragger_bl.x = selection_dragger_tl.x
		
		ReRender()

##tr

selection_dragger_tr.on Events.Swipe, (event) ->
		trrr()

selection_dragger_tr.on Events.SwipeStart, (event) ->
		trrr()
		
selection_dragger_tr.on Events.SwipeEnd, (event) ->
		selection_dragger_tl.draggable.enabled = true
		selection_dragger_bl.draggable.enabled = true
		selection_dragger_br.draggable.enabled = true
		container.draggable.enabled = true
		
		selection_dragger_tl.y = selection_dragger_tr.y
		selection_dragger_br.x = selection_dragger_tr.x
		
		ReRender()
		
trrr = ->
		##禁止其他手柄拖动
		selection_dragger_tl.draggable.enabled = false
		selection_dragger_bl.draggable.enabled = false
		selection_dragger_br.draggable.enabled = false
		container.draggable.enabled = false
		
		selection_dragger_tl.y = selection_dragger_tr.y
		selection_dragger_br.x = selection_dragger_tr.x
		
		ReRender()

ReSize = ->
		ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
		
		selection_dragger_tl.x = 0
		selection_dragger_tl.y = 0
		
		selection_dragger_tr.x = 812
		selection_dragger_tr.y = 0
		
		selection_dragger_bl.x = 0
		selection_dragger_bl.y = 876
		
		selection_dragger_br.x = 812
		selection_dragger_br.y = 876
		
		ctx.drawImage(imageObj, 0, 0, 812*1, 876*1, 0, 0, 812, 876)
		
		container.x = 134
		container.y = 644
		container.width = 812
		container.height = 876
		constraintsA.x = 134
		constraintsA.y = 644
		constraintsA.width = 812 
		constraintsA.height = 876
		darker_image.opacity = 0.5
		
ReRender = ->
			
		ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

		sourceX = (selection_dragger_bl.x)
		destX = 0
		destWidth = (selection_dragger_br.x - selection_dragger_bl.x)
		sourceWidth = (selection_dragger_br.x - selection_dragger_bl.x)
		
		sourceY = selection_dragger_tl.y
		destY = 0
		destHeight = selection_dragger_bl.y - selection_dragger_tl.y
		sourceHeight = selection_dragger_bl.y - selection_dragger_tl.y
				
		ctx.drawImage(imageObj, sourceX*1, sourceY*1, sourceWidth*1, sourceHeight*1, destX, destY, destWidth, destHeight)
		
		container.x = selection_dragger_tl.x + 134
		container.y = selection_dragger_tl.y + 644
		container.width = destWidth
		container.height = destHeight
		constraintsA.x = selection_dragger_tl.x + 134
		constraintsA.y = selection_dragger_tl.y + 644
		constraintsA.width = destWidth 
		constraintsA.height = destHeight
		
		
container.states.add
	showed:
		opacity: 1.00
		scale: 1
		
	disappeared:
		opacity: 0
		scale: 1
	
	shadowblack:
		shadowSpread:0
		shadowColor:"rgba(0,0,0,0.5)"
		shadowY:8
		shadowBlur:12
	shadowwhite:
		shadowSpread: 5
		shadowY:0
		shadowBlur:0
		shadowColor: "rgba(255,255,255,1)"
container.states.animationOptions =
    curve: spring1
container.states.switchInstant("disappeared")

dragger_container.states.add
	showed:
		opacity: 1
		x:118
		y:630
		scale:1
	disappeared:
		opacity: 0
		scale:0.95
	none:
		opacity: 0
		scale:0.95
dragger_container.states.animationOptions =		
	curve: "spring(450, 18, 0)"
dragger_container.states.switchInstant("disappeared")



#######################################

container.ignoreEvents = true
selection_copy.ignoreEvents = true

selection_dragger_tr.draggable.enabled = false
selection_dragger_tl.draggable.enabled = false
selection_dragger_br.draggable.enabled = false
selection_dragger_bl.draggable.enabled = false

###################### crop text ##########################
	
##selection_copy

selReSize = ->
	selB.x = 743
	selB_real.x = 743
	selB.y = 204
	selB_real.y = 204
	mask1.width = 853
	mask2.width = 853
	mask3.width = 853
	mask4.width = 853
	mask5.width = 682
	selection_copy.height = 250


selB.on Events.DragEnd, (event)->
	selB.y  = selB_real.y
	selB.midX  = selB_real.midX
	
selB.on Events.Drag, (event)->

	## l5
	if selB.y > 204
		selB_real.y = 204
		selection_copy.height = 250
		#其他行
		mask1.width = 853
		mask2.width = 853
		mask3.width = 853
		mask4.width = 853
		mask5.width = 0
		
		## 限定范围
		if selB.x >= 757
			selB.x = 757
			mask5.width = 682
			selB_real.x = 757
		
		if selB.x <= 90
			selB.x = 90
			mask5.width = 0
			selB_real.x = 61
			
		## 按字号递进
		else 
			selB_real.x = Math.round(selB.x/32.4)*32.4 + (21 - Math.round(selB.x/32.4)) * 1.08
			mask5.width = selB_real.x - 61
			
	## l4
	if selB.y < 204 && selB.y > 154
		selB_real.y = 154
		selection_copy.height = 203
		#其他行
		mask1.width = 853
		mask2.width = 853
		mask3.width = 853
		mask5.width = 0
		
		if selB.x >= 900
			selB.x = 904
			mask4.width = 853
			selB_real.x = 904
		
		if selB.x <= 110
			selB.x = 110
			mask4.width = 0
			selB_real.x = 61
			
		## 按字号递进
		else 
			selB_real.x = Math.round(selB.x/32.4)*32.4 - (25 - Math.round(selB.x/32.4)) * 1.25 + 4
			mask4.width = selB_real.x - 61
			
	## l3
	if selB.y < 154 && selB.y > 104
		selB_real.y = 104
		selection_copy.height = 153
		#其他行
		mask1.width = 853
		mask2.width = 853
		mask4.width = 0
		mask5.width = 0
		
		if selB.x >= 900
			selB.x = 904
			mask3.width = 853
			selB_real.x = 904
		
		if selB.x <= 110
			selB.x = 110
			mask3.width = 0
			selB_real.x = 61
			
		## 按字号递进
		else 
			selB_real.x = Math.round(selB.x/32.4)*32.4 - (25 - Math.round(selB.x/32.4)) * 1.25 + 4
			mask3.width = selB_real.x - 61
	
	## l2
	if selB.y < 104 && selB.y > 54
		selB_real.y = 54
		selection_copy.height = 103
		#其他行
		mask1.width = 853
		mask3.width = 0
		mask4.width = 0
		mask5.width = 0
		
		if selB.x >= 900
			selB.x = 904
			mask2.width = 853
			selB_real.x = 894
		
		if selB.x <= 110
			selB.x = 110
			mask2.width = 0
			selB_real.x = 61
			
		## 按字号递进
		else 
			selB_real.x = Math.round(selB.x/32.4)*32.4 - (25 - Math.round(selB.x/32.4)) * 1.25 + 4
			mask2.width = selB_real.x - 61
	
	## l1
	if selB.y < 54 && selB.y > 0
		selB_real.y = 0
		selection_copy.height = 53
		#其他行
		mask2.width = 0
		mask3.width = 0
		mask4.width = 0
		mask5.width = 0
		
		if selB.x >= 900
			selB.x = 904
			mask1.width = 853
			selB_real.x = 904
		
		if selB.x <= 110
			selB.x = 110
			mask1.width = 0
			selB_real.x = 61
			
		## 按字号递进
		else 
			selB_real.x = Math.round(selB.x/32.4)*32.4 - (25 - Math.round(selB.x/32.4)) * 1.25 + 4
			mask1.width = selB_real.x - 61
			




########################### diagnoal swipe part ###########################

weibo_Page.on Events.Pan, (event) ->
	if scaled == 0 
		if Math.abs(event.offset.y) >= 960
			a = 960
		else 
			a = Math.abs(event.offset.y)
		
		if Math.abs(event.offset.x) >= 540
			b = 540
		else 
			b = Math.abs(event.offset.x)	
			
		progress = Math.sqrt(a*a + b*b)/1101
		
		if Math.abs(event.velocity.x) > 0.25 && Math.abs(event.velocity.y) > 0.25
			weibo_Page.scale = Utils.modulate(progress, [0, 0.33], [1, 0.8], true)
			weibo_Page.y = Utils.modulate(progress, [0, 0.33], [0, -100], true)
			tips_text.y = Utils.modulate(progress, [0, 0.33], [-70, 30],true)
			tips_text.scale = Utils.modulate(progress, [0, 0.33], [1.25, 1],1)
			
weibo_Page.on Events.PanEnd, (event) ->
	if scaled == 0 
		if Math.abs(event.offset.y) >= 960
			a = 960
		else 
			a = Math.abs(event.offset.y)
		
		if Math.abs(event.offset.x) >= 540
			b = 540
		else 
			b = Math.abs(event.offset.x)	
			
		progress = Math.sqrt(a*a + b*b)/1101
		
		if Math.abs(event.velocity.x) > 0.2 && Math.abs(event.velocity.y) > 0.2 && progress > 0.15
			ReRender()
			weibo_Page.ignoreEvents = true
			
			weibo_Page.states.switch("scaledown")
			tips_text.states.switch("scaledown")
			scaled = 1
			selB.draggable.enabled = true
			for layers,i in layerArrays
				layers.animate
					properties:
						y:1707
					time: 0.3
					delay:0.03*i
					curve: "spring(250, 25, 0)"
			
			Utils.delay 0.2, ->
				selection.states.switch("showed")
				selection_copy.states.switch("showed")
				black_mask.states.switch("showed")
				selection_copy.draggable.enabled = true
				
			Utils.delay 0.6, ->
				container.ignoreEvents = false
				selection_copy.ignoreEvents = false
				
			container.states.switchInstant("disappeared")
			dragger_container.states.switchInstant("disappeared")
			darker_image.states.switchInstant("blacked")
		else 
			scaled = 0
			weibo_Page.ignoreEvents = false
			weibo_Page.states.switch("scaleup")
			tips_text.states.switch("scaleup")
					

black_mask.onTap ->

bgColor.onTap ->
	if scaled == 1
		scaled = 0
		selB.draggable.enabled = false
		selection_dragger_bl.draggable.enabled = false
		selection_dragger_tl.draggable.enabled = false
		selection_dragger_br.draggable.enabled = false
		selection_dragger_tr.draggable.enabled = false
		weibo_Page.states.switch("scaleup")
		tips_text.states.switch("scaleup")
		dragger_container.states.switchInstant("disappeared")
		container.states.switchInstant("disappeared")
		selection.states.switchInstant("disappeared")
		selection_copy.states.switchInstant("disappeared")
		weibo_Page.ignoreEvents = false
		selection_dragger_tr.draggable.enabled = false
		selection_dragger_tl.draggable.enabled = false
		selection_dragger_br.draggable.enabled = false
		selection_dragger_bl.draggable.enabled = false
		
		for layers,i in layerArrays
			layers.animate
				properties:
					y:2007
				time: 0.3
				curve: "spring(250, 25, 0)"
		Utils.delay 0.2, ->
			black_mask.states.switch("disappeared")
			ReSize()
			selReSize()
		Utils.delay 0.6, ->
			container.ignoreEvents = true
			selection_copy.ignoreEvents = true
			container.draggable.enabled = false
			selection_copy.draggable.enabled = false
			
		
			
########################### image selection part ###########################

container.on Events.Tap, (event) ->
	if scaled == 1
		topisOnTapped = 0
		dragger_container.states.switch("showed")
		container.states.switch("showed")
		
		selB.draggable.enabled = false
		selection_dragger_tr.draggable.enabled = true
		selection_dragger_tl.draggable.enabled = true
		selection_dragger_br.draggable.enabled = true
		selection_dragger_bl.draggable.enabled = true
		
		black_mask.states.switch("showed")
		
		darker_image.states.switchInstant("blacked")
		
		container.draggable.enabled = true
		container.draggable.constraints = constraintsA.frame
		
		selection.states.switchInstant("disappeared")
		selection_copy.states.switchInstant("disappeared")
		selection_copy.draggable.enabled = false
		
		Utils.delay 0.2, ->
			selReSize()


container.on Events.DragStart, (event) ->
	if scaled == 1
		dragger_container.states.switchInstant("disappeared")
		darker_image.states.switchInstant("blacked")
		container.states.switchInstant("showed")
		container.states.switchInstant("shadowblack")
		selection_copy.ignoreEvents = true


container.on Events.DragEnd, (event) ->
	for layers in layerArrays
		layers.animate
			properties:
				scale: 1
				opacity: 1
			time: .2
	if scaled == 1
		if container.midY > av_icon1A.y  && container.midX < av_icon1A.maxX + 10
			container.animate
				properties:
					midX: av_icon1A.midX-100
					midY: av_icon1A.midY+300
					scale: 0
					opacity: 0
				time:0.2
				curve: "ease-out"
			Utils.delay 0.2, -> Transition()
			
			dragger_container.visible = false
			
			Transition = ->
				dragger_container.states.switchInstant("disappeared")
				darker_image.opacity = 0.5
				Screenone.animate
					properties: 
						opacity:0.5
						scale:0.7
					time: .4
					curve: "ease-out"
				Screentwo.animate
					properties: 
						y:0
					time: .4
					curve: "ease-out"
				container.states.switch("shadowwhite")
				
				selection_copy.ignoreEvents = false
				
		else
			dragger_container.scale = 1
			darker_image.opacity = 0.5
			
			container.animate
				properties:
					scale:1
					opacity:1
				time:0.3
				curve: "ease-out"
				
			Utils.delay 0.9, ->
				container.states.switch("shadowwhite")
				selection_copy.ignoreEvents = false
			
			dragger_container.animate
				properties:
					opacity:1
				time:0.3
				delay: 1
				curve: "ease-out"

				
container.on Events.DragMove, (event)->
	point = Utils.convertPointFromContext(event.touchCenter, container, true, false)
	container.midX = point.x
	container.midY = point.y
	dragger_container.states.switchInstant("disappeared")
	for layers,i in layerArrays
		if container.midY > 1550
			container.animate
				properties:
					scale:0.3
					opacity:0.3
				time:0.08
				curve: "ease-out"
				
			if container.midX < layers.maxX + 30 && container.midX > layers.minX - 30
				layers.animate
					properties:
						scale: 1.2
						opacity:1
					time: .2
					curve: "ease-out"
		
			else
				layers.animate
					properties:
						scale:1
						opacity:0.4
					time: .1
					curve: "ease-out"
		else 
			container.animate
				properties:
					scale:1
					opacity:1
				time:0.08
				curve: "ease-out"
				
			layers.animate
				properties:
					scale:1
					opacity:1
				time: .1
				curve: "ease-out"
		
				
wechat_hitarea.onTap ->
	wechat_screen1.animate
		properties: 
			x:-360
		time:0.3
		curve: 'spring(250,25,0)'
	wechat_screen2.animate
		properties: 
			x:0
		time: 0.3
		curve: 'spring(250,25,0)'
		
	darker_image.states.switchInstant("blacked")
	black_mask.states.switchInstant("showed")
	selection.states.switch("disappeared")
	selection_copy.states.switch("disappeared")
	

	
	

						
wechat_screen2.onTap ->
	Screenone.animate
		properties: 
			opacity:1
			scale:1
		time: .4
		curve: "ease-out"
	Screentwo.animate
		properties: 
			y:1920
		time: .4
		curve: "ease-out"

	Utils.delay 0.4, ->
		wechat_screen1.x = 0
		wechat_screen2.x = 1080
	
	for layers in layerArrays
		layers.opacity = 1 
	
	Utils.delay 0.25, ->
		container.scale = 1
		container.states.switch("showed")
		dragger_container.states.switch("showed")
		dragger_container.visible = true
		ReSize()
		
wechat_hitarea_cancel.onTap ->
	weibo_Page.states.switchInstant("scaledown")
	
	Utils.delay 0.2, ->
		Screenone.animate
			properties: 
				opacity:1
				scale:1
			time: .4
			curve: "ease-out"
		Screentwo.animate
			properties: 
				y:1920
			time: .4
			curve: "ease-out"
	
	Utils.delay 0.6, ->
		wechat_screen1.x = 0
		wechat_screen2.x = 1080
		darker_image.states.switchInstant("whited")
		
		black_mask.states.switchInstant("showed")
		selection.states.switch("disappeared")
		selection_copy.states.switch("disappeared")
	
	for layers in layerArrays
		layers.opacity = 1 
		
	Utils.delay 0.6, ->
		container.scale = 1
		container.states.switch("showed")
		dragger_container.states.switch("showed")
		dragger_container.visible = true
		ReSize()
		
		
########################### text selection part ###########################


selection_copy.on Events.Tap, (event) ->
	if scaled == 1
		topisOnTapped = 1
		dragger_container.states.switchInstant("disappeared")
		container.states.switchInstant("disappeared")
		container.draggable.enabled = false
		darker_image.states.switchInstant("blacked")
		
		selB.draggable.enabled = true
		selection_dragger_bl.draggable.enabled = false
		selection_dragger_tl.draggable.enabled = false
		selection_dragger_br.draggable.enabled = false
		selection_dragger_tr.draggable.enabled = false
		
		
		black_mask.states.switch("showed")
		
		selection.states.switch("showed")
		selection_copy.states.switch("showed")
		selection_copy.draggable.enabled = true
		selection_copy.draggable.constraints = constraintsB.frame
		
		Utils.delay 0.2, ->
			ReSize()
		
		
selection_copy.on Events.DragStart, (event) ->
	if scaled == 1
		selection_copy.animate
			properties:
				opacity: 0.5
			curve: "ease-in"
			time: .2
		selection.states.switchInstant("disappeared")
		container.ignoreEvents = true


selection_copy.on Events.DragEnd, (event) ->

	for layers in layerArrays
		layers.animate
			properties:
				scale: 1
				opacity: 1
			time: .2
			
	if scaled == 1
		if selection_copy.midY > av_icon4A.y && selection_copy.midX < av_icon4A.maxX + 10 && selection_copy.midX > av_icon4A.x - 10
			selection_copy.animate
				properties:
					midX: av_icon4A.midX
					midY: av_icon4A.midY
					scale: .2
					opacity: 0
				curve: "spring( 300, 20, 0 )"
				
			selection.visible = false
			
			Utils.delay 0.2, -> Transition2()
			
			Transition2 = ->
				selection.states.switchInstant("disappeared")
				selection_copy.states.switch("disappeared")
				
				Screenone.animate
					properties: 
						opacity:0.5
						scale:0.7
					time: .4
					curve: "ease-out"
				Screenthree.animate
					properties: 
						y:0
					time: .4
					curve: "ease-out"
					
				container.ignoreEvents = false

				
		else
			selection_copy.animate
				properties:
					opacity:1
					scale:1
				time:0.3
				curve: "ease-out"
				
			selection.animate
				properties:
					opacity:1
					scale:1
				time:0.3
				delay:1
				curve: "ease-out"
				
			Utils.delay 1.2, ->
				container.ignoreEvents = false
				
selection_copy.on Events.DragMove, (event)->
	point = Utils.convertPointFromContext(event.touchCenter, selection_copy, true, false)
	selection_copy.midX = point.x
	selection_copy.midY = point.y
	selection.states.switchInstant("disappeared")
	
	for layers,i in layerArrays
		if selection_copy.midY > 1550
			selection_copy.animate
				properties:
					scale:0.7
					opacity:0.3
				time:0.08
				curve: "ease-out"
				
			if selection_copy.midX < layers.maxX + 30 && selection_copy.midX > layers.minX - 30
				layers.animate
					properties:
						scale: 1.2
						opacity:1
					time: .2
					curve: "ease-out"
		
			else
				layers.animate
					properties:
						scale:1
						opacity:0.4
					time: .1
					curve: "ease-out"
		else 
			selection_copy.animate
				properties:
					scale:1
					opacity:1
				time:0.08
				curve: "ease-out"
				
			layers.animate
				properties:
					scale:1
					opacity:1
				time: .1
				curve: "ease-out"
				

wechat_hitarea2.onTap ->
	wechat_black.states.switch("showed")
	wechat_diaglog.states.switch("showed")

wechat_diaglog_h1.onTap ->
	wechat_black.states.switch("disappeared")
	wechat_diaglog.states.switch("disappeared")
	
wechat_diaglog_h2.onTap ->
	wechat_screen3.animate
		properties: 
			x:-360
		time:0.3
		curve: 'spring(250,25,0)'
	wechat_screen4.animate
		properties: 
			x:0
		time: 0.3
		curve: 'spring(250,25,0)'
	
	container.states.switchInstant("disappeared")
	dragger_container.states.switchInstant("disappeared")
	wechat_black.states.switch("disappeared")
	wechat_diaglog.states.switch("disappeared")
	darker_image.states.switchInstant("blacked")


						
wechat_screen4.onTap ->
	Screenone.animate
		properties: 
			opacity:1
			scale:1
		time: .4
		curve: "ease-out"
	Screenthree.animate
		properties: 
			y:1920
		time: .4
		curve: "ease-out"
	
	for layers in layerArrays
		layers.opacity = 1 
	
	Utils.delay 0.4, ->
		wechat_screen3.x = 0
		wechat_screen4.x = 1080
	
	Utils.delay 0.35, ->
		selection.states.switch("showed")
		selection_copy.states.switch("showed")
		selection.visible = true
		selReSize()


