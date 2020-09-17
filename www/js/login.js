var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var data = {
            getUserInfo: function() {
                var userInfo = localStorage.getItem('userInfo');
                console.log(userInfo);
                return JSON.parse(userInfo);
            }
        }

        var userDataObject=data.getUserInfo();
        document.getElementById('btn_sign_out').addEventListener('click', signOut);
        document.getElementById('userName').innerHTML = "User Name: " + userDataObject.givenName + " " + userDataObject.familyName;
        document.getElementById('nickName').innerHTML = "Nick Name: " + userDataObject.displayName;
    }

};

async function signOut() {
    HMSAccount.signOut().then( function(){
        if(confirm('HuaweiId Authorization will be also deleted!')){
            HMSAccount.cancelAuthorization();
        }
        alert("signOut -> success");
        window.location = "index.html";
    }).catch(function(){
        alert('signOut -> Error : ' + JSON.stringify(ex));
    });
}

app.initialize();