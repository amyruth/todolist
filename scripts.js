//Because this file loads after the elements are in the DOM, you do not need to wait for DOM Ready.

	/*Because you use ids on the elements, do you not need to also use the element. 
	  ids are unquie on the page by nature, maybe consider a id for the button itself.*/
	$('.btn-primary').submit(function(event){
		event.preventDefault();

		var inputTask = $('#addtask').val();

		if(inputTask !== ""){
			$('#tasks').append('<li class="todo">' + inputTask + '</li>');
			$('.form-group').removeClass('has-error');
			$('#entertask')[0].reset();
		}else{
			alert("Please enter a task");
			$('.form-group').addClass('has-error');
		}
	});
	
	/*This handler has to happen outside of the click handler,
	  or you will cause the event to be attached / fire multiple times.*/
	
	$('li.todo').hover().click(function(){
		$(this).removeClass('todo').addClass('done');
	});

//need to add delete task code
