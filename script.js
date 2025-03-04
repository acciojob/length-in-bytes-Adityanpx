const byteSize = (str) => {
	return new Blob([str]).size;
  // write your code 
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
