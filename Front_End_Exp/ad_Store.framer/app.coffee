# Import file "Ads_Interaction" (sizes and positions are scaled 1:2)

sketch = Framer.Importer.load("imported/Ads_Interaction@2x")
# Framer.Defaults

# Make 'sketch.' as global variable

Utils.globalLayers(sketch)

# Make Blur Style Navigation Bar

topBase = new Layer
	width: 750,height: 128,
	backgroundColor: 'rgba(250, 250, 250, 0.9)',
	style:'-webkit-backdrop-filter': 'blur(30px)',

topBase.borderWidth = 1
topBase.borderColor = "#b2b2b2"

topArea.addSubLayer(topBase)
topBase.placeBehind(icon_share)
topBar.destroy()

# Make a scroll component
scroll = ScrollComponent.wrap(sketch.articleContent)
scroll.scrollHorizontal = false

scroll.scrollToPoint(
    x: 200, y: 2500
    true
    curve: "bezier-curve(.77,0,.22,1)"
    time: 1.6
)

# Create MaskBoard
adBoard.height = 0
adBoard.borderWidth = 1
adBoard.borderColor = "#b2b2b2"
adBoard.y = 127
adBoard.clip = true


#Init the Anim Part
button.y -= 40
store.y -= 40
describe.y -=40
productTitle.y -=40
productimg.y -= 40

productimg.x = 40 + 80
store.x = -40
describe.x = -40
productTitle.x = -40

collapsedBtn.y = 34

button.opacity = 0
productTitle.opacity = 0
describe.opacity = 0
store.opacity =0
productimg.opacity = 0

newMaskBoard = new Layer
	width: 750,height:360,
	backgroundColor: "#fff"
	
adBoard.addSubLayer(newMaskBoard)
newMaskBoard.placeBehind(collapsedBtn)
maskBoard.destroy()

# Create Hit Area Layers
hitarea1 = new Layer
	x: 36*2,y:1608*2,width: 146*2,height: 16*2,
hitarea2 = new Layer
	x: 221*2,y:1608*2,width: 85*2,height: 16*2,
hitarea3 = new Layer
	x: 25*2,y:1634*2,width: 92*2,height: 16*2,
hitarea4 = new Layer
	x: 152*2,y:1868*2,width: 110*2,height: 16*2,
	
hitarea10= new Layer
	x: 320,y:260,width: 100,height: 100, borderRadius: 2,opacity: 0, backgroundColor: "rgba(123,123,123,1)"
adBoard.addSubLayer(hitarea10)

# Make Hit Area Anim

hitarea1.on Events.Click, ->
	detail1arrow.animate
		properties:
			x:8
			y:-6
		curve:"ease"
		time:0.3
hitarea2.on Events.Click, ->
	detail2arrow.animate
		properties:
			x:8
			y:-6
		curve:"ease"
		time:0.3
hitarea3.on Events.Click, ->
	detail3arrow.animate
		properties:
			x:8
			y:-6
		curve:"ease"
		time:0.3
hitarea4.on Events.Click, ->
	detail4arrow.animate
		properties:
			x:8
			y:-6
		curve:"ease"
		time:0.3

hitareaArray = [hitarea1, hitarea2, hitarea3, hitarea4]
for hitareas in hitareaArray
	hitareas.opacity = 0
	hitareas.borderRadius = 4
	hitareas.backgroundColor = "979797"
	articleContent.addSubLayer(hitareas)
	hitareas.on Events.Click, ->
		
		hitarea1.ignoreEvents = true
		hitarea2.ignoreEvents = true
		hitarea3.ignoreEvents = true
		hitarea4.ignoreEvents = true
		
		alldelaytime = 0.15
		
		#Hit Area Anim
		@.animate
			properties:
				opacity: 0.3
			curve:'spring(100,10,10)'

		#Board Anim
		adBoard.animate
			properties: 
				height: 360
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.6
			delay:0 + alldelaytime
		
		collapsedBtn.animate
			properties: 
				y: 314
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.6
			delay:0 + alldelaytime
		
		#Board  Info Anim
		productimg.animate
			properties:
				x: 40
				opacity:1
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.5
			delay:0.25 + alldelaytime
		store.animate
			properties:
				x:0
				opacity:1
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.5
			delay:0.25 + alldelaytime
		productTitle.animate
			properties:
				x:0
				opacity:1
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.5
			delay:0.3 + alldelaytime
		describe.animate
			properties:
				x:0
				opacity:1
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.5
			delay:0.35 + alldelaytime
		
		button.animate
			properties:
				opacity:1
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.5
			delay:0.25 + alldelaytime
		
			
hitarea10.on Events.Click, ->
	
	hitarea1.ignoreEvents = false
	hitarea2.ignoreEvents = false
	hitarea3.ignoreEvents = false
	hitarea4.ignoreEvents = false
	
	alldelaytime = 0.15
	
	#Hit Area Anim
	for hitareas in hitareaArray
		hitareas.animate
			properties:
				opacity: 0
			curve:'spring(100,10,10)'
	
	#Board Anim		
	adBoard.animate
		properties: 
			height: 0
		curve:"bezier-curve(.35,.95,.56,.98)"
		time:0.5
		delay: 0 + alldelaytime
	
	collapsedBtn.animate
			properties: 
				y: 34
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.5
			delay: 0 + alldelaytime
	
	#Arrow Anim
	for count in [1..4]
		detailarrows = sketch["detail"+count+"arrow"]
		detailarrows.animate
			properties:
				x:4
				y:0
			curve:"ease"
			time:0.3
	#Board Info Anim
		productimg.animate
			properties:
				opacity:0
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.4
			delay:0 + alldelaytime
		store.animate
			properties:
				opacity:0
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.4
			delay:0 + alldelaytime
		productTitle.animate
			properties:
				opacity:0
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.4
			delay:0 + alldelaytime
		describe.animate
			properties:
				opacity:0
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.4
			delay:0 + alldelaytime
		
		button.animate
			properties:
				opacity:0
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.4
			delay:0 + alldelaytime
		
		
		
		productimg.animate
			properties:
				x:  40 + 80
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.1
			delay:0.5
		store.animate
			properties:
				x:-40
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.1
			delay:0.5	
		productTitle.animate
			properties:
				x:-40
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.1
			delay:0.5
		describe.animate
			properties:
				x:-40
			curve:"bezier-curve(.35,.95,.56,.98)"
			time:0.1
			delay:0.5
	
	
	
