page.base('/devCaabqys');

page('/', carga); //principal
page();

function carga(ctx){

    pagina = ctx.hash;
    ruta = "./content/" + pagina + ".html";

    if (pagina == "")
        ruta = "./content/principal.html";

    $("#content").hide().load(ruta).fadeIn("500");

}

var dropdown = $(".dropdown");
var modulo = $(".modulo");

dropdown.mouseover(function(){
    $(this).addClass("open");
}).mouseout(function(){
    dropdown.removeClass("open");
});

modulo.click(function(e){

    modulo.parent().removeClass("active");
    $(this).parent().addClass("active");
    
});

$().ready(function() {
    $('.kwicks').kwicks({
        maxSize : 250,
        behavior: 'menu'
    });
});
