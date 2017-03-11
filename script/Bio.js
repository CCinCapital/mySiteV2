
document.getElementById('Bio-About').addEventListener('click', function(){
	displayDiv(document.querySelectorAll('.Bio-Content-DetailDiv'));
});

function displayDiv(elements){
	var element, index;
	
	elements = elements.length ? elements : [elements];
	
	for(index = 0; index < elements.length; index++) {
		element = elements[index];
		
		if (isElementHidden(element)) {
			element.style.display = 'block';
		}
		else {
			element.style.display = 'none';
		}
	}
	
	function isElementHidden (element) {
		return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
	}
}