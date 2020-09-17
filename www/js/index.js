var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById('btn_sign_in_with_id_token').addEventListener('click', signInWithIdToken);
    }

};

async function signInWithIdToken() {

    const jsonArr = [CommonTypes.ScopeConstants.SCOPE_ID_TOKEN];
    const param = CommonTypes.HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM;

    HMSAccount.signIn(jsonArr, param).then( function(userInfo){
        localStorage.setItem('userInfo', JSON.stringify(userInfo));   
        window.location = "login.html";    
    }).catch(function(){
        alert('signIn -> Error : ' + JSON.stringify(ex));
    });
}

app.initialize();