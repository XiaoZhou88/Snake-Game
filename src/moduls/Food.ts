//定义食物food类
class Food{
    //定义一个属性表示事物所对应的元素
    element:HTMLElement;

    constructor() {
        this.element=document.getElementById('food')!;
    }
    //定义一个获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    // 修改食物的位置方法
    change(){
        //生成一个随机的位置
        //食物的位置最小是0，最大是290
        let top= Math.round(Math.random()*29)*10;
        let left= Math.round(Math.random()*29)*10;

        this.element.style.left=left+'px';
        this.element.style.top=top+'px';
    }
}

//测试代码
// const food=new Food();
// food.change();
// console.log(food.X,food.Y);

//将food作为一个接口暴露
export default Food;