
function dAdd() {
    //
    var node = document.createElement("P") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iSystem").value);
    
    node.appendChild(textnode);
    
    document.getElementById("System").appendChild(node);
    //
    
    var node = document.createElement("P") ;
                                      
    var textnode = document.createTextNode(document.getElementById("Digestive").value);
    
    node.appendChild(textnode);
    
    document.getElementById("Symptom").appendChild(node);
    
    //
    var node = document.createElement("p") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iInput").value);
    
    node.appendChild(textnode);
    
    document.getElementById("Input").appendChild(node);
    
    //
    var node = document.createElement("P") ;
                                      
    var textnode = document.createTextNode(document.getElementById("iDuration").value);
    
    node.appendChild(textnode);
    
    document.getElementById("Duration").appendChild(node);
     
}
function dOpt() {
    var dig = document.getElementsByClassName("digestive");
    var res = document.getElementsByClassName("col respiratory hidden");
    var car = document.getElementsByClassName("col cardiovascular hidden");
    var ner = document.getElementsByClassName("col nervous hidden");
    var end = document.getElementsByClassName("col endocrine hidden");
    var mus = document.getElementsByClassName("col musculoskelatel hidden");
    var gyn = document.getElementsByClassName("col gynacological hidden");
    var ski = document.getElementsByClassName("col skin hidden");
    var sexual = document.getElementsByClassName("col sexual hidden");
    var oth = document.getElementsByClassName("col other hidden");
    
    var value = document.getElementById("iSystem").value;

    if (value === "Digestive") {
        dig += " hidden";
    } else if (value === "Respiratory") {
        res -= " hidden";
    } else if (value === "Cardiovascular") {
        car -= " hidden";
    } else if (value === "Nervous") {
        ner -= " hidden";
    } else if (value === "Endocrine") {
        end -= " hidden";
    } else if (value === "Musculoskeletal") {
        mus -= " hidden";
    } else if (value === "Gynacological") {
        gyn -= " hidden";
    } else if (value === "Skin") {
        ski -= " hidden";
    } else if (value === "Sexual") {
        sexual -= " hidden";
    } else if (value === "other") {
        oth -= " hidden";
    } 
}
