$("#loading").hide();



$("#campoBusca").on("keyup", function () {
  //$("#textoBusca").text($("#campoBusca").val());
  $("#textoBusca").text();
});

$("#testeToogle").hide();

$("#btnTeste").on("click", function(){
    $("#testeToogle").slideToggle(400);
});

$("#BuscarFilme").on("click", function(){

    //$("#BuscarFilme").prop("disabled", true);
      $(this).prop("disabled", true);

        setTimeout(
        function() {
            //do something special
        }, 50000);

    $.get("http://localhost:8181/filmes/tmdb-filme-1288445", function(filme){
        console.log(filme);
    }).always(function(){
        //$("#BuscarFilme").prop("disabled", false);
         $(this).prop("disabled", false);
    });

});

$("#formDados").on("submit", function(evento){
    evento.preventDefault();

    const dados = {
        nome: $("#nome").val(),
        telefone: $("#telefone").val(),
        idade: $("#idade").val(),
        senha: $("#senha").val(),
    }

    $("#loading").show();

    $.post("https://webhook.site/12f4415d-846f-49c6-a80e-0e34ed80346e", dados)
    .done(function(){
      alert("enviado com sucesso!")  
    })
    .fail(function(){
        alert("deu erro!!")  
    })
    .always(function(){
        $("#loading").hide();
    });

});