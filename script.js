//QUESTION:1
//USING FOR LOOP:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].area);
  }
}

  //-----------------------------------------------------------
  //FOR IN METHOD:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  //for accessing multiple values use looping
  //!using for loop
  for (let intex in result){
    console.log(result[intex].region)
  }
}

//----------------------------------------------------------------
//FOR OF METHOD:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  //!using for loop
  for (let values in result){
    console.log(values.subregion,values.population)
  }
}
//---------------------------------------------------
//FOR EACH :
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  var each=result.forEach((x)=>console.log(x.area))
}

//--------------------------------------------------------------------------
//QUESTION-2:
//2.Create your own resume data using JSON format:
let personDetails={
    Name:"ABIMANYU A",
    DoB:["15-10-2001"],
    Mobilenumber:"8754228893",
    EmailId:"asalabimanyu15@gmail.com",
    EducationDetails:{
        Ssc:{
          percentage:"91.8%",
          school:["Govt High School-Sholandur"]},
        Hsc:{
          percentage:"72%",
          school:["Syed Ammal Higher Sec School-Ramanathapuram "]},
        Bsc :{
          Department:"physics",
          percentage:"79%",
          College:["Sethpathy Govt Arts College-Ramanathapuram"]},
        Msc :{
          Department:"physics",
          percentage:"60%",
          College:["Sethpathy Govt Arts College-Ramanathapuram"]}
}
}
 console.log(personDetails);

