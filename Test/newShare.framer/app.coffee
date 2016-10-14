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
	height: 200
	parent: wechat_screen1
	x:740
	y:1300
	opacity: 0

wechat_hitarea2 = new Layer
	width: 500
	height: 120
	parent: wechat_screen2
	x:70
	y:1230
	opacity: 0

wechat_screen2 = new Layer
	width: 1080
	height: 1920
	x:1080
	parent: Screentwo
	image: "images/wechat_screen2.png"

bgColor = new Layer
	width: 2160
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
	opacity: 0.6
	image: "images/av_icon1.png"

av_icon2A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:292
	y:2007
	opacity: 0.6
	image: "images/av_icon2.png"

av_icon3A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:478
	y:2007
	opacity: 0.6
	image: "images/av_icon3.png"

av_icon4A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:664
	y:2007
	opacity: 0.6
	image: "images/av_icon4.png"

av_icon5A = new Layer
	width: 113
	height: 159
	parent: Screenone
	x:850
	y:2007
	opacity: 0.6
	image: "images/av_icon5.png"

av_icon6A = new Layer
	width: 112
	height: 159
	parent: Screenone
	x:1036
	y:2007
	opacity: 0.6
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
	
edit_border = new Layer
	width: 1046
	height: 1129
	x:19
	y:675
	scale:0.85
	image: "images/edit_border.png"

darker_image = new Layer
	x:33
	y:690
	width: 1014
	height: 1095
	image: "images/darker_image.png"

lighter_image = new Layer
	x:33
	y:690
	width: 1014
	height: 1095
	opacity: 0
	image: "images/lighter_image.png"

weibo_Page.addSubLayer(black_mask)
weibo_Page.addSubLayer(edit_border)
weibo_Page.addSubLayer(darker_image)
weibo_Page.addSubLayer(lighter_image)



selection = new Layer
	width: 919
	height: 213
	opacity: 0
	x:54
	y:376
	image: "images/selection.png"

selection_copy = new Layer
	width: 862
	height: 124
	x:110
	y:376
	opacity: 0
	image: "images/selection_copy.png"
	
scaled = 0
spring1 = 'spring(250,25,0)'
lighter_image.ignoreEvents = true
selection_copy.ignoreEvents = true

weibo_Page.on Events.Swipe, (event) ->
	if scaled == 0
		scaled = 1
		weibo_Page.animate
			properties:
				scale: 0.8
				y: -100
			time: 0.3
			curve: "spring(250, 25, 0)"
		tips_text.animate
			properties:
				scale:1
				y: 30
			time: 0.3
			curve: "spring(250, 25, 0)"
			
		av_icon1A.animate
			properties:
				y:1707
			time: 0.3
			delay:0.03
			curve: "spring(250, 25, 0)"
		av_icon2A.animate
			properties:
				y:1707
			time: 0.3
			delay:0.06
			curve: "spring(250, 25, 0)"
		av_icon3A.animate
			properties:
				y:1707
			time: 0.3
			delay:0.09
			curve: "spring(250, 25, 0)"
		av_icon4A.animate
			properties:
				y:1707
			time: 0.3
			delay:0.12
			curve: "spring(250, 25, 0)"
		av_icon5A.animate
			properties:
				y:1707
			time: 0.3
			delay:0.15
			curve: "spring(250, 25, 0)"
		av_icon6A.animate
			properties:
				y:1707
			time: 0.3
			delay:0.18
			curve: "spring(250, 25, 0)"
			
		Utils.delay 1, ->
			lighter_image.ignoreEvents = false
			selection_copy.ignoreEvents = false

			

bgColor.on Events.Tap, (event) ->
	if scaled == 1
		scaled = 0
		Utils.delay 1, ->
			lighter_image.ignoreEvents = true
			selection_copy.ignoreEvents = true
		weibo_Page.animate
				properties:
					scale: 1
					y: 0
				time: 0.3
				curve: "spring(250, 25, 0)"
		tips_text.animate
			properties:
				scale:1.25
				y: -70
			time: 0.3
			curve: "spring(250, 25, 0)"
			
		av_icon1A.animate
			properties:
				y:2007
			time: 0.3
			curve: "spring(250, 25, 0)"
		av_icon2A.animate
			properties:
				y:2007
			time: 0.3
			curve: "spring(250, 25, 0)"
		av_icon3A.animate
			properties:
				y:2007
			time: 0.3
			curve: "spring(250, 25, 0)"
		av_icon4A.animate
			properties:
				y:2007
			time: 0.3
			curve: "spring(250, 25, 0)"
		av_icon5A.animate
			properties:
				y:2007
			time: 0.3
			curve: "spring(250, 25, 0)"
		av_icon6A.animate
			properties:
				y:2007
			time: 0.3
			curve: "spring(250, 25, 0)"
		edit_border.states.switch("disappeared")
		lighter_image.states.switch("disappeared")
		black_mask.states.switch("disappeared")
		selection.states.switch("disappeared")
		selection_copy.states.switch("disappeared")
		lighter_image.draggable.enabled = false
		selection_copy.draggable.enabled = false
			
lighter_image.states.add
	showed:
		opacity: 1
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
		scale: 1
		opacity: 1
	disappeared:
		scale: 0.9
		opacity: 0
edit_border.states.animationOptions =
    curve: spring1
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
	disappeared:
		opacity: 0
		x:110
		y:376
		scale: 1
selection_copy.states.animationOptions =
    curve: spring1
selection_copy.states.switchInstant("disappeared")

selection.states.add
	showed:
		opacity: 1
	disappeared:
		opacity: 0
selection.states.animationOptions =
    curve: spring1
selection.states.switchInstant("disappeared")


#######################################
constraintsA = new Layer
	width: 812
	height: 900
	parent: Screenone
	x: 34
	y: 690
	opacity: 0
	backgroundColor: "#000"
	ignoreEvents: true

isDropped = false;

lighter_image.on Events.Tap, (event) ->
	if scaled == 1
		edit_border.states.switch("showed")
		lighter_image.states.switch("showed")
		black_mask.states.switch("showed")
		selection.states.switch("disappeared")
		selection_copy.states.switch("disappeared")
		lighter_image.draggable.enabled = true
		selection_copy.draggable.enabled = false
		lighter_image.draggable.constraints = constraintsA.frame

lighter_image.on Events.DragStart, (event) ->
	point = Utils.convertPointFromContext(event.touchCenter, lighter_image, true, false)
	if scaled == 1
		lighter_image.animate
			properties:
				scale: 1.1
				opacity: 0.5
				midX: point.x
				midY: point.y
			curve: "ease-in"
			time: .2
		lighter_image.style = boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.6)"


lighter_image.on Events.DragEnd, (event) ->

	av_icon1A.animate
		properties:
			scale: 1
			opacity: 0.6
		time: .2
			
	if scaled == 1
		if lighter_image.midY > av_icon1A.y
			isDropped = true
			lighter_image.animate
				properties:
					midX: av_icon1A.midX-100
					midY: av_icon1A.midY+300
					scale: .2
					opacity: 0
				curve: "spring( 300, 20, 0 )"
				
			Utils.delay 0.2, -> Transition()
			
			Transition = ->
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
			isDropped = false
			lighter_image.animate
				properties:
					scale:1
					opacity:1
				time:0.3
				curve: "spring( 300, 20, 0 )"
				
lighter_image.on Events.DragMove, (event)->
	point = Utils.convertPointFromContext(event.touchCenter, lighter_image, true, false)
	lighter_image.midX = point.x
	lighter_image.midY = point.y
	
	if event.y < av_icon1A.y

		lighter_image.animate
			properties:
				scale: 0.3
				opacity:0.5
			time: .6
			curve: "spring( 300, 20, 0 )"
		av_icon1A.animate
			properties:
				scale: 1.2
				opacity: 1
			time: .6
			curve: "spring( 300, 20, 0 )"
	else
		av_icon1A.animate
			properties:
				scale: 1
				opacity: 0.6
			time: .2
			curve: "spring( 300, 20, 0 )"
		lighter_image.animate
			properties:
				scale: 1
			time: .2
			curve: "spring( 300, 20, 0 )"

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
		
	lighter_image.states.switchInstant("disappeared")
	edit_border.states.switchInstant("disappeared")
	black_mask.states.switchInstant("disappeared")
	selection.states.switch("disappeared")
	selection_copy.states.switch("disappeared")
	

						
	Utils.delay 3, ->
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
	
	Utils.delay 4.2, ->
		wechat_screen1.x = 0
		wechat_screen2.x = 1080
		
		
#############
constraintsB = new Layer
	width: 862
	height: 124
	parent: Screenone
	x: 110
	y: 376
	opacity: 0
	backgroundColor: "#000"
	ignoreEvents: true


selection_copy.on Events.Tap, (event) ->
	if scaled == 1
		edit_border.states.switch("disappeared")
		lighter_image.states.switch("disappeared")
		black_mask.states.switch("showed")
		selection.states.switch("showed")
		selection_copy.states.switch("showed")
		lighter_image.draggable.enabled = false
		selection_copy.draggable.enabled = true
		selection_copy.draggable.constraints = constraintsB.frame
		
selection_copy.on Events.DragStart, (event) ->
	point = Utils.convertPointFromContext(event.touchCenter, selection_copy, true, false)
	if scaled == 1
		selection_copy.animate
			properties:
				opacity: 0.5
				midX: point.x
				midY: point.y
			curve: "ease-in"
			time: .2


selection_copy.on Events.DragEnd, (event) ->

	av_icon4A.animate
		properties:
			scale: 1
			opacity: 0.6
		time: .2
			
	if scaled == 1
		if selection_copy.midY > av_icon4A.y
			selection_copy.animate
				properties:
					midX: av_icon4A.midX-100
					midY: av_icon4A.midY+300
					scale: .2
					opacity: 0
				curve: "spring( 300, 20, 0 )"
				
			Utils.delay 0.2, -> Transition2()
			
			Transition2 = ->
				selection.states.switch("disappeared")
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
				time:0.3
				curve: "spring( 300, 20, 0 )"
				
selection_copy.on Events.DragMove, (event)->
	point = Utils.convertPointFromContext(event.touchCenter, selection_copy, true, false)
	selection_copy.midX = point.x
	selection_copy.midY = point.y
	
	if event.y < av_icon4A.y

		selection_copy.animate
			properties:
				opacity:0.5
			time: .6
			curve: "spring( 300, 20, 0 )"
		av_icon4A.animate
			properties:
				scale: 1.2
				opacity: 1
			time: .6
			curve: "spring( 300, 20, 0 )"
	else
		av_icon4A.animate
			properties:
				scale: 1
				opacity: 0.6
			time: .2
			curve: "spring( 300, 20, 0 )"
		selection_copy.animate
			properties:
				scale: 1
			time: .2
			curve: "spring( 300, 20, 0 )"

wechat_hitarea2.onTap ->
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
	black_mask.states.switchInstant("disappeared")
	selection.states.switch("disappeared")
	selection_copy.states.switch("disappeared")
	

						
	Utils.delay 3, ->
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
	
	Utils.delay 4.2, ->
		wechat_screen3.x = 0
		wechat_screen4.x = 1080




