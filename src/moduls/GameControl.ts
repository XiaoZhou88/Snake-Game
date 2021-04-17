import Snake from "./Snake";
import Food from "./Food";
import scorePanel from "./scorePanel";

class GameControl {
    //定义三个属性
    //蛇
    snake:Snake;
    //食物
    food:Food;
    //记分牌
    scorePanel:scorePanel;

    //创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction:string='ArrowRight';

    //创建一个属性来记录游戏是否结束
    isLive=true;


    constructor() {
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel=new scorePanel();
        this.init();
    }
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
    //调用run方法
        this.run();
    }
    keydownHandler(event:KeyboardEvent){
        this.direction=event.key;
    }
    run(){
        //获取蛇现在坐标
        let X=this.snake.X;
        let Y=this.snake.Y;

        //根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y-=10;
                break;
            case "ArrowDown":
            case "Down":
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                X+=10;
                break;
        }
        //检查蛇是否吃到了食物
          this.checkEat(X,Y);

        //修改蛇的X和Y值
        try {
            //修改蛇的X和Y值
            this.snake.X=X;
            this.snake.Y=Y;

        }catch (e) {
            alert("蛇撞墙了，game over~~");
            this.isLive=false;
        }

        //开启一个定时器
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*10);
}
//定义一个方法，用来检查是否吃到食物
    checkEat(X:number,Y:number){
        if ( X===this.food.X && Y===this.food.Y){
            //食物的位置重置
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;