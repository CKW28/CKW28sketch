var colors = "8ecae6-219ebc-023047-ffb703-fb8500".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){//預設值 ()內為接受參數
		this.r=args.r||random(150)//半徑數值大小//若r沒有傳參數過來則用預設值150
		this.p=args.p||{x:random(width),y:random(height)}//產生位置
		this.v={x:random(-1,1),y:random(-1,1)}//速度
		this.a=args.a||{x:0,y:0.5}
		this.color=random(colors)
	}
	draw(){
		push()
			translate(this.p.x,this.p.y)
			fill(this.color)
			ellipse(0,0,this.r);
			ellipse(-this.r/2,-this.r/2,this.r/2)
			ellipse(this.r/2,-this.r/2,this.r/2)
			fill(255)//微笑
			arc(0,0,this.r/2,this.r/2,0,PI)
			fill(0)//眼珠
			arc(0,0,this.r/3,this.r/3,0,PI)
		pop()
	}
	update(){//運動的動作
		this.p.x+=this.v.x
		this.p.y+=this.v.y
		this.v.x=this.v.x+this.a.x
		this.v.y=this.v.y+this.a.y
		this.v.x*=0.995
		this.v.y=this.v.y*0.995
		if(this.p.y>height){
			this.v.y=-abs(this.v.y)
	}
	}
}
var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<25;i++){
	ball=new Ball({})//產生一個新的ball元件()內可傳餐數
	balls.push(ball)
}
}

function draw() {
	background(100);
	noStroke()
	//for(var i=0;i<balls.length;i++){
	//let ball =balls[i]
	for(let ball of balls){//陣列取資料的寫法
	ball.draw()
	ball.update()
	}
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
