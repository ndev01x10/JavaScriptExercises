//------------------------------------------------

//-------------[START] Declaration of Variables-------------
var memArray=[];
var msg="Below are the details of the memberArray: \n";
//-------------[END] Declaration of Variables--------------

//-----This is the object contructor for MemberObj-----
function MemberObj(arg_id, arg_name, arg_mobileNum){
    this.id = arg_id;
    this.name = arg_name;
    this.mobileNum = arg_mobileNum;
}

//-----This function is for the created members-----
function createMembers(){
    alert("createMembers( ) FUNCTION HAS BEEN TRIGGERED!");
    var member1 = new MemberObj("m001","John","91234567");
    var member2 = new MemberObj("m002","Mary","92345678");
    var member3 = new MemberObj("m003","Charlie","93456789");
//var member4 = new MemberObj(memID=prompt("Enter member id: "), memName=prompt("Enter member name: "), memMobileNum=prompt("Enter member mobile: "));

//This will add the members (member1, member2 and member3) to memArray-----
    memArray=[member1, member2, member3];
    console.log("myArray: ", memArray);
}
    
//-----This function prints out all records on file using variable message-----
 function prepareMessage(){
    msg="ID     Name          MobileNumber\n==============================================\n";
 
    for(let i=0; i<memArray.length; i++){
        msg+=memArray[i].id+"   "+memArray[i].name+"      "+memArray[i].mobileNum+"\n";

    }

    return msg;

}

//This function is to prepare message for printing in HTML-----
function prepareHTMLMsg(){
    alert("prepareHTMLMsg( ) FUNCTION HAS BEEN TRIGGERED!");
    var msg="ID&emsp;&nbsp;Name&emsp;MobileNumber<br>======================<br>";

    for(let i=0; i<memArray.length; i++){
        msg+=memArray[i].id+"&ensp;"+memArray[i].name+"&emsp;"+memArray[i].mobileNum+"<br>";
    }

    return msg;

}

//This function is to list the members info onto the targetted element in the index page-----
function listMembers(){
    console.log("listMembers() being called");
    document.getElementById("target").innerHTML=prepareHTMLMsg();
}

//-----Main Programs--------------
document.getElementById("autoGenMemBtn").addEventListener("click", createMembers);

//--------------------------------
//createMembers();
//prepareMessage();
//prepareHTMLMsg();
//console.log(msg);
//alert(msg);
//listMembers();


