	
		const sec = $('span#seconds'), min = $('#minutes');
	  var auto_putter, auto_counter, q = 0,result = Array(10).fill(0);


//generate questions array
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

 //q is double used, to calcul total time, and to index question
for (var i = 0; i < 10; i++) {
	q+=questions[i][5];
}

$('header i').html(parseInt(q/60)+'m&nbsp;'+q%60+'s');

q=0; //return to origin

//to make questions show randomly
  const array = [1, 2, 3];

  function randomSort(a, b) {
      return Math.random() - 0.5;
  }

//user choose a possible answer
$('main > div > div:not(:nth-child(4))').click( 
	function (event) {
	if(event.target.innerText == questions[q-1][4]){
         result[q-1] = 1;
	}

	$('main > div > div:nth-child(4)').trigger('click');
});  //get and compare answer, then save result


$('main > div > div:nth-child(4)').click(function () {
	clearTimeout(auto_putter);
	putter();
}); //something to do when the button is clicked

putter();

function putter(){
	           clearInterval(auto_counter);
    	if(q<10){ 
 	           sec.text((questions[q][5]-1) > 9 ? (questions[q][5]-1):'0'+(questions[q][5]-1).toString());
  	         $('main > p').text(questions[q][0]);
  	         array.sort(randomSort);     // reorder choices
  	         $('main > div > div:nth-child(1)').text(questions[q][array[0]]); 
  	         $('main > div > div:nth-child(2)').text(questions[q][array[1]]);
  	         $('main > div > div:nth-child(3)').text(questions[q][array[2]]);
  	         q++;
             auto_putter  = setTimeout(putter, questions[q-1][5]*1000);
	           auto_counter = setInterval(counter,1000);
       }else{
             console.log(result);
             const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
             console.log('your point is '+sum+'/10');
             $('main').html(sum+'/10</section>');
       }
}

function counter(){
        let sec_tmp = parseInt(sec.text()); 
    if (sec_tmp > 0) 
      sec.text(sec_tmp <= 10 ? 0 + (sec_tmp - 1).toString() : (parseInt(sec.text()) - 1).toString());
	    }



$(document).ready(function showDate(){
    const months     = ["Janvier", "Fevrier", "Mars", "Avril", "mai","juin", "Juillet", "aout", "September", "October", "November", "December"];
    const days       = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
    const date       = new Date();
    let   month      = months[date.getMonth()];
    let   day_name   = days[date.getDay()];
    const year       = date.getFullYear();
    const day        = date.getDate();
    let   time       = day_name +"  "+day+"  "+ month +"  "+ year;
  });

const $footer = $('footer'),$main = $('main');

checkFooter();

$(window).resize(checkFooter);

function checkFooter(){
      let footerCrossed = $main.position().top + $main.height() + 10 > $footer.position().top;
      handleFooterPlace(footerCrossed);
}

function handleFooterPlace(statement) {
  if (statement) {
      $footer.css('position','relative');
  } else {
      $footer.css('position','fixed');
      $footer.css('bottom','0');
  }
}