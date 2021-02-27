function LevelOne() {
    player.x = windowWidth / 12; 
    player.y = windowHeight / 1.25;
    ground.x = windowWidth / 2; 
    ground.y = height;
    portal.x = windowWidth / 1.25;
    portal.y = windowHeight / 1.25;
    portal.visible = true;
}

function LevelTwo() {
    player.x = windowWidth / 12; 
    player.y = windowHeight / 1.25;
    ground.x = windowWidth / 2; 
    ground.y = height;
    //ground.visible = false;
    friend1.x = windowWidth / 1.5;
    friend1.y = windowHeight / 3;
    friend1.visible = true;
}

function LevelThree() {
    player.x = windowWidth / 12; 
    player.y = windowHeight / 1.25;
    ground.x = windowWidth / 2; 
    ground.y = height;
    
}

function LevelFour() {
    player.x = windowWidth / 12; 
    player.y = windowHeight / 1.25;
    fire_wave.visible = true;
    fire_wave.x = -windowWidth;
    portal.visible = true;
}

function LevelDetector() {

    if (level == 2) {
        FriendShoot();
    }
  
    if (level == 3) {
        spawnEnemies();
    }

    if (level == 3.5) {
      timer = timer - 5;
      canMove = false;
      camera.x = camera.x - 10;
      //Camera(0, 0, -5);
      if (timer == -600) {
        level = 4;
        canMove = true;
        timer = 100
      }
    }

    if (level == 4) {
      camera.x = player.x;
      ground.x = camera.x;
      pauseButton.x = camera.x + 825;
      LevelTimer = LevelTimer + 1;
      if (LevelTimer >= 0 && LevelTimer <= 200) {
        fire_wave.velocityX = Math.ceil((windowWidth + windowHeight) / 325);
      } else if (LevelTimer >= 300) {
        fire_wave.velocityX = Math.ceil((windowWidth + windowHeight) / 250);
      }
    }
    
    
    if (level == 4) {
      if (fire_wave.isTouching(shield)) {
        fire_wave.visible = false;
        fire_wave.velocityX = 0;
        fire_wave.x = 100000;
        fire_wave.y = 100000;
      }
  
      if (shield.y == windowHeight / 2) {
          timer = timer - 2;
    
        if (timer <= 25) {
          level = 5;
          player.x = 160;
          shield.y = windowHeight * 1.1 + 500;
          camera.x = windowWidth / 2;
          camera.y = windowHeight / 2;
          ground.x = camera.x
          timer = 100;
        }
      }
    }
  
    if (level == 4) {
      portal.addImage("portal", portalS2);
    }

    if (level == 5) {
      portal.addAnimation("portal", portalS);
      jewel.x = windowWidth / 1.15;
      jewel.y = windowHeight / 1.25
      pauseButton.x = 1786.046511627907;
      pauseButton.y = 117.125;


    if (player.isTouching(hiddenOne)) {
        canMove = false;
        jail.velocityY = 4;
        jail.x = jewel.x;
        jail.y = windowHeight / 16;
        hiddenOne.x = 1000000;
        hiddenOne.y = 1000000;
        boo.x = jewel.x - 100;
        boo.y = jewel.y - 1000;
        stopTimer = false;
        boo.velocityY = 4;
    }

    if (stopTimer == false) {
      timer = timer - 1;
    }

    if (timer <= -40 && timer >= -60) {
      boo.velocityY = 0;
    }
    
    if (stopOne == false) {
      if (timer <= -70) {
        textTimer = textTimer + 1;
      }
    }

    if (textTimer >= 225) {
      stopTimer = true;
      timer = 100;
      boo.x = windowWidth / 2;
      stopOne = true;
      canMove = true;
      boo.scale = 5;
      textTimer = 0;
      bossCanShoot = true;
    }
  }
}