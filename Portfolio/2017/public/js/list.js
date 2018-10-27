$(document).ready(function($) {
	$('.container--grid ul').mixItUp({
	    animation: {
	    duration: 350,
	    effects: 'fade translateY(40px)',
	    easing: 'ease'
	    }
	});
	var filter_tab = $('.filter .placeholder a');
    $('.filter ').on('click', function(event){
        var selected_filter = $(event.target).data('type');
        if( filter_tab.data('type') !== selected_filter ) {
            $('.filter .selected').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});

