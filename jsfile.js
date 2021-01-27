//under is the content of patient.json file. this was done just incase there isnt a server to fetch the json file directly 
/*var jsonFile = `{
    "resourceType": "Patient",
    "id": "xcda",
    "text":{
      "status": "generated",
      "div": "<div>   \\n \\n   <p> Henry Levin the 7th </p> \\n \\n  </div>"
    },
    "identifier": {
        "use": "usual",
        "type": {
          "coding": [{
              "system": "htt://hl7.org/fhir/v2/0203",
              "code": "MR"
            }]
        },
        "system": "urn:oid:2.16.840.1.113883.19.5",
        "value": "12345"
      },
    "active": true,
    "name": {
        "family":  ["Levin"] ,
        "given":   ["Henry"]

    },
    "gender": "male",
    "birthDate": "2020-09-24",
    "managingOrganization": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "University Health Network"
    },
    "conditions": [
      "Diabetes",
      "High blood pressure",
      "Asthma"
    ]
  }` */
  var obj;
  fetch('/harshEdit.JSON')
        .then(data => data.json())
        .then(data => {
            obj = data;
          //  console.log(data);

//  obj = JSON.parse(jsonFile);
  document.getElementById("demo").innerHTML += data.name.given + " " + data.name.family;
  document.getElementById("orgName").innerHTML += data.managingOrganization.display;
  document.getElementById("gender").innerHTML += data.gender;
  document.getElementById("numOfConditions").innerHTML += data.conditions.length;


 var arr = obj.conditions;
 var list = "<ul>";
    for(let i = 0; i<arr.length; i++)
    {
        list+= "<li>" + arr[i] + "</li>";
    }
    list += "</ul>"
document.getElementById("listOfConditions").innerHTML += list;
});
