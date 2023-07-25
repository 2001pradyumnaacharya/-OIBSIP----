

function hat(){
    selectElement = document.querySelector('#in1');
    output = selectElement.value;
    selectele=document.querySelector('#sel1');
    outtput=selectele.value;
    selectElementt = document.querySelector('#sel2');
    outputt = selectElementt.value;
  
    if(outtput=== outputt){
        document.querySelector('#p1').innerHTML = output;
        }
    if(outtput==="fahrenheit" && outputt==="Degree celsius"){
    document.querySelector('#p1').innerHTML = [(output-32)*5]/9;
    }
    if(outtput==="fahrenheit" && outputt==="Kelvin"){
        document.querySelector('#p1').innerHTML = (output - 32) * 5 / 9 + 273.15;
        }
    if(outtput==="Degree celsius" && outputt==="Kelvin"){
            document.querySelector('#p1').innerHTML = parseInt(output)+parseInt(273.15);
            }
    if(outtput==="Degree celsius" && outputt==="fahrenheit"){
        document.querySelector('#p1').innerHTML = (9/5)*output+ 32;
    }
    if(outtput==="Kelvin" && outputt==="fahrenheit"){
        document.querySelector('#p1').innerHTML =  (output - 273.15) * 1.8 + 32;
    }
    if(outtput==="Kelvin" && outputt==="Degree celsius"){
        document.querySelector('#p1').innerHTML = output-273.15;
        }
    else{
        document.querySelector('#p1').innerHTML ;
    }
}


