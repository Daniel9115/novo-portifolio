const btn = document.getElementById("btnTopo");

    // Mostrar o botão quando descer 200px
    window.onscroll = function() {
      if (document.documentElement.scrollTop > 400) {
        btn.style.opacity = "1";
      } else {
        btn.style.opacity = "0";
      }
    };

    // Voltar ao topo ao clicar
    btn.onclick = function() {
      window.scrollTo({top: 0, behavior: "smooth"});
    };