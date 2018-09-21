module.exports = {
    isOwner:function(request, response){
        if(request.user){
          return true;
        } else {
          return false;
        }
      },
      
    statusUI:function(request, response){
        var authStatusUI = '<a href="/auth/login">login</a> | <a href="/auth/register">Register</a>'
        if(this.isOwner(request, response)){
          authStatusUI = `${request.user.displayName}|<a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
      },

      testLog:function(request, response){
        if(request.user){
          console.log(request.url,request.user.displayName)
        }else{
          console.log(request.url)
        };
      }
}