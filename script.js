//QUESTION:1
//USING FOR LOOP:
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  for (var i = 0; i < result1.length; i++) {
    console.log(result1[i].area);
  }
}

  //-----------------------------------------------------------
  //FOR IN METHOD:
var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data2 = request2.response;
  var result2 = JSON.parse(data2);
  for (let intex in result2){
    console.log(result2[intex].region)
  }
}

//----------------------------------------------------------------
//FOR OF METHOD:
var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data4 = request3.response;
  var result4= JSON.parse(data4);
  for (let values of result4){
    console.log(values.subregion,values.population)
  }
}
//---------------------------------------------------
//FOR EACH :
var request5 = new XMLHttpRequest();
request5.open("GET", "https://restcountries.com/v3.1/all", true);
request5.send();
request5.onload = function () {
  var data5 = request5.response;
  var result = JSON.parse(data5);
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

