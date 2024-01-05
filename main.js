var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100 ;
canvas.height = window.innerHeight - 100;

var size=50;

var size2 = 50;

var img_Sad = new Image();
img_Sad.src= 'IMG_6159.jpg'

var cannon = new Image();
cannon.src = 'URFU.jpg'

var RATE = 600
var background_sound = new Audio('holy.wav')

var img_bg3 = new Image();
img_bg3.src = 'DEOS.jpg'

var jump_sound = new Audio('hyundai.mp3')

var another = new Audio('test.wav')

var gae_soung = new Audio('movie_1.mp3')

var end_img = new Image();
end_img.src = 'NOWAY.jpg'

var img_background = new Image();
img_background.src = 'BIG.jpg'

var stage3_cancer = new Audio('stage3 cancer.wav');

var woei = new Image();
woei.src = 'we are going down.jpg'

var son = {
    x:0,
    y:0,
    width:canvas.width/1.3,
    height:canvas.height/2,
    draw(){
        ctx.drawImage(woei, this.x, this.y, this.width, this.height);
    }
}


var messi = {
    x:0,
    y:0,
    width:canvas.width/1.3,
    height:canvas.height/2,
    draw(){
        ctx.drawImage(img_bg3, this.x, this.y, this.width, this.height);
    }
}

var canu = {
    x:0,
    y:0,
    width:canvas.width/1.3,
    height:canvas.height/2,
    draw(){
        ctx.drawImage(cannon, this.x, this.y, this.width, this.height);
    }
}

var back = {
    x:0,
    y:0,
    width:canvas.width/1.3,
    height:canvas.height/2,
    draw(){
        ctx.drawImage(img_background, this.x, this.y, this.width, this.height);
    }
}


var pepe = {
    x:0,
    y:0,
    width:canvas.width/1.3,
    height:canvas.height/2,
    draw(){
        ctx.drawImage(img_Sad, this.x, this.y, this.width, this.height);
    }
}


var img_user=[]
var img_user1 = new Image();
img_user1.src = 'gif0.png';
var img_user2 = new Image();
img_user2.src = 'gif1.png';
var img_user3 = new Image();
img_user3.src = 'gif3.png';
var img_user4= new Image();
img_user4.src = 'gif4.png';
var img_user5 = new Image();
img_user5.src = 'gif5.png';
var img_user6 = new Image();
img_user6.src = 'gif6.png';
var img_user7 = new Image();
img_user7.src = 'gif8.png'
var img_user8 = new Image();
img_user8.src = 'gif9.png';
img_user=[img_user1,img_user2,img_user3,img_user4,img_user5,img_user6,img_user7, img_user8,];
var user = {
    x:10,
    y:250,
    width:60,
    height:60,
    img_index:0,
    draw(a){
        //ctx.fillStyle = 'green';
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        if(a%5==0){//5프레이마다(0,1,2,3,4 이후 1씩 img_index 증가)
            this.img_index = (this.img_index+1)%8
        }
        if(user.y<250){//점프모션
        ctx.drawImage(img_user[4],this.x,this.y,this.width,this.height);
        }
        else{
        ctx.drawImage(img_user[this.img_index], this.x, this.y, this.width, this.height);
    }
}

}

user.draw(0);
var img_bomb = new Image();
img_bomb.src = '1.png';


class Bomb{
    constructor(){
        this.x=1000;
        this.y=250;
        this.width=size2;
        this.height=size;
        

    }
    draw(){

        //ctx.fillStyle = 'white';
        //ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(img_bomb, this.x, this.y, this.width, this.height);
    }
}

//var bomb = new Bomb();
//bomb.draw()
var timer = 0
var bombs = []
var jumpingtimer = 0; //60프레임 세어주는 변수
var animation;
function frameSecond(){
    
    //1초마다 60번 코드 실행
    animation = requestAnimationFrame(frameSecond);
//ser.x++;
//프레임 돌때마다 프레임에 있는 요소를 clear 해주는 함수
timer++;
gamescore();

if(timer>600){
    background_sound.pause();
    another.play();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    sped=25;
    RATE=180
    canu.draw();
    ctx.fillStyle = 'black'
    ctx.font = '60px 맑은 고딕';

    ctx.fillText('나르는 이재학',
    200, 200);
    ctx.fillStyle = 'red'
    ctx.font = '60px 맑은 고딕';

    ctx.fillText('DANGER',
    canvas.width/6, canvas.height/6);
}
if(timer>1200){
    another.pause();

    stage3_cancer.play();
    ctx.clearRect(0, 0,canvas.width, canvas.height);
    sped=10;
    RATE=60;
    messi.draw();
    ctx.fillStyle = 'black'
    ctx.font = '60px 맑은 고딕';

    ctx.fillText('나르는 이재학',
    200, 200);

}
if(timer>1800){
    another.pause();

    stage3_cancer.pause();
    gae_soung.play();
    son.draw();
    sped = 40;

    RATE=30;
    ctx.clearRect(0, 0,canvas.width, canvas.height);
    son.draw();

    ctx.fillStyle = 'red'
    ctx.font = '80px 맑은 고딕';

    ctx.fillText('GOOD BYE',
    canvas.width/6, canvas.height/6);
    
}
if(timer>2400){
    gae_soung.pause();
    pepe.draw();
    ctx.clearRect(0, 0,canvas.width, canvas.height);
    pepe.draw();
    ctx.fillStyle = 'red'

    ctx.font = '80px 맑은 고딕';

    ctx.fillText('YOU SURVIVED, NOW GET OUT',
    canvas.width/6, canvas.height/6);
            cancelAnimationFrame(animation);

    
}
if(timer<=600){
background_sound.play();//배경음악 재생
ctx.clearRect(0,0,canvas.width, canvas.height);
back.draw();
ctx.fillStyle = 'black'
    ctx.font = '60px 맑은 고딕';

    ctx.fillText('나르는 이재학',
    200, 200);

//배경추가
}


if(timer%RATE==0){
    var bomb = new Bomb();
    bombs.push (bomb);
    
}
bombs.forEach((b, i, o)=>{
    if(b.x<0){
        //i가 가리키는 값에서 부터 1개 삭제
        o.splice(i,1);
    }
    b.x=b.x-sped;
    //bomb 점수 추가
    bomb_gamescore(b.x);
    collision(user,b);
    b.draw();

})
//점프
    if ( jumping == true ) {
    user.y=user.y-5; 
    jumpingtimer++;

    
    
   }
   if(jumpingtimer>30){
    jumping = false;
    jumpingtimer = 0;
    
   }
   if(jumping == false &&user.y < 250){
    user.y=user.y+sped+3
   }
   user.draw(timer);
       gamescore();
       bomb_gamescore();



}

frameSecond();

function collision(user, bomb){
    var x_diff = bomb.x - (user.x+user.width);
    var y_diff = bomb.y - (user.y+user.height);
    if(x_diff < 0 && y_diff<0){
        //프ㅔ링ㅁ 돌ㄷ매ㅏ다 프레임에 있는 요소들 clear 해준느 함수
        //ctx.clearRect(0,0,canvas.width, canvas.height);
        user.y=user.y-200;
        user.x=user.x+200 
        var damm = {
            x:0,
            y:0,
            width:canvas.width/1.3,
            height:canvas.height/2,
            draw(){
                ctx.drawImage(end_img, this.x, this.y, this.width, this.height);
            }
        }
        damm.draw();
        ctx.fillStyle = 'red'
        ctx.font = '60px 맑은 고딕';
           
        ctx.fillText('BRUH',
        canvas.width/6, canvas.height/6);
        background_sound.pause();
        another.pause();
        gae_soung.play();
        cancelAnimationFrame(animation);
        stage3_cancer.pause();
         
    }

}
//사랑은 언제나 눈물이되어 가슴에 남아 떠나지도 못한체 또 눈 앞에 맴도네 우리 사랑했었던  
var jumping = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jumping = true; 
        jump_sound.play();
        
    }
})

function gamescore(){
    ctx.font = '20px 맑은 고딕'
    ctx.fillStyle = 'white'
    ctx.fillText('time: ' + Math.round(timer/100), 10, 30);
    
    
}

var sped =2;
function bomb_gamescore(x){
   if(x==0){
    sped=sped+3;       
}
    
}
