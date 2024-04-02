function autoClick() {
    const skipBtn = document.getElementsByClassName("ytp-ad-skip-button-modern");
    if(skipBtn && skipBtn.length) {
        skipBtn[0].click()
    }
}

setInterval(autoClick, 500);
