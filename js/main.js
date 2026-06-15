$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    $(".message").hide();

    let usuario = $("#usuario").val().trim();
    let senha = $("#senha").val().trim();

    if (usuario === "" || senha === "") {
      $("#msgErro").text("Preencha usuário e senha.").fadeIn();
      return;
    }

    $(".loading").show();

    setTimeout(function () {
      $(".loading").hide();

      if (usuario === "user" && senha === "pass") {
        $("#msgSucesso").text("Login realizado com sucesso!").fadeIn();

        setTimeout(function () {
          alert("Bem-vindo ao sistema!");
        }, 1000);
      } else {
        $("#msgErro").text("Usuário ou senha inválidos.").fadeIn();

        $("#senha").val("").focus();
      }
    }, 1500);
  });
});
