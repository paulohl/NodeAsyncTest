import async from "async";

// directory name should be same js file name
import test_function1 from "test_function1";
import test_function2 from "test_function2";
import test_function3 from "test_function3";
import test_function4 from "test_function4";
import test_function5 from "test_function5";

async function main_function() {
	
	let promise1 = new Promise((resolve, reject) => {
		setTimeout(() => resolve(test_function1()), 1000);
	})
	let result1 = await promise1;

	let promise2 = new Promise((resolve, reject) => {
		setTimeout(() => resolve(test_function2()), 1000);
	})
	let result2 = await promise2;

	let promise3 = new Promise((resolve, reject) => {
		setTimeout(() => resolve(test_function3()), 1000);
	})
	let result3 = await promise3;

	let promise4 = new Promise((resolve, reject) => {
		setTimeout(() => resolve(test_function4()), 1000);
	})
	let result4 = await promise4;

	let promise5 = new Promise((resolve, reject) => {
		setTimeout(() => resolve(test_function5()), 1000);
	})
	let result5 = await promise5;

	// result: You can see alert all sums after 5 seconds
	alert(result1 + result2 + result3 + result4 + result5);
} 

main_function();