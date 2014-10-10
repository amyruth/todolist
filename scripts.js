$(document).ready(function(){
	$('form#entertask').submit(function(event){
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
	});
});

//need to add delete task code
