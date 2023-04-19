//your JS code here. If required.
function getdimension(){
	const width=window.innweWidth;
		const height=window.innerHeight;
	console.log('Width:',width,'and Height',height);
	// console.log('Height:${height}');
}
window.addEventListner('resize',getdimension);
getdimension();