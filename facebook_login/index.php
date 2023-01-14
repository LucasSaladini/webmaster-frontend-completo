<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <meta name="description" content="Facebook login page clone">
    <meta name="keywords" content="facebook,clone,login,login page,page">
    <meta name="author" content="Lucas Saladini">
    <!-- Custom font -->
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <title>Login Facebook</title>
  </head>
  <body>
    <header>
      <div class="center">
        <div class="logo">
          <h2>Facebook</h2>
        </div>
        <!-- End of logo -->
        <div class="form-login">
          <form action="" method="post" class="form-login">
            <div class="form-element">
              <p>E-mail ou Telefone</p>
              <input type="email" name="email" id="email">
            </div>
            <!-- End of form-element -->
            <div class="form-element">
              <p>Senha:</p>
              <input type="password" name="password" id="password">
            </div>
            <!-- End of form-element -->
            <div class="form-element">
              <input type="submit" value="Entrar" name="action">
            </div>
            <!-- End of form-element -->
          </form>
          <!-- End of form-login -->
        </div>
        <div class="clear"></div>
      </div>
      <!-- End of center -->
    </header>
    <section class="main">
      <div class="center">
        <div class="person">
          <img src="images/1.png" alt="">
        </div>
        <!-- End of person -->
        <div class="signup">
          <h2>Abra sua conta</h2>
          <h3>É gratuito e sempre será</h3>
          <form action="" class="signup_form">
            <div class="w50">
              <input type="text" name="" id="" placeholder="Nome">
            </div>
            <!-- End of w50 -->
            <div class="w50">
              <input type="text" name="" id="" placeholder="Sobrenome">
            </div>
            <!-- End of w50 -->
            <div class="w100">
              <input type="email" name="" id="" placeholder="E-mail">
            </div>
            <!-- End of w100 -->
            <div class="w100">
              <input type="password" name="" id="" placeholder="Senha">
            </div>
            <!-- End of w100 -->
            <div class="clear"></div>
            <div class="w100">
              <h2>Data de Nascimento</h2>
              <select name="birth-day" id="birth-day" class="birth">
                <?php 
                  for($i = 1; $i <= 31; $i++){
                ?>
                <option value="<?php echo $i; ?>"><?php echo $i ?></option>
                <?php } ?>
              </select>
              <select name="birth-month" id="birth-month" class="birth">
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
              </select>
              <select name="birth-year" id="birth-year" class="birth">
                <?php
                  for($i = 1900; $i <= 2023; $i++) {
                ?>
                <option value="<?php echo $i ?>"><?php echo $i ?></option>
                <?php } ?>
              </select>
              <div class="clear"></div>
            </div>
            <!-- End of w100 -->
            <div class="w100">
              <div class="input_radio">
                <input type="radio" name="gender" id="gender" value="Masculino">
                <h2>Masculino</h2>
              </div>
              <!-- End of input_radio -->
              <div class="input_radio">
                <input type="radio" name="gender" id="gender" value="Feminino">
                <h2>Feminino</h2>
              </div>
              <!-- End of input_radio -->
              <div class="clear"></div>
            </div>
            <!-- End of w100 -->
            <div class="w100">
              <input type="submit" value="Cadastrar" name="action">
            </div>
            <!-- End of w100 -->
          </form>
          <!-- End of signup_form -->
        </div>
        <div class="clear"></div>
      </div>
      <!-- End of center -->
    </section>
    <!-- End of main -->
    <section class="language">
      <div class="center">
        <a href="#" class="selected_language">Português (Brasil)</a>
        <a href="#">English (US)</a>
        <a href="#">Español</a>
        <a href="#">Français (France)</a>
        <a href="#">中文(简体</a>
        <a href="#">العربية<a>
        <a href="#">Italiano</a>
        <a href="#">한국어</a>
        <a href="#">Deustche</a>
        <a href="#">हिन्दी</a>
        <a href="#">日本語</a>
        <input type="button" value="+">
      </div>
      <!-- End of center -->
      <div class="center">
        <a href="#">Cadastre-se</a>
        <a href="#">Entrar</a>
        <a href="#">Messenger</a>
        <a href="#">Facebook Lite</a>
        <a href="#">Celular</a>
        <a href="#">Encontrar amigos</a>
        <a href="#">Atalhos</a>
        <a href="#">Pessoas</a>
        <a href="#">Páginas</a>
        <a href="#">Locais</a>
        <a href="#">Jogos</a>
        <a href="#">Locais</a>
        <a href="#">Celebridades</a>
        <a href="#">Grupos</a>
        <a href="#">Sobre</a>
        <a href="#">Criar anúncio</a>
        <a href="#">Criar página</a>
        <a href="#">Desenvolvedores</a>
        <a href="#">Carreiras</a>
        <a href="#">Privacidade</a>
        <a href="#">Cookies</a>
        <a href="#">Opções de anúncio</a>
        <a href="#">Termos</a>
        <a href="#">Ajuda</a>
      </div>
      <!-- End of center -->
    </section>
    <!-- End of language -->
  </body>
</html>
