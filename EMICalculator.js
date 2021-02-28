function calculateEMI() {
    var P=document.getElementById('principalAmount').value;
    var r=document.getElementById('interestRate').value;
    var N=document.getElementById('tenure').value;
    var R=(r/100)/12;
    var a=Math.pow(1+R,N);
    var EMI=P*R*(a/(a-1));
    document.getElementById("result").innerHTML="EMI is Rs."+ EMI.toFixed(2);
    return false;
}
