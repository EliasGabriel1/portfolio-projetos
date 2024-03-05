import { todos } from "./services.js";
import { brand } from "./services.js";
import { aplicativo } from "./services.js";
import { projetoweb } from "./services.js";

$( document ).ready(function() {
     rendercards(todos);
     boolcursor();
     embreve();
})

function embreve(){
     mouseover(".embreve");
     $("figure" ).mouseout(function() {$(".cursor").removeClass("cursor-on")});
}

function mouseover(classe){
     $(classe).mouseover(function() {$(".cursor").toggleClass("cursor-on")});
}

$("#Todos").on("click",function(){
     if(!document.querySelector("#Todos.fantasma-on")){
          rendercards(todos)
          $(".fantasma-on").attr('class', 'fantasma-off');
          document.querySelector("#Todos.fantasma-off").classList.add("fantasma-on")
     }
     boolcursor();
     embreve();
})

$("#Brand").on("click",function(){
     if(!document.querySelector("#Brand.fantasma-on")){
          rendercards(brand)
          $(".fantasma-on").attr('class', 'fantasma-off');
          document.querySelector("#Brand.fantasma-off").classList.add("fantasma-on")
     }
     boolcursor();
     embreve();
})

$("#Aplicativo").on("click",function(){
          if(!document.querySelector("#Aplicativo.fantasma-on")){
          rendercards(aplicativo)
          $(".fantasma-on").attr('class', 'fantasma-off');
          document.querySelector("#Aplicativo.fantasma-off").classList.add("fantasma-on")
     }
     boolcursor();
     embreve();
})

$("#Projeto").on("click",function(){
          if(!document.querySelector("#Projeto .fantasma-on")){
          rendercards(projetoweb)
          $(".fantasma-on").attr('class', 'fantasma-off');
          document.querySelector("#Projeto.fantasma-off").classList.add("fantasma-on")
     }
     boolcursor();
     embreve();
})

function rendercards(data) {
     var dict = {};
     dict.NautaLoger= true
     dict.Omnifit= true
     dict.TXSmart= true
     dict.Mentto= true
     dict.Contérus= true
     dict.Martinello= true

     const container = document.getElementById("cards")
     var div = ''
     data.map((post) => {
          var title ='<p class="text-off titleProject">' + post.titleProject + '</p>';
          var img ='<img class="desk" loading="lazy" style="max-width:'+post.maxWidth+'px" src="' + post.urlImg + '" alt="'+ post.titleProject +'" />';
          var imgmobile ='<img class="mobile" loading="lazy" width="100%" src="' + post.urlImgMobile + '" alt="'+ post.titleProject +'" />';
          var descricao ='<h4 class="projectDescription">' + post.projectDescription + '</h4>';
          var typeproject ='<h5 class="projectType">' + post.projectType + '</h5>';
          if(dict[(String(post.titleProject)).replace(/\s+/g, '')]){
               div += '<div class="card" style="max-width:'+ post.maxWidth+'px "><div><figure class="'+ (String(post.titleProject)).replace(/\s+/g, '') +'">'+img+imgmobile+'</figure></div>'+ title +'<div>'+ descricao +'</div>' + typeproject + '</div>';
          }else{
               div += '<div class="card" style="max-width:'+ post.maxWidth+'px "><a  href="' + post.link + '"><figure class="'+ (String(post.titleProject)).replace(/\s+/g, '') +'">'+img+imgmobile+'</figure></a>'+ title +'<a href="' + post.link +'">'+ descricao +'</a>' + typeproject + '</div>';
          }
     });

     container.innerHTML = div
}

function boolcursor(){
     
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const uperbollprojetos = document.querySelectorAll('figure');

    uperbollprojetos.forEach(el => {
          el.addEventListener('mouseenter', () => {
              cursor.classList.add('active');
              follower.classList.add('active');
              document.querySelector(".cursor").style.backgroundColor = "transparent";
          });
  
          el.addEventListener('mouseleave', () => {
              cursor.classList.remove('active');
              follower.classList.remove('active');
          })
      })
}