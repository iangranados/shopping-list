$(document).ready(function(){
	$('#addNew').click(function(){
		addItem();
	});
	$('form#addForm').submit(function(e){
		e.preventDefault();
		addItem();
	});

	$('#itemList').on('click', '.check', function(){
		$(this).parent().children('h4').toggleClass("checked");
	})

	$('#itemList').on('click', '.delete', function(){
		$(this).parent().animate(
			{height: 0, opacity: 0}, 
			500, 
			function(){
				$(this).remove();
			}
		);
	});

	function addItem(){
		let item = $('#newInput').val();
		if(item){
			let html = `<li class="list-group-item"><h4 class="mb-3">${item}</h4><button class="btn btn-success mr-2 check">Check</button><button class="btn btn-danger delete">Delete</button></li>`;

			$(html).hide().appendTo('#itemList').fadeIn(500);
		}
		$('#newInput').val('');
	}
});