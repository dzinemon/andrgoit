var $tabs = $('.tabs');
var $panels = $('.panel');

$tabs.on('click', 'a', function(e) {
	e.preventDefault();
	var id = $(this).attr('href');

	$tabs.find('[aria-selected="true"]').attr('aria-selected', false);
	$(this).attr('aria-selected', true);
	
	$panels.filter('[aria-hidden="false"]').attr('aria-hidden', true);
	$(id).attr('aria-hidden', false);
}) ;

