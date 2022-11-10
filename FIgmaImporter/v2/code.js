// const thisSiteUrl = "https://127.0.0.1:8885/index.html";
// const thisStateInt = Math.floor(Math.random() * 256);
// const thisClientId = "YENq6dEgFXG1BJdhEEyobg";
// const thisSecretId = "azhgHwFqtRNP3bkCQunJC2PcPlfM5o";

// const OARequestUrl = (clientId,siteUrl,stateInt) =>{
//     return (
//     `https://www.figma.com/oauth?` + 
//     `client_id=${clientId}&` + 
//     `redirect_uri=${siteUrl}&` + 
//     `scope=file_read&` + 
//     `state=${stateInt}&` + 
//     `response_type=code`)
// }

// const TokenRequestUrl = (clientId,secretId,siteUrl,clientCode) =>{
//     return(
//     `https://www.figma.com/api/oauth/token?` + 
//     `client_id=${clientId}&`+ 
//     `client_secret=${secretId}&`+
//     `redirect_uri=${siteUrl}&` + 
//     `code=${clientCode}&` + 
//     `grant_type=authorization_code`)
// }


function FigmaCallBack(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function fillParameters(code,state,token){
    document.getElementById("ClientCode").innerHTML = code;
    document.getElementById("State").innerHTML = state;
    document.getElementById("Token").innerHTML = token;
}

function getToken(){
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', TokenRequestUrl(thisClientId,thisSecretId,thisSiteUrl,FigmaCallBack("code")), true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send('name=teswe&ee=ef');//发送请求 将情头体写在send中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            var accessToken = json.access_token;
            fillParameters(FigmaCallBack("code"),FigmaCallBack("state"),accessToken);
            document.getElementById('token_snippet').style.display = 'initial';
            document.getElementById('loading_text').style.display = 'none';
            document.getElementById('loading').style.display = 'none';
        }
    };

}

function CopyToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied the token: " + r);
}

getToken();
