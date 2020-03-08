function date_fill(hello)
{
	// console.log(hello);
	console.log($(".space_for_the_date").text(hello));
	$(".space_for_the_date").css({
		"background-color" : "yellow",
	});
}
function rep_fill(yummy1)
{
	console.log(yummy1);
	$(".space_for_representative_of_the_employer_who_is_offering_the_position").text(yummy1);
	$(".space_for_representative_of_the_employer_who_is_offering_the_position").css({
		"background-color" : "yellow",
	});
}
function company_fill(yummy2)
{
	console.log(yummy2);
	$(".space_for_company_name_of_the_employer").text(yummy2);
	$(".space_for_company_name_of_the_employer").css({
		"background-color" : "yellow",
	});
}

function employer_add(yummy3)
{
	console.log(yummy3);
	$(".space_for_employers_full_business_address").text(yummy3);
	$(".space_for_employers_full_business_address").css({
		"background-color" : "yellow",
	});
}

function employee_name(yummy4)
{
	console.log(yummy4);
	$(".space_for_the_employees_full_name").text(yummy4);
	$(".space_for_the_employees_full_name").css({
		"background-color" : "yellow",
	});
}

function employee_add(yummy5)
{
	console.log(yummy5);
	$(".space_for_the_new_employee_contact_address").text(yummy5);
	$(".space_for_the_new_employee_contact_address").css({
		"background-color" : "yellow",
	});
}

function job_title_fill(yummy6)
{
	console.log(yummy6);
	$(".new_employees_job_title").text(yummy6);
	$(".new_employees_job_title").css({
		"background-color" : "yellow",
	});
}

function first_day_fill(yummy7)
{
	console.log(yummy7);
	$(".new_employees_first_day_of_work").text(yummy7);
	$(".new_employees_first_day_of_work").css({
		"background-color" : "yellow",
	});
}

function add_of_work_fill(yummy8)
{
	console.log(yummy8);

	$(".address_at_which_the_new_employee_will_be_required_to_work").text(yummy8);
	$(".address_at_which_the_new_employee_will_be_required_to_work").css({
		"background-color" : "yellow",
	});
}

function sal_fill(yummy_sal)
{
	console.log(yummy_sal);

	$(".employees_annual_salary").text(yummy_sal);
	$(".employees_annual_salary").css({
		"background-color" : "yellow",
	});
}

var i=1;
var f;
var before;
var after;

function nextpage(){
    console.log(i);
    if(i<8){
        f="q"+i;
        before=document.getElementById(f);
        before.style.display="none";
            // t2
            // .fromTo(before,1,{
                 
            //      clipPath:"circle(100% at 50% 50%)",
            //     opacity:1,
            //      ease: "Power2.out"
            // },{
            //      scale:1
            //  })
            //  .to(before,1,{
            //      display:"none",
            //      clipPath:"circle(0% at 50% 50%)",
            //      opacity:0,
            //      ease: "Power2.out"
            //  },'-=.85');
             
    }
    console.log(i);
    if(i<9){
        i++;
        console.log(i);
        f="q"+i;
        after=document.getElementById(f);
        after.style.display="flex";
        console.log(after.style.display);
    }
    console.log(i);
    if(i==8){
        i=1;
        document.querySelector('#banner').style.filter="blur(0)";
    }
}

onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {

        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');
        var flag = false;

        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        function onClickPlay() {
            if (!flag) {
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
                utterance.voice = getVoices()[0];
                utterance.onend = function() {
                    flag = false;
                    playEle.className = pauseEle.className = '';
                    stopEle.className = 'stopped';
                };
                playEle.className = 'played';
                stopEle.className = '';
                speak(utterance);
            }
            if (paused) { /* unpause/resume narration */
                playEle.className = 'played';
                pauseEle.className = '';
                resume();
            }
        }

        function onClickPause() {
            if (speaking && !paused) { /* pause narration */
                pauseEle.className = 'paused';
                playEle.className = '';
                pause();
            }
        }

        function onClickStop() {
            if (speaking) { /* stop narration */
                /* for safari */
                stopEle.className = 'stopped';
                playEle.className = pauseEle.className = '';
                flag = false;
                cancel();

            }
        }

    }

    else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}