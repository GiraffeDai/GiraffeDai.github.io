
function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function send(btn) {
    var content = document.getElementById("commentTextArea").value;
    if (content.length <= 0) {
        alert("請輸入內容");
        return;
    }
    if (content.indexOf('http://') != -1 || content.indexOf('https://') != -1){
        alert("禁止輸入網址");
        return;
    }
    document.getElementById("commentTextArea").value = "";

    btn.disabled = true;
    setTimeout(function(){
        btn.disabled = false;
    },2000);

    fetch(
        'https://discord.com/api/webhooks/853144079860760619/vmdyhqB2ZBx3V0Zp9F6EvWZIK8uW2hYd9Z765nEPqOsvLvqhIZ8HNMkFDuX_gjZsuHq_',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [
                    {
                        description: content
                    }
                ],
            }),
        }
    );
}

function nowTime(){
    var t = new Date();
    return t.getFullYear()+'/'+t.getMonth()+'/'+t.getDate()+' '+t.getHours()+':'+t.getMinutes()
}
