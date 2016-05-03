Rebirth = ->
	# Import file "CustomTransition" (sizes and positions are scaled 1:2)
	sketch = Framer.Importer.load("imported/CustomTransition@2x")
	# Make 'sketch.' as global variable
	Utils.globalLayers(sketch)

	# Setting Default Animations Properties
	Framer.Defaults.Animation =
		curve : 'spring(180, 20, 0)'
		time: .4

	BlackMask.opacity = 0;

	# Init the Layer
	cardOne = new Layer
		  x: 30, y: 724, width: 240, height: 340,borderRadius:10,backgroundColor: "#FFF",borderWidth: 1,borderColor: "#C7C7C7"
	newHitArea = new Layer
		  x: 0, y: 0, width: 240, height: 340,backgroundColor: "#000",opacity: 0,originX: 0,originY: 0
	EditHitArea = new Layer
		  x: 520, y: 0, width: 120, height: 120,backgroundColor: "#000",opacity: 0,originX: 0,originY: 0
	newGroup = new Layer
		x:0,y:0,width: 750,height: 1334,backgroundColor: "clear"
		
	newGroup.addSubLayer(cardOne)
	cardOne.addSubLayer(newScrollView)
	cardOne.addSubLayer(navBar)
	cardOne.addSubLayer(statusBar)
	
	cardOne.addSubLayer(nowDate)
	cardOne.addSubLayer(Title)
	cardOne.addSubLayer(newHitArea)
	newGroup.addSubLayer(EditHitArea)
	BG1.addSubLayer(Card2)
	cardOne.clip = true
	
	leftcollapsed = new Layer
		width: 15
		height: 3
		backgroundColor: "#fff"
		rotation: 20
		x:5
		y:20
		borderRadius: 10
	rightcollapsed = new Layer
		width: 15
		height: 3
		backgroundColor: "#fff"
		rotation: -20
		x:17
		y:20
		borderRadius: 10
		
	collapsedBtn = new Layer
		width: 16
		height: 6.4
		y:-44
		x:102
		backgroundColor: "#clear"
	collapsedBtn.addSubLayer(leftcollapsed)
	collapsedBtn.addSubLayer(rightcollapsed)
	cardOne.addSubLayer(collapsedBtn)
	
	keyBoard.visible = false
	EditBG2.visible = false
	keyBoard.y = 1334
	cursor.opacity = 0

	PublishView.originX = 0
	PublishView.originY = 0
	PublishView.opacity = 1
	PublishView.scale = 0.32
	PublishView.y = 427
	cardOne.addSubLayer(PublishView)
	PublishView.placeBehind(navBar)
	BlackMask2.originX = 0
	BlackMask2.originY = 0
	BlackMask2.opacity = 0
	BlackMask2.scale = 0.32
	cardOne.addSubLayer(BlackMask2)
	BlackMask2.placeBehind(PublishView)
	Publish2.opacity = 0
	Back2.opacity = 0

	step = 1

	Mask_for_Text.visible = true
	Mask_for_Text.opacity = 0
	ShiningLayer.addSubLayer(ShingingShape)
	ShiningLayer.clip = true
	ShingingShape.x = -100
	Preview.opacity = 0

	Title.x = 16
	Title.y = 216
	nowDate.x = 16
	nowDate.y = 290

	scroll = ScrollComponent.wrap(sketch.newScrollView)
	scroll.scrollHorizontal = false
	scroll.scrollVertical = false

	newScrollView.originX = 0
	newScrollView.originY = 0
	newScrollView.scale  = 0.32
	newScrollView.y  = -60
	navBar.originX = 0
	navBar.originY = 0
	navBar.scale = 0.32
	statusBar.y = -20
	navBar.y = -42
	statusBar.originX = 0
	statusBar.originY = 0
	statusBar.scale = 0.32
	BG2.opacity = 0

	newCard.y = 770
	newCard.opacity = 0
	newCard.scale = 0.8

	# Init the Function
	openTheCard = ->
		cardOne.animate
			properties: 
				scale: 3.125
				x:255
				y:460
				height:435
				borderRadius: 0
				borderWidth: 0
		Title.opacity = 0
		nowDate.opacity = 0
		statusBar.animate
			properties:
				y:0
				opacity:1
		navBar.animate
			properties:
				y:0
				opacity:1
					
		newHitArea.scale = 0.12
		newHitArea.width = 480
			
		Mask_for_Text.animate
			properties:
				opacity:1
			
		ShingingShape.animate
			properties:
				x:500
			repeat:3	
			
		Utils.delay 3.6, ->
			Mask_for_Text.opacity = 0
			BG2.opacity = 1
			scroll.scrollVertical = true	
			cardOne.backgroundColor = "clear"
				
		newScrollView.animate
			properties:
				y:0
		BG1.animate
			properties:
				scale:0.8
		BlackMask.animate
			properties:
				opacity:0.5
		
		newGroup.y = 0
		

	closeTheCard = ->
		previewMode()
		cardOne.animate
			properties: 
				scale: 1
				x:30
				y:724
				height:340
				borderRadius: 10
				borderWidth: 1
		Utils.delay 0.2, ->
			Title.opacity = 1
			nowDate.opacity = 1
		statusBar.animate
			properties:
				y:-20
				opacity:0
		navBar.animate
			properties:
				y:-42
				opacity:0
		newGroup.animate
			properties: 
				y:0
				
		newHitArea.scale = 1
		newHitArea.width = 240
		
		BG2.animate
			properties:
				opacity:0
		Mask_for_Text.animate
			properties:
				opacity:0
		ShingingShape.x = -100
				
		scroll.scrollVertical = false
		newScrollView.animate
			properties:
				y:-60
		BG1.animate
			properties:
				scale:1
		BlackMask.animate
			properties:
				opacity:0

	editMode = ->
		keyBoard.visible = true
		EditBG2.visible = true
		keyBoard.y = 1334
		
		Edit.opacity = 0
		Preview.opacity = 1
		keyBoard.animate
			properties:
				y:902
		EditBG2.animate
			properties:
				y:680
		BG2.animate
			properties:
				y:680
		imageGroup.animate
			properties:
				y:24
		cursor.animate
			properties:
				opacity:1
			curve:"bezier-curve(0.33,0,0.66,1)"
			time:1
			repeat:Infinity
				
	previewMode = ->
		Utils.delay 0.6, ->
			keyBoard.visible = false
			
		EditBG2.visible = false
		cursor.opacity = 0
		Edit.opacity = 1
		Preview.opacity = 0
		
		keyBoard.animate
			properties:
				y:1334
		EditBG2.animate
			properties:
				y:798
		BG2.animate
			properties:
				y:798
		imageGroup.animate
			properties:
				y:126
		cursor.animate
			properties:
				opacity:0

	publishMode = ->
		Utils.delay 0.2, ->
			step = 2
		
		PublishView.animate
			properties:
				y:41.2
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.7
		newScrollView.animate
			properties:
				scale:0.24
				x:29
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.7
		BlackMask2.animate
			properties:
				opacity:0.5
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.7
		Publish.animate
			properties:
				opacity:0
		Publish2.animate
			properties:
				opacity:1
		Back.animate
			properties:
				opacity:0
		Back2.animate
			properties:
				opacity:1	
		scroll.scrollVertical = false
		if (Edit.opacity == 1)
			Edit.animate
				properties:
					opacity:0
		if (Preview.opacity == 1)
			Preview.animate
				properties:
					opacity:0

	republishMode = ->
		step = 1
		PublishView.animate
			properties:
				y:427
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.7
		newScrollView.animate
			properties:
				scale:0.32
				x:0
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.7
		BlackMask2.animate
			properties:
				opacity:0
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.7
		Publish.animate
			properties:
				opacity:1
		Publish2.animate
			properties:
				opacity:0
		Back.animate
			properties:
				opacity:1
		Back2.animate
			properties:
				opacity:0	
		scroll.scrollVertical = false
		if (EditBG2.visible == true)
			Preview.animate
				properties:
					opacity:1
		else
			Edit.animate
				properties:
					opacity:1

	sendMode = ->
		newGroup.animate
			properties: 
				y:-1500
				shadowY: 10
				shadowBlur: 10
				shadowColor: "rgba(0,0,0,0.2)"
			curve:"bezier-curve(0.55,0,0.1,1)"
			time:0.6
		newGroup.animate
			properties: 
				scale: 0.5
			time:0.1
			
		Utils.delay 0.1, ->
			newGroup.animate
				properties: 
					scale: 1
				curve:"bezier-curve(0.55,0,0.1,1)"
				time:0.6
		
		BG1.animate
			properties:
				scale:1
		BlackMask.animate
			properties:
				opacity:0
				
		Utils.delay 0.6, ->
			newGroup.destroy()
			
		Utils.delay 0.3, ->
			newCard.animate
				properties:
					y:724
					opacity:1
					scale:1
		
		Utils.delay 2, ->
			Center.destroy()
			Rebirth()
		
		

	# Publish Action
	Publish2.on Events.Click, ->
		if (step == 1)
			publishMode()
		else
			sendMode()
		

		
		
	# Open & Close Action
	newHitArea.on Events.Click, -> 
		if (step == 1)
			if (newHitArea.scale == 1)
				openTheCard()
			else 
				closeTheCard()
				cardOne.backgroundColor = "#fff"
		if (step == 2)
			republishMode()

	EditHitArea.on Events.Click, ->
		if (Edit.opacity == 1)
			editMode()
		else
			previewMode()
				
	# OnScroll
	scroll.on Events.Move, ->
			scrolltoY(scroll.scrollY)
			
	scrolltoY = (y) ->
			if (y>0)
				navBar.opacity = Utils.modulate(y, [0, 20], [1, 0], true)
				navBar.y = Utils.modulate(y, [0, 50], [0, -50], true)
			else if (y>-60)
				newGroup.y = Utils.modulate(y, [0, -400], [0, 800], true)
				statusBar.y = Utils.modulate(y, [0, -400], [0, 400], true)
				navBar.y = Utils.modulate(y, [0, -400], [0, 400], true)
				BG1.scale = Utils.modulate(y, [0, -200], [0.8, 0.9], true)
				BlackMask.opacity = Utils.modulate(y, [0, -200], [0.5, 0.1], true)
				collapsedBtn.y = statusBar.y - 34
				collapsedBtn.opacity = (statusBar.y - 20)/20
			else
				newGroup.y = Utils.modulate(y, [0, -400], [0, 800], true)
				statusBar.y = Utils.modulate(y, [0, -400], [0, 400], true)
				navBar.y = Utils.modulate(y, [0, -400], [0, 400], true)
				BG1.scale = Utils.modulate(y, [0, -200], [0.8, 0.9], true)
				BlackMask.opacity = Utils.modulate(y, [0, -200], [0.5, 0.1], true)
				collapsedBtn.y = statusBar.y - 34
				collapsedBtn.opacity = (statusBar.y - 20)/20
				collapsedBtn.opacity = 0
				cardOne.backgroundColor = "clear"
				closeTheCard()


	
				

	
Rebirth()

