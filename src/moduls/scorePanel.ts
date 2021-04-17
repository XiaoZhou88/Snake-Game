//定义表示记分牌的类
class  scorePanel{
    score=0;
    level=1;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    //设置一个最大等级值
    maxlevel:number;
    //设置一个升级制度
    maxscore:number;

    constructor(maxlevel:number=10,maxscore:number=10) {
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxlevel=maxlevel;
        this.maxscore=maxscore;
    }

    //设置一个加分的方法
    addScore(){
        //使分数自增
        this.scoreEle.innerHTML=++this.score+'';
        if (this.score%this.maxscore==0){
            this.leverup();
        }
    }
    //提升等级的方法
    leverup(){
        if (this.level<this.maxlevel){
            this.levelEle.innerHTML=++this.level+'';
        }
    }
}

//测试方法
// const score=new scorePanel(10,5);
// for ( let i=0;i<20;i++){
//     score.addScore();
// }

export default scorePanel;