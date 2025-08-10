var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
           for(tabcontent of tabcontents){
              tabcontent.classList.remove("active-tab");
           }
           event.currentTarget.classList.add("active-link");
           document.getElementById(tabname).classList.add("active-tab");
        }

function submitted() {
    var name = document.querySelector('input[name="Name"]').value;
    var email = document.querySelector('input[name="email"]').value;


    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Form submitted successfully!");
}
