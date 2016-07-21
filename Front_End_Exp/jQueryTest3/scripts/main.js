$(document).ready(function(){

	createLayout()

	filterChangeLeft()

	filterToggle()

	$(".slider-bar").css('left',$('.cd-tab-filter .selected').offset().left)
	$(".slider-bar").css('width',$('.cd-tab-filter .selected').innerWidth())


	$(window).resize(function(){
		filterChangeLeft()
		$(".slider-bar").css('left',$('.cd-tab-filter .selected').offset().left)
		$(".slider-bar").css('width',$('.cd-tab-filter .selected').innerWidth())
	});

	//Filter 开关
	function filterToggle(){
		//index > 3 （4），但排除最后一个
		var $category = $(".SubCategoryBox > ul > li:gt(3):not(:last)")
		//作业
		$category.show()
		var $toggleBtn = $(".showmore > a")
		$toggleBtn.click(function(){
			// $(".showmore-trigger").attr("data-filter","all")

			if($category.is(":visible")){
				$category.hide()
				$(this).text("More")
				var chineseArrays = $(".SubCategoryBox ul li").filter(":contains('White Skirt Girl'),:contains('Capturing'),:contains('Boating'),:contains('At That Moment')")
				//js dom对象转成 jQuery对象
				var $chineseArrays = $(chineseArrays)
				//div中带good的元素
				$chineseArrays.children("div.good").remove()
				return false;
			}
			else {
				$category.show()
				$(this).text("Reducer")
				var chineseArrays = $(".SubCategoryBox ul li").filter(":contains('White Skirt Girl'),:contains('Capturing'),:contains('Boating'),:contains('At That Moment')")
				//js dom对象转成 jQuery对象
				var $chineseArrays = $(chineseArrays)
				$chineseArrays.append('<div class="good"></div>')
				return false;
			}
		})
	}

	function filterChangeLeft(){
		var filterLeft = $("body").innerWidth()*0.02 + parseInt($(".SubCategoryBox").children("ul").css('margin-left')) + 15
		$(".showmore").css('padding-left',filterLeft)
	}

	function createLayout(){
		var namearrays = new Array("Nadya","Skateboy","Home Workspace","Sofa","Julia","Nadya Girl","Selina","Apple Store","Julia","White Skirt Girl","Capturing","Boating","Nadya In Sight","At That Moment")
		var numberarrays = new Array("Martin Lewis","Jacky Brown","Tom Hanks","Jimmy Veridy","Funky Boy","Wu Tang Clan","Rowme","Kissly","Tommy Right","Lucy jQuery","Killer Bee","Lanford","Ray","Mamogor")
		var pricearrays = new Array("$99","$199","$49","$19","$399","$499","$179","$59","$349","$19","$199","$29","$29","$49")
		var arraynumbers = $(".SubCategoryBox > ul > li").length

		for (i=0; i<arraynumbers; i++){
			var a = i+1
			var imgName = "url(/asset/img" + a + ".jpg)"
			$(".SubCategoryBox > ul :nth-child(" + a + ")").children("a").append(namearrays[i])
			$(".SubCategoryBox > ul :nth-child(" + a + ")").children("i").append(numberarrays[i])
			$(".SubCategoryBox > ul :nth-child(" + a + ")").children("span").append(pricearrays[i])
			$(".SubCategoryBox > ul :nth-child(" + a + ")").children(".imgBox").css('background-image',imgName)
		}
	}

	$('.cd-tab-filter li').on('click', function(event){
			$(".slider-bar").css('left',$(this).offset().left)
			$(".slider-bar").css('width',$(this).innerWidth())
			//console.log ($(this).index())
			$('.cd-tab-filter .selected').removeClass('selected');
			$(event.target).addClass('selected');

	})

	$(function(){
	  $('.SubCategoryBox ul').mixItUp();
	});

});
