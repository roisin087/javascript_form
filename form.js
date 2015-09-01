// JavaScript Document
      var total=0;
      var selection;
      
    var description = new Array(10);
    description[0] = "Own" + "\t";
    description[1] = "Type" + "\t";
    description[2] = "Years Old";
    description[3] = "House Alarm";
    description[4] = "Smoke Detectors";
    description[5] = "Location";
    description[6] = "Claims Free";
    description[7] = "Buildings";
    description[8] = "Contents";
    description[9] = "Excess" + "\t";
    
    var cost = new Array(10);  
       
     function getSelectedItem(){
     var i;
     var ownOrRent ="";
     var len = document.forms[0].own.length;
     for(i=0;i<len;i++){
     if(document.forms[0].own[i].checked)
     {
     ownOrRent = document.forms[0].own[i].value;
     break;
     }
     }
     if(ownOrRent == "")
     {
     window.alert("You must specifiy whether you own or rent the property");
     }
     else
     {
     total += parseInt(ownOrRent);
     cost[0]=ownOrRent;
     document.forms[0].propertyType.focus();
     }
     }
     function getProperty(){
     var selectedItem = document.forms[0].propertyType.selectedIndex;
      var selection = document.forms[0].propertyType.options[selectedItem].value;
      if(selection == "none")
      {
      window.alert("You must select a type of property");
      }
     else
     {
     total += parseInt(selection);
     cost[1]=selection;
     document.forms[0].yearsOld.focus();
     }
     }
       function getYears(){
      var selectedItem = document.forms[0].yearsOld.selectedIndex;
      var selection = document.forms[0].yearsOld.options[selectedItem].value;
      if(selection == "none")
      {
      alert('Please select a year');
      }
     else
     {
     total += parseInt(selection);
     cost[2]=selection;
     document.forms[0].alarm.focus();
     }
     }
     
     function getAlarm(){
       var i;
     var selection ="";
     var len = document.forms[0].alarm.length;
     for(i=0;i<len;i++){
     if(document.forms[0].alarm[i].checked)
     {
     selection = document.forms[0].alarm[i].value;
     break;
     }
     }
     if(selection == "")
     {
     window.alert("You must specifiy whether you have an alarm the property");
     }
     else
     {
     total += parseInt(selection);
     cost[3]=selection;
     document.forms[0].smokeAlarm.focus();
     }
     }
     function getSmokeAlarm(){
     if(document.forms[0].smokeAlarm[0].checked)
     {
     selection = document.forms[0].smokeAlarm[0].value;
     }
     else if(document.forms[0].smokeAlarm[1].checked)
     {
      selection = document.forms[0].smokeAlarm[1].value;
     }
     else{
     window.alert("Please answer yes/no for smoke detector question"); }
     total += parseInt(selection);
     cost[4]=selection;
     document.forms[0].location.focus();
     }
     
     function getLocation(){
      var selectedItem = document.forms[0].location.selectedIndex;
      var selection = document.forms[0].location.options[selectedItem].value;
      if(selection == "none")
      {
      window.alert("You must specifiy locaion of the property");
      }
     else
     {
     total += parseInt(selection);
     cost[5]=selection;
     document.forms[0].claimsFree.focus();
     }
     }
      function getClaimsFree(){
      var selectedItem = document.forms[0].claimsFree.selectedIndex;
      var selection = document.forms[0].claimsFree.options[selectedItem].value;
      if(selection == "none")
      {
      window.alert("You must specifiy the number of claims free years you have");
      }
     else
     {
     total += parseInt(selection);
     cost[6]=selection;
     document.forms[0].buildingsCover.focus();
     }
     }
      function getBuildingsCover(){
      var sum;
      var input = document.forms[0].buildingsCover.value;
      parseFloat(input);
      
      if(isNaN(input))
      { 
      alert("Invalid input - please enter a number");
      }
      if(input == ""){
      alert('You have not filled in buidings cover textbox');
      }
      if(!isNaN(input)){
      sum = input/100;
      total+=sum; 
      cost[7]=sum.toString();
      document.forms[0].contentsCover.focus();
      }
      } 
      
       function getContentsCover(){ 
      var selectedItem = document.forms[0].contentsCover.selectedIndex;  
      var selection = document.forms[0].contentsCover.options[selectedItem].value;
      if(selection == "none")
      {
      window.alert("You must specifiy contents cover");
      }
     else
     {
     total += parseInt(selection);
     cost[8]=selection;
     document.forms[0].claimExcesss.focus();
     }
     }
     function getClaimExcess(){
      var i;
     var selection ="";
     var len = document.forms[0].claimExcess.length;
     for(i=0;i<len;i++){
     if(document.forms[0].claimExcess[i].checked)
     {
     selection = document.forms[0].claimExcess[i].value;
     break;
     }
     }
     if(selection == "")
     {
     window.alert("You must specifiy claim excess");
     }
     else
     {
     total += parseInt(selection);
     cost[9]=selection;
     document.forms[0].calculate.focus();
     }
    } 
    
    function validate(){
    var result="";
    var len=cost.length;
    var count=0;
    var checkAll = document.forms[0].elements;
    
	   for (var i=0;i<checkAll.length;i++) {
		    if (!checkAll[i].value){ 
        document.forms[0].quote.value = "";
        alert('Please fill in all details');
        break;
        }
        else{
           while(count<10){    /*  for(var j=0;j<len;j++){ inner for-loop outputs the entire content of the two arrays 17 times??*/
           result += description[count] + "\t" + cost[count] + "\n"; 
            count++;  
            }
      document.forms[0].quote.focus();
      document.forms[0].quote.value = "A summary of your quote is as follows: \n" + result + "\nYour total cost is: " + total;
        }
       }
          
       }
       
       function confirmReset(){
       var reset = window.confirm("Are you sure you want to reset the form?");
       if(reset==true)
       return true;
       else
       return false;
       }
       
      
      
      
     
      
    
      
      
      
      
