var player, playerRun, playerIdle, playerJump;
var friend1, friendSprite;
var ground;
var InAir = 0;
var jumping =  1;
var playAnimation = 0;
var bulletGroup, bulletGroup2, bulletGroup3, bulletGroup4, bulletSprite;
var friendBulletGroup, friendBulletGroup2, friendBulletGroup3, friendBulletGroup4, friendBulletSprite;
var mana = 100;
var health = 100;
var shootTimer = 0;
var shoot = true;
var font, font1;
var backgroundImg;
var mouse, mouseImg, mouseImg2;
var friendHealth = 100;
var detectFriend = false;
var timer = 100;
var followPlayer = false;
const particles = [];
var DebugKillFriend;
var value, valueY;
var level = 1;
var gameState = "START";
var playButton, playButtonS;
var pauseButton, pauseButtonS;
var portal, portalS;
var floatingEnemyS, FloatingGroup1, FloatingGroup2, FloatingGroup3;
var wallone;
var score = 0;
var canMove = false;
var fire_wave, fire_waveS;
var textTimer = 0;
var stopTimer = false;
var LevelTimer = 0;
var shield;
var shield_up = false;
var portalS2;
var jewel, jewelS;
var jail, jailS;
var boo, booS
var lockJewel = false;
var hiddenOne;
var stopOne = false;
var bossCanShoot = false;
var bossHealth = 200;

//texts
var FD1 = "You have defeated me, so \nI will protect and help \nyou till you finish your quest.";
var FD2 = "Just a second, I will summon the portal";

var block1, block2, block3;
// var floatingEnemy1;

function preload() {
  playerRun = loadAnimation("Player/run/run_1.png", "Player/run/run_2.png", "Player/run/run_3.png", "Player/run/run_4.png");
  playerIdle = loadImage("Player/idle/idle_1.png");
  playerJump = loadImage("Player/jump/jump_2.png");
  bulletSprite = loadImage("images/fireball.png");
  font = loadFont("Fonts/inverted.ttf");
  //font1 = loadFont("Fonts/lightpixel7.ttf");
  font1 = loadFont("Fonts/inverted3.otf");
  font2 = loadFont("Fonts/inverted4.ttf");
  backgroundImg = loadImage("images/background1.png");
  friendSprite = loadAnimation("Enemy/B Flame 1.png", "Enemy/B Flame 2.png", "Enemy/B Flame 3.png", "Enemy/B Flame 4.png", "Enemy/B Flame 5.png", "Enemy/B Flame 6.png", "Enemy/B Flame 7.png", "Enemy/B Flame 8.png", "Enemy/B Flame 9.png", "Enemy/B Flame 10.png", "Enemy/B Flame 11.png", "Enemy/B Flame 12.png");
  friendBulletSprite = loadImage("images/fireball2.png");
  mouseImg = loadImage("images/cursorOne.png");
  mouseImg2 = loadImage("images/cursorTwo.png");
  playButtonS = loadImage("buttons/play.png");
  pauseButtonS = loadImage("buttons/pause.png");
  portalS = loadAnimation("greenPortal/tile000.png", "greenPortal/tile001.png", "greenPortal/tile002.png", "greenPortal/tile003.png", "greenPortal/tile004.png", "greenPortal/tile005.png", "greenPortal/tile006.png", "greenPortal/tile007.png");
  floatingEnemyS = loadAnimation("skullEnemy/frame0000.png", "skullEnemy/frame0001.png", "skullEnemy/frame0002.png", "skullEnemy/frame0003.png", "skullEnemy/frame0004.png", "skullEnemy/frame0005.png", "skullEnemy/frame0006.png", "skullEnemy/frame0007.png", "skullEnemy/frame0008.png", "skullEnemy/frame0009.png", "skullEnemy/frame0010.png", "skullEnemy/frame0011.png", "skullEnemy/frame0012.png", "skullEnemy/frame0013.png", "skullEnemy/frame0014.png", "skullEnemy/frame0015.png")
  fire_waveS = loadImage("images/fire_wave.png");
  portalS2 = loadImage("images/Key.png")
  jewelS = loadImage("images/Diamond.png");
  jailS = loadImage("images/jail.png");
  booS = loadAnimation("boo/tile000.png", "boo/tile001.png", "boo/tile002.png", "boo/tile003.png");
}

function setup() {
  //createCanvas(displayWidth, displayHeight - 105);
  canvas = createCanvas(windowWidth, windowHeight);
  
  player = createSprite(1000000, 1000000);
  player.addImage("Player", playerIdle);
  player.scale = (windowWidth + windowHeight) / 5000;
  player.setCollider("rectangle", 0, 22, 275, 355);

  DebugKillFriend = createSprite(windowWidth / 24, windowHeight / 5.5);

  ground = createSprite(1000000000, 1000000000, windowWidth + 20, 50);

  friend1 = createSprite(1000000, 1000000);
  friend1.addAnimation("friend", friendSprite);
  friend1.scale = (windowWidth + windowHeight) / 10000;
  friend1.setCollider("circle", 0, 15, 150);

  portal = createSprite(1000000, 1000000);
  portal.addAnimation("portal", portalS);
  portal.scale = (windowWidth + windowHeight) / 17500;
  portal.mirrorX(-1);
  //portal.debug = true;
  portal.setCollider("rectangle", 0, 0);
  portal.visible = false;
  
  bulletGroup = createGroup();
  bulletGroup2 = createGroup();
  bulletGroup3 = createGroup();
  bulletGroup4 = createGroup();

  friendBulletGroup = createGroup();
  friendBulletGroup2 = createGroup();
  friendBulletGroup3 = createGroup();
  friendBulletGroup4 = createGroup();

  FloatingGroup1 = createGroup();
  FloatingGroup2 = createGroup();
  FloatingGroup3 = createGroup();

  BossBGroup1 = createGroup();
  BossBGroup2 = createGroup();

  playButton = createSprite(10000, 10000);
  playButton.addImage("Play", playButtonS);
  playButton.scale = (windowWidth + windowHeight) / 4000;
  playButton.setCollider("circle", 0, -2.25);
  //playButton.debug = true;

  pauseButton = createSprite(windowWidth / 1.075, windowHeight / 8);
  pauseButton.addImage("Pause", pauseButtonS);
  pauseButton.scale = (windowWidth + windowHeight) / 7250;
  // pauseButton.debug = true;
  pauseButton.setCollider("circle", 0, 0);
  //pauseButton.visible = false;

  jewel = createSprite(1000000, 1000000);
  jewel.addImage("jewel", jewelS);
  //jewel.debug = true;
  jewel.scale = 0.15;

  jail = createSprite(1000000, 1000000);
  jail.addImage("jail", jailS);
  jail.scale = 0.75;

  mouse = createSprite(mouseX, mouseY);
  mouse.addImage("mouse", mouseImg);
  mouse.scale = (windowWidth + windowHeight) / 15000;
  mouse.rotation = 20;

  // floatingEnemy1 = createSprite(windowWidth / 2, windowHeight / 2);
  // floatingEnemy1.addAnimation("FE1", floatingEnemyS);
  // floatingEnemy1.setCollider("circle", 0, 0, 10);
  // floatingEnemy1.scale = (displayWidth + displayHeight) / 750;
  // floatingEnemy1.debug = true;

  wallone = createSprite(windowWidth / -150, windowHeight / 2, 50, windowHeight + 20);

  fire_wave = createSprite(10000000, windowHeight / 2);
  fire_wave.addImage("fire_wave", fire_waveS);
  //fire_wave.debug = true;
  
  fire_wave.scale = 20;

  boo = createSprite(1000000, 1000000);
  boo.addAnimation("boo", booS);
  //boo.debug = true;
  boo.setCollider("circle", 1, 2.5, 22.5);
  boo.scale = 3;

  shield = createSprite(7100, windowHeight * 1.1 + 500, 50, windowHeight + 20);
  //shield.debug = true

  hiddenOne = createSprite(windowWidth / 2, windowHeight / 2, 25, windowHeight);

  Hide();
}

function draw() {
  background(backgroundImg);
  //background("black");

  if (gameState == "START") {
    StartMenu();
    mouse.x = mouseX + 5.25;
    mouse.y = mouseY + 20;
    cursor("none");
    MouseOver();
  }

  if (gameState == "PLAY") {
    //showCursor();
    cursor("crosshair");0
    mouse.visible = false;
    PlayMenu();
    detect();
    playerMove();
    Attack();
    Words();
    bulletDestroy();
    ParticleRun();
    MouseOver();
    LevelFinish();
    LevelDetector();
    player.collide(shield);

    if (bossCanShoot == true) {
      bossShoot();
    }


    if (detectFriend == true) {
      if (followPlayer == true) {
        FollowPlayer();
      }
    }

    boo.x = jewel.x - 100;

    
  }

  if (gameState == "PAUSE") {
    PauseMenu();
    MouseOver();
    mouse.x = mouseX + 5.25;
    mouse.y = mouseY + 20;
    cursor("none");
    mouse.visible = true;
  }
  drawSprites();

}

// function touchStarted(event) {
//   console.log(event);
// }