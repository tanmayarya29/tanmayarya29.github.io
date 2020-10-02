function addic(){
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("addict").value);
    
    node.appendChild(textnode);
    
    document.getElementById("addictions").appendChild(node);
    document.getElementById("addictions").appendChild(document.createElement("hr"))
     //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("addDur").value);
    
    node.appendChild(textnode);
    
    document.getElementById("adddur").appendChild(node);
    document.getElementById("adddur").appendChild(document.createElement("hr"))
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("addDuration").value);
    
    node.appendChild(textnode);
    
    document.getElementById("addDurn").appendChild(node);
    
    document.getElementById("addDurn").appendChild(document.createElement("hr"))
} 

function dAdd() { 
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("system").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dSys").appendChild(node);
    document.getElementById("dSys").appendChild(document.createElement("hr"))
    //
    
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("symptom").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dSym").appendChild(node);
    document.getElementById("dSym").appendChild(document.createElement("hr"))
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("noDuration").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dnDur").appendChild(node);
    document.getElementById("dnDur").appendChild(document.createElement("hr"))
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("Duration").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dDur").appendChild(node);
    
    document.getElementById("dDur").appendChild(document.createElement("hr"))
     
}
function disp() {
    var val=document.getElementById("system").value;
    var symp = document.getElementById("symptom");
    symp.setAttribute('list',val);
}
function dispD() {
    var val=document.getElementById("systemD").value;
    var symp = document.getElementById("symptomD");
    symp.setAttribute('list',val);
}
function dAddD() { 
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("systemD").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dSysD").appendChild(node);
    document.getElementById("dSysD").appendChild(document.createElement("hr"))
    //
    
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("symptomD").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dSymD").appendChild(node);
    document.getElementById("dSymD").appendChild(document.createElement("hr"))
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("noDurationD").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dnDurD").appendChild(node);
    document.getElementById("dnDurD").appendChild(document.createElement("hr"))
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("DurationD").value);
    
    node.appendChild(textnode);
    
    document.getElementById("dDurD").appendChild(node);
    
    document.getElementById("dDurD").appendChild(document.createElement("hr"))
     
}
/*medicine prescription*/
function medAdd()
{
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("meds").value);
    
    node.appendChild(textnode);
    document.getElementById("medicineCombination").appendChild(node);
    
}

/*##########//patient details//#################*/


function patientInfo(id,name,age,gender,height,weight,MoNo,email,symptom,disease)
{
    
    //making object
    this.Id=id;
    this.Name=name;
    this.Age=age;
    this.Gender=gender;
    this.Height=height;
    this.Weight=weight;
    this.MobileNo=MoNo;
    this.EmailId=email;
    this.Symptom=symptom;
    this.Disease=disease;
}

function getVal(){
    //getting details
    var id=document.getElementById("pId").value;
    var name=document.getElementById("pFname").value+document.getElementById("pMname").value+document.getElementById("pLname").value;
    var age=document.getElementById("pAge").value;
    var gender=document.getElementById("pGndr").value;
    var height=document.getElementById("pHt").value;
    var weight=document.getElementById("pWt").value;
    var MoNo=document.getElementById("pMoNo").value;
    var email=document.getElementById("pEmail").value;
    var symptom=document.getElementById("symptom").value;
    var disease=document.getElementById("symptomD").value; 
    var sNo = new patientInfo(id,name,age,gender,height,weight,MoNo,email,symptom,disease);
    
}








 