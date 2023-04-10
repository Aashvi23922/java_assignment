var change = document.querySelector(".fa-moon");
        change.addEventListener("click", function(){
            document.body.classList.toggle("dark-mode")
            if(document.body.classList.contains("dark-mode") == true){
                change.classList.remove("fa-moon")
                change.classList.add("fa-sun")
            }else{
                change.classList.remove("fa-sun")
                change.classList.add("fa-moon")
            }
        })



