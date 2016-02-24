<?php
   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $message = $_POST['message'];
   $email = $_POST['email'];
   $headers = 'De ' . $name . ' (' . $email . '). Enviada em ' . date('j/m/y H:i') . '.';
   $to = 'enzoroiz@gmail.com';

   $response = array();
   // Check email and send it
   if(checkEmail($email)){
      if(mail($to, $subject, $message, $headers)){
         $response['sent'] = 'true';
         $response['message'] = 'Obrigado pelo contato. Assim que possível responderei o seu email.';
      } else {
         $response['sent'] = 'false';
         $response['message'] = 'Ocorreu algum problema e seu email não foi enviado. Tente novamente mais tarde.';
      }
   } else {
      $response['sent'] = 'false';
      $response['message'] = 'Seu email deve estar no formato "nome@dominio.com". Verifique seu email e tente novamente.';
   }

   header('Content-type: application/json');

   echo json_encode($response);

   function checkEmail($email){
      $correctMail = 0;
      
      // Check email things
      if ((strlen($email) >= 6) && (substr_count($email,"@") == 1) && (substr($email,0,1) != "@") && (substr($email,strlen($email)-1,1) != "@")){
         if ((!strstr($email,"'")) && (!strstr($email,"\"")) && (!strstr($email,"\\")) && (!strstr($email,"\$")) && (!strstr($email," "))) {
            // Check if empty
            if (substr_count($email,".")>= 1){
               
               // Domain
               $domain = substr(strrchr ($email, '.'),1);
               // Check domain is ok

               if (strlen($domain)>1 && strlen($domain)<5 && (!strstr($domain,"@")) ){
                  // Check before domain
                  $beforeDomain = substr($email,0,strlen($email) - strlen($domain) - 1);
                  $lastChar = substr($beforeDomain,strlen($beforeDomain)-1,1);
                  if ($lastChar != "@" && $lastChar != "."){
                     $correctMail = 1;
                  }
               }
            }
         }
      }

      if ($correctMail) {
         return 1;
      } else {
         return 0;
      }
   } 
?>
