
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
        'https://discord.com/api/webhooks/853833181496999945/4v9WcoDK_FI85vvuWO3pugn--nZ6D0Ay2UqiQJk2Q0SmjQHqo0BnqgUz_iJK96dESeFd',
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