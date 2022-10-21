const github = new Github;
const ui= new UI;
const searchUser =document.querySelector('#searchUser');
searchUser.addEventListener('keyup',function(e){
    const userText=e.target.value;
    if(userText !==''){
        github.getUser(userText)
        .then(function(data){
            if(data.profile.message ==='Not Found'){
                 
            }else{
                ui.showProfile(data.profile);
                console.log("vaibhav")

            };
        })
    }else{

    }
})