// const button = document.querySelector("FAQbuttonClick");
// button.onclick = function(event){
// 	var ret = confirm("제출하시겠습니까?");
// 	if(ret==true){

// 	}
// 	else{

// 	}
// 	// let input = document.getElementById('input_value').value;
//     //         const input_value = document.createElement('li');
//     //         input_value.textContent = input;
//     //         std.append(input_value);
// }

// const buttonEl = document.querySelector("button");
// buttonEl.onclick = function (event) {
//   alert("RB");
//   // alert(event.target.textContent);
// };

const buttonEl = document.querySelector("button");
buttonEl.onclick = function (event) {
	var ret = confirm("제출하시겠습니까?");
	if(ret==true){
		location.reload();
	}
};