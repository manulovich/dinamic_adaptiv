let dailyMenuStyles = {
    fontSize: 18,
}

const POINTS = document.querySelectorAll('.daily-menu__points');
const POINTS_TOP = document.querySelectorAll('.daily-menu__top-points');
const MENU_NAME = document.querySelectorAll('.daily-menu__name');

window.onload = ()=> {
    new CustomBlock().customRectangleRender();
    autoComplete(POINTS);
    reduceForWidth(POINTS_TOP, MENU_NAME);
    enlargeFontSize(POINTS_TOP, MENU_NAME);
}

window.onresize = () => {
    autoComplete(POINTS);
    reduceForWidth(POINTS_TOP, MENU_NAME);
    enlargeFontSize(POINTS_TOP, MENU_NAME);
}

//заполнение пустого метса точек
function autoComplete(elements){

    elements.forEach(item => {
        let width = item.offsetWidth;
        let countPoint = width / 6;
        let html = '';
        
        for(let i = 0; i < countPoint; i++){
            html += `<span>.</span>`;
        }

        item.innerHTML = '';
        item.innerHTML = html;  
    });
}

//изменение размера шрифта на основе объекта dailyMenuStyles
function changeFontSize(subject){
    subject.forEach(item => {
        item.style.fontSize = dailyMenuStyles.fontSize + 'px';
    });
}

//уменьшение шрифта каждую итерацию на -2
function reduceForWidth(points, subject){
    points.forEach(item => {
        if(item.offsetWidth <= 24){
            dailyMenuStyles.fontSize -= 2;
            changeFontSize(subject);
        }
    });
}

//сброс до основного шрифта
function enlargeFontSize(points, subject){
    points.forEach(item => {
        if(item.offsetWidth >= 200){
            dailyMenuStyles.fontSize = 18;
            changeFontSize(subject);
        }
    });
}

