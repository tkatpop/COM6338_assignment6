 (function () {
    let stay = confirm("You are leaving this Web Page. Do you want to continue to leave this Web site?");
    if (stay === false) {
        window.location = "";
    }
});