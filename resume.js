window.onload = function(){
  var resume = "https://brantran.github.io/JSON/resume.json";
  var anchor = document.getElementById("resumeContent");
  getResume(resume,showResume(data,anchor));
//*/
}

function getResume(url,callback){
  var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200)
		{
			var data = JSON.parse(req.response);
			callback(data);
		}//if
	}//function
	req.open("GET",url,true);
	req.send();
}
function showResume(data,anchor)
{
//Append Contacts

//Education
//Work
//Leadership
//Skills

}
