class Snake {
    //获取整个蛇
    element:HTMLElement;
    //表示蛇头的元素
    head:HTMLElement;
    //蛇的身体
    bodies:HTMLCollection;

    constructor() {
       this.element=document.getElementById('snake')!;
       this.head=this.element.getElementsByTagName('div')[0];
       this.bodies=this.element.getElementsByTagName('div');
    }
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value){
        if (this.X===value){
            return
        }
        if (value<0||value>290)
        {
            throw new Error('蛇撞墙了！')
        }

        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value){
            if (value>this.X){
                value=this.X-10;
            }
            else {
                value=this.X+10;
            }
        }
        //移动身体
        this.moveBody();

        this.head.style.left=value+'px';

        this.checkHeadBody();
    }
    set Y(value){
        if (this.Y===value){
            return
        }
        if (value<0||value>290)
        {
            throw new Error('蛇撞墙了！')
        }

        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value){
            if (value>this.Y){
                value=this.Y-10;
            }
            else {
                value=this.Y+10;
            }
        }
        //移动身体
        this.moveBody();

        this.head.style.top=value+'px';

        this.checkHeadBody();
    }

    //蛇增加身体的方法
    addBody(){
        //向snake里面添加div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    //添加一个蛇身体移动的位置
    moveBody(){
        for (let i=this.bodies.length-1;i>0;i--){
            //获取前边身体的位置
            // 这个地方做一个类型的断言
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        }
    }

    checkHeadBody(){
        for (let i=1;i<this.bodies.length;i++){
           let db=this.bodies[i] as HTMLElement
            if (this.X===db.offsetLeft&& this.Y===db.offsetTop){
                //进入判断，蛇头是否撞到自己
                throw new Error('撞到自己了')
            }
        }
    }
}

export default Snake;