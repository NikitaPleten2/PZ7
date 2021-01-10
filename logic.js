
function validateForm() {
    let name = document.getElementById("name-form");
    let surname = document.getElementById("surname-form");
   
    let valid_characters = /[A-Za-zА-Яа-я]/;

    if (!valid_characters.test(surname.value))
    {
        surname.style.border="2px solid red";
        alert("При заполнении поля фамилии разрешено вводить только буквы");
        return false;
    }

    if (!valid_characters.test(name.value))
    {
        name.style.border="2px solid red";
        alert("При заполнении поля фамилии разрешено вводить только буквы");
        return false;
    }

} 

const animItems = document.getElementsByClassName("_anim-items");
let i = 0;
function animOnScroll() {
    window.removeEventListener('scroll', animOnScroll);
    const animItem = animItems[i];
    i++;
    console.log(i);
    let animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;

    let animItemPoint = window.innerHeight;

    if ((pageYOffset > (animItemOffset-150) - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
        window.removeEventListener('scroll', animOnScroll);
        animItem.ontransitionend = function() {
            if (i < animItems.length) {
                animOnScroll();
            } else {
                i = document.getElementsByClassName('_active').length;
                window.addEventListener('scroll', animOnScroll);
            }
        };
    } else {
        if (i < animItems.length) {
            animOnScroll();
        } else {
            i = document.getElementsByClassName('_active').length;
            window.addEventListener('scroll', animOnScroll);
        }
    }
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
setTimeout(animOnScroll, 100);



$(document).on('click', ".hidden",function(){ 
	$(".hidden").hide("slow");
});



$(document).on('click', ".carousel-button-right",function(){ 
	let carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});

$(document).on('click',".carousel-button-left",function(){ 
	let carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
    let block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
    let block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
	auto_right('.carousel:first');
})

function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}

$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})



$(document).ready(function() {
      $('#accordeon .acc-head').on('click', f_acc);
  });
   
  function f_acc(){
    $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
      $(this).next().slideToggle(700);
  }



  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );


  
  $(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 

	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});