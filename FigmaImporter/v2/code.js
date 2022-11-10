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
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', TokenRequestUrl(thisClientId,thisSecretId,thisSiteUrl,FigmaCallBack("code")), true); 
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpRequest.send('name=teswe&ee=ef');

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = JSON.parse(httpRequest.responseText);
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

function getJSON(){

    // parse figUrl to apiUrl
    const figUrl = document.getElementById('file_textarea').value;
    const token = document.getElementById("Token").innerHTML
    var substrings = figUrl.split('/');
    var length = substrings.length;
    var isNodeUrl = substrings[length - 1].includes("node-id");
    var _fileName = substrings[length - 2];
    var apiUrl;
    if (!isNodeUrl)
    {
        apiUrl = `https://api.figma.com/v1/files/${_fileName}`;
    }

    var _nodeId = substrings[length - 1].split(`?node-id=`)[1];
    apiUrl = `https://api.figma.com/v1/files/${_fileName}/nodes?ids=${_nodeId}`


    // request get json
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', apiUrl, true); 
    //Bearer
    httpRequest.setRequestHeader("Authorization",`Bearer ${token}`);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = JSON.parse(httpRequest.responseText);
            var jsonStringify = JSON.stringify(json,null,0);
            document.getElementById('json-textarea').innerHTML = jsonStringify
            console.log(json);
            var idNodes = [];
            const firstNodeValue = Object.values(json.nodes)[0]
            const firstNodeKey = Object.keys(json.nodes)[0]

            idNodes.push(firstNodeKey);
            for(var i =0;i< firstNodeValue.document.children.length;i++){
                idNodes.push(firstNodeValue.document.children[i].id)
                if(i === firstNodeValue.document.children.length-1){
                    console.log(idNodes);
                }
            }


        }
    };
}

getToken();
