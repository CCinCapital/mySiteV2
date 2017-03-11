window.onload = function () {

	var active_tab = document.getElementById('Bio-About');
	var active_div = document.getElementById('Bio-Content-Detail-About');
	activateTab(active_tab);
	showOnly(active_div);
	
	var about = document.getElementById('Bio-About');
	about.addEventListener('mouseenter', function(){
		if(about != active_tab) {
			mouseOver(about);
		}
	});
	about.addEventListener('mouseleave', function(){
		if(about != active_tab) {
			deactiveTab(about);
		}
	});
	about.addEventListener('click', function(){
		if (about != active_tab) {
			deactiveTab(active_tab);
			activateTab(about);
		}
		active_tab = document.getElementById('Bio-About');
		active_div = document.getElementById('Bio-Content-Detail-About');
		showOnly(active_div);
	});
	
	var experience = document.getElementById('Bio-Experience');
	experience.addEventListener('mouseenter', function(){
		if(experience != active_tab) {
			mouseOver(experience);
		}
	});
	experience.addEventListener('mouseleave', function(){
		if(experience != active_tab) {
			deactiveTab(experience);
		}
	});
	experience.addEventListener('click', function(){
		if (experience != active_tab) {
			deactiveTab(active_tab);
			activateTab(experience);
		}
		active_tab = document.getElementById('Bio-Experience');
		active_div = document.getElementById('Bio-Content-Detail-Experience');
		showOnly(active_div);
	});
	
	var education = document.getElementById('Bio-Education');
	education.addEventListener('mouseenter', function(){
		if(education != active_tab) {
			mouseOver(education);
		}
	});
	education.addEventListener('mouseleave', function(){
		if(education != active_tab) {
			deactiveTab(education);
		}
	});
	education.addEventListener('click', function(){
		if (education != active_tab) {
			deactiveTab(active_tab);
			activateTab(education);
		}
		active_tab = document.getElementById('Bio-Education');
		active_div = document.getElementById('Bio-Content-Detail-Education');
		showOnly(active_div);
	});
	
	var skills = document.getElementById('Bio-Skills');
	skills.addEventListener('mouseenter', function(){
		if(skills != active_tab) {
			mouseOver(skills);
		}
	});
	skills.addEventListener('mouseleave', function(){
		if(skills != active_tab) {
			deactiveTab(skills);
		}
	});
	skills.addEventListener('click', function(){
		if (skills != active_tab) {
			deactiveTab(active_tab);
			activateTab(skills);
		}
		active_tab = document.getElementById('Bio-Skills');
		active_div = document.getElementById('Bio-Content-Detail-Skills');
		showOnly(active_div);
	});
	
	var interests = document.getElementById('Bio-Interests');
	interests.addEventListener('mouseenter', function(){
		if(skills != interests) {
			mouseOver(interests);
		}
	});
	interests.addEventListener('mouseleave', function(){
		if(interests != active_tab) {
			deactiveTab(interests);
		}
	});
	interests.addEventListener('click', function(){
		if (interests != active_tab) {
			deactiveTab(active_tab);
			activateTab(interests);
		}
		active_tab = document.getElementById('Bio-Interests');
		active_div = document.getElementById('Bio-Content-Detail-Interests');
		showOnly(active_div);
	});
	
	document.getElementById('myForm').addEventListener('submit', formSubmit, false);
}

var background_active = "#333333";
var background_inactive = "#F7F7F9";
var background_mouseover = "gray"
var text_active = "#FFFFFF";
var text_inactive = "#000000";

function mouseOver(mouseOver_tab) {
	mouseOver_tab.style.backgroundColor = background_mouseover;
}

function activateTab(active_tab) {
	active_tab.style.backgroundColor = background_active;
	active_tab.style.color = text_active;
}

function deactiveTab(deactive_Tab) {
	deactive_Tab.style.backgroundColor = background_inactive;
	deactive_Tab.style.color = text_inactive;
}

function showOnly(active_div) {
	var x = document.getElementsByClassName('Bio-Content-DetailDiv');
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	active_div.style.display = 'block';
}

function formSubmit(e){
	e.preventDefault();
	
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var website = document.getElementById('website').value;
	var message = document.getElementById('message').value;
	var msg = document.getElementById('msg');

	if(name == '' || email == '' || message == ''){
		msg.className="alert-error";
		msg.innerHTML = 'Please fill out all necessary fields';
	} else {
		
		var dataString = 'name='+ name + '&email=' + email + '&website=' + website + '&message=' + message;
		
		$.ajax({
			type:"POST",
			url:"contact_process.php",
			dataType:"text",
			data:dataString,
			cache:false,
			success: function(data){
				console.log(dataString);
				$('#echoBack').html(data);
				msg.className="alert-success";
				msg.innerHTML = 'Your message has successfully sent to Can.';
			}
		});
	}
	return false;			
}
