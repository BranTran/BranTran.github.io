window.onload = function(){
  var resume = "https://brantran.github.io/JSON/resume.json";
  getResume(resume,showResume);
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
