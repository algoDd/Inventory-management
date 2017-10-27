<script>
$('#i_1,#i_2,#i_3,#i_4').click(function() {
  // make a jQ collection of the DOM element from the event
  var $elem = $(this);
  // store the background-color
  var oldBG = $elem.css('background');
  // change the background color to what you want
  $elem.css('background', 'linear-gradient(rgb(181, 245, 255),rgb(22, 249, 121),rgb(1, 134, 153))');
  // after 1 second, change it back
  setTimeout(function() {
    $elem.css('background', oldBG);
  }, 1000);
});
</script>