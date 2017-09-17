import './style.less';
import Icon from './1.png';

function component(){
    var element = document.createElement('div');
    element.innerHTML = 'Hello Webpack!';

    // 添加图像
    var pic = new Image();
    pic.src = Icon;

    element.appendChild(pic);

    return element;
}

document.body.appendChild(component());