const disabledKeys = ["u", "I"];

const showAlert = e => {
    e.preventDefault();
    return alert("ბოდიში მარა სოურს კოდს ვერ ნახავთ :)!");
}

document.addEventListener("contextmenu", e => {
    showAlert(e);
});

document.addEventListener("keydown", e => {
    if (e.ctrlKey && disabledKeys.includes(e.key) || e.key === "F12,CRTL,U") {
        showAlert(e);
    }
});


// 