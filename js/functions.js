var newAddressNumber;

function resetNotifications(){
  $("#notificationNumbers").html("");
}

function resetUsername(){
  $("#userName").html("");
}

function resetBalance(){
    $("#balance").html("");
}

function resetCustomerReference(){
  $("#customerReference").html("");
}

function resetCustomerDetails(){
  $("#customerNameTitle").val("No Selection");
  $("#customerNameForename").val("");
  $("#customerNameMiddlenames").val("");
  $("#customerNameSurname").val("");
  $("#dateOfBirthDay").val("");
  $("#dateOfBirthMonth").val("");
  $("#dateOfBirthYear").val("");
  $("#emailAddress").val("");
  $("#emailAddress").val("");
  $("#sendEmail").attr("href", "#");
  $("#phoneNoCLI").val("");
  $("#mobileNumber").val("");
}

function resetMarketing(){
  $("#marketingNo").attr("selected", false);
  $("#marketingYes").attr("selected", false);
  $("#marketingYesLabel").removeClass("selected");
  $("#marketingNoLabel").removeClass("selected");
  $("#checkboxPhoneMarketing").prop("checked", false);
  $("#phoneSelectionYes").removeClass("selected");
  $("#phoneSelectionNo").removeClass("selected");
  $("#checkboxEmailMarketing").prop("checked", false);
  $("#emailSelectionYes").removeClass("selected");
  $("#emailSelectionNo").removeClass("selected");
  $("#checkboxTextMarketing").prop("checked", false);
  $("#textSelectionYes").removeClass("selected");
  $("#textSelectionNo").removeClass("selected");
  $("#checkboxLetterMarketing").prop("checked", false);
  $("#letterSelectionYes").removeClass("selected");
  $("#letterSelectionNo").removeClass("selected");
}

function resetDirectDebit(){
  $("#directDebitStatus").val("");
  $("#accountHolder").val("");
  $("#sortCode1").val("");
  $("#sortCode2").val("");
  $("#sortCode3").val("");
  $("#accountNumber").val("");
}

function resetDebitCardDetails(){
  $("#cardNumber").val("");
  $("#startDateMM").val("");
  $("#startDateYYYY").val("");
  $("#expiryDateMM").val("");
  $("#expiryDateYYYY").val("");
  $("#issueNumber").val("");
  $("#firstLineOfAddress").val("");
  $("#registeredPostcode").val("");
}

function resetAddresses(){
  $("#addressesSurround").html("");
}

function resetAuthorisedPersons(){
  $("#authorisedPersonsTableBody").html("");
}

function resetCustomerContactHistory(){
  $("#customerContactHistoryTableBody").html("");
}

function resetTransactionHistory(){
  $("#transactionHistoryTableBody").html("");
}

function resetPreviousiTalkAccounts(){
  $("#previousiTalkAccountsTableBody").html("");
}

function resetPackageDetails(){
  $("#packageDetailsCLI").val("");
  $("#packageDetailsPackage").val("");
  $("#packageDetailsStatus").val("");
  $("#packageDetailsStartDate").val("");
  $("#packageDetailsLiveDate").val("");
  $("#packageDetailsRenewalDate").val("");
}

function resetTasks(){
  $("#tasksTableBody").html("");
}

function resetComplaints(){
    $("#complaintsTableBody").html("");
}

function loadNotifications(){
  /*Get The Amount of notifications waiting*/
  $("#notificationNumbers").html(getNotificationCount());
}

function loadUserDetails(){
  if(userDetails[0] != "" || userDetails[0] != null || userDetails[0] != undefined){
    $("#userName").html(userDetails[0]);
  }else{
    $("#userName").html("Guest");
  }
}

function loadBalance(){
  if(customerTransactionHistory[customerTransactionHistory.length-1][7] != "" || customerTransactionHistory[customerTransactionHistory.length-1][7] != null || customerTransactionHistory[customerTransactionHistory.length-1][7] != undefined){
    if(parseInt(customerTransactionHistory[customerTransactionHistory.length-1][7]) < 0){
      $("#balance").addClass("negativeAmount");
    }else{
      if(parseInt(customerTransactionHistory[customerTransactionHistory.length-1][7]) == 0){
        $("#balance").addClass("zeroAmount");
      }else{
        if(parseInt(customerTransactionHistory[customerTransactionHistory.length-1][7]) > 0){
          $("#balance").addClass("positiveAmount");
        }
      }
    }

    $("#balance").html(customerTransactionHistory[customerTransactionHistory.length-1][7]);
  }

}

function loadCustomerData(){
  $("#customerReference").html(customerDetails[0]);
  $("#passPhrase").val(customerDetails[11]);
  $("#passPhraseHint").html(customerDetails[12]);
  $("#customerNameTitle").val(customerDetails[1]);

  if(customerDetails[2] == "", customerDetails[2] == null || customerDetails[2] == undefined){
      $("#customerNameForename").val("");
  }else{
    $("#customerNameForename").val(customerDetails[2]);
  }

  if(customerDetails[3] == "", customerDetails[3] == null, customerDetails[3] == undefined){
    $("#customerNameMiddlenames").val("");
  }else{
    $("#customerNameMiddlenames").val(customerDetails[3]);
  }

  if(customerDetails[4] == "", customerDetails[4] == null, customerDetails[4] == undefined){
    $("#customerNameSurname").val("");
  }else{
    $("#customerNameSurname").val(customerDetails[4]);
  }

  $("#dateOfBirthDay").val(customerDetails[5]);
  $("#dateOfBirthMonth").val(customerDetails[6]);
  $("#dateOfBirthYear").val(customerDetails[7]);

  $("#emailAddress").val(customerDetails[8]);
  $("#sendEmail").attr("href", "mailTo:"+customerDetails[8]);

  $("#phoneNoCLI").val(customerDetails[9]);
  $("#mobileNumber").val(customerDetails[10]);
}

function loadMarketingPreferences(){
  if(customerDetails[13] == "no" || customerDetails[13] == "NO" || customerDetails[13] == "No" || customerDetails[13]=="" || customerDetails[13] == null || customerDetails[13] == undefined){
    $("#marketingYes").attr("selected", false);
    $("#marketingYesLabel").removeClass("selected");
    $("#marketingNo").attr("selected", true);
    $("#marketingNoLabel").addClass("selected");
  }else{
    $("#marketingNo").attr("selected", false);
    $("#marketingNoLabel").removeClass("selected");
    $("#marketingYes").attr("selected", true);
    $("#marketingYesLabel").addClass("selected");
  }

  if(customerDetails[14] == "no" || customerDetails[14] == "NO" || customerDetails[14] == "No" || customerDetails[14]=="" || customerDetails[14] == null || customerDetails[14] == undefined){
    $("#checkboxPhoneMarketing").prop("checked", false);
    $("#phoneSelectionYes").removeClass("selected");
    $("#phoneSelectionNo").addClass("selected");
  }else{
    $("#checkboxPhoneMarketing").prop("checked", true);
    $("#phoneSelectionYes").addClass("selected");
    $("#phoneSelectionNo").removeClass("selected");
  }

  if(customerDetails[15] == "no" || customerDetails[15] == "NO" || customerDetails[15] == "No" || customerDetails[15]=="" || customerDetails[15] == null || customerDetails[15] == undefined){
    $("#checkboxEmailMarketing").prop("checked", false);
    $("#emailSelectionYes").removeClass("selected");
    $("#emailSelectionNo").addClass("selected");
  }else{
    $("#checkboxEmailMarketing").prop("checked", true);
    $("#emailSelectionYes").addClass("selected");
    $("#emailSelectionNo").removeClass("selected");
  }

  if(customerDetails[16] == "no" || customerDetails[16] == "NO" || customerDetails[16] == "No" || customerDetails[16]=="" || customerDetails[16] == null || customerDetails[16] == undefined){
    $("#checkboxTextMarketing").prop("checked", false);
    $("#textSelectionYes").removeClass("selected");
    $("#textSelectionNo").addClass("selected");
  }else{
    $("#checkboxTextMarketing").prop("checked", true);
    $("#textSelectionYes").addClass("selected");
    $("#textSelectionNo").removeClass("selected");
  }

  if(customerDetails[17] == "no" || customerDetails[17] == "NO" || customerDetails[17] == "No" || customerDetails[17]=="" || customerDetails[17] == null || customerDetails[17] == undefined){
    $("#checkboxLetterMarketing").prop("checked", false);
    $("#letterSelectionYes").removeClass("selected");
    $("#letterSelectionNo").addClass("selected");
  }else{
    $("#checkboxLetterMarketing").prop("checked", true);
    $("#letterSelectionYes").addClass("selected");
    $("#letterSelectionNo").removeClass("selected");
  }
}

function loadDirectDebitDetails(){
  $("#directDebitStatus").val(customerDirectDebitDetails[0]);
  $("#accountHolder").val(customerDirectDebitDetails[1]);
  $("#sortCode1").val(customerDirectDebitDetails[2]);
  $("#sortCode2").val(customerDirectDebitDetails[3]);
  $("#sortCode3").val(customerDirectDebitDetails[4]);
  $("#accountNumber").val(customerDirectDebitDetails[5]);
}

function loadDebitCardDetails(){
  $("#cardTypeSelect").val(customerDebitCardDetails[0]);
  if(customerDebitCardDetails[0] == "Other" || customerDebitCardDetails[0] == "other"){
    $("#otherCardType").val(customerDebitCardDetails[1]);
  }

  $("#cardNumber").val(customerDebitCardDetails[2]);
  $("#startDateMM").val(customerDebitCardDetails[3]);
  $("#startDateYYYY").val(customerDebitCardDetails[4]);
  $("#expiryDateMM").val(customerDebitCardDetails[5]);
  $("#expiryDateYYYY").val(customerDebitCardDetails[6]);

  if(customerDebitCardDetails[7] != "" || customerDebitCardDetails[7] != null || customerDebitCardDetails[7] != undefined){
    $("#issueNumber").val(customerDebitCardDetails[7]);
  }else{
    $("#issueNumber").val("0");
  }

  $("#firstLineOfAddress").val(customerDebitCardDetails[8]);
  $("#registeredPostcode").val(customerDebitCardDetails[9]);
}

function loadAddresses(){
  if(customerAddresses.length!=0){
    var address;
   for(var i=0;i<customerAddresses.length;i++){
     if(i==0){
       address ="<div id=\"primaryAddress\" class=\"address\">\
         <p class=\"addressTitle\">Primary Address</p>\
         <label>House/Flat No:</label>\
         <input type=\"text\" id=\"address" + i +"HouseFlatNo\" class=\"addressHouseFlatNo\" name=\"addressHouseFlatNo\" value=\"" + customerAddresses[i][1] + "\" readonly />\
         <label>Street</label>\
         <input type=\"text\" id=\"address" + i +"Street\" class=\"addressStreet\" name=\"addressStreet\" value=\"" + customerAddresses[i][2] + "\" readonly />\
         <label>Town</label>\
         <input type=\"text\" id=\"address" + i +"Town\" class=\"addressTown\" name=\"addressTown\" value=\"" + customerAddresses[i][3] + "\" readonly />\
         <label>City</label>\
         <input type=\"text\" id=\"address" + i +"City\" class=\"addressCity\" name=\"addressCity\" value=\"" + customerAddresses[i][4] + "\" readonly />\
         <label>County</label>\
         <input type=\"text\" id=\"address" + i +"County\" class=\"addressCounty\" name=\"addressCounty\" value=\"" + customerAddresses[i][5] + "\" readonly />\
         <label>PostCode</label>\
         <input type=\"text\" id=\"address" + i +"PostCode\" class=\"addressPostCode\" name=\"addressPostCode\" value=\"" + customerAddresses[i][6] + "\" readonly />\
         <a href=\"#\" class=\"sendLetter\" title=\"Send a Letter to This Address\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></a>\
         <a href=\"#\" onclick=\"deleteAddress(this)\" class=\"deleteAddress\" id=\"deletePrimaryAddress\" title=\"Delete This Address\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\
       </div>";
     }else{
       address= "<div class=\"address\" id=\"address" + i + "\">\
         <p class=\"addressTitle\">Address " + i +"</p>\
         <label>House\/Flat No.</label>\
         <input type=\"text\" id=\"address" + i +"HouseFlatNo\" class=\"addressHouseFlatNo\" name=\"addressHouseFlatNo\" value=\"" + customerAddresses[i][1] + "\" readonly />\
         <label>Street</label>\
         <input type=\"text\" id=\"address" + i +"Street\" class=\"addressStreet\" name=\"addressHouseStreet\" value=\"" + customerAddresses[i][2] + "\" readonly />\
         <label>Town</label>\
         <input type=\"text\" id=\"address" + i +"Town\" class=\"addressTown\" name=\"addressTown\" value=\"" + customerAddresses[i][3] + "\" readonly />\
         <label>City</label>\
         <input type=\"text\"id=\"address" + i +"City\"  class=\"addressCity\" name=\"addressCity\" value=\"" + customerAddresses[i][4] + "\" readonly />\
         <label>County</label>\
         <input type=\"text\" id=\"address" + i +"County\" class=\"addressCounty\" name=\"addressCounty\" value=\"" + customerAddresses[i][5] + "\" readonly />\
         <label>PostCode</label>\
         <input type=\"text\" id=\"address" + i +"PostCode\" class=\"addressPostCode\" name=\"addressPostCode\" value=\"" + customerAddresses[i][6] + "\" readonly />\
         <input type=\"button\" class=\"makePrimary buttonBasic\" value=\"Make Primary Address\"/>\
         <a href=\"#\" class=\"sendLetter\" title=\"Send a Letter to This Address\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></a>\
         <a href=\"#\" onclick=\"deleteAddress(this)\" class=\"deleteAddress\" title=\"Delete This Address\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\
       </div>";
     }
     $("#addressesSurround").append(address);
     address=null;
   }
 }
}

function loadAuthorisedPersons(){
  //clear the existing variable to prevent contamination of data
  var i=null;

  var authorisedPersons;
  var id=auhorisedPersons.length-1;
  if(auhorisedPersons.length==0){
    authorisedPersons = "<tr>\
                          <td colspan=\"5\">No Authorised Persons to Display</td>\
                        </tr>";
    $("#authorisedPersonsTableBody").append(authorisedPersons);
  }else{
    for(var i=0; i<auhorisedPersons.length;i++){

        authorisedPersons = "<tr class=\"authorisedPersons\" id=\"authorisedPerson" + id + "\">\
                              <td class=\"name\">"+auhorisedPersons[i][0] + "</td>\
                              <td class=\"relationship\">" + auhorisedPersons[i][1] + "</td>\
                              <td class=\"passphrase\">" + auhorisedPersons[i][2] + "</td>\
                              <td class=\"passphraseHint\">" + auhorisedPersons[i][3] + "</td>\
                              <td><a href=\"#\" onclick=\"deleteAuthorisedPerson(this)\" class=\"deleteAuthorisedUser\" title=\"Delete This User\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a></td>\
                            </tr>";
        $("#authorisedPersonsTableBody").append(authorisedPersons);
        id--;
    }
  }
}

function loadCustomerContactHistory(){
  var reversedCustomerContactHistory = customerContactHistory.reverse();

  var i=null;
  var customerContactHistoryString;
  var id=customerContactHistory.length-1;
  for (var i=0; i<customerContactHistory.length; i++){
    customerContactHistoryString ="<tr id=\"note" + id + "\">\
        <td>" + reversedCustomerContactHistory[i][0] + "</td>\
        <td>" + reversedCustomerContactHistory[i][1] + "</td>\
        <td>" + reversedCustomerContactHistory[i][2] + "</td>\
        <td>" + reversedCustomerContactHistory[i][3] + "</td>\
        <td>" + reversedCustomerContactHistory[i][4] + "</td>\
        <td>" + reversedCustomerContactHistory[i][5] + "</td>";

        if(reversedCustomerContactHistory[i][6] == "no" || reversedCustomerContactHistory[i][6] == "No" || reversedCustomerContactHistory[i][6] == null || reversedCustomerContactHistory[i][6] == undefined){
          customerContactHistoryString = customerContactHistoryString.concat("<td><i class=\"fa fa-times noteNotDone\" aria-hidden=\"true\"></i></td>");
        }else{
          customerContactHistoryString = customerContactHistoryString.concat("<td><i class=\"fa fa-check noteDone\" aria-hidden=\"true\"></i></td>");
        }

        if(reversedCustomerContactHistory[i][7] == "" || reversedCustomerContactHistory[i][7] == null || reversedCustomerContactHistory[i][7] == undefined){
          customerContactHistoryString = customerContactHistoryString.concat("<td>&nbsp;</td>");
        }else{
          customerContactHistoryString = customerContactHistoryString.concat("<td>" + reversedCustomerContactHistory[i][7] + "</td>");
        }

        customerContactHistoryString = customerContactHistoryString.concat("\
          <td><a href=\"#\" onclick=\"deleteNote(this)\" class=\"deleteNote\" title=\"Delete This Note\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a></td>\
          </tr>");
      $("#customerContactHistoryTableBody").append(customerContactHistoryString);
      id--;
  }
}

function loadTransactionHistory(){
  var reversedTransactionHistory = customerTransactionHistory.reverse();
  var i=null;
  var transactionHistoryString;

  if(customerTransactionHistory.length==0){
    transactionHistoryString = "<tr><td colspan=\"9\">No Transactions To Display</td></tr>";
  }else{
    for(var i =0; i<customerTransactionHistory.length;i++){
      transactionHistoryString = "<tr id=\"transaction" + customerTransactionHistory[i][0] + "\">\
          <td>" + reversedTransactionHistory[i][1] + "</td>\
          <td>" + reversedTransactionHistory[i][2] + "</td>\
          <td>" + reversedTransactionHistory[i][3] + "</td>\
          <td>" + reversedTransactionHistory[i][4] + "</td>\
          <td>" + reversedTransactionHistory[i][5] + "</td>\
          <td>" + reversedTransactionHistory[i][6] + "</td>\
          <td>" + reversedTransactionHistory[i][7] + "</td>\
          <td>" + reversedTransactionHistory[i][8] + "</td>\
        </tr>";

        $("#transactionHistoryTableBody").append(transactionHistoryString);
    }
  }


}

function loadPreviousAccounts(){
  var reversediTalkAccounts = customerPreviousiTalkAccounts.reverse();
  var i=null;
  var previousiTalkAccountsString;

  for(var i=0;i<customerPreviousiTalkAccounts.length; i++){
    previousiTalkAccountsString = "<tr id=\"previousAccounts" + reversediTalkAccounts[i][0] + "\">\
      <td>" + reversediTalkAccounts[i][1] + "</td>\
      <td>" + reversediTalkAccounts[i][2] + "</td>\
      <td>" + reversediTalkAccounts[i][3] + "</td>\
      <td>" + reversediTalkAccounts[i][4] + "</td>\
      <td>" + reversediTalkAccounts[i][5] + "</td>\
      <td>" + reversediTalkAccounts[i][6] + "</td>\
      <td><a href=\"#\" title=\"Go To This Account\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i></a></td>\
    </tr>";

    $("#previousiTalkAccountsTableBody").append(previousiTalkAccountsString);
  }

}

function loadPackageDetails(){
  $("#packageDetailsCLI").val(customerDetails[9]);
  $("#packageDetailsPackage").val(customerPackageLineStatus[0]);
  $("#packageDetailsStatus").val(customerPackageLineStatus[1]);
  $("#packageDetailsStartDate").val(customerPackageLineStatus[3]);
  $("#packageDetailsLiveDate").val(customerPackageLineStatus[4]);
  $("#packageDetailsRenewalDate").val(customerPackageLineStatus[5]);
}

function loadTasks(){
  var reversedTasks=customerAgentTasks.reverse();
  var task;
  var i = null;
  for (var i = 0; i<customerAgentTasks.length;i++){
    var doneStatus;
    if(reversedTasks[i][1] == "YES" || reversedTasks[i][1] == "Yes" || reversedTasks[i][1] == "yes"){
      doneStatus = "taskDone";
    }else{
      doneStatus = "taskNotDone";
    }

    task = "<tr class=\"" + doneStatus + "\" id=\"trTask" + i + "\">\
              <td>\
                <div class=\"taskCheckBoxContainer\">";

              if(reversedTasks[i][1] == "No" || reversedTasks[i][1] == "no" || reversedTasks[i][1] == null || reversedTasks[i][1] == undefined){
                  task = task.concat("<input type=\"checkbox\" value=\"None\" id=\"task" + i + "\" class=\"taskCheckBox\" name=\"check\" />");
              }else{
                task = task.concat("<input checked=\"checked\" type=\"checkbox\" value=\"None\" id=\"task" + i + "\" class=\"taskCheckBox\" name=\"check\" />");
              }
                task=task.concat("<label onclick=\"changeDoneNotDone(this)\" for=\"task" + i + "\"></label>\
                </div>\
              </td>\
              <td>" + reversedTasks[i][2] + "</td>\
              <td>" + reversedTasks[i][3] + "</td>\
              <td>" + reversedTasks[i][4] + "</td>\
              <td>" + reversedTasks[i][5] + "</td>\
              <td>" + reversedTasks[i][6] + "</td>\
              <td>" + reversedTasks[i][7] + "</td>\
              <td>" + reversedTasks[i][8] + "</td>\
              <td><a href=\"#\" title=\"View this task in full\" class=\"viewTaskLink\" id=\"viewTask" + i +"\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i></a></td>\
            </tr>");

        $("#tasksTableBody").append(task);
  }
}

function loadComplaints(){
  var reversedComplaints=customerComplaintsMain.reverse();
  var complaint;
  var i = null;

  for(var i = 0; i<customerComplaintsMain.length; i++){
    complaint="<tr id=\"" + reversedComplaints[i][0] + "\">\
                <td><a href=\"#\" id=\"" + reversedComplaints[i][1] + "\" class=\"complaintViewLink\">" + reversedComplaints[i][1] + "</a></td>\
                <td>" + reversedComplaints[i][13] + "</td>\
                <td>" + reversedComplaints[i][14] + "</td>\
                <td>" + reversedComplaints[i][22] + "</td>\
                <td>" + reversedComplaints[i][23] + "</td>\
                <td>" + reversedComplaints[i][24] + "</td>\
                <td>" + reversedComplaints[i][27] + "</td>\
                <td><a href=\"#\" id=\"" + reversedComplaints[i][0] + "\" class=\"complaintViewLink\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i></a></td>\
              </tr>";
    $("#complaintsTableBody").append(complaint);
  }
}

function loadData(){

  resetNotifications();
  loadNotifications();

  resetUsername();
  loadUserDetails();

  resetBalance();
  loadBalance();

  resetCustomerReference();
  resetCustomerDetails();
  loadCustomerData();

  resetMarketing();
  loadMarketingPreferences();

  resetDirectDebit();
  loadDirectDebitDetails();

  resetDebitCardDetails();
  loadDebitCardDetails();

  resetAddresses();
  loadAddresses();

  resetAuthorisedPersons();
  loadAuthorisedPersons();

  resetCustomerContactHistory();
  loadCustomerContactHistory();

  resetTransactionHistory();
  loadTransactionHistory();

  resetPreviousiTalkAccounts();
  loadPreviousAccounts();

  resetPackageDetails();
  loadPackageDetails();

  resetTasks();
  loadTasks();

  resetComplaints();
  loadComplaints();

}

function saveChanges(){
  var errors=new Array();
  var error=false;

  if($("#customerNameTitle").val()==""){
    errors.push("Customer title is blank");
  }

  if($("#customerNameForename").val()==""){
    errors.push("Customer forename is blank");
  }

  if($("#customerNameSurname").val()==""){
    errors.push("Customer surname is blank");
  }

  if($("#dateOfBirthDay").val()==""){
    errors.push("Customer date of birth (day) is blank");
  }

  if($("#dateOfBirthMonth").val()==""){
    errors.push("Customer date of birth (month) is blank");
  }

  if($("#dateOfBirthYear").val()==""){
    errors.push("Customer date of birth (year) is blank");
  }

  if($("#emailAddress").val()==""){
    errors.push("Customer email address is blank");
  }

  if($("#phoneNoCLI").val()==""){
    errors.push("Customer phone number is blank");
  }

  if($("#mobileNumber").val()==""){
    errors.push("Customer mobile number is blank");
  }

  if($("#passPhrase").val()==""){
      errors.push("Passphrase is blank");
  }

  if($("#marketingYes").attr("selected") != "selected"){
    if($("#marketingNo").attr("selected") != "selected"){
        errors.push("You have to select a marketing preference");
    }
  }

  if($("#accountHolder").val()==""){
      errors.push("Account holder details are blank");
  }

  if($("#sortCode1").val()==""){
    errors.push("Sort Code box 1 is blank");
  }

  if($("#sortCode2").val()==""){
    errors.push("Sort Code box 2 is blank");
  }

  if($("#sortCode3").val()==""){
      errors.push("Sort Code box 3 is blank");
  }

  if($("#accountNumber").val()==""){
      errors.push("Account Number is blank");
  }

  if($("#cardTypeSelect").val()=="No Select"){
      errors.push("card Type needs a selection");
  }

  if($("#cardTypeSelect").val()=="Other" && $("#otherCardType").val()==""){
    errors.push("Other card type is blank");
  }

  if($("#cardNumber").val()==""){
      errors.push("Card number is blank");
  }

  if($("#startDateMM").val()==""){
    errors.push("Start date (Month) is blank");
  }

  if($("#startDateYYYY").val()==""){
      errors.push("Start date (Year) is blank");
  }

  if($("#expiryDateMM").val()==""){
      errors.push("Expiry Date (Month) is blank");
  }

  if($("#expiryDateYYYY").val()==""){
    errors.push("Expiry Date (Year) is blank");
  }

  var addressClasses = document.getElementsByClassName("address");
  var addressHouses = document.getElementsByClassName("addressHouseFlatNo");
  var addressStreet = document.getElementsByClassName("addressStreet");
  var addressTown = document.getElementsByClassName("addressTown");
  var addressCity = document.getElementsByClassName("addressCity");
  var addressCounty = document.getElementsByClassName("addressCounty");
  var addressPostcode = document.getElementsByClassName("addressCounty");

  //loop through addresses
  for(var i=0; i<addressClasses.length; i++){
    if(addressHouses[i].value==""){
      var string1;
      if(addressClasses[i].id == "primaryAddress"){
        string1="Primary Address ";
      }else{
        string1="Address "+i+" ";
      }

      string1=string1+"house number is blank";
      error=true;
      errors.push(string1);
    }

    if(addressStreet[i].value==""){
      var string2;
      if(addressClasses[i].id == "primaryAddress"){
        string2="Primary Address ";
      }else{
        string2="Address "+i+" ";
      }

      string2=string2+"street is blank";
      error=true;
      errors.push(string2);
    }

    if(addressTown[i].value==""){
      var string3;
      if(addressClasses[i].id == "primaryAddress"){
        string3="Primary Address ";
      }else{
        string3="Address "+i+" ";
      }

      string3=string3+"town is blank";
    }

    if(addressCity[i].value==""){
      var string4;
      if(addressClasses[i].id == "primaryAddress"){
        string4="Primary Address ";
      }else{
        string4="Address "+i+" ";
      }

      string4=string4+"city is blank";
      error=true;
      errors.push(string4);
    }

    if(addressCounty[i].value==""){
      var string5;
      if(addressClasses[i].id == "primaryAddress"){
        string5="Primary Address ";
      }else{
        string5="Address "+i+" ";
      }

      string5=string5+"county is blank";
    }

    if(addressPostcode[i].value==""){
      var string6;
      if(addressClasses[i].id == "primaryAddress"){
        string6="Primary Address ";
      }else{
        string6="Address "+i+" ";
      }

      string6=string6+"postcode is blank";
    }
  }


  if(error){
    hideAndClearAllMessageBoxes();
    $("#errorMessages").html(generateErrors(errors));
    $("#customerDetailsErrorsContainer").show();
  }else{
    customerDetails=[];
    customerDirectDebitDetails=[];
    var customerAddresses =[];

    customerDetails[0]=$("#customerReference").html();

    customerDetails[1]=$("#customerNameTitle").val();
    customerDetails[2]=$("#customerNameForename").val();
    customerDetails[3]=$("#customerNameMiddlenames").val();
    customerDetails[4]=$("#customerNameSurname").val();

    customerDetails[5]=$("#dateOfBirthDay").val();
    customerDetails[6]=$("#dateOfBirthMonth").val();
    customerDetails[7]=$("#dateOfBirthYear").val();

    customerDetails[8]=$("#emailAddress").val();
    customerDetails[9]=$("#phoneNoCLI").val();
    customerDetails[10]=$("#mobileNumber").val();

    customerDetails[11]=$("#passPhrase").val();
    customerDetails[12]=$("#passPhraseHint").html();

    if($("#marketingYes").attr("selected") == "selected"){
      customerDetails[13] = "Yes";
    }else{
      customerDetails[13] = "No";
    }

    if($("#checkboxPhoneMarketing").prop("checked")){
      customerDetails[14]="Yes";
    }else{
      customerDetails[14]="No";
    }

    if($("#checkboxEmailMarketing").prop("checked")){
      customerDetails[15]="Yes";
    }else{
      customerDetails[15]="No";
    }

    if($("#checkboxText").prop("checked")){
      customerDetails[16]="Yes";
    }else{
      customerDetails[16]="No";
    }

    if($("#checkboxLetter").prop("checked")){
      customerDetails[17]="Yes"
    }else{
      customerDetails[17]="No";
    }

    customerDirectDebitDetails[0]=$("#directDebitStatus").val();
    customerDirectDebitDetails[1]=$("#accountHolder").val();
    customerDirectDebitDetails[2]=$("#sortCode1").val();
    customerDirectDebitDetails[3]=$("#sortCode2").val();
    customerDirectDebitDetails[4]=$("#sortCode3").val();
    customerDirectDebitDetails[5]=$("#accountNumber").val();

    customerDebitCardDetails=[];
    customerDebitCardDetails[0]=$("#cardTypeSelect").val();
    customerDebitCardDetails[1]=$("#otherCardType").val();
    customerDebitCardDetails[2]=$("#cardNumber").val();
    customerDebitCardDetails[3]=$("#startDateMM").val();
    customerDebitCardDetails[4]=$("#startDateYYYY").val();
    customerDebitCardDetails[5]=$("#expiryDateMM").val();
    customerDebitCardDetails[6]=$("#expiryDateYYYY").val();
    customerDebitCardDetails[7]=$("#issueNumber").val();
    customerDebitCardDetails[8]=$("#firstLineOfAddress").val();
    customerDebitCardDetails[9]=$("#registeredPostcode").val();


    for(var i=0; i<addressClasses.length; i++){
      customerAddresses.splice([i][0], 0, addressHouses[i].value);
      customerAddresses.splice([i][1], 0, addressStreet[i].value);
      customerAddresses.splice([i][2], 0, addressTown[i].value);
      customerAddresses.splice([i][3], 0, addressCity[i].value);
      customerAddresses.splice([i][4], 0, addressCounty[i].value);
      customerAddresses.splice([i][5], 0, addressPostcode[i].value);

      if(addressClasses[i].id == "primaryAddress"){
        customerAddresses.splice([i][6], 0,  "Yes");
      }else{
        customerAddresses.splice([i][6], 0,  "No");
      }
    }

    hideAndClearAllMessageBoxes();

    $("#successMessage").html("Customer Details Updated Successfully");
    $("#successMessagesContainer").show();

    loadData();

    $('html, body').animate({ scrollTop: 0 }, 'fast');

    $("#saveChangesBanner").slideUp(500);

  }


 }

 function fadeMessage(){
   $("#successMessagesContainer").fadeOut(1000);
   //clearInterval(timer);
 }

function savePerson(title, forename, surname, relationship, passphrase, hint){
  var errors=new Array();
  var error=false;

  if(title == null ||  title == undefined || title =="No Value"){
    error=true;
    errors.push("A value for title needs to be selected");
  }

  if(forename == null ||  forename == undefined || forename ==""){
    error=true;
    errors.push("Forename is blank");
  }

  if(surname == null ||  surname == undefined || surname ==""){
    error=true;
    errors.push("Surname is blank");
  }

  if(relationship == null ||  relationship == undefined || relationship =="No Value"){
    error=true;
    errors.push("Relationship needs to be selected");
  }

  if(passphrase == null ||  passphrase == undefined || passphrase ==""){
    error=true;
    errors.push("Passphrase is blank");
  }

  if(hint == null ||  hint == undefined || hint ==""){
    error=true;
    errors.push("Hint is blank");
  }

  if(error){
    hideAndClearAllMessageBoxes();
    $("#authorisedPersonsErrors").html(generateErrors(errors));
    $("#authorisedPersonErrorsContainer").show();
    return false;

  }else{
    var name;
    if(title=="Prefer Not To Say"){
      name=forename+" "+surname;
    }else{
      name=title+" "+forename+" "+surname;
    }

    var person = [name, relationship, passphrase, hint];
    auhorisedPersons.push(person);
    alert("Person Saved");
    return true;
  }


}

function addAddress(){

  if(addressAmount == null || addressAmount == undefined){
    var addressAmount=customerAddresses.length;
  }

  if(newAddressNumber == null || newAddressNumber == undefined){
    newAddressNumber=addressAmount++;
  }else{
    newAddressNumber=newAddressNumber++;
  }

  $("#addressesSurround").append("\
  <div class=\"newAddress\" id=\"address" +newAddressNumber + "\">\
    <p class=\"addressTitle\">Address " + newAddressNumber + "</p>\
    <label>House\/Flat No.</label>\
    <input type=\"text\" id=\"address" + newAddressNumber + "HouseFlatNo\" class=\"addressHouseFlatNo\" name=\"addressHouseFlatNo\"/>\
    <label>Street</label>\
    <input type=\"text\" id=\"address" + newAddressNumber + "Street\" class=\"addressStreet\" name=\"addressHouseStreet\"/>\
    <label>Town</label>\
    <input type=\"text\" id=\"address" + newAddressNumber + "Town\" class=\"addressTown\" name=\"addressTown\"/>\
    <label>City</label>\
    <input type=\"text\"id=\"address" + newAddressNumber + "City\"  class=\"addressCity\" name=\"addressCity\"/>\
    <label>County</label>\
    <input type=\"text\" id=\"address" + newAddressNumber + "County\" class=\"addressCounty\" name=\"addressCounty\"/>\
    <label>PostCode</label>\
    <input type=\"text\" id=\"address" + newAddressNumber + "PostCode\" class=\"addressCounty\" name=\"addressPostCode\"/>\
    <input type=\"button\" class=\"makePrimary buttonBasic\" value=\"Make Primary Address\"/>\
    <a href=\"#\" class=\"sendLetter\" title=\"Send a Letter to This Address\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></a>\
    <a href=\"#\" class=\"deleteNewAddress\" onclick=\"deleteAddress(this)\" title=\"Delete This Address\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>\
  </div>\
  ");
  newAddressNumber++;
}

function deleteAddress(element){
  event.preventDefault();
  var conf=confirm("Are You Sure Wish to Delete This Address?")
  if(conf){
    if($(element).attr("class")=="deleteNewAddress"){
      $(element).parent().remove();
      newAddressNumber--;
    }else{
      if($(element).parent().attr("id") != "primaryAddress" && (userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == "true")){
        var string = Number($(element).parent().attr("id").slice($(element).parent().attr("id").length-1));
        customerAddresses.splice(string, 1);
        $(element).parent().remove();
        resetAddresses();
        loadAddresses();
      }else{
        alert("You cannot remove a primary address");
      }
    }
  }
}

function deleteAuthorisedPerson(element){
  event.preventDefault();
  var person = null;
  person = Number($(element).parent().parent().attr("id").slice($(element).parent().parent().attr("id").length-1));
  auhorisedPersons.splice(person-1, 1)
  $(element).parent().parent().remove();
  resetAuthorisedPersons();
  loadAuthorisedPersons();
}

function deleteNote(element){
  event.preventDefault();
  var deleteNote = confirm("Are You Sure You Wish To Delete This Note?");
  if(deleteNote){
    var note = null;
    note = Number($(element).parent().parent().attr("id").slice($(element).parent().parent().attr("id").length-1));
    customerContactHistory.reverse().splice(note, 1);
    $(element).parent().parent().remove();
    resetCustomerContactHistory();
    loadCustomerContactHistory();
  }

}

function isNumberTyped(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isNumberButtonPressed(){
  event.preventDefault();
  var numberPressed=$(this);
  var phoneNumberField=document.getElementById("phoneNumber");
  var phoneNumberValue=document.getElementById("phoneNumber").value;
  var cursorPosition=phoneNumberField.selectionStart;

  if(
    phoneNumberValue == "" ||
    phoneNumberValue == " " ||
    phoneNumberValue == null ||
    phoneNumberValue == undefined
  ){
    //just output to the text box
    $("#phoneNumber").val($(numberPressed).html());
  }else{
    var phoneSplit = phoneNumberValue.split("");
    phoneSplit.splice(cursorPosition, 0, $(numberPressed).html());
    var phoneSplit2 = phoneSplit.join("");

    $("#phoneNumber").val("");
    $("#phoneNumber").val(phoneSplit2);
  }
}

function deleteNumber(){
  event.preventDefault();
  var phoneNumberField=document.getElementById("phoneNumber");
  var phoneNumberValue=document.getElementById("phoneNumber").value;
  var cursorPosition=phoneNumberField.selectionStart;

  if(
    phoneNumberValue != "" ||
    phoneNumberValue != "" ||
    phoneNumberValue != null ||
    phoneNumberValue != undefined
  )
  {
    var phoneSplit = phoneNumberValue.split("");
    phoneSplit.splice(cursorPosition-1, 1);
    var phoneSplit2 = phoneSplit.join("");
    //console.log(phoneSplit);
    $("#phoneNumber").val("");
    $("#phoneNumber").val(phoneSplit2);
  }
}

function dialHangUpNumber(){
  event.preventDefault();
  //forwards to asterisk
  if($("#phoneNumber").val()!="" || $("#phoneNumber").val()!=null || $("#phoneNumber").val()!=undefined){
    if($(this).attr("id")=="dial"){
      alert("Dialling: " +$("#phoneNumber").val());
      $(this).removeAttr("id").attr("id", "hangUp");
      $(this).children().css({
        "-ms-transform": "rotate(136deg)",
        "-webkit-transform": "rotate(136deg)",
        "transform": "rotate(136deg)"
      });
    }else{
      alert("Hanging Up: " +$("#phoneNumber").val());
      $(this).removeAttr("id").attr("id", "dial");
      $(this).children().css({
        "-ms-transform": "rotate(0deg)",
        "-webkit-transform": "rotate(0deg)",
        "transform": "rotate(0deg)"
      });
    }
  }

}

function dial(phoneNumber){
  if(phoneNumber != "" || phoneNumber != null || phoneNumber != undefined){
    $('#dialPadContainer').fadeIn(250, "linear");
    $("#phoneNumber").val(phoneNumber);
  }
}

function openComplaintsTab(){
  //hide
  $("#detailsTab").removeClass("tabActive");
  $("#accountHistoryTab").removeClass("tabActive");
  $("#packageLineTab").removeClass("tabActive");
  $("#tasksTab").removeClass("tabActive");

  $("#customerDetailsContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#accountHistoryContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#packageLineContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#tasksContent").removeClass("tabContentShow").addClass("tabContentHide");

  //show

  $("#complaintsTab").addClass("tabActive");
  $("#complaintsContent").removeClass("tabContentHide").addClass("tabContentShow");
}

function openTasksTab(){
  //hide
  $("#detailsTab").removeClass("tabActive");
  $("#accountHistoryTab").removeClass("tabActive");
  $("#packageLineTab").removeClass("tabActive");
  $("#complaintsTab").removeClass("tabActive");

  $("#customerDetailsContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#accountHistoryContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#packageLineContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#complaintsContent").removeClass("tabContentShow").addClass("tabContentHide");

  //show
  $("#tasksTab").addClass("tabActive");
  $("#tasksContent").removeClass("tabContentHide").addClass("tabContentShow");

}

function openPackageLineStatusTab(){
  //hide
  $("#detailsTab").removeClass("tabActive");
  $("#accountHistoryTab").removeClass("tabActive");
  $("#tasksTab").removeClass("tabActive");
  $("#complaintsTab").removeClass("tabActive");

  $("#customerDetailsContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#accountHistoryContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#tasksContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#complaintsContent").removeClass("tabContentShow").addClass("tabContentHide");

  //show
  $("#packageLineTab").addClass("tabActive");
  $("#packageLineContent").removeClass("tabContentHide").addClass("tabContentShow");
}

function openAccountHistoryTab(){
  //hide
  $("#detailsTab").removeClass("tabActive");
  $("#packageLineTab").removeClass("tabActive");
  $("#tasksTab").removeClass("tabActive");
  $("#complaintsTab").removeClass("tabActive");

  $("#customerDetailsContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#packageLineContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#tasksContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#complaintsContent").removeClass("tabContentShow").addClass("tabContentHide");

  //show
  $("#accountHistoryTab").addClass("tabActive");
  $("#accountHistoryContent").removeClass("tabContentHide").addClass("tabContentShow");
}

function openCustomerDetailsTab(){
  //hide
  $("#accountHistoryTab").removeClass("tabActive");
  $("#packageLineTab").removeClass("tabActive");
  $("#tasksTab").removeClass("tabActive");
  $("#complaintsTab").removeClass("tabActive");

  $("#accountHistoryContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#packageLineContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#tasksContent").removeClass("tabContentShow").addClass("tabContentHide");
  $("#complaintsContent").removeClass("tabContentShow").addClass("tabContentHide");

  //show
  $("#detailsTab").addClass("tabActive");
  $("#customerDetailsContent").removeClass("tabContentHide").addClass("tabContentShow");
}

function searchCustomerContactHistory(){
  alert("Search is Disabled");
}

function closeNav() {
    document.getElementById("notificationsPane").style.right = "-290px";
}

function searchExecute(){
  alert("I'm Here!");
}

function getNotificationCount(){
  /*
  This could potentionally be from an AJAX database call that
  counts how many notifications have been recieved so far that have been unseen
  */
  var notificationCount =notifications.length;

  if(notificationCount <= 0 || notificationCount == undefined || notificationCount ==null){
    $("#notificationNumbers").css({
      "display":"none"
    });
  }else{
    if(notificationCount > 99){
      notificationCount = "100+";
    }

    $("#notificationNumbers").css({
      "display":"inline-block"
    });

  }
    return notificationCount;
}

function changeDoneNotDone(element){
  alert($(element).siblings().attr("id"));
}

function addZero(n){
  switch (n){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      n="0"+n;
      break;
    default:
      n=n;
      break;
  }

  return n;
}

function hideAndClearAllMessageBoxes(){
  $("#customerDetailsErrorsContainer").hide();
  $("#errorMessages").html("");
  $("#warningMessagesContainer").hide();
  $("#warningMessages").html("");
  $("#successMessagesContainer").hide();
  $("#successMessage").html("");
}

function generateErrors(errors){
  var html="";

  for(var i=0; i<errors.length;i++){
    html=html.concat("<li>"+errors[i]+"</li>");
  }

  return html;
}

function amountCorrectFormat(amount){

}
