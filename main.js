function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario.kill  = loadSound("kick.wav");
	mario.die = loadSound("mariodie.wav");
}
;
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);
	
}

function modalLoaded()
{
	console.log("Modal Loaded!");
}

function gotPoses(results)
{
	if (results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}






