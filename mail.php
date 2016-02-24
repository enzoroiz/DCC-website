<?php
   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $message = $_POST['message'];
   $email = $_POST['email'];
   $headers = 'De ' . $name . '. (' . $email . ') . Enviada em ' . date('j/m/y H:i') . '.';
   $to = "enzoroiz@gmail.com";
   echo $to;
   echo $subject;
   echo $message;
   echo $headers;

   checkAndSendEmail($email);

   function checkAndSendEmail($email){
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
                  $caracter_ult = substr($beforeDomain,strlen($beforeDomain)-1,1);
                  if ($caracter_ult != "@" && $caracter_ult != "."){
                     $correctMail = 1;
                  }
               }
            }
         }
      }

      if ($correctMail && mail($to, $subject, $message, $headers)) {
         echo "success";
      } else {
         echo "fail";
      }
   } 
?>
