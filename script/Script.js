window.onload = function () {
	window.addEventListener('scroll', function(){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 300;
        if (distanceY > shrinkOn) {
            document.getElementById("header").className = "NavBar-Smaller";
        } else {
            document.getElementById("header").className = "NavBar";
		}
    });

	var project1 = document.getElementById('Project1');
	var project1_pointer = document.getElementById('Project1-Pointer');
	var project1_description = document.getElementById('Project1-Description');
	project1.addEventListener('click',function(){
		showOnly(project1_pointer, 'Project-Pointer');
		showOnly(project1_description, 'ProjectsDiv-ProjectsWraper-Project-Description');
		window.scrollTo(0,1180);
	});

	var project2 = document.getElementById('Project2');
	var project2_pointer = document.getElementById('Project2-Pointer');
	var project2_description = document.getElementById('Project2-Description');
	project2.addEventListener('click',function(){
		showOnly(project2_pointer, 'Project-Pointer');
		showOnly(project3_description, 'ProjectsDiv-ProjectsWraper-Project-Description');
		window.scrollTo(0,1180);
	});
	
	var project3 = document.getElementById('Project3');
	var project3_pointer = document.getElementById('Project3-Pointer');
	var project3_description = document.getElementById('Project3-Description');
	project3.addEventListener('click',function(){
		showOnly(project3_pointer, 'Project-Pointer');
		showOnly(project3_description, 'ProjectsDiv-ProjectsWraper-Project-Description');
		window.scrollTo(0,1180);
	});
	
	var project4 = document.getElementById('Project4');
	var project4_pointer = document.getElementById('Project4-Pointer');
	var project4_description = document.getElementById('Project4-Description');
	project4.addEventListener('click',function(){
		showOnly(project4_pointer, 'Project-Pointer');
		showOnly(project4_description, 'ProjectsDiv-ProjectsWraper-Project-Description');
		window.scrollTo(0,1570);
	});
	
	var project5 = document.getElementById('Project5');
	var project5_pointer = document.getElementById('Project5-Pointer');
	var project5_description = document.getElementById('Project5-Description');
	project5.addEventListener('click',function(){
		showOnly(project5_pointer, 'Project-Pointer');
		showOnly(project5_description, 'ProjectsDiv-ProjectsWraper-Project-Description');
		window.scrollTo(0,1570);
	});
	
	var project6 = document.getElementById('Project6');
	var project6_pointer = document.getElementById('Project6-Pointer');
	var project6_description = document.getElementById('Project6-Description');
	project6.addEventListener('click',function(){
		showOnly(project6_pointer, 'Project-Pointer');
		showOnly(project6_description, 'ProjectsDiv-ProjectsWraper-Project-Description');
		window.scrollTo(0,1570);
	});
	
	hideProject(project1_pointer, project1_description);
	hideProject(project2_pointer, project2_description);
	hideProject(project3_pointer, project3_description);
	hideProject(project4_pointer, project4_description);
	hideProject(project5_pointer, project5_description);
	hideProject(project6_pointer, project6_description);
	
	
	
	var active_tab = document.getElementById('Bio-About');
	var active_div = document.getElementById('Bio-Content-Detail-About');
	activateTab(active_tab);
	showOnly(active_div, 'Bio-Content-DetailDiv');
	
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
		showOnly(active_div, 'Bio-Content-DetailDiv');
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
		showOnly(active_div, 'Bio-Content-DetailDiv');
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
		showOnly(active_div, 'Bio-Content-DetailDiv');
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
		showOnly(active_div, 'Bio-Content-DetailDiv');
	});
	
	var Learning = document.getElementById('Bio-Learning');
	Learning.addEventListener('mouseenter', function(){
		if(skills != Learning) {
			mouseOver(Learning);
		}
	});
	Learning.addEventListener('mouseleave', function(){
		if(Learning != active_tab) {
			deactiveTab(Learning);
		}
	});
	Learning.addEventListener('click', function(){
		if (Learning != active_tab) {
			deactiveTab(active_tab);
			activateTab(Learning);
		}
		active_tab = document.getElementById('Bio-Learning');
		active_div = document.getElementById('Bio-Content-Detail-Learning');
		showOnly(active_div, 'Bio-Content-DetailDiv');
	});
	
	document.getElementById('myForm').addEventListener('submit', formSubmit, false);
}

var background_active = "#333333";
var background_inactive = "#F7F7F9";
var background_mouseover = "gray"
var text_active = "#FFFFFF";
var text_inactive = "#000000";

function displayProject(pointer, project) {
	pointer.style.display = 'block';
	project.style.display = 'block';
}

function hideProject(pointer, project) {
	pointer.style.display = 'none';
	project.style.display = 'none';
}

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

function showOnly(active_div, class_name) {
	var x = document.getElementsByClassName(class_name);
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
