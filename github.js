class Github{
constructor(){
    this.client_id='86aad547b8c16b713ab5';
    this.client_secret='357e61d441d30e58ac42b450e7cf7c8cf39b3837';
}
async getUser(user){
const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
const profile=await profileResponse.json();
return {
    profile
}
}
}