function createUrlWithID(btn) {
    //check
    var urlinput = document.getElementById("urlInput");
    if (urlinput.value.length <= 0) {
        return showErrorAlert("請輸入網址");
    }
    //
    btn.textContent = "產生中...";
    btn.disabled = true;
    //post
    var url = 'https://script.google.com/macros/s/AKfycbynE6uw79t5NQ9Da8T97iU4NrBEMuagiPYGu2OEZ6IiChV7aHw/exec?data=["' + urlinput.value + '"]';
    fetch(url, {
        method: 'POST'
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(data => {

                    if (data["isSuccess"] == true && data["urlID"].length > 0) {
                        return showSuccessAlert(data["urlID"]);
                    }
                    if (data["isSuccess"] == false) {
                        urlinput.focus();
                        return showErrorAlert("發生錯誤，請檢查是否為有效網址");
                    }
                    showErrorAlert("發生錯誤，請稍後再試,或聯絡.長頸鹿");
                });
            }
            btn.disabled = false;
            btn.textContent = "生成";
        }).catch(function (error) {
            btn.disabled = false;
            btn.textContent = "生成";
            showErrorAlert("發生錯誤，請稍後再試,或聯絡.長頸鹿");
        });
}

function showSuccessAlert(urlid) {
    Swal.fire({
        icon: 'success',
        html: '您的短網址為<br><br>' +
            '<a href="https://koyuisha.com/' + urlid + '" target="_blank">https://koyuisha.com/' + urlid + '</a><br><br>' +
            '請妥善保管，如有遺失請洽心結文學社.長頸鹿'
    });
}

function showErrorAlert(message) {
    Swal.fire({
        icon: 'error',
        text: message
    });
}
