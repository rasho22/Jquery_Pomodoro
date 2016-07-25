/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */
 $(function() {
    	var temps = 25;  

        var sec_in_min = 60;  

        var minuteur_minute;  

        var minuteur_sec; 


        document.getElementById('play').onclick = lanceMinuteur; 


            function lanceMinuteur() { 

                minuteur_minute = temps; 

                minuteur_sec = 0; 

                setInterval(decrementSec, 1000);

            } 


            function Mise_a_jour_interface() { 

                document.getElementById('time').innerHTML = minuteur_minute + ':' + minuteur_sec; 

            } 


            function decrementSec() { 

                if (minuteur_sec == 0 && minuteur_minute != 0) { 

                        minuteur_sec = 59; 

                        minuteur_minute -- ; 

                } else { 

                        minuteur_sec -- ; 

                } 

                if (minuteur_sec == 0 && minuteur_minute == 0) { 

                     

                    alert("FINI!"); 


                /* et lance function pause()*/ 

                } 

                 

                Mise_a_jour_interface(); 

                //console.log(minuteur_sec); 

                //console.log(minuteur_minute); 


            }
              });
 