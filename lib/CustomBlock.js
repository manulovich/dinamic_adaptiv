class CustomBlock {

    customRectangleRender() {
        //поиск узлов
        let node = document.querySelectorAll('.custom-rectange');

        node.forEach(element => {
            let width = element.getAttribute('width');
            let bgColor = element.getAttribute('bg-color');
            let content = element.innerHTML;

            const html = `
                <canvas class="custom-rectange__canvas custom-rectange__canvas--left"></canvas>
                <div class="custom-rectange__main">${content}</div>
                <canvas class="custom-rectange__canvas custom-rectange__canvas--right"></canvas>
            `;

            element.innerHTML = html;



            //высота основного контента
            let height = element.children[1].getBoundingClientRect().height;

            element.children[1].style.backgroundColor = bgColor;

            //рисоване canvas
            let canvas = [element.children[0], element.children[2]];

            canvas.forEach((item) => {
                //редактирование блока canvas
                item.style.height = height + 'px';
                item.style.width = width + 'px';

                //редактирование canvas
                item.width = width;
                item.height = height;

                let ctx = item.getContext('2d');

                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);

                ctx.clearRect(0, 0, width, width);
                ctx.clearRect(0, height - width, width, width);

                //вверх
                ctx.beginPath();
                ctx.moveTo(0, width);
                ctx.arcTo(width, width, width, 0, width);
                ctx.lineTo(width, width);
                ctx.lineTo(0, width);
                ctx.fill();

                //низ
                ctx.beginPath();
                ctx.moveTo(0, height - width);
                ctx.arcTo(width, height - width, width, height, width);
                ctx.lineTo(width, height - width);
                ctx.closePath();
                ctx.fill();
            });

        });
    }
}