# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "KingMartin"
	twitter: ""
	description: ""

Cool = new Layer
	width: 1080
	height: 1920

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
	

darker_image = new Layer
	x:33
	y:690
	width: 1014
	height: 1095
	image: "images/lighter_image.jpg"

lighter_image = new Layer
	x:33
	y:690
	width: 1014
	height: 1095
	image: "images/lighter_image.jpg"
	
edit_border = new Layer
	width: 1046
	height: 1129
	x:19
	y:675
	scale:1
	image: "images/edit_border.png"
	
selection = new Layer
	width: 914
	height: 359
	parent: Screenone
	x:46
	y:402
	image: "images/selection.png"
	scale: 1.25

selection_copy = new Layer
	width: 852
	height: 264
	parent: Screenone
	x:107
	y:390
	image: "images/selection_copy.png"
	scale: 1.25
	
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

lighter_image.states.add
	showed:
		opacity: 1
		scale: 1
		x:33
		y:690
		style: boxShadow: "0px 8px 12px 0px rgba(0,0,0,0.5)"
	disappeared:
		opacity: 0
		x:33
		y:690
		scale: 1
lighter_image.states.animationOptions =
    curve: spring1
lighter_image.states.switchInstant("disappeared")

edit_border.states.add
	showed:
		opacity: 1
		x:19
		y:675
		scale:1
	disappeared:
		opacity: 0
		scale:0.95
edit_border.states.animationOptions =		
	curve: "spring(450, 18, 0)"
edit_border.states.switchInstant("disappeared")

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
		scale:1.25
	disappeared:
		opacity: 0
		x:115
		y:390
		scale: 1.2
selection_copy.states.animationOptions =
	curve:"spring(250, 25, 0)"
selection_copy.states.switchInstant("disappeared")

selection.states.add
	showed:
		opacity: 1
		x:46
		y:402
		scale:1.25
	disappeared:
		opacity: 0
		scale:1.2
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
weibo_Page.addSubLayer(lighter_image)
weibo_Page.addSubLayer(edit_border)
weibo_Page.addSubLayer(selection)
weibo_Page.addSubLayer(selection_copy)

constraintsA = new Layer
	width: 812
	height: 900
	parent: Screenone
	x: 34
	y: 690
	opacity: 0
	backgroundColor: "#000"
	ignoreEvents: true
	
constraintsB = new Layer
	width: 852
	height: 124
	parent: Screenone
	x: 115
	y: 388
	opacity: 0
	backgroundColor: "#000"
	ignoreEvents: true

isDropped = false;
scaled = 0
Framer.Extras.Hints.disable()
layerArrays = [av_icon1A,av_icon2A,av_icon3A,av_icon4A,av_icon5A,av_icon6A]

lighter_image.ignoreEvents = true
selection_copy.ignoreEvents = true

#######################################

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
			weibo_Page.ignoreEvents = true
			weibo_Page.states.switch("scaledown")
			tips_text.states.switch("scaledown")
			scaled = 1
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
				lighter_image.ignoreEvents = false
				selection_copy.ignoreEvents = false
				
			lighter_image.states.switchInstant("disappeared")
			edit_border.states.switchInstant("disappeared")
			darker_image.states.switchInstant("blacked")
		else 
			scaled = 0
			weibo_Page.ignoreEvents = false
			weibo_Page.states.switch("scaleup")
			tips_text.states.switch("scaleup")
					
				


bgColor.on Events.Tap, (event) ->
	if scaled == 1
		scaled = 0
		weibo_Page.states.switch("scaleup")
		tips_text.states.switch("scaleup")
		edit_border.states.switchInstant("disappeared")
		lighter_image.states.switchInstant("disappeared")
		selection.states.switchInstant("disappeared")
		selection_copy.states.switchInstant("disappeared")
		weibo_Page.ignoreEvents = false
		
		for layers,i in layerArrays
			layers.animate
				properties:
					y:2007
				time: 0.3
				curve: "spring(250, 25, 0)"
		Utils.delay 0.2, ->

			black_mask.states.switch("disappeared")
		Utils.delay 0.6, ->
			lighter_image.ignoreEvents = true
			selection_copy.ignoreEvents = true
			lighter_image.draggable.enabled = false
			selection_copy.draggable.enabled = false
			
##############

lighter_image.on Events.Tap, (event) ->
	if scaled == 1
		edit_border.states.switch("showed")
		lighter_image.states.switch("showed")
		black_mask.states.switch("showed")
		darker_image.states.switchInstant("whited")
		lighter_image.draggable.enabled = true
		lighter_image.draggable.constraints = constraintsA.frame
		selection.states.switch("disappeared")
		selection_copy.states.switch("disappeared")
		selection_copy.draggable.enabled = false


lighter_image.on Events.DragStart, (event) ->
	if scaled == 1
		edit_border.states.switchInstant("disappeared")
		darker_image.states.switchInstant("blacked")
		lighter_image.states.switchInstant("showed")


lighter_image.on Events.DragEnd, (event) ->
  	
	for layers in layerArrays
		layers.animate
			properties:
				scale: 1
				opacity: 1
			time: .2
			
	if scaled == 1
		if lighter_image.midY > av_icon1A.y && lighter_image.midX < av_icon1A.maxX + 10
			lighter_image.animate
				properties:
					midX: av_icon1A.midX-100
					midY: av_icon1A.midY+300
					scale: 0
					opacity: 0
				time:0.2
				curve: "ease-out"
				
			Utils.delay 0.2, -> Transition()
			
			Transition = ->
				edit_border.states.switchInstant("disappeared")
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

				
		else
			edit_border.scale = 1
			darker_image.opacity = 0.5
			
			lighter_image.animate
				properties:
					scale:1
					opacity:1
				time:0.3
				curve: "ease-out"
			edit_border.animate
				properties:
					opacity:1
				time:0.3
				delay:1
				curve: "ease-out"
				
lighter_image.on Events.DragMove, (event)->
	point = Utils.convertPointFromContext(event.touchCenter, lighter_image, true, false)
	lighter_image.midX = point.x
	lighter_image.midY = point.y
	edit_border.states.switchInstant("disappeared")
	
	for layers,i in layerArrays
		if lighter_image.midY > 1800
			lighter_image.animate
				properties:
					scale:0.3
					opacity:0.3
				time:0.08
				curve: "ease-out"
				
			if lighter_image.midX < layers.maxX + 30 && lighter_image.midX > layers.minX - 30
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
			lighter_image.animate
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
		
	lighter_image.states.switchInstant("showed")
	edit_border.states.switchInstant("showed")
	darker_image.states.switchInstant("whited")
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
		lighter_image.states.switchInstant("showed")
		edit_border.states.switchInstant("showed")
		darker_image.states.switchInstant("whited")
		
		black_mask.states.switchInstant("showed")
		selection.states.switch("disappeared")
		selection_copy.states.switch("disappeared")
	
	for layers in layerArrays
		layers.opacity = 1 
		
		
#############


selection_copy.on Events.Tap, (event) ->
	if scaled == 1
		edit_border.states.switch("disappeared")
		lighter_image.states.switch("disappeared")
		lighter_image.draggable.enabled = false
		darker_image.states.switchInstant("blacked")
		black_mask.states.switch("showed")
		selection.states.switch("showed")
		selection_copy.states.switch("showed")
		selection_copy.draggable.enabled = true
		selection_copy.draggable.constraints = constraintsB.frame
		
selection_copy.on Events.DragStart, (event) ->
	point = Utils.convertPointFromContext(event.touchCenter, selection_copy, true, false)
	if scaled == 1
		selection_copy.animate
			properties:
				opacity: 0.5
			curve: "ease-in"
			time: .2
		selection.states.switchInstant("disappeared")


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

				
		else
			selection_copy.animate
				properties:
					opacity:1
					scale:1.25
				time:0.4
				curve: "ease-out"
				
			selection.animate
				properties:
					opacity:1
					scale:1.25
				time:0.4
				delay:1
				curve: "ease-out"
				
selection_copy.on Events.DragMove, (event)->
	point = Utils.convertPointFromContext(event.touchCenter, selection_copy, true, false)
	selection_copy.midX = point.x
	selection_copy.midY = point.y
	selection.states.switchInstant("disappeared")
	
	for layers,i in layerArrays
		if selection_copy.midY > 1800
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
					scale:1.25
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
	
	lighter_image.states.switchInstant("disappeared")
	edit_border.states.switchInstant("disappeared")
	wechat_black.states.switch("disappeared")
	wechat_diaglog.states.switch("disappeared")
	darker_image.states.switchInstant("blacked")
	selection.states.switch("showed")
	selection_copy.states.switch("showed")

						
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



