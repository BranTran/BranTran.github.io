window.onload = function(){
  var resume = "https://brantran.github.io/JSON/resume.json";
  var anchor = document.getElementById("resumeContent");
  getResume(resume,(data)=>{
    showResume(data,anchor)
  });
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
  createTextElement(anchor,"h1",data.name,"name","basic-info");
  var elink = myCreate(anchor,"a",undefined,"href",data.contact_info[0]);
  createTextElement(elink,"h2",data.contact_info[0],"email","basic-info");
  createTextElement(anchor,"h2",data.contact_info[1],"phone","basic-info");
  var edu = myCreate(anchor,"div","block");
  var schoollink = myCreate(edu,"a",undefined, "href",data.schoolURL);
  createTextElement(edu,"h2",data.school_date,undefined,"date");
  createTextElement(edu,"h4","Education");
  createTextElement(schoollink,"h5",data.school,"school");
  createTextElement(edu,"h5",data.grade);
  createTextElement(edu,"h5","Course work");
  var courses = myCreate(edu, "ul", "courses");
  for(var i = 0; i<data.course_work.length ;i++)
  {
    createTextElement(courses,"li",data.course_work[i],"course"+i,"resume-list");
  }
  var work1 = myCreate(anchor,"div","block");
  createTextElement(work1,"h4","Work Experience")
  createTextElement(work1,"h2",data.work1_date,undefined,"date");
  createTextElement(work1,"h5",data.work1_name,"work");

  var lead = myCreate(anchor, "div","block");
  createTextElement(lead,"h4","Leadership Positions");
  var leadpost = myCreate(lead,"ul","leader");
  for(var i = 0; i<data.leader.length;i++)
  {
    createTextElement(leadpost,"h2",data.leader_date[i],undefined,"date");
    createTextElement(leadpost,"li",data.leader[i],"exp"+i);
  }
  var skill = myCreate(anchor,"div","block")
  createTextElement(skill,"h4","Skills");
  var skills = myCreate(skill,"ul","skills");
  for(var i = 0; i<data.skills.length;i++)
  {
    createTextElement(skills,"li",data.skills[i],"exp"+i);
  }
//*/
}
function createTextElement(parent, type, content, id, classname){
  //console.log(content);
  var element = document.createElement(type);
  element.textContent = content;
  if(id != undefined)  element.id = id;
  if(classname != undefined) element.className = classname;
  parent.appendChild(element);
}
function myCreate(parent,type,classname,property,value)
{
  var element = document.createElement(type);
  if(classname != undefined) element.className = classname;
  if(property != undefined){
    var attr = document.createAttribute(property);
    attr.value = value;
    element.setAttributeNode(attr);
  }
  parent.appendChild(element);
  return element;
}
