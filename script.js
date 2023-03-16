	
		var sec = document.getElementById('seconds');
		var min = document.getElementById('minutes');
	  var auto_putter, auto_counter, q = time = 0,result = Array(10).fill(0);

//generate array
    let questions = [];
    for (let i = 0; i < 10; i++) {
    questions[i] = [];
    questions[i][0] = (i+1)+". c'est la question numero  " ;
    questions[i][1] = "reponse A - " + (i+1) ;
    questions[i][2] = "reponse B - " + (i+1) ;
    questions[i][3] = "reponse C - " + (i+1) ;
    questions[i][4] = "reponse B - " + (i+1) ;
    questions[i][5] = 10;
     }

//to make questions show randomly
  const array = [1, 2, 3];

  function randomSort(a, b) {
      return Math.random() - 0.5;
  }

  array.sort(randomSort); 

$('main > div > div:not(:nth-child(4))').click(
	function (event) {
	if(event.target.innerText == questions[q-1][4]){
         result[q-1] = 1;
         console.log('correct answer');
	}

	$('main > div > div:nth-child(4)').trigger('click');
});  //get and compare answer, then save result

for (var i = 0; i < 10; i++) {
	time+=questions[i][5];
}

	$('header i').text(parseInt(time/60)+' : '+time%60);

$('main > div > div:nth-child(4)').click(function () {
	clearTimeout(auto_putter);
	putter();
}); //something to do when the button is clicked

putter();

function putter(){
	           clearInterval(auto_counter);
    	if(q<10){ 
 	           $('#seconds').text((questions[q][5]-1) > 9 ? (questions[q][5]-1):'0'+(questions[q][5]-1).toString());
  	         $('main > p').text(questions[q][0]);
  	         array.sort(randomSort);    
  	         $('main > div > div:nth-child(1)').text(questions[q][array[0]]); 
  	         $('main > div > div:nth-child(2)').text(questions[q][array[1]]);
  	         $('main > div > div:nth-child(3)').text(questions[q][array[2]]);
  	         q++;
             auto_putter  = setTimeout(putter, questions[q-1][5]*1000);
	           auto_counter = setInterval(counter,1000);
       }else{
             console.log('finished');
             console.log(result);
             const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
             console.log('your point is '+sum+'/10');
             $('main').html('<section>'+sum+'/10</section>');
             $('span').css('display','none');
       }
}

function counter(){
	        const d = new Date();
           
        let sec_tmp = parseInt(sec.textContent);
    if(sec_tmp > 0){
          if( sec_tmp <= 10){
	          sec.innerText = 0 + (sec_tmp -  1).toString();
	        }else{
	    	    sec.innerText = (parseInt(sec.textContent) -  1).toString();
	  }
	  }

	    }



$(document).ready(function date_show(){
    const months     = ["Janvier", "Fevrier", "Mars", "Avril", "mai","juin", "Juillet", "aout", "September", "October", "November", "December"];
    const days       = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
    const date       = new Date();
    let   month      = months[date.getMonth()];
    let   day_name   = days[date.getDay()];
    const year       = date.getFullYear();
    const day        = date.getDate();
    let   time       = day_name +"  "+day+"  "+ month +"  "+ year;
    console.log(time);
  });