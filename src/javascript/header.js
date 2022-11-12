// Generate the header of the website
function generateHeader()
{
    let divBox = document.getElementById("header");
    divBox.insertAdjacentHTML("afterbegin", ""); 
}

// To show the current tabs
function menuTab(evt, tabName) 
{
    // console.log(evt.currentTarget);
    if(evt != null)
    {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
    
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" selected", "");
        }
        if(evt != "none")
        {
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " selected";
        }
    }
    else
        document.getElementById(tabName).style.display = "block";
}