const botao = document.getElementById("btnSinopse");
const sinopse = document.getElementById("sinopseCompleta");

botao.addEventListener("click", function () {
  sinopse.classList.toggle("d-none");
});


//CHAMADA SEM API
const idFilmeParametro = new URLSearchParams(location.search).get('id');
const meuFilme = filmes.find(e => e.id === idFilmeParametro);
MontaDetalhesFilme(meuFilme)


//CHAMADA COM API
// let meuFilme;
// $.get(`http://localhost:8181/filmes/${idFilmeParametro}`, function(meuFilme) {
//   MontaDetalhesFilme(meuFilme)
// });


function MontaDetalhesFilme(meuFilme){

  if(meuFilme == ''){
    alert('FILME NÃO ENCONTRADO!!');
    window.location.href = 'recomendar.html';
  }

  //const tituloFilme = document.getElementById("tituloFilme");
  $("#tituloFilme").text(meuFilme.titulo);
  //$("#tituloFilme").text(meuFilme.titulo).css("background-color", "orange");

  //esconde o elemento da tela
  //$("#tituloFilme").text(meuFilme.titulo).hide();

  //const sinopseCompleta = document.getElementById("sinopseCompleta");
  const sinopseCompleta = $("#sinopseCompleta");
  sinopseCompleta.text(meuFilme.sinopse);

  //const imagemFilme = document.getElementById("imagemFilme");
  const imagemFilme = $("#imagemFilme");
  imagemFilme.attr("src", meuFilme.imagem);

  //caso nao funcione o carregamento da imagem use assim aqui
  //imagemFilme.src = "../" + meuFilme.imagem;                    

  //const trailerFilme = document.getElementById("trailerFilme");
  const trailerFilme = $("#trailerFilme");
  trailerFilme.attr("src", meuFilme.trailer);

    if(meuFilme.filmesRelacionados != undefined){
      MontaCardFilme("listaFilmesRelacionados", meuFilme.filmesRelacionados, true);
    }else{
      const r = document.getElementById("relacionados");
      r.innerHTML = "";
    }

}




function MontaCardArtistasRelacionados(artistas){

    let artistasRelacionadosHTML = '';

    artistas.forEach(a => {
      
        const cardArtista = `
            <div class="col text-center">
                <a href="artista.html">
                    <img src="${a.imagem}" class="rounded" width="150px" height="200px"   />
                </a>
                <p>
                    <a href="artista.html">
                        <small>${a.nome}</small>
                    </a>
                </p> 
            </div>`;

        artistasRelacionadosHTML += cardArtista;
    });

    return artistasRelacionadosHTML;
}





//const artistasRelacionados = document.getElementById("artistasRelacionados");
//artistasRelacionados.innerHTML += MontaCardArtistasRelacionados(artistas);
//artistasRelacionados.innerHTML += MontaCardArtistasRelacionados(meuFilme.elenco);


// const artistas = [
//   {
//     nome: "Matthew McConaughey",
//     imagem: "../imagens/atores/Matthew McConaughey.webp"
//   },
//   {
//     nome: "Anne Hathaway",
//     imagem: "../imagens/atores/Anne Hathaway.webp"
//   },
//   {
//     nome: "Michael Caine",
//     imagem: "../imagens/atores/Michael Caine.webp"
//   },
//   {
//     nome: "Jessica Chastain",
//     imagem: "../imagens/atores/Jessica Chastain.webp"
//   },
//   {
//     nome: "Casey Affleck",
//     imagem: "../imagens/atores/Casey Affleck.webp"
//   },
//   {
//     nome: "Wes Bentley",
//     imagem: "../imagens/atores/Wes Bentley.webp"
//   },
//   {
//     nome: "Topher Grace",
//     imagem: "../imagens/atores/Topher Grace.webp"
//   },
//   {
//     nome: "Mackenzie Foy",
//     imagem: "../imagens/atores/Mackenzie Foy.webp"
//   },
//   {
//     nome: "Ellen Burstyn",
//     imagem: "../imagens/atores/Ellen Burstyn.webp"
//   }
// ];
//console.log(MontaCardArtistasRelacionados(artistas));
