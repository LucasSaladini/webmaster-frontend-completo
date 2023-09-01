<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="shortcut icon" type="image-x/png" href="images/logo.ico" />
    <!-- custom font -->
    <link
      href="https://fonts.googleapis.com/css?family=Oswald"
      rel="stylesheet"
    />
    <title>Projeto 05</title>
  </head>
  <body>
    <header>
      <div class="container">
        <div class="logo">
          <img src="images/logo.jpg" alt="logo do website" />
        </div>
        <!-- logo -->
        <nav class="desktop">
          <ul>
            <li><a href="home" class="active">Home</a></li>
            <li><a href="sales">Venda</a></li>
            <li><a href="about">Sobre</a></li>
            <li><a goto="contact" href="#">Contato</a></li>
          </ul>
        </nav>
        <!-- nav-desktop -->
        <nav class="mobile">
          <ul>
            <li><a href="home" class="active">Home</a></li>
            <li><a href="sales">Venda</a></li>
            <li><a href="about">Sobre</a></li>
            <li><a goto="contact" href="#">Contato</a></li>
          </ul>
        </nav>
        <!-- mobile -->
        <div class="clear"></div>
      </div>
      <!-- container -->
    </header>

<?php
    if(isset($_GET['url'])) {
        if(file_exists($_GET['url']).'.html') {
            include($_GET['url'].'.html')
        } else {
            include('404.html')
        }
    } else {
        include('home.html')
    }
?>

<footer>
      <div class="container">
        <nav>
          <ul>
            <li><a href="home" class="active">Home</a></li>
            <li><a href="sales">Venda</a></li>
            <li><a href="about">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
        <p>Todos os direitos reservados</p>
        <div class="clear"></div>
      </div>
      <!-- container -->
    </footer>
    <!-- scripts -->
    <script src="/js/jquery-3.7.0.min.js.js"></script>
    <script src="/js/script.js"></script>
  </body>
</html>