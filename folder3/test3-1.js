async function my_function (data, result) {
    // do something (it'll take sometime, you can use setTimeout() here, so that delay the time, for example.
    console.log(result);
	return result;
}

module.exports = my_function;