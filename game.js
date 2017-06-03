window.onload = function() {

$("#start").on("click", question)
$("#start").on("click", timer.start)
$("#start").on("click", function(){
    $("#start").hide();

});

}

// the end of the game function
function theEnd () {
    console.log(timer.time);
    if (timer.time ==0 && wins<6) {
    alert("Better luck next time, sucka")
    } else if(timer.time >=0 && wins>=6){
    alert("You weren't bad in my book..");
    };
    console.log(wins);
}

// below is the trivia-question functionality

var currentQuestion = [

"One who is rejected by a social group",
"What is my cat's name?",
"What is the name of the youngest Kardashian?",
"How many English words end in the letters mt?",
"What famous psychologist studied classical conditioning?",
"What was the first invention ever patented in American history?"

];




var currentAnswer;
var randomQuestion;
var questionsSoFar = [];


var losses= 0;
var wins= 0;



var question = function () {
randomQuestion = Math.floor(Math.random()*currentQuestion.length);
if (questionsSoFar.indexOf(randomQuestion) >= 0 && questionsSoFar.length < currentQuestion.length) {
	question();
	return;
}
questionsSoFar.push(randomQuestion);
console.log(randomQuestion);

$("#answer").html("");

              
		if (randomQuestion === 0) {
				$(".question").html(currentQuestion[0]);
					var truthbtn = document.createElement("BUTTON");
					truthbtn.id ="truth";      
					var truth = document.createTextNode("Pariah");      
					truthbtn.appendChild(truth);                              
					document.getElementById("answer").appendChild(truthbtn);                 
					var liebtn = document.createElement("BUTTON");  
					liebtn.id ="lie";    
					var lie = document.createTextNode("Charlatan");      
					liebtn.appendChild(lie);                              
					document.getElementById("answer").appendChild(liebtn);
					var liebtn = document.createElement("BUTTON");   
					liebtn.id ="lie2";       
					var lie = document.createTextNode("Iconoclast");      
					liebtn.appendChild(lie);                              
					document.getElementById("answer").appendChild(liebtn);
 			
 			$("#lie").click(function() {
            alert("you wrong sucka, the answer is Pariah");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#lie2").click(function() {
            alert("you wrong sucka, the answer is Pariah");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#truth").click(function() {
            alert("smartie-pants");
            question();
            wins ++;
            $(".wins").html("Wins: " + wins);
            });


			} else if (randomQuestion  === 1) {
				$(".question").html(currentQuestion[1]);


					var liebtn = document.createElement("BUTTON");  
					liebtn.id ="lie";        
					var lie = document.createTextNode("behbeh");      
					liebtn.appendChild(lie);                              
					document.getElementById("answer").appendChild(liebtn);                 
					var truthbtn = document.createElement("BUTTON");    
					truthbtn.id ="truth";       
					var truth = document.createTextNode("gemini");      
					truthbtn.appendChild(truth);                              
					document.getElementById("answer").appendChild(truthbtn);
					var liebtn = document.createElement("BUTTON");  
					liebtn.id ="lie2";        
					var lie = document.createTextNode("schweetie");      
					liebtn.appendChild(lie);                              
					document.getElementById("answer").appendChild(liebtn);
 			
 			$("#lie").click(function() {
            alert("you wrong sucka, the answer is Gemini");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#lie2").click(function() {
            alert("you wrong sucka, the answer is Gemini");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#truth").click(function() {
            alert("smartie-pants");
            question();
            wins ++;
            $(".wins").html("Wins: " + wins);
            });


			} else if (randomQuestion  === 2) {
			 $(".question").html(currentQuestion[2]);
			 var liebtn = document.createElement("BUTTON");  
					liebtn.id ="lie";        
					var lie = document.createTextNode("Kylie");      
					liebtn.appendChild(lie);                              
					document.getElementById("answer").appendChild(liebtn);                 
					var truthbtn = document.createElement("BUTTON");    
					truthbtn.id ="truth";       
					var truth = document.createTextNode("Dream");      
					truthbtn.appendChild(truth);                              
					document.getElementById("answer").appendChild(truthbtn);
					var liebtn = document.createElement("BUTTON");  
					liebtn.id ="lie2";        
					var lie = document.createTextNode("Cassie");      
					liebtn.appendChild(lie);                              
					document.getElementById("answer").appendChild(liebtn);
 			
 			$("#lie").click(function() {
            alert("you wrong sucka, the answer is Dream");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#lie2").click(function() {
            alert("you wrong sucka, the answer is Dream");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#truth").click(function() {
            alert("smartie-pants");
            question();
            wins ++;
            $(".wins").html("Wins: " + wins);
            });


			} else if (randomQuestion  === 3) {
			$(".question").html(currentQuestion[3]);
                    var liebtn = document.createElement("BUTTON");  
                    liebtn.id ="lie";        
                    var lie = document.createTextNode("207");      
                    liebtn.appendChild(lie);                              
                    document.getElementById("answer").appendChild(liebtn);                 
                    var truthbtn = document.createElement("BUTTON");    
                    truthbtn.id ="truth";       
                    var truth = document.createTextNode("1");      
                    truthbtn.appendChild(truth);                              
                    document.getElementById("answer").appendChild(truthbtn);
                    var liebtn = document.createElement("BUTTON");  
                    liebtn.id ="lie2";        
                    var lie = document.createTextNode("1,987");      
                    liebtn.appendChild(lie);                              
                    document.getElementById("answer").appendChild(liebtn);
            
            $("#lie").click(function() {
            alert("you wrong sucka, the answer is 1 and it's Dreamt");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#lie2").click(function() {
            alert("you wrong sucka, the answer is 1 and it's Dreamt");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#truth").click(function() {
            alert("smartie-pants");
            question();
            wins ++;
            $(".wins").html("Wins: " + wins);
            });
        

            } else if (randomQuestion  === 4) {
            $(".question").html(currentQuestion[4]);
                    var truthbtn = document.createElement("BUTTON");    
                    truthbtn.id ="truth";       
                    var truth = document.createTextNode("Pavlov");      
                    truthbtn.appendChild(truth);                              
                    document.getElementById("answer").appendChild(truthbtn);
                    var liebtn = document.createElement("BUTTON");  
                    liebtn.id ="lie2";        
                    var lie = document.createTextNode("Watson");      
                    liebtn.appendChild(lie);                              
                    document.getElementById("answer").appendChild(liebtn);
                    var liebtn = document.createElement("BUTTON");  
                    liebtn.id ="lie";        
                    var lie = document.createTextNode("Freud");      
                    liebtn.appendChild(lie);                              
                    document.getElementById("answer").appendChild(liebtn);
            
            $("#lie").click(function() {
            alert("you wrong sucka, the answer is Pavlov");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#lie2").click(function() {
            alert("you wrong sucka, the answer is Pavlov");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#truth").click(function() {
            alert("smartie-pants");
            question();
            wins ++;
            $(".wins").html("Wins: " + wins);
            });
        
                
            } else if (randomQuestion  === 5) {
                $(".question").html(currentQuestion[5]);

                    var liebtn = document.createElement("BUTTON");  
                    liebtn.id ="lie2";        
                    var lie = document.createTextNode("The Flour Mill");      
                    liebtn.appendChild(lie);                              
                    document.getElementById("answer").appendChild(liebtn);
                    var liebtn = document.createElement("BUTTON");  
                    liebtn.id ="lie";        
                    var lie = document.createTextNode("The Candle");      
                    liebtn.appendChild(lie);                              
                    document.getElementById("answer").appendChild(liebtn);                 
                    var truthbtn = document.createElement("BUTTON");    
                    truthbtn.id ="truth";       
                    var truth = document.createTextNode("A Process for Making Fertilizer");      
                    truthbtn.appendChild(truth);                              
                    document.getElementById("answer").appendChild(truthbtn);
 
            
            $("#lie").click(function() {
            alert("you wrong sucka, the answer is da Fertilizer processer");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#lie2").click(function() {
            alert("you wrong sucka, the answer is da Fertilizer processer");
            question();
            losses ++;
            $(".losses").html("Losses: " + losses);
            }) 

            $("#truth").click(function() {
            alert("smartie-pants");
            question();
            wins ++;
            $(".wins").html("Wins: " + wins);
            });

        }

}

            
// function/variables for input questions
// var $input = $('#item-input');
// var inputVal = $input.val();
//      if (inputVal) {
//         var html = '<li class="list-group-item todoItem">' + inputVal + '</li>'; 
//         console.log('li html', html);
//         $todoList.append(html);
//         $input.val("");
//     };      

// below is the count-down functionality 
var intervalId;



var timer= {


  time: 30,

  start: function() {
  	$("#countDown").html("00:30");
  	if (intervalId) {
  		clearInterval(intervalId);
  	}
  	timer.time = 30;
    // use setInterval to start the count here.
    intervalId = setInterval(timer.count, 1000);
  },

  count: function() {
    // count down by 1
    if (timer.time>=1){
    timer.time--;
    $("#countDown").html(timer.time)
    // console.log (timer.time);
    }
    theEnd();
  }

 };

 // theEnd
         

