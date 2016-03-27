var outangle=0;
var outanglespeed=0.03;
var inangle=0;
var inanglespeed=0.05;
var ingrowrate=[0,0,0,0];
var ingrowspeed=0.02;
var outgrowrate=[0,0,0,0];
var outgrowspeed=0.02;
var outgrownext=0.5;
var ingrownext=0.5;
var outgrowratey=0.8;
var outgrowrateyspeed=0.01; //mouseon can be faster
var outgrowrateyaccelaration=0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  noStroke();
  translate(100,100);
  push();
  rotate(PI/4+outangle);
  for(var i=0;i<outgrowrate.length;i++){
    fill(150,0,200);
    rotate(PI/2);
    ellipse(0,-15,50*outgrowrate[i],70*outgrowratey);
    outgrowrate[0]+=outgrowspeed;
    //可以試著不要依序生長出來，或是不要長出來，直接在那大大小小
    //依序生長給上面的來做就好，但上面的不會呼吸
    //想完動畫後，想互動，都用滑鼠？連結手來點花？
    if(outgrowrate[i-1]>outgrownext && i!=0){
      outgrowrate[i]+=outgrowspeed*1.6;
    }
  }
  for(var i=0;i<outgrowrate.length;i++){
    if(outgrowrate[i]>=1){
      outgrowrate[i]=1;  //可以呼吸？
    }
  }
  pop();

  push();
  blendMode(MULTIPLY);
  rotate(inangle);
  for(var i=0;i<ingrowrate.length;i++){
    fill(0,100,200);
    rotate(PI/2);
    ellipse(0,-15,50*ingrowrate[i],50*ingrowrate[i]);
    ingrowrate[0]+=ingrowspeed;
    if(ingrowrate[i-1]>ingrownext && i!=0){
      ingrowrate[i]+=ingrowspeed*1.6;
    }
    if(ingrowrate[i]>=1){
      ingrowrate[i]=1;  
    }
  }
  pop();
  
  fill(230,200,0);
  ellipse(0,0,10,10);
  outangle+=outanglespeed;
  inangle+=inanglespeed;
  //outgrowrateyspeed=0.01;
  //how to random inside draw? to breathe in different rate?
  // outgrowrateyaccelaration=random(0,0.01);
  // outgrowrateyspeed+=outgrowrateyaccelaration;
  outgrowratey+=outgrowrateyspeed;
  if(outgrowratey>1 || outgrowratey<0.8){
    outgrowrateyspeed=outgrowrateyspeed * -1;
    //outgrowratey=1;
  }

}