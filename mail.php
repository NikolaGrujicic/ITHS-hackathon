<?
  require './PHPMailer/PHPMailerAutoload.php';

  $tema = "";
  $email= "";
  $poruka = "";

  $greske = Array();
  $brgresaka = 0;

  $potvrda = "";

  if(isset($_POST['posalji'])) {
      $tema $_POST['naslov'];
      $email = $_POST['mail'];
      $poruka = $_POST['sadrzaj'];

      if($tema == "") {
          $brgresaka++;
      }
      if($email == "") {
          $brgresaka++;
      }
      if($poruka == "") {
          $brgresaka++;
      }

      if(count($greske) == 0) {

          $mail = new PHPMailer;

          $mail->isSMTP();

          $mail->SMTPDebug = 0;

          $mail->Debugoutput = 'html';

          $mail->Host = 'smtp.gmail.com';

          $mail->Port = 587;

          $mail->SMTPSecure = 'tls';

          $mail->SMTPAuth = true;

          $mail->Username = "phpprojekat@gmail.com";

          $mail->Password = "phpprojekat123";

          $mail->setFrom($email, $tema);

          $mail->addAddress('phpprojekat@gmail.com', 'Php Projekat');

          $mail->Subject = $tema;
          $mail->Body = $poruka;
          if(!$mail->send()) {
              $greske[$brgresaka] = "Greška u slanju poruke: " . $mail->ErrorInfo;
              $brgresaka++;
          }
          else {
              $potvrda = '<div class="alert alert-success" role="alert">Uspešno poslata poruka! U najkraćem mogućem roku ćemo Vam odgovoriti</div>';
              $tema = $email = $poruka = "";
          }
      }
  }
?>
