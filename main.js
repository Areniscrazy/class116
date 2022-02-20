 nosex=0;
 nosey=0;
function preload(){
 clown_nose=loadImage('https://i.postimg.cc/DwM4nq3C/Icon-clown-nose.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(300,300);
    video.hide()
   posenet=ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('posenet is initiazed');
}
function gotposes(results){
   if(results.length>0)
   {
       console.log (results);
       nosex=results[0].pose.nose.x-10;
       nosey=results[0].pose.nose.y-10;
   }
}
function draw(){
    image(video,0,0,300,300);
    fill("red");
    stroke("blue");
    //circle(nosex,nosey,20)
    image(clown_nose,nosex,nosey,30,30)
}
function take_snapshot(){
    save('myfilterimage.png');
}