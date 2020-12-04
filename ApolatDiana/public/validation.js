//Create at function testForm and use it to validate the inputs in the form 
//by name and id attibutes.
const testForm = () => {
    const surname = document.testRegForm.surname;
    const givenName = document.testRegForm.givenName;
    const dateOfDirth = document.testRegForm.dateOfDirth;
    const placeOfResidence = document.testRegForm.placeOfResidence;
    const occupation = document.testRegForm.occupation;
    const nationality = document.testRegForm.nationality;
    const female = document.getElementById('female')
    const male = document.getElementById('male')
    const category = document.getElementById('category')
  

    
    let text = /^([A-Za-z]{1,16})+$/;
  
    if (!surname.value.match(text)) {
        document.getElementById('surnameerror').innerHTML = "Please Enter Surname";
        document.getElementById('surnameerror').style = "color:red; ";
        surname.style.border = '1px solid red';
        return false
    }
        
    let gname =  /^([A-Za-z]{1,16})+$/;
    
    if (!givenName.value.match(gname)) {
        document.getElementById('givenNameerror').innerHTML = "Please Enter Given Name";
        document.getElementById('givenNameerror').style = "color:red; ";
        givenName.style.border = '1px solid red';
        return false
    }
  
    if (dateOfDirth.value == '') {
        alert('Please select Birth Date');
        dateOfDirth.style.border = '1px solid red';
        return false;
    };

    let pResisence =  /^([A-Za-z]{1,20})+$/;
    
    if (!placeOfResidence.value.match(pResisence)) {
        document.getElementById('residenceerror').innerHTML = "Please Enter place of Residence";
        document.getElementById('residenceerror').style = "color:red; ";
        placeOfResidence.style.border = '1px solid red';
        return false
    }

    let job =  /^([A-Za-z]{5,50})+$/;
    if (!occupation.value.match(job)) {
        document.getElementById('occupationerror').innerHTML = "Please Enter Your Occupation";
        document.getElementById('occupationerror').style = "color:red; ";
        occupation.style.border = '1px solid red';
        return false;
    }

    let nation =  /^([A-Za-z]{5,20})+$/;
    if (!nationality.value.match(nation)) {
        document.getElementById('nationalityerror').innerHTML = "Please Enter Nationality";
        document.getElementById('nationalityerror').style = "color:red; ";
        nationality.style.border = '1px solid red';
        return false;
    }

    
    if (female.checked == false && male.checked == false) {
        document.getElementById('gendererror').innerHTML = "Select your Gender";
        document.getElementById('gendererror').style = "color:red; ";
        return false;
        
    }

    if (category.value == 'type') {
        
        document.getElementById('categoryerror').innerHTML = "Select your Category";
        document.getElementById('categoryerror').style = "color:red; ";
        category.style.border = '1px solid red';
        return false;
    }else {
        document.getElementById('regmessage').innerHTML = "Registration was successful";
        document.getElementById('regmessage').style = "color:green; ";
        return true; 
    }
    
   
}