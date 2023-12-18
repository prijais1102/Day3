const list=[];
debugger;
if(list.length==0)
{
    document.getElementById("studentlist").innerHTML="There are no records";
}

function display()
{ 
    record="";
    for(var i=0;i<list.length;i++)
    {
         record += "<li>"+list[i].name+' '+list[i].address+' '+list[i].batch+"</li>";
    }
    document.getElementById("studentlist").innerHTML=record;
    var count=list.length;
    document.getElementById("count").innerHTML="No. of students-"+count;
    const batchCount = list.filter(x=>x.batch=="B002");
    document.getElementById("count1").innerHTML="No. of students of batch B002-"+batchCount.length;
    
}

function addRecord()
{
   document.getElementById("div1").style.display="block";
}
function deleteRecord()
{
    if(confirm("Do you want to delete record?"))
    {
        list.pop();
        display();
    }    
}  
var record="";
var Name="";
var Address="";
var Batch="";
var objectlist="";

function GetControlDetails()
{
    Name=document.getElementById("txtname").value;
    Address=document.getElementById("txtaddress").value;
    Batch=document.getElementById("txtbatch").value;
    objectlist = {name:Name, address:Address, batch:Batch};
}

function Add(event)
{
    GetControlDetails();
    if(event.key=="Enter")
    { 
        list.push(objectlist);
        display();
    }
    
}