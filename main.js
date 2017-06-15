// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

function buildUsers(userData) {
  console.log(userData[0]);
  var body = document.querySelector('body');
  var divUsers = document.getElementsByClassName('users');

  for (i = 0; i < userData.length; i++) {

    var userCard = document.createElement('div');
    userCard.className = "user-card";
    $(divUsers).append(userCard);

    var userPic = document.createElement('div');
    userPic.className = "user-pic"
    userPic.innerHTML = '<img src="' + userData[i].picture.large + '">';
    $(userCard).append(userPic);

    var userDetail = document.createElement ('div');
    userDetail.className = "user-detail";
    $(userCard).append(userDetail)

    var userName = document.createElement('div');
    userName.className = "user-text user-name"
    userName.textContent = userData[i].name.first + " " + userData[i].name.last;
    $(userDetail).append(userName);

    var userEmail = document.createElement('div');
    userEmail.className = "user-text user-email";
    var emailText = userData[i].email;
    for (j = 0; j < emailText.length; j++) {
      if (emailText[j] === "@") {
        console.log(emailText.substring[j]);
        var emailText2 = emailText.slice(0,j) + "<wbr>" + emailText.slice(j);
      }
    }
    userEmail.innerHTML = emailText2;
    $(userDetail).append(userEmail);

    var userContactInfo = document.createElement('div');
    userContactInfo.className = "user-text user-contact";
    userContactInfo.innerHTML = "<div>"+userData[i].location.street+"</div>" + "<div>"+userData[i].location.city + ", " + userData[i].location.state + " " + userData[i].location.postcode+"</div>" + "<div>"+userData[i].cell+"</div>";
    $(userDetail).append(userContactInfo);

    var userSSN = document.createElement('div');
    userSSN.className = "user-text user-ssn";
    userSSN.textContent = userData[i].id.value;
    $(userDetail).append(userSSN);


  }
}

(function () {

  'use strict';

  // Your Code Goes Here
  $.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function(data) {
      buildUsers(data.results);
    }
  });




})();
