//==========================================================================

// GLOBAL VARIABLES
const alertBanner = document.querySelector("#alert");
const traffic = document.querySelector('ul#traffic_nav');
const settings = document.querySelector('select#timezone');
const optional_responses = document.querySelector('option#timezone_options');

//==========================================================================


//ALERT FUNCTIONALITY
alertBanner.innerHTML = 
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains("alert-banner-close")) {
	alert.style.display = "none"
	}
		
});

//==========================================================================

//TRAFFIC NAVIGATION FUNCTIONALITY
const traffic_nav_hourly = document.querySelector('#traffic_nav_hourly');
const traffic_nav_daily = document.querySelector('#region traffic_nav_daily');
const traffic_nav_weekly = document.querySelector('#traffic_nav_weekly');
const traffic_nav_monthly = document.querySelector('#traffic_nav_monthly');


//IT'S NOT READING!!!!!!! WHY!!!!!!
function navHighlight(traffic_menu) {
	traffic_menu.addEventListener('click', () => {

console.log('Im all ears');

	// const traffic_option_selected = e.target;
	let traffic_chosen = document.querySelector('.traffic-nav-options');

		for (i = 0; i < traffic_chosen.length; i++) {
			traffic_chosen[i].classList.remove('active');
			console.log('Im looping around');
		}
		traffic_menu.classList.add('active');
		})

		console.log('I made it to the end');
};

navHighlight(traffic_nav_hourly);
navHighlight(traffic_nav_daily);
navHighlight(traffic_nav_weekly);
navHighlight(traffic_nav_monthly);

//==========================================================================

//EXPERIMENT
//EMAIL FUNCTIONALITYY

const email_preference_toggle = event => {
	console.log('Are you working email preferences????');

	const email_input = document.querySelector('input#email-checkbox');

	if (email_input.tagName.contains('email-span-on')) {
		alert('You email notifications have been turned on on');
	} if (email_input.tagName.contains('email-span-off')) {
		alert('You email notifications have been turned on off');
	} else {
		alert('Unable to change email preferences. Please Try again.');
	}

};
 

search.addEventListener('click', email_preference_toggle);
console.log('Listerner activated');

//==========================================================================

//EXPERIMENT
//EMAIL FUNCTIONALITYY

// const email_settings = document.querySelector('label#email_group');

const profile_preference_toggle = event => {
	console.log('Are you working profile preferences????');

	const profile_input = document.querySelector('input#email-checkbox');
	// const email_span_on = document.querySelector('#email-span-on');
	// const email_span_off = document.querySelector('#email-span-off');

	if (profile_input.tagName.contains('profile-span-on')) {
		alert('You email notifications have been turned on on');
	} if (profile_input.tagName.contains('profile-span-on')) {
		alert('You email notifications have been turned on off');
	} else {
		alert('Unable to change email preferences. Please Try again.');
	}

};
 

search.addEventListener('click', profile_preference_toggle);
console.log('Listerner activated');

//==========================================================================


//OLD EMAIL NOTIFICATION

//EMAIL NOTIFICATION SETTINGS FUNCTION
// const email_settings = document.querySelector('label#email_group');

// email_settings.addEventListener('click', (event) => {
// 		let email_notify = event.target;
// 		const email_input = document.querySelector('input#email-checkbox');
// //TRIED TO MAKE IT SAY SOMETHIGN DIFFERENT IF IT WAS ON OR OFF
// 		// const email_input_on = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-on');
// 		// const email_input_off = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-off');
// 		// const active_on = document.querySelector('span.email-active-on');
// 		// const active_off = document.querySelector('span.email-active-off');
// 		if (email_notify = email_input) {
// 			alert('You email notifications have been turned on on');
// 		}
// 		// else if (email_notify === email_input_off) {
// 		// 	alert('You email notifications have been turned on off');
// 		// }
	
// });

// //Profile Notifcations SETTINGS FUNCTION
// const profile_settings = document.querySelector('label#profile_group');

// profile_settings.addEventListener('click', (event) => {
// 		let profile_notify = event.target;
// 		const profile_input = document.querySelector('input#profile-checkbox');
// //TRIED TO MAKE IT SAY SOMETHIGN DIFFERENT IF IT WAS ON OR OFF
// 		// const email_input_on = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-on');
// 		// const email_input_off = document.querySelector('input#email-checkbox') + document.querySelector('span.email-active-off');
// 		// const active_on = document.querySelector('span.email-active-on');
// 		// const active_off = document.querySelector('span.email-active-off');
// 		if (profile_notify === profile_input) {
// 			alert('You email notifications have been turned on on');
// 		}
// 		// else if (email_notify === email_input_off) {
// 		// 	alert('You email notifications have been turned on off');
// 		// }
// });

//==========================================================================

// MESSAGING FUNCTIONALITY
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
	// ensure user and message fields are filled out
	if (user.value === "" && message.value === "") {
	alert("Please fill out user and message fields before sending");
	} else if (user.value === "" ) {
	alert("Please fill out user field before sending");
	} else if (message.value === "" ) {
	alert("Please fill out message field before sending");
	} else {
	alert(`Message successfully sent to: ${user.value}`);
	}
});

//==========================================================================



// TIME BANNER NOTIFCATIONS FUNCTION
// const settings = document.querySelector('select#timezone');
// const optional_responses = document.querySelector('option#timezone_options');

//Listening Event
settings.addEventListener('click', (event) => {
		console.log('Im in the time function function');
//LISTEN FOR INPUT
		selected_input_time = event.target;
		// let input_memory = [];
		// input_memory.push(sSelected_input_time);
		if (selected_input_time === optional_responses) {
			console.log("I'm in the timezone if statement");
			 if (optional_responses.value = "est-zone") {
				console.log('green light on Eastern');
				alert('Time zone has been updated to Eastern zone');
			} else if (optional_responses.value = "pac-zone") {
				console.log('green light on Pacific');
				alert('Time zone has been updated to Pacific zone');
			} else if (optional_responses.value = "gm-zone") {
				console.log('green light on GM');
				alert('Time zone has been updated to GM Central zone');
			} else if (optional_responses.value = "java-zone") {
				console.log('green light on java');
				alert('Time zone has been updated to Javascript Time zone zone');
			} else if (optional_responses.value = "code-zone") {
				console.log('green light on code');
				alert('Time zone has been updated to Coding Time zone zone');
			} else if (optional_responses.value = "jedi-zone") {
				console.log('green light on Jedi');
				alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
			} else {
				alert('Unable the update time zone');
			}

		}

	});

	// SAVE SETTINGS FUNCTIONALITY


// ================================================================

//=======================================
//         ARCHIVES WORKING
//=======================================

// CREATE A DATABASE WITH ARRAYS
// const total_members = [
// 	{name:"Victoria Chambers", 
// 	email:"victoria.chambers80@example.com", 
// 	birthDate:"10/15/15"}, 
// 	{name:"Dale Byrd", 
// 	email:"dale.byrd52@example.com", 
// 	birthDate:"10/15/15"},
// 	{name:"Dawn Wood", 
// 	email:"dawn.wood16@example.com", 
// 	birthDate:"10/15/15"},
// 	{name:"Dan Oliver", 
// 	email:"dan.oliver82@example.com", 
// 	birthDate:"10/15/15"},
// ];



		// if (selected_input_time === optional_responses) {
		// 	console.log("I'm in the timezone if statement");
		// 	if (selected_input_time === option.className = "est-zone") {
		// 		console.log('green light on Eastern');
		// 		alert('Time zone has been updated to Eastern zone');
		// 	} if (optional_responses.className = "pac-zone") {
		// 		console.log('green light on Pacific');
		// 		alert('Time zone has been updated to Pacific zone');
		// 	} if (selected_input_time === option.className = "gm-zone") {
		// 		console.log('green light on GM');
		// 		alert('Time zone has been updated to GM Central zone');
		// 	} if (selected_input_time === option.className = "java-zone") {
		// 		console.log('green light on java');
		// 		alert('Time zone has been updated to Javascript Time zone zone');
		// 	} if (selected_input_time === option.className = "code-zone") {
		// 		console.log('green light on code');
		// 		alert('Time zone has been updated to Coding Time zone zone');
		// 	} if (selected_input_time === option.className = "jedi-zone") {
		// 		console.log('green light on Jedi');
		// 		alert('Yong padawan, time is only the force within you - Jedi Force Time zone zone');
		// 	} else {
		// 		alert('Unable the update time zone');
		// 	}

		// }

// console.log(input_memory.length);
// TEST
// console.log(selected_input_time);	
// REMOVE THE LAST ITEM AND KEEP THE NEW ONE

//HAVE A MESSAGE THAT INDICATES THAT ____ TIME ZONE BEEN SAVED
		//IF STATEMENT OF IF THE EVENT TARGET CHOSE ___ TIME XONE
		// alert('You has saved your time zone settings!')
	//why not add a visual clock too!!!!!!!!
// });
