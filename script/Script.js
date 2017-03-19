window.onload = function () {
/*
	console.log(window.innerHeight);
	console.log(window.innerWidth);
*/
	
	//Shrink Header on scroll down
	window.addEventListener('scroll', function(){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 300; //trigger point
        if (distanceY > shrinkOn) {
            document.getElementById("header").className = "NavBar-Smaller";
        } else {
            document.getElementById("header").className = "NavBar";
		}
    });
	
	$("#toHome").click(function(){
		goTo("#Home");
	});

	$("#toProjects").click(function(){
		goTo("#Projects");
	});

	$("#toBio").click(function(){
		goTo("#Bio");
	});

	$("#toContact").click(function(){
		goTo("#Contact");
	});
	
	$("#goToProjects").click(function(){
		goTo("#Projects");
	});
	
	//Hide/Display project description on click project img/name
	$("#Project1").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});

	$("#Project2").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});
	
	$("#Project3").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});
	
	$("#Project4").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});
	
	$("#Project5").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(0, $(this).attr('id'));
	});
	
	$("#Project6").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});
	
	$("#Project7").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});
	
	$("#Project8").click(function(){
		animateProjectDescription(this.id);
		slideIndex = 1;
		showSlides(1, $(this).attr('id'));
	});
	
	$("#Project1-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project1-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});
	
	$("#Project2-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project2-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});
	
	$("#Project3-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project3-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});

	$("#Project4-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project4-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});
	
	$("#Project5-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project5-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});
/*	
	$("#Project6-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project6-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});
*/
	$("#Project7-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project7-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});	
	
	$("#Project8-prev").click(function(){
		plusSlides(-1, $(this).attr('class'));
	});
	
	$("#Project8-next").click(function(){
		plusSlides(1, $(this).attr('class'));
	});	
	//BIO Default display/hight About secion
	var active_tab = document.getElementById('Bio-About');
	activateTab(active_tab);
	showOnly(document.getElementById('Bio-Content-Detail-About'), 'Bio-Content-DetailDiv');
	//BIO event listeners
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
		showOnly(document.getElementById('Bio-Content-Detail-About'), 'Bio-Content-DetailDiv');
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
		showOnly(document.getElementById('Bio-Content-Detail-Experience'), 'Bio-Content-DetailDiv');
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
		showOnly(document.getElementById('Bio-Content-Detail-Education'), 'Bio-Content-DetailDiv');
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
		showOnly(document.getElementById('Bio-Content-Detail-Skills'), 'Bio-Content-DetailDiv');
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
		showOnly(document.getElementById('Bio-Content-Detail-Learning'), 'Bio-Content-DetailDiv');
	});
	
	//Contact Form 
	document.getElementById('myForm').addEventListener('submit', formSubmit, false);
}

function goTo(this_element){
	$('html, body').animate({
		scrollTop: $(this_element).offset().top
	}, 1000);
}

//Project
var active_div = null;
var active_project = null;
function animateProjectDescription(this_project) {
	var this_div = "#"+$("#"+this_project.toString()+"-Description").parent().closest('div').parent().attr('id');
	
	if (active_div == this_div) {
		$("#"+active_project.toString()).removeClass('borderClass');		
		if (active_project == this_project) {	//close description
			$("#"+this_project.toString()+"-Description").fadeOut("slow");
			$(active_div).slideUp("slow");
			active_div = null;
			active_project = null;
			return;
		}
		else {									//hide active, show current 
			if (active_project != null) {
				$("#"+active_project.toString()+"-Description").hide();
			}
			$("#"+this_project.toString()).addClass('borderClass');
			$("#"+this_project.toString()+"-Description").fadeIn("slow");
		}
	}
	else {										//open description
		if (active_project != null) {
			$("#"+active_project.toString()).removeClass('borderClass');
		}			
		if (active_div != null) {
			$("#"+active_project.toString()+"-Description").hide();
			$(active_div).hide();
		}
		$("#"+this_project.toString()+"-Description").fadeIn("slow");
		$(this_div).slideDown(1000);
		$("#"+this_project.toString()).addClass('borderClass');
		$('html, body').animate({
		scrollTop: $("#"+this_project.toString()).offset().top - 150
		}, 1000);
	}
	
	if (window.innerHeight < 1000) {
		$('html, body').animate({
			scrollTop: $("#"+this_project.toString()).offset().top + 220
		}, 1000);
	}
	else{
		$('html, body').animate({
			scrollTop: $("#"+this_project.toString()).offset().top - 110
		}, 1000);
	}
	active_project = this_project;
	active_div = this_div;
}

/* slide show */
var slideIndex = 1;

function plusSlides(n, this_class) {
  showSlides(slideIndex += n, this_class);
}

function showSlides(n, this_class) {
  var i;
  var slides = document.getElementsByClassName(this_class+"-slides");
  var dots = document.getElementsByClassName(this_class+"-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//BIO
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

function showOnly(active_tab, class_name) {
	var x = document.getElementsByClassName(class_name);
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	active_tab.style.display = 'block';
}


//Form
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
			url:"php/contact_process.php",
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

