$(document).ready(function(){

    loadData();

    $("#callPhone").on("click",function(){
      event.preventDefault();
      dial($("#phoneNoCLI").val());
    });

    $("#callMobile").on("click", function(){
      event.preventDefault();
      dial($("#mobileNumber").val());
    });

    /*Slide the notifications pane in view and out of view*/
    $("#notifications").on("click", function(){
      event.preventDefault();
      if(document.getElementById("notificationsPane").style.right!="0px"){
        document.getElementById("notificationsPane").style.right = "0px";
      }else{
        document.getElementById("notificationsPane").style.right = "-290px";
      }
    });

    /*Searches the customer contact history table and returns a result*/
    $("#searchCustomerContactHistory").on("click", function(){
      event.preventDefault();
      searchCustomerContactHistory();
    });

    /*Show the other card type input box*/
    $("#cardTypeSelect").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="Other"){
              $("#otherCardType").slideDown(500, function(){
                $("#otherCardType").css({
                  "display":"block"
                });
              });
            }else{
              $("#otherCardType").slideUp(500,function(){
                $("#otherCardType").css({
                  "display":"none"
                });
              });
            }
        });
    }).change();

    /*Shows or hides the clear button in the search by ID box, as the user types into the search box*/
    $("#searchByIDMain").on("keyup",function(event){
      event.preventDefault();
      if(event.keyCode == 8 || event.keyCode == 46){
        if($("#searchByIDMain").val()=="" || $("#searchByIDMain").val()==null || $("#searchByIDMain").val() == undefined){
          $("#clearSearchCross").addClass("hide");
        }else{
          $("#clearSearchCross").removeClass("hide");
        }
      }else{
        if($("#searchByIDMain").val()=="" || $("#searchByIDMain").val()==null || $("#searchByIDMain").val() == undefined){
          $("#clearSearchCross").addClass("hide");
        }else{
          $("#clearSearchCross").removeClass("hide");
        }
      }
    });

    /*Clear the search box and hides the clear button*/
    $("#clearMainSearch").on("click", function(){
      event.preventDefault();
      $("#searchByIDMain").val("");
      $("#clearSearchCross").addClass("hide");
    });

    /*Shows or hides the clear button in the search by customer contact history box, as the user types into the search box*/
    $("#searchStringCustomerContactHistory").on("keyup", function(){
      event.preventDefault();
      if(event.keyCode == 8 || event.keyCode == 46){
        if($("#searchStringCustomerContactHistory").val()=="" || $("#searchStringCustomerContactHistory").val()==null || $("#searchStringCustomerContactHistory").val() == undefined){
          $("#clearCustomerContactHistoryCross").addClass("hide");
        }else{
          $("#clearCustomerContactHistoryCross").removeClass("hide");
        }
      }else{
        if($("#searchStringCustomerContactHistory").val()=="" || $("#searchStringCustomerContactHistory").val()==null || $("#searchStringCustomerContactHistory").val() == undefined){
          $("#clearCustomerContactHistoryCross").addClass("hide");
        }else{
          $("#clearCustomerContactHistoryCross").removeClass("hide");
        }
      }
    });

    /*Clears the search by customer contact history box and hides the clear button*/
    $("#clearSearchCustomerContactHistory").on("click", function(){
      event.preventDefault();
      $("#searchStringCustomerContactHistory").val("");
      $("#clearCustomerContactHistoryCross").addClass("hide");
    });

    /*Shows or hides the clear button in the search by transaction history box, as the user types into the search box*/
    $("#searchStringTransactionHistory").on("keyup", function(){
      event.preventDefault();
      if(event.keyCode == 8 || event.keyCode == 46){
        if($("#searchStringTransactionHistory").val()=="" || $("#searchStringTransactionHistory").val()==null || $("#searchStringTransactionHistory").val() == undefined){
          $("#clearTransactionHistoryCross").addClass("hide");
        }else{
          $("#clearTransactionHistoryCross").removeClass("hide");
        }
      }else{
        if($("#searchStringTransactionHistory").val()=="" || $("#searchStringTransactionHistory").val()==null || $("#searchStringTransactionHistory").val() == undefined){
          $("#clearTransactionHistoryCross").addClass("hide");
        }else{
          $("#clearTransactionHistoryCross").removeClass("hide");
        }
      }
    });

    /*Clears the search by transaction history box and hides the clear button*/
    $("#clearSearchTransactionHistory").on("click", function(){
      event.preventDefault();
      $("#searchStringTransactionHistory").val("");
      $("#clearTransactionHistoryCross").addClass("hide");
    });

    /*Shows or hides the clear button in the search by previous accounts history box, as the user types into the search box*/
    $("#searchStringPreviousiTalkAccounts").on("keyup", function(){
      event.preventDefault();
      if(event.keyCode == 8 || event.keyCode == 46){
        if($("#searchStringPreviousiTalkAccounts").val()=="" || $("#searchStringPreviousiTalkAccounts").val()==null || $("#searchStringPreviousiTalkAccounts").val() == undefined){
          $("#clearPreviousiTalkAccountsCross").addClass("hide");
        }else{
          $("#clearPreviousiTalkAccountsCross").removeClass("hide");
        }
      }else{
        if($("#searchStringPreviousiTalkAccounts").val()=="" || $("#searchStringPreviousiTalkAccounts").val()==null || $("#searchStringPreviousiTalkAccounts").val() == undefined){
          $("#clearPreviousiTalkAccountsCross").addClass("hide");
        }else{
          $("#clearPreviousiTalkAccountsCross").removeClass("hide");
        }
      }
    });

    /*Clears the search by transaction history box and hides the clear button*/
    $("#clearSearchPreviousiTalkAccounts").on("click", function(){
      event.preventDefault();
      $("#searchStringPreviousiTalkAccounts").val("");
      $("#clearPreviousiTalkAccountsCross").addClass("hide");
    });

    /*Show or hides the search criterion for finding a complaint with ease*/
    $("#findComplaint").on("click", function(){
      $("#searchComplaintsTools").toggle(500);
    });

    /*Executes a search from the main search bar*/
    $("#searchStart").on("click", searchExecute);

    /*Allows switching between the tabs*/
    $("#detailsTab").on("click",openCustomerDetailsTab);
    $("#accountHistoryTab").on("click",openAccountHistoryTab);
    $("#packageLineTab").on("click",openPackageLineStatusTab);
    $("#tasksTab").on("click",openTasksTab);
    $("#complaintsTab").on("click",openComplaintsTab);

    /*SWitches the tick boxes from checked to unchecked*/
    $("#marketingYesLabel").on("click", function(){
      if($(".cb-disable span").attr("readonly") == "readonly" && (userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == userDetails[1] == "true")){
        $(this).removeAttr("readonly");
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $("#marketingNo").attr("selected", false);
        $("#marketingYes").attr("selected", true);
        $(this).attr("readonly", true);
        $("#saveChangesBanner").slideDown(500);
      }else{
        alert("You are not an administrator, there you cannot edit this field");
      }
    });

    $("#marketingNoLabel").on("click", function(){
      if($(".cb-disable span").attr("readonly") == "readonly" && (userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == userDetails[1] == "true")){
        $(this).removeAttr("readonly");
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $("#marketingNo").attr("selected", true);
        $(this).attr("readonly", true);
        $("#saveChangesBanner").slideDown(500);
      }else{
        alert("You are not an administrator, there you cannot edit this field");
      }
    });

    $(".cb-enableMe").click(function(){
      if($(".cb-disable span").attr("readonly") == "readonly" && (userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == userDetails[1] == "true")){
        $(this).removeAttr("readonly");
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', true);
        $(this).attr("readonly", true);
        $("#saveChangesBanner").slideDown(500);
      }else{
        alert("You are not an administrator, there you cannot edit this field");
      }
    });

    $(".cb-disableMe").click(function(){
      if($(".cb-disable span").attr("readonly") == "readonly" && (userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == userDetails[1] == "true")){
        $(this).removeAttr("readonly");
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', false);
        $(this).attr("readonly", true);
        $("#saveChangesBanner").slideDown(500);
      }else{
        alert("You are not an administrator, there you cannot edit this field");
      }
    });

    if(userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == "true"){
        $("#customerNameTitle, #cardTypeSelect, #directDebitDetails").prop("disabled", false);
    }

    $("#customerNameForename, #customerNameMiddlenames, #customerNameSurname, .dateOfBirth, #emailAddress, #phoneNoCLI, #mobileNumber, #directDebitStatus, #accountHolder, .sortCode, #accountNumber, #otherCardType, #cardNumber, .startDate, .expiryDate, #issueNumber, #firstLineOfAddress, #registeredPostcode, .addressHouseFlatNo, .addressStreet, .addressTown, .addressCity, .addressCounty, .addressPostCode").on("click", function(){
        if(userDetails[1] == true || userDetails[1] == "True" || userDetails[1] == "true"){
            $("#"+event.target.id).prop("readonly", false);
        }else{
          alert("You are not an administrator, therefore you cannot edit this field");
        }
    });

    $("#customerNameTitle, #cardTypeSelect, #directDebitDetails").on("change", function(){
      $("#saveChangesBanner").slideDown(500);
    });

    $("#customerNameForename, #customerNameMiddlenames, #customerNameSurname, .dateOfBirth, #emailAddress, #phoneNoCLI, #mobileNumber, .marketingYesNo, #checkboxEmailMarketing, #checkboxText, #checkboxLetter, #directDebitStatus, #accountHolder, .sortCode, #accountNumber, #otherCardType, #cardNumber, .startDate, .expiryDate, #issueNumber, #firstLineOfAddress, #registeredPostcode, .addressHouseFlatNo, .addressStreet, .addressTown, .addressCity, .addressCounty, .addressPostCode").on("keydown", function(){
      $("#saveChangesBanner").slideDown(500);
    });

    $(".addAddress").on("click", function(event){
      event.preventDefault();
      addAddress();
      $("#saveChangesBanner").slideDown(500);
    });

    $("#saveChanges").on("click", function(){
      event.preventDefault();
      saveChanges();
    });

    $("#successMessagesContainer").on("click", function(){
      $("#successMessagesContainer").fadeOut(1000, function(){
        $("#successMessage").html("");
      });
    });

    $(".notAnswered").on("click", function(){
      event.preventDefault();
      alert("Answered Call: " + $(this).html());
    });

    $(".inProgress, .answered").on("click", function(){
      //do nothing, this prevents the link from scrolling to the top
      event.preventDefault();
    });

    $("#amountTaken").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if(charCode == 44 || charCode == 46){
        return true;
      }else{
        if (charCode != 46 && charCode > 31
          && (charCode < 48 || charCode > 57)){
            return false;
        }else{
          return true;
        }
      }
    });

    $("#paymentCardNo").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

    $("#paymentStartDateMM").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

    $("#paymentStartDateYYYY").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

    $("#paymentExpiryDateMM").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

    $("#paymentExpiryDateYYYY").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

    $("#paymentIssueNo").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

    $("#paymentSecurityNo").on("keypress", function(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
    });

});
