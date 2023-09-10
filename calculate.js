function solve()
{
    let x_c = document.getElementById("tempinput").value;
    let x_f = document.getElementById("tempinput").value;

    let res_c=(5/9)*(x_c-32);
    let res_f=(x_f*1.8)+32;
    
    if(document.getElementById("cb3").checked==true)
    {
    document.getElementById("tempresult").value = Math.round(res_c)+"°C";
    }
    else
    {
    document.getElementById("tempresult").value = Math.round(res_f)+"°F";
    }
}