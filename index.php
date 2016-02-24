<?php 
	$from = new DateTime('1991-01-03');
	$to   = new DateTime('today');
	$age = $from->diff($to)->y;
?>

<!DOCTYPE html>
<html>
<head>
	<title>Enzo Roiz</title>
	<meta charset='utf-8'>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/sweet-alert.css">
	<script src="js/jquery-2.2.0.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/jquery.validate.min.js"></script>
	<script src="js/sweet-alert.js"></script>
</head>
<body>
	<div id="left-panel">
		<nav id="menu">
			<ul>
				<li><a id="menu-about" href="#about">Sobre</a></li>
				<li>/</li>
				<li><a id="menu-contact" href="#contact">Contato</a></li>
			</ul>
		</nav>
		<div class="title about-title">
			<h1>SOBRE</h1>
		</div>
		<div class="title contact-title">
			<h1>CONTATO</h1>
		</div>
	</div>
	<div id="right-panel">
		<div class="photo"></div>
		<div class="about-wrapper">
			<div class="about-description">
				<h1>ENZO ROIZ</h1><br/>
				<p><?php echo $age; ?> anos. Nascido e criado em Belo Horizonte, MG. Atleticano apaixonado e peladeiro nas horas vagas. 
				Influenciado pelo meu irmão mais velho tomei gosto por temas relacionados à informática. Atualmente trabalho com
				desenvolvimento de software.</p><br/>

				<p>Estudei no Colégio Militar de Belo Horizonte da 5ª série ao 3º ano. Logo após ingressei no curso de Ciência da Computação
				na Universidade Federal de Minas Gerais. Dois anos mais tarde troquei de curso, indo para Sistemas de Informação também na UFMG.</p><br/>

				<p>Trabalhei por 2 anos na UFMG Informática Jr, ocupando cargos desde trainee e desenvolvedor Scrum, a gerente de projeto. Fui parte
				da equipe responsável por um dos maiores projetos da empresa.</p><br/>

				<p>Estudei Engenharia de Software, como parte da graduação, por 1 ano na Universidade de Glasgow, em Glasgow na Escócia.</p><br/>

				<p>Atualmente trabalho com desenvolvimento de software como trainee na empresa SYDLE em Belo Horizonte.</p>
			</div>
		</div>
		<div class="contact-wrapper">
			<div class="contact-form">
				<h1>Contato</h1><br>
				<form id="contact-form" name="contact" action="mail.php" method="post">
					<input placeholder="Nome" type="text" name="name" value=""><br>
					<br><input placeholder="E-mail" type="text" name="email" value=""><br>
					<br><input placeholder="Assunto" type="text" name="subject" value=""><br>
					<br><textarea placeholder="Como posso ajudar?" name="message" rows="5"></textarea><br>
					<button class="submit">Enviar</button>
				</form>
			</div>
		</div>
	</div>
</body>
</html>