<?php
if(isset($_POST)){
  error_reporting(0);
  $name=$_POST["name"];
  $email=$_POST["email"];
  $subject=$_POST["subject"];
  $comments=$_POST["comments"];
  $domain=$_SERVER["HTTP_HOST"];//vairable para enviar el dominio

  $to="inrias898@gmail.com";
  $subject_mail="Contacto desde el formulario del sitio $domain: $subject";
  $message="
  <p>
  Datos enviasdos desde el formulario del sitio <b>$domain</b>
  </p>
  <ul>
  <li>Nombre: <b>$name</b></li>
  <li>Email: <b>$email</b></li>
  <li>Asunto: $subject</li>
  <li>Comentarios: $comments</li>
  </ul>
  ";
  $headers="MIME-Version:1.0\n"."Content-type: text/html; charset=utf-8\r\n"."From: Envio Automatico no reponder<no-reply@$domain>";

  $send_mail= mail($to,$subject_mail,$message,$headers);

  if($send_mail){
    $res=[
      "err"=>false,
      "message"=>"Tus datos han sido enviados"
    ];
  }else{
    $res=[
      "err"=>true,
      "message"=>"Error al enviar tus datos intentar nuevamente."
    ];
  };
  // header("Access-Control-Allow-Origin:*");//Serian tpdps los dominio
  header("Access-Control-Allow-Origin: https//jonmircha.com");//Uno en especifico
  header("Content-type: application/json");
  echo json_encode($res);
  exit;
}

