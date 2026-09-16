//const btnTema = document.getElementById("btnTema");
const btnTema = $("#btnTema");

//console.log(btnTema);

function terminou(){
    alert('terminou de fazer o efetio!')
}

btnTema.on("click", function() {  
    
    $("body").toggleClass("modo-cinema");
    //$("#listaFilmes").toggle({ duration: 2000, done: terminou });
    //document.body.classList.toggle("modo-cinema");

    if (document.body.classList.contains("modo-cinema")) {
        //btnTema.innerHTML = "🌙"; // Modo escuro
        btnTema.text("🌙"); // Modo escuro
    } else {
        //btnTema.innerHTML = "☀️"; // Modo claro
        btnTema.text("☀️"); // Modo claro
    }

    // btnTema.animate({
    //     opacity: 0.25,
    // }, 5000, function() {
    //     terminou();
    // });


});


// btnTema.addEventListener("click", function () {
//     document.body.classList.toggle("modo-cinema");

//     if (document.body.classList.contains("modo-cinema")) {
//         btnTema.innerHTML = "🌙"; // Modo escuro
//     } else {
//         btnTema.innerHTML = "☀️"; // Modo claro
//     }
// });

// const meucep = "06320250";

// $.get(`https://viacep.com.br/ws/${meucep}/json/`, function(resultado) {    
//     console.log(resultado);
// });
// .done(function() {
//     alert( "second success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "finished" );
//   });


function MontaCardFilme(objListaFilmes, listaDeFilmes, tirarAno){
    
    const listaFilmes = document.getElementById(objListaFilmes);

    if(listaFilmes != undefined)
    {
        listaDeFilmes.forEach(function(filme) {

            const linkCorrente = `/pages/detalhe.html?id=${filme.id}`;
            const minhaImagem = `<img src="${filme.imagem}" alt="${filme.titulo}" class="card-img-top"></img>`
            
            const cardComAno = `
                <div class="col-12 col-md-6 col-lg-4 col-xl-2">
                    <div class="card h-100 shadow-sm">
                    <a href="${linkCorrente}">
                        ${minhaImagem}
                    </a>
                    <div class="card-body text-center">
                        <h5>${filme.titulo}</h5>
                        <small>${filme.tipo} | ${filme.ano} | Nota ${filme.nota}</small>
                    </div>
                    </div>
                </div>
                `;

            const cardSemAno = `
                <div class="col-12 col-md-6 col-lg-4 col-xl-2">
                    <div class="card h-100 shadow-sm">
                    <a href="${linkCorrente}">
                        ${minhaImagem}
                    </a>
                    <div class="card-body text-center">
                        <h5>${filme.titulo}</h5>
                    </div>
                    </div>
                </div>
                `;                

                if(tirarAno){
                    listaFilmes.innerHTML += cardSemAno;
                }else{
                    listaFilmes.innerHTML += cardComAno;
                }
                    
            }); 
    }
}