//------------------------------------------------

//-------------[START] Declaration of Variables-------------
var memArray=[];
var msg="Below are the details of the memberArray: \n";

//-------------Introduction of New Variables----------------
var uMemId;
var uMemName;
var uMemDob;
var uMemAddr;
var uMemMobile;

var htmlMsg;
//-------------[END] Declaration of Variables---------------

//-----This is the object contructor for MemberObj-----
function MemberObj(arg_id, arg_name, arg_dob, arg_addr, arg_mobileNum){
    this.id = arg_id;
    this.name = arg_name;
    this.dob = arg_dob;
    this.addr = arg_addr;
    this.mobileNum = arg_mobileNum;
}

//-----This function is for the created members-----
function createMembers(){
    alert("createMembers() function has been triggered!");
    var member1 = new MemberObj("m001","John","91234567");
    var member2 = new MemberObj("m002","Mary","92345678");
    var member3 = new MemberObj("m003","Charlie","93456789");
//var member4 = new MemberObj(memID=prompt("Enter member id: "), memName=prompt("Enter member name: "), memMobileNum=prompt("Enter member mobile: "));
      
//This will add the members (member1, member2 and member3) into memArray-----
    memArray=[member1, member2, member3];
    console.log("myArray: ", memArray);
}
    
//This function is to add the new member input into memArray----- 
function addMember(memId, memName, memDob, memAddr, memMobile){
    var member = new MemberObj(memId, memName, memDob, memAddr, memMobile);
    memArray.push(member);
    console.log("memberArray: ",memArray);
    alert("NEW MEMBER CREATED!");
}

//This function prompts the user to key in member details (meant for the previous exercise)-----
function getMemDetails(){
    uMemId=prompt("Enter member id: ");
    uMemName=prompt("Enter member name: ");   
    uMemMobile=prompt("Enter member mobile: ");
}

//This function dynamically store the value of the variable which is then used in the addMember function-----
function addNewMember(){
    //alert("addNewMember( ) FUNCTION HAS BEEN TRIGGERED!");
    uMemId=document.getElementById("memId").value;
    uMemName=document.getElementById("memName").value;
    uMemDob=document.getElementById("memDob").value;
    uMemAddr=document.getElementById("memAddr").value;
    uMemMobile=document.getElementById("memMobile").value;
    addMember(uMemId,uMemName,uMemDob,uMemAddr,uMemMobile);
}

//-----This function prints out all records on file using variable msg-----
function prepareMessage(){
    var msg="ID     Name          MobileNumber\n==============================================\n";
    
    for(let i=0; i<memArray.length; i++){
        msg+=memArray[i].id+"   "+memArray[i].name+"      "+memArray[i].mobileNum+"\n";

    }

    return msg;

}

//-----This function prints out all records on file using variable messageNew and displays the details in HTML browser-----
function prepareHTMLMsg(){
    alert("prepareHTMLMsg( ) FUNCTION HAS BEEN TRIGGERED!");
    var msg="ID&emsp;&nbsp;Name&emsp;DOB&emsp;&nbsp;&emsp;&nbsp;Address&emsp;MobileNumber<br>=====================================<br>";

       for(let i=0; i<memArray.length; i++){
        msg+=memArray[i].id+"&ensp;"+memArray[i].name+"&emsp;"+memArray[i].dob+"&emsp;"+memArray[i].addr+"&emsp;"+memArray[i].mobileNum+"<br>";
    }

    return msg;
}

//This function is to list the members info onto the targetted element in the index page-----
function listMembers(){
    console.log("listMembers() being called");
    //document.getElementById("target").innerHTML=prepareHTMLMsg();
    
//This calls out the displayMemRecfunc() within the listMembers() function-----
    displayMemRecFunc();
}

//This function is to display the member details with borders when the Display Members' Records button has been clicked-----
function displayMemRecFunc(){
    alert("displayMemRecFunc( ) HAS BEEN TRIGGERED!");
    msg = `
    <table border=1>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>DOB</th>
        <th>Address</th>
        <th>MobileNumber</th>   
    </tr>
    `;
    console.log(msg);
    for(var i=0; i<memArray.length; i++){

        msg += "<tr>"+"<td>"+memArray[i].id+"</td>"+"<td>"+memArray[i].name+"</td>"+"<td>"+memArray[i].dob+"</td>"+"<td>"+memArray[i].addr+"</td>"+"<td>"+memArray[i].mobileNum+"";
    }
msg+="</table>";
console.log("console.log==>"+msg);
console.info("console.info==>"+msg);
console.error("console.error==>"+msg);
document.getElementById("target").innerHTML=msg;
}

//-----Main Programs--------------

//console.log("before:",memArray);
//createMembers();
//console.log("after:",memArray);
//console.log(prepareMessage);
//alert(prepareMessage);
//printHTMLTable();
//displayMemRecFunc();

//getMemDetails();
//addMember(uMemId,uMemName,uMemMobile);
//alert(prepareMessage());
//listMembers;
 
//htmlMsg=prepareHTMLMsg();
//document.getElementById("listMemBtn").addEventListener("click", createMembers);

