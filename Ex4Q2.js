//------------------------------------------------

//-------------[START] Declaration of Variables-------------

var Member1;
var Member2;
var Member3;
var memArray;

//-------------[END] Declaration of Variables-------------

//-----This is the object contructor for MemberObj-----

function MemberObj(id,name,mobileNum) {
    this.id=id;
    this.name=name;
    this.mobileNum=mobileNum;
}

//-----This function is for the created members-----

function createMembers() {
    Member1 = new MemberObj("m001","John","91234567");
    Member2 = new MemberObj("m002","Mary","92345678");
    Member3 = new MemberObj("m003","Charlie","93456789");

    console.log("Member1 object:",Member1);
    console.log("Member2 object:",Member2);
    console.log("Member3 object:",Member3);
    
    memArray = [Member1,Member2,Member3];
    console.log(memArray);

    console.log(memArray[0].id + "   " + memArray[0].name + "   " + memArray[0].mobileNum);
    console.log(memArray[1].id + "   " + memArray[1].name + "   " + memArray[1].mobileNum);
    console.log(memArray[2].id + "   " + memArray[2].name + "   " + memArray[2].mobileNum);
}

//-----This function prints out all three records on file using the alert prompt-----
function prepareMessage(){
    var message ="ID" + "        " + "Name" + "       " + "MobileNumber" + "\n==============================================\n";
    message += memArray[0].id + "   " +memArray[0].name + "         " + memArray[0].mobileNum +  "\n";
    message += memArray[1].id + "   " +memArray[1].name + "         " + memArray[1].mobileNum +  "\n";
    message += memArray[2].id + "   " +memArray[2].name + "         " + memArray[2].mobileNum;

alert(message);

}

//-------------Main Program-------------

createMembers();
prepareMessage();