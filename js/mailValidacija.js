$(document).ready(function() {
  $('.mail-forma').validate( {
    rules: {
      mail: {
        required: true,
        email: true,
        minlength: 7,
        maxlength: 254
      },
      naslov: {
        required: true,
        minlength: 2,
        maxlength: 30
      },
      sadrzaj: {
        required: true,
        minlength: 2,
        maxlength: 254
      }
    },
    messages: {
      mail: {
        required: "Polje mail je obavezno",
        minlength: "Morate uneti najmanje 7 karaktera",
        maxlength: "Polje mail ne može imati više od 254 karaktera",
        email: "Unesite ispravnu mail adresu"
      },
      naslov: {
        required: "Polje naslov je obavezno",
        minlength: "Morate uneti najmanje 2 karaktera",
        maxlength: "Polje naslov ne može imati više od 30 karaktera"
      },
      sadrzaj: {
        required: "Polje sadržaj je obavezno",
        minlength: "Morate uneti najmanje 2 karaktera",
        maxlength: "Polje sadržaj ne može imati više od 254 karaktera"
      }
    }
  });
});
