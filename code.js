 $(document).ready(functs);
 function functs() {
   charge();
   $('#E').click(()=>{
     $('#six').mouseover(()=>{
       $('.sxth').html('<audio src="sound/6E.ogg" autoplay></audio>');
     });
     $('#five').mouseover(()=>{
       $('.ffth').html('<audio src="sound/5B.ogg" autoplay></audio>');
     });
     $('#four').mouseover(()=>{
       $('.frth').html('<audio src="sound/4E.ogg" autoplay></audio>');
     });
     $('#three').mouseover(()=>{
       $('.thrd').html('<audio src="sound/3Gs.ogg" autoplay></audio>');
     });
     $('#two').mouseover(()=>{
       $('.scnd').html('<audio src="sound/2B.ogg" autoplay></audio>');
     });
     $('#one').mouseover(()=>{
       $('.frst').html('<audio src="sound/1E.ogg" autoplay></audio>');
     });
   });

   $('#F').click(()=>{});
   $('#G').click(()=>{});
 }
 function charge() {
   $('.line').mouseover((event)=>{
     $('#'+event.target.getAttribute('id')).css('background-image',"url('img/string2.jpg')");
   });
   $('.line').mouseout((event)=>{
     $('#'+event.target.getAttribute('id')).css('background-image',"url('img/string.jpg')");
   });
 }
