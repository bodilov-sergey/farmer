const menu = () => {
    const menuSwitch = document.querySelectorAll('.__switch')
    const menuItem = document.querySelectorAll('.__menu')
    menuSwitch.forEach(element => {
        element.onclick = function () {
            menuItem.forEach(element => {
                element.classList.toggle('__opened');
            });
        }
    });
}

export default menu