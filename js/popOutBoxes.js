var complaintReferenceNumber;
var lastIndex;
var complaintPart1 = new Array();
var complaintPart2 = new Array();
var complaintPart3 = new Array();
var complaint = new Array();
var timer;
/*
  NEW TASK POP OUT BOX
*/

// When the user clicks on the button, open the modal
$("#newTask").on("click",function() {
    event.preventDefault();
    $("#searchCustomerSearchString").val("");
    $("#searchCustomerSearchStringDate").val("");
    $("#taskSearchCustomerCriterion").val("No Selection");
    $("#customerSearchResultsContainer").val("No Select");
    $("#prioritySelect").val("normal");
    $("#taskTitle").val("");
    $("#description").val("");
    $("#comments").val("");
    $("#assignToUsers").val("No Selection");
    $("#dueDate").val("");
    $('#newTaskPopOutPane').fadeIn(250, "linear");
});

// When the user clicks on <span> (x), close the modal
$("#closeTask").on("click", function() {
    event.preventDefault();
    $("#searchCustomerSearchString").val("");
    $("#searchCustomerSearchStringDate").val("");
    $("#taskSearchCustomerCriterion").val("No Selection");
    $("#customerSearchResultsContainer").val("No Select");
    $("#prioritySelect").val("normal");
    $("#taskTitle").val("");
    $("#description").val("");
    $("#comments").val("");
    $("#assignToUsers").val("No Selection");
    $("#dueDate").val("");
    $('#newTaskPopOutPane').fadeOut(250, "linear");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $('#newTaskPopOutPane')) {
      $("#searchCustomerSearchString").val("");
      $("#searchCustomerSearchStringDate").val("");
      $("#taskSearchCustomerCriterion").val("No Selection");
      $("#customerSearchResultsContainer").val("No Select");
      $("#prioritySelect").val("normal");
      $("#taskTitle").val("");
      $("#description").val("");
      $("#comments").val("");
      $("#assignToUsers").val("No Selection");
      $("#dueDate").val("");
      $('#newTaskPopOutPane').fadeOut(250, "linear");
    }
});

/*
  NEW COMPLAINT POP OUT BOX NUMBER 1
*/


// When the user clicks on the button, open the modal
$("#newComplaint").on("click",function() {
    event.preventDefault();
    $('#newComplaintFirstPopOutPane').fadeIn(250, "linear", function(){
      $("#customerReferenceComplaint").val("");
      $("#customerNameTitleComplaint").val("");
      $("#customerNameForenameComplaint").val("");
      $("#customerNameSurnameComplaint").val("");
      $("#customerAddressHouseFlatNoComplaintComplaint").val("");
      $("#customerAddressStreetComplaint").val("");
      $("#customerAddressTownComplaint").val("");
      $("#customerAddressCityComplaint").val("");
      $("#customerAddressCountyComplaint").val("");
      $("#customerAddressPostCodeComplaint").val("");
      $("#agentTakingComplaint").html("");
      $("#dateComplaintTaken").html("");
      $("#timeComplaintTaken").html("");
      $("#agentConfirmCheckbox").prop("checked", false);

      $("#customerReferenceComplaint").val(customerDetails[0]);
      $("#customerNameTitleComplaint").val(customerDetails[1]);
      $("#customerNameForenameComplaint").val(customerDetails[2]);
      $("#customerNameSurnameComplaint").val(customerDetails[4]);


      for(var i=0;i<customerAddresses.length;i++){
        if(customerAddresses[i][7] == "Yes"){
          $("#customerAddressHouseFlatNoComplaintComplaint").val(customerAddresses[i][1]);
          $("#customerAddressStreetComplaint").val(customerAddresses[i][2]);
          $("#customerAddressTownComplaint").val(customerAddresses[i][3]);
          $("#customerAddressCityComplaint").val(customerAddresses[i][4]);
          $("#customerAddressCountyComplaint").val(customerAddresses[i][5]);
          $("#customerAddressPostCodeComplaint").val(customerAddresses[i][6]);
          break;
        }
      }

      $("#agentTakingComplaint").html(userDetails[0]);

      var date=new Date();
      var dd=date.getDate();
      var mm=date.getMonth()+1;
      if(mm<10){
        mm="0"+mm;
      }
      var yyyy=date.getFullYear();

      var dateToday=yyyy+"-"+mm+"-"+dd;

      var hours = date.getHours();
      var minutes =date.getMinutes();
      var time = hours+":"+minutes;

      $("#dateComplaintTaken").html(dateToday);
      $("#timeComplaintTaken").html(time);
    });


});

// When the user clicks on <span> (x), close the modal
$("#closeComplaintPageOne").on("click", function() {
    event.preventDefault();
    $('#newComplaintFirstPopOutPane').fadeOut(250, "linear");
    $("#customerReferenceComplaint").val("");
    $("#customerNameTitleComplaint").val("");
    $("#customerNameForenameComplaint").val("");
    $("#customerNameSurnameComplaint").val("");
    $("#customerAddressHouseFlatNoComplaintComplaint").val("");
    $("#customerAddressStreetComplaint").val("");
    $("#customerAddressTownComplaint").val("");
    $("#customerAddressCityComplaint").val("");
    $("#customerAddressCountyComplaint").val("");
    $("#customerAddressPostCodeComplaint").val("");
    $("#agentTakingComplaint").html("");
    $("#agentConfirmCheckbox").prop("checked", false);
});

$("#clearPageOne").on("click", function(){
  event.preventDefault();
  $("#customerReferenceComplaint").val("");
  $("#customerNameTitleComplaint").val("");
  $("#customerNameForenameComplaint").val("");
  $("#customerNameSurnameComplaint").val("");
  $("#customerAddressHouseFlatNoComplaintComplaint").val("");
  $("#customerAddressStreetComplaint").val("");
  $("#customerAddressTownComplaint").val("");
  $("#customerAddressCityComplaint").val("");
  $("#customerAddressCountyComplaint").val("");
  $("#customerAddressPostCodeComplaint").val("");
  $("#agentTakingComplaint").html("");
  $("#agentConfirmCheckbox").prop("checked", false);
});

$("#moveToComplaintPageTwo").on("click", function(){
  event.preventDefault();
  if(
      $("#customerReferenceComplaint").val() == ""||
      $("#customerNameTitleComplaint").val()  == "" ||
      $("#customerNameForenameComplaint").val()  == "" ||
      $("#customerNameSurnameComplaint").val()  == "" ||
      $("#customerAddressHouseFlatNoComplaintComplaint").val()  == "" ||
      $("#customerAddressStreetComplaint").val()  == "" ||
      $("#customerAddressTownComplaint").val()  == "" ||
      $("#customerAddressCityComplaint").val()  == ""||
      $("#customerAddressCountyComplaint").val()  == "" ||
      $("#customerAddressPostCodeComplaint").val()  == ""
  ){
    alert("One or more of your fields are blank, please fill them in");
    return false;
  }else{
    if($("#agentConfirmCheckbox").prop("checked") == true){
      var confirmCheckbox = "Yes";

      var date=new Date();
      var dd = addZero(date.getDate()) ;
      var mm = addZero(date.getMonth()+1);
      var yyyy = date.getFullYear();

      var randomNumber = Math.floor(Math.random()*(0000-9999) + 9999);
      complaintReferenceNumber ="CP"+dd+mm+yyyy+randomNumber;
      lastIndex = Number(customerComplaintsMain[customerComplaintsMain.length-1][0]);

      complaintPart1.push(lastIndex.toString());
      complaintPart1.push(complaintReferenceNumber);
      complaintPart1.push($("#customerReferenceComplaint").val());
      complaintPart1.push($("#customerNameTitleComplaint").val());
      complaintPart1.push($("#customerNameForenameComplaint").val());
      complaintPart1.push($("#customerNameSurnameComplaint").val());
      complaintPart1.push($("#customerAddressHouseFlatNoComplaintComplaint").val());
      complaintPart1.push($("#customerAddressStreetComplaint").val());
      complaintPart1.push($("#customerAddressTownComplaint").val());
      complaintPart1.push($("#customerAddressCityComplaint").val());
      complaintPart1.push($("#customerAddressCountyComplaint").val());
      complaintPart1.push($("#customerAddressPostCodeComplaint").val());
      complaintPart1.push($("#agentTakingComplaint").html());
      complaintPart1.push($("#dateComplaintTaken").html());
      complaintPart1.push($("#timeComplaintTaken").html());
      complaintPart1.push(confirmCheckbox);

      $('#newComplaintFirstPopOutPane').fadeOut(250, "linear", function(){
        $('#newComplaintSecondPopOutPane').fadeIn(250, "linear")
      });

    }else{
      alert("You have not confirmed that you have checked the details");
      return false;
    }
  }
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#newComplaintFirstPopOutPane")) {
        $('#newComplaintFirstPopOutPane').fadeOut(250, "linear");
    }
});

/*
  NEW COMPLAINT POP OUT BOX NUMBER 2
*/

$("#clearPageTwo").on("click", function(){
  event.preventDefault();
  $("#regardingWhat").val("No Select");
  $("#regardingOtherText").val("");
  $("#regardingAgentSelects").val("No Selection");
  $("#regardingAgentText").val("");
  $("#complaintMain").val("");
  $("#customersSolutionMain").val("");
  $("#agentsCommentMain").val("");
});

$("#regardingWhat").on("change", function(){
  if($("#regardingWhat").val()=="other"){
    $("#otherSelectionContainerText").slideDown(500);
  }else{
    $("#otherSelectionContainerText").slideUp(500);
  }
});

$("#regardingAgentSelects").on("change", function(){
  if($("#regardingAgentSelects").val() == "yes"){
    $("#agentNameContainer").slideDown(500);
  }else{
    $("#agentNameContainer").slideUp(500);
  }
});

$("#moveToComplaintPageThree").on("click", function(){
  event.preventDefault();
  if(complaintReferenceNumber == null || complaintReferenceNumber == undefined || complaintReferenceNumber == ""){
    alert("No reference number available, please start again");
  }else{

    for(var i=0;i<customerComplaintsMain.length;i++){
      if(
        $("#regardingWhat").val() == "No Select" ||
        $("#regardingAgentSelects").val() == "No Selection" ||
        $("#complaintMain").val() == "" ||
        $("#customersSolutionMain").val() == "" ||
        $("#agentsCommentMain").val() == "" ||
        $("#regardingWhat").val() == ""
      ){
        alert("Too many fields are blank, please ammend and try again");
      }else{
        var error=false;
        var regardingWhat;
        var regardingAgent;

        if($("#regardingWhat").val() == "other"){
          if($("#regardingOtherText").val() == "" || $("#regardingOtherText").val() == null || $("#regardingOtherText").val() == undefined){
            error=true;
            alert("Too many fields are blank, please ammend and try again");
          }else{
            regardingWhat=$("#regardingOtherText").val();
          }
        }else{
          regardingWhat=$("#regardingWhat").val();
        }

        if($("#regardingAgentSelects").val()=="yes"){
          if($("#regardingAgentText").val() == "" || $("#regardingAgentText").val() == null || $("#regardingAgentText").val() == undefined){
            error=true;
            alert("Too many fields are blank, please ammend and try again");
          }else{
            regardingAgent=$("#regardingAgentText").val();
          }
        }else{
          regardingAgent=null;
        }

        if(!error){

          //var date = new Date();
          var date = new Date();
          date.setDate(date.getDate() + (14 + 4));
          var nextStageDue = date.toISOString().split('T')[0];

          //submit to the array;
          complaintPart2.push(regardingWhat);
          complaintPart2.push($("#regardingAgentSelects").val());
          complaintPart2.push(regardingAgent);
          complaintPart2.push($("#complaintMain").val());
          complaintPart2.push($("#customersSolutionMain").val());
          complaintPart2.push($("#agentsCommentMain").val());
          complaintPart2.push(complaintsAgents[2]);
          complaintPart2.push("0");
          complaintPart2.push(nextStageDue);
          complaintPart2.push("No");
          complaintPart2.push("No");

          if(complaintReferenceNumber == null || complaintReferenceNumber == undefined || complaintReferenceNumber == ""){
            complaintReferenceNumber = "[No ID Given Yet]";
          }

          $('#newComplaintSecondPopOutPane').fadeOut(250, "linear");
          $("#complaintReferenceNumber").val("");
          $("#complaintReferenceNumber").val(complaintReferenceNumber);
          $("#complaintReferenceNumber2").val("");
          $("#complaintReferenceNumber2").val(complaintReferenceNumber);
          $('#newComplaintThirdPopOutPane').fadeIn(250, "linear");
        }

        break;
      }
    }
  }


});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#newComplaintSecondPopOutPane")) {
        $('#newComplaintSecondPopOutPane').fadeOut(250, "linear");
    }
});

/*
  NEW COMPLAINT POP OUT PAGE 3
*/

$("#customerAdditionalCommentsYesNo").on("change", function(){
  if($("#customerAdditionalCommentsYesNo").val() == "Yes"){
    $("#customerAdditionalComments").slideDown(500);
  }else{
    $("#customerAdditionalComments").slideUp(500);
  }
});

$("#submitComplaint").on("click", function(){
  event.preventDefault();
  var error;
  var errorMessages=new Array();
  if($("#customerAdditionalCommentsYesNo").val() == "Yes"){
    if($("#customerAdditionalComments").val() == "" || $("#customerAdditionalComments") == null || $("#customerAdditionalComments") == undefined){
      error=true;
      errorMessages.push("Additional comments are blank");
    }else{
      error=false;
    }
  }else{
    error=false;
  }

  if(error){
    $("#complaint3Errors").hide();
    $("#errorList3").html("");
    $("#errorList3").html(generateErrors(errorMessages));
    $("#complaint3Errors").show(500);
  }else{

    var date = new Date();
    date.setDate(date.getDate() + 90);
    var finalDeadline = date.toISOString().split('T')[0];

    complaintPart3.push(finalDeadline);

    if($("#customerAdditionalComments").val() == ""){
      complaintPart3.push(null);
    }else{
      complaintPart3.push($("#customerAdditionalComments").val());
    }

    complaint=complaint.concat(complaintPart1);
    complaint=complaint.concat(complaintPart2);
    complaint=complaint.concat(complaintPart3);

    customerComplaintsMain.push(complaint);

    $("#successMessagesContainer").hide();
    $("#successMessage").html("");
    $("#successMessage").html("Complaint submitted successfully");
    $("#successMessagesContainer").show();

    resetComplaints();
    loadComplaints();

    $('#newComplaintThirdPopOutPane').fadeOut(250, "linear");
  }

  //timer =setInterval(fadeMessage, 10000);

});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#newComplaintThirdPopOutPane")) {
        $('#newComplaintThirdPopOutPane').fadeOut(250, "linear");
    }
});

/*
  NEW AUTHORISED PERSON POP OUT BOX
*/

// When the user clicks on the button, open the modal

$("#resetPerson").on("click", function(){
  event.preventDefault();
  hideAndClearAllMessageBoxes();
  $("#newAuthorisedPersonNameTitle").val("No Value");
  $("#newAuthorisedPersonNameForename").val("");
  $("#newAuthorisedPersonNameSurname").val("");
  $("#newAuthorisedPersonRelationship").val("No Value");
  $("#newAuthorisedPersonPassphrase").val("");
  $("#newAuthorisedPersonPassphraseHint").val("");
  return false;
});

$("#savePerson").on("click", function(){
  event.preventDefault();
  if(savePerson($("#newAuthorisedPersonNameTitle").val(), $("#newAuthorisedPersonNameForename").val(), $("#newAuthorisedPersonNameSurname").val(), $("#newAuthorisedPersonRelationship").val(), $("#newAuthorisedPersonPassphrase").val(), $("#newAuthorisedPersonPassphraseHint").val())
  ){
      resetAuthorisedPersons();
      loadAuthorisedPersons();
      $('#newAuthorisedPersonPopOutPane').fadeOut(250, "linear");
    }
  return false;
});

$(".addAuthorisedPerson").on("click",function() {
    event.preventDefault();
    hideAndClearAllMessageBoxes();
    $("#newAuthorisedPersonNameTitle").val("No Value");
    $("#newAuthorisedPersonNameForename").val("");
    $("#newAuthorisedPersonNameSurname").val("");
    $("#newAuthorisedPersonRelationship").val("No Value");
    $("#newAuthorisedPersonPassphrase").val("");
    $("#newAuthorisedPersonPassphraseHint").val("");
    $('#newAuthorisedPersonPopOutPane').fadeIn(250, "linear");
});

// When the user clicks on <span> (x), close the modal
$("#closePerson").on("click", function() {
    event.preventDefault();
    $('#newAuthorisedPersonPopOutPane').fadeOut(250, "linear");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#newAuthorisedPersonPopOutPane")) {
        $('#newAuthorisedPersonPopOutPane').fadeOut(250, "linear");
    }
});

/*
  CHANGE PASSPHRASE AND HINT POP OUT BOX
*/

$("#changePassPhrase").on("click",function() {
    event.preventDefault();
    $("#oldPassphrase").val("");
    $("#newPassphrase").val("");
    $("#confirmPassphrase").val("");
    $("#newPassphraseHint").val("");
    $('#changePasswordContainer').fadeIn(250, "linear");
});

$("#clearAll").on("click", function(){
  event.preventDefault();
  $("#oldPassphrase").val("");
  $("#newPassphrase").val("");
  $("#confirmPassphrase").val("");
  $("#newPassphraseHint").val("");
});

$("#submitPassphraseForm").on("click", function(){
  event.preventDefault();
  var errors=new Array();
  var error=false;
  if($("#oldPassphrase").val()==""){
    error=true;
    errors.push("Old Passphrase is blank");
  }else{
    if($("#oldPassphrase").val() != customerDetails[11]){
      error=true;
      errors.push("Old passphrase does not match");
    }
  }

  if($("#newPassphrase").val()==""){
    error=true;
    errors.push("New Passphrase is blank");
  }

  if($("#confirmPassphrase").val()==""){
    error=true;
    errors.push("Confirm Passphrase is blank");
  }else{
    if($("#newPassphrase").val() != $("#confirmPassphrase").val()){
      error=true;
      errors.push("Passphrases do not match");
    }
  }

  if($("#newPassphraseHint").val()==""){
    error=true;
    errors.push("Passphrase Hint is Blank");
  }

  if(error){
    $("#changePasswordErrors").hide();
    $("#passPhraseErrors").html("");
    $("#passPhraseErrors").html(generateErrors(errors));
    $("#changePasswordErrors").show();
  }else{
    customerDetails[11]=$("#newPassphrase").val();
    customerDetails[12]=$("#newPassphraseHint").val();

    $("#successMessagesContainer").hide();
    $("#successMessage").html("");
    $("#successMessage").html("Passphrase changes submitted successfully");
    $("#successMessagesContainer").show();

    resetCustomerDetails();
    loadCustomerData();

    $('#changePasswordContainer').fadeOut(250, "linear");

  }
});

// When the user clicks on <span> (x), close the modal
$("#closePasswordChange").on("click", function() {
    event.preventDefault();
    $("#oldPassphrase").val("");
    $("#newPassphrase").val("");
    $("#confirmPassphrase").val("");
    $("#newPassphraseHint").val("");
    $('#changePasswordContainer').fadeOut(250, "linear");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#changePasswordContainer")) {
        $('#changePasswordContainer').fadeOut(250, "linear");
    }
});


/*
  DIAL PAD POP OUT PANE
*/

$("#number1, #number2, #number3, #number4, #number5, #number6, #number7, #number8, #number9, #numberStar, #number0, #numberHash").on("click", isNumberButtonPressed);

$("#phoneNumber").on("keypress", isNumberTyped);

$("#dialPadShowHide").on("click",function() {
    event.preventDefault();
    $("#phoneNumber").val("");
    $('#dialPadContainer').fadeIn(250, "linear");
});

$("#delete").on("click", deleteNumber);

$("#hangUp").on("click", dialHangUpNumber);

$("#dial").on("click", dialHangUpNumber);

// When the user clicks on <span> (x), close the modal
$("#closeDialPad").on("click", function() {
    event.preventDefault();
    $("#phoneNumber").val("");
    $('#dialPadContainer').fadeOut(250, "linear");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#dialPadContainer")) {
        $('#dialPadContainer').fadeOut(250, "linear");
    }
});

/*
  TAKE PAYMENT POP OUT
*/

$("#submitPayment").on("click", function(){
  event.preventDefault();

  $("#takePaymentErrorsMain").hide();
  var errors =new Array();
  var error = false;

  var paymentAmountTaken =$("#amountTaken");
  var paymentCardType = $("#paymentCardTypeSelect");
  var paymentCardNo = $("#paymentCardNo");
  var paymentStartDateMM =$("#paymentStartDateMM");
  var paymentStartDateYYYY =$("#paymentStartDateYYYY");
  var paymentExpiryDateMM =$("#paymentExpiryDateMM");
  var paymentExpiryDateYYYY =$("#paymentExpiryDateYYYY");
  var paymentIssueNo =$("#paymentIssueNo");
  var paymentSecurityNo = $("#paymentSecurityNo");
  var paymentFirstLineOfAddress = $("#paymentFirstLineOfAddress");
  var paymentPostCode = $("#paymentPostCode");

  //check for blanks
  if($(paymentAmountTaken).val() == ""){
    errors.push("Amount Taken cannot be Blank");
    error=true;
  }

  if($(paymentCardType).val() == ""){
    errors.push("Payment Card cannot be Blank or not have a selection");
    error=true;
  }

  if($(paymentCardNo).val() == ""){
    errors.push("Card Number cannot be Blank");
    error=true;
  }

  if($(paymentStartDateMM).val() == ""){
    errors.push("Start Date Month cannot be Blank");
    error=true;
  }

  if($(paymentStartDateYYYY).val() == ""){
    errors.push("Start Date Year cannot be Blank");
    error=true;
  }

  if($(paymentExpiryDateMM).val() == ""){
    errors.push("Expiry Date Month cannot be Blank");
    error=true;
  }

  if($(paymentExpiryDateYYYY).val() == ""){
    errors.push("Expiry Date Year cannot be Blank");
    error=true;
  }

  if($(paymentSecurityNo).val() == ""){
    errors.push("Security Number cannot be Blank");
    error=true;
  }

  if($(paymentFirstLineOfAddress).val() == ""){
    errors.push("First Line Of Address cannot be Blank");
    error=true;
  }

  if($(paymentPostCode).val() == ""){
    errors.push("Postcode cannot be Blank");
    error=true;
  }

  if($(detailsConfirm).prop("checked") != "checked"){
    errors.push("You must confirm that you have verified the details");
    error=true;
  }

  if(error){
    $("#takePaymentErrorsMain").show();
    $("#takePaymentErrors").html(generateErrors(errors));
    console.log("errors");
    console.log(errors);
  }else{
    console.log("no errors")
  }

});

$("#takePayment").on("click",function() {
    event.preventDefault();
    //reset the form
    $("#amountTaken").val("");
    $("#paymentCardCurrent").prop("checked", false);
    $("#paymentCardOther").prop("checked", false);
    $("#paymentCardDetailsContainer").hide();
    $("#paymentCardTypeSelect").val("No Select");
    $("#paymentCardNo").val("");
    $("#paymentStartDateMM").val("");
    $("#paymentStartDateYYYY").val("");
    $("#paymentExpiryDateMM").val("");
    $("#paymentExpiryDateYYYY").val("");
    $("#paymentIssueNo").val("");
    $("#paymentSecurityNo").val("");
    $("#paymentFirstLineOfAddress").val("");
    $("#paymentPostCode").val("");
    $("#detailsConfirm").prop("checked", false);
    $("#takePaymentErrors").html("");
    $("#takePaymentErrorsMain").hide();
    $('#takePaymentContainer').fadeIn(250, "linear");

    $("#cardEnding").html($("#cardNumber").val().slice(-4));

});

$("#amountTaken").on("keyup", function(){
  if(
    $("#amountTaken").val() !="" &&
    $("#amountTaken").val() !=null &&
    $("#amountTaken").val() !=undefined
  ){
    if($("#paymentCardCurrent").prop("checked") == true){
      $("#paymentCardDetailsContainer").hide();
      $("#paymentCardDetailsContainer").show();

      $("#paymentCardTypeSelect").val("No Select");
      $("#paymentCardNo").val("");
      $("#paymentStartDateMM").val("");
      $("#paymentStartDateYYYY").val("");
      $("#paymentExpiryDateMM").val("");
      $("#paymentExpiryDateYYYY").val("");
      $("#paymentIssueNo").val("");
      $("#paymentSecurityNo").val("");
      $("#paymentFirstLineOfAddress").val("");
      $("#paymentPostCode").val("");

      //fill in the details automatically
      $("#paymentCardTypeSelect").val($("#cardTypeSelect").val());
      if($("#paymentCardTypeSelect").val() == "Other"){
        $("#paymentOtherCardType").show();
        $("#paymentOtherCardType").val($("#otherCardType").val());
      }else{
        $("#paymentOtherCardType").hide();
        $("#paymentOtherCardType").val("");
      }

      $("#paymentCardNo").val($("#cardNumber").val());
      $("#paymentStartDateMM").val($("#startDateMM").val());
      $("#paymentStartDateYYYY").val($("#startDateYYYY").val());
      $("#paymentExpiryDateMM").val($("#expiryDateMM").val());
      $("#paymentExpiryDateYYYY").val($("#expiryDateYYYY").val());
      $("#paymentIssueNo").val($("#issueNumber").val());
      $("#paymentSecurityNo").val("");
      $("#paymentFirstLineOfAddress").val($("#firstLineOfAddress").val());
      $("#paymentPostCode").val($("#registeredPostcode").val());
    }

    if($("#paymentCardOther").prop("checked") == true){
      $("#paymentCardDetailsContainer").hide();
      $("#paymentCardDetailsContainer").show();
      $("#paymentCardTypeSelect").val("No Select");
      $("#paymentCardNo").val("");
      $("#paymentStartDateMM").val("");
      $("#paymentStartDateYYYY").val("");
      $("#paymentExpiryDateMM").val("");
      $("#paymentExpiryDateYYYY").val("");
      $("#paymentIssueNo").val("");
      $("#paymentSecurityNo").val("");
      $("#paymentFirstLineOfAddress").val("");
      $("#paymentPostCode").val("");
    }
  }else{
    $("#paymentCardDetailsContainer").hide();
    $("#paymentCardTypeSelect").val("No Select");
    $("#paymentCardNo").val("");
    $("#paymentStartDateMM").val("");
    $("#paymentStartDateYYYY").val("");
    $("#paymentExpiryDateMM").val("");
    $("#paymentExpiryDateYYYY").val("");
    $("#paymentIssueNo").val("");
    $("#paymentSecurityNo").val("");
    $("#paymentFirstLineOfAddress").val("");
    $("#paymentPostCode").val("");
  }
});

// When the user clicks on <span> (x), close the modal
$("#closeTakePayment").on("click", function() {
    //Reset the form
    $("#amountTaken").val("");
    $("#paymentCardCurrent").prop("checked", false);
    $("#paymentCardOther").prop("checked", false);
    $("#paymentCardDetailsContainer").hide();
    $("#paymentCardTypeSelect").val("No Select");
    $("#paymentCardNo").val("");
    $("#paymentStartDateMM").val("");
    $("#paymentStartDateYYYY").val("");
    $("#paymentExpiryDateMM").val("");
    $("#paymentExpiryDateYYYY").val("");
    $("#paymentIssueNo").val("");
    $("#paymentSecurityNo").val("");
    $("#paymentFirstLineOfAddress").val("");
    $("#paymentPostCode").val("");
    $("#detailsConfirm").prop("checked", false);
    $("#takePaymentErrors").html("");
    $("#takePaymentErrorsMain").hide();
    $('#takePaymentContainer').fadeOut(250, "linear");
});

$("#paymentCardCurrent").on("click", function(){

  if(
    $("#amountTaken").val() !="" &&
    $("#amountTaken").val() !=null &&
    $("#amountTaken").val() !=undefined
  ){
    $("#paymentCardDetailsContainer").hide();

    $("#paymentCardTypeSelect").val("No Select");
    $("#paymentCardNo").val("");
    $("#paymentStartDateMM").val("");
    $("#paymentStartDateYYYY").val("");
    $("#paymentExpiryDateMM").val("");
    $("#paymentExpiryDateYYYY").val("");
    $("#paymentIssueNo").val("");
    $("#paymentSecurityNo").val("");
    $("#paymentFirstLineOfAddress").val("");
    $("#paymentPostCode").val("");

    //fill in the details automatically

    var cardType=$("#cardTypeSelect").val()

    $("#paymentCardTypeSelect").val(cardType);

    if($("#paymentCardTypeSelect").val() == "Other"){
      $("#paymentOtherCardType").show();
      $("#paymentOtherCardType").val($("#otherCardType").val());
    }else{
      $("#paymentOtherCardType").hide();
      $("#paymentOtherCardType").val("");
    }


    $("#paymentCardNo").val($("#cardNumber").val());
    $("#paymentStartDateMM").val($("#startDateMM").val());
    $("#paymentStartDateYYYY").val($("#startDateYYYY").val());
    $("#paymentExpiryDateMM").val($("#expiryDateMM").val());
    $("#paymentExpiryDateYYYY").val($("#expiryDateYYYY").val());
    $("#paymentIssueNo").val($("#issueNumber").val());
    $("#paymentSecurityNo").val("");
    $("#paymentFirstLineOfAddress").val($("#firstLineOfAddress").val());
    $("#paymentPostCode").val($("#registeredPostcode").val());

    $("#paymentCardDetailsContainer").slideDown(500);
  }
});

$("#paymentCardOther").on("click", function(){
  if(
    $("#amountTaken").val()!="" ||
    $("#amountTaken").val()!=null ||
    $("#amountTaken").val()!=undefined
  ){
    $("#paymentCardDetailsContainer").hide();
    $("#paymentCardTypeSelect").val("No Select");
    $("#paymentCardNo").val("");
    $("#paymentStartDateMM").val("");
    $("#paymentStartDateYYYY").val("");
    $("#paymentExpiryDateMM").val("");
    $("#paymentExpiryDateYYYY").val("");
    $("#paymentIssueNo").val("");
    $("#paymentSecurityNo").val("");
    $("#paymentFirstLineOfAddress").val("");
    $("#paymentPostCode").val("");
    $("#paymentCardDetailsContainer").slideDown(500);

  }
});


$("#resetPaymentForm").on("click", function(){
  event.preventDefault();
  $("#amountTaken").val("");
  $("#paymentCardCurrent").prop("checked", false);
  $("#paymentCardOther").prop("checked", false);
  $("#paymentCardDetailsContainer").hide();
  $("#detailsConfirmContainer").hide();
  $("#submitPayment").hide();
  $("#paymentCardTypeSelect").val("No Select");
  $("#paymentCardNo").val("");
  $("#paymentStartDateMM").val("");
  $("#paymentStartDateYYYY").val("");
  $("#paymentExpiryDateMM").val("");
  $("#paymentExpiryDateYYYY").val("");
  $("#paymentIssueNo").val("");
  $("#paymentSecurityNo").val("");
  $("#paymentFirstLineOfAddress").val("");
  $("#paymentPostCode").val("");
  $("#detailsConfirm").prop("checked", false);
  $("#takePaymentErrors").html("");
  $("#takePaymentErrorsMain").hide();

});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click",function(event) {
    if (event.target == $("#takePaymentContainer")) {
        $('#takePaymentContainer').fadeOut(250, "linear");
    }
});
