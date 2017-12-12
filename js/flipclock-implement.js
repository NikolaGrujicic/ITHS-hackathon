// var clock;

$(document).ready(function() {

  FlipClock.Lang.Custom = { days:'Dana', hours:'Sati', minutes:'Minuta', seconds:'Sekundi' };
  var opts = {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'Custom'
  };
  // opts.classes = {
  //   active: 'flip-clock-active',
  //   before: 'flip-clock-before',
  //   divider: 'flip-clock-divider',
  //   dot: 'flip-clock-dot',
  //   label: 'flip-clock-label',
  //   flip: 'flip',
  //   play: 'play',
  //   wrapper: 'flip-clock-small-wrapper'
  // };
  var countdown = 1514650620 - ((new Date().getTime())/1000); // from: 12/10/2017 08:01 pm +0100
  countdown = Math.max(1, countdown);
  $('.clock').FlipClock(countdown, opts);



  // var clock;
  // var now = new Date();
  // var timeout = new Date('2017/12/30 12:12:30');
  //
  // var difference = (timeout.getTime() - now.getTime()) / 1000;
  //
  // FlipClock.Lang.Custom = { days:'Dana', hours:'Sati', minutes:'Minuta', seconds:'Sekundi' };
  // clock = $('.clock').FlipClock( {
  //       clockFace: 'DailyCounter',
  //       autoStart: false,
  //       countdown: true,
  //       language: 'Custom',
  //       wrapper: 'flip-clock-small-wrapper',
  //       callbacks: {
  //         stop: function() {
  //           $('.message').html('The clock has stopped!')
  //         }
  //       }
  //   });
  //   clock.setTime(difference);
  //   clock.setCountdown(true);
  //   clock.start();
});
