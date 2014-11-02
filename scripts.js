$(document).ready(function(){
	var currentList, newList;
	$('#addlist').submit(function(event){
		event.preventDefault();
		var inputListName = $('#createList').val();
		
		if(inputListName !== ""){
			newList = {title: inputListName, tasks: []};
			$('#lists').append('<li class = "listname">' + newList.title + '</li>');
			$('.form-group').removeClass('has-error');
			$('#addlist')[0].reset();
		}else{
			alert("Please enter a list name");
			$('#createlist').addClass('has-error');
		}
	});

	$('#lists').on('click', '.listname', function(){
		currentList = newList;
		$('#list-title').text(currentList.title);
		
	});







	/*$('form#entertask').submit(function(event){
		event.preventDefault();

		var inputTask = $('input#addtask').val();

		if(inputTask !== ""){
			$('ol#tasks').append('<li class="todo">' + inputTask + '</li>');
			$('.form-group').removeClass('has-error');
			$('form#entertask')[0].reset();
		}else{
			alert("Please enter a task");
			$('.form-group').addClass('has-error');
		}
		
		$('li.todo').hover().click(function(){
			$(this).removeClass('todo').addClass('done');
		});
	});*/
});

//need to add delete task code
