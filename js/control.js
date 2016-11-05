
$( document ).ready(function() {

	var dropdown = $(".dropdown");
	var modulo = $(".modulo");
	var hash = window.location.hash;
	var link = $("a[href$='" + hash + "']");

	console.log(link);

    carga(hash);
    ilumina(link);

	dropdown.mouseover(function(){
	    $(this).addClass("open");
	}).mouseout(function(){
	    dropdown.removeClass("open");
	});
	
	modulo.click(function(e){

	    ilumina($(this));
	    
	});

	$(window).on('hashchange',function(){ 
	    carga(location.hash);
	});

	function carga(hash){

		var content = $("#content");

	    pagina = hash.substring(1);
	    ruta = "./content/" + pagina + ".html";

	    if (pagina == "")
	        ruta = "./content/principal.html";

	    content.hide().load(ruta).fadeIn("500");

	};

	function ilumina(link){

		modulo.parent().removeClass("active");
		link.parent().addClass("active");

	}

	
});

