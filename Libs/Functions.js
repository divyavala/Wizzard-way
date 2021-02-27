function detect() {
    player.collide(ground);
    player.collide(wallone);
    player.collide(shield);
    jail.collide(ground);
    player.collide(jail);

    //Player Damage
    if (detectFriend == false) {
        if (friendBulletGroup.isTouching(player)) {
            health = health - 10;
            friendBulletGroup.destroyEach();

        } else if (friendBulletGroup2.isTouching(player)) {
            health = health - 10;
            friendBulletGroup2.destroyEach();

        } else if (friendBulletGroup3.isTouching(player)) {
            health = health - 10;
            friendBulletGroup3.destroyEach();

        } else if (friendBulletGroup4.isTouching(player)) {
            health = health - 10;
            friendBulletGroup4.destroyEach();

        }
    }

    //When the enemy becomes friend it will stop
    if (detectFriend == false) {
        if (bulletGroup.isTouching(friend1)) {
            friendHealth = friendHealth - 10;
            score = score + Math.round(random(2, 4));
            bulletGroup.destroyEach();

        } else if (bulletGroup2.isTouching(friend1)) {
            friendHealth = friendHealth - 10;
            score = score + Math.round(random(2, 4));
            bulletGroup2.destroyEach();

        } else if (bulletGroup3.isTouching(friend1)) {
            friendHealth = friendHealth - 10;
            score = score + Math.round(random(2, 4));
            bulletGroup3.destroyEach();

        } else if (bulletGroup4.isTouching(friend1)) {
            friendHealth = friendHealth - 10;
            score = score + Math.round(random(2, 4));
            bulletGroup4.destroyEach();

        }
    }

    //Player can't move if canMove is false
    if (canMove == false) {
        player.velocityX = 0;
        player.addImage("Player", playerIdle);
        playAnimation = 0;
    }

    //Health will not go into negatives
    if (health <= 0) {
        health = 0;
    }

    //When enemy is not a friend then this work
    if (detectFriend == false) {
        if (friendHealth <= 0) {
            friendHealth = 0;
            friend1.y = friend1.y + 2;
            friend1.collide(ground);
            canMove = false;
        }
    }

    //if friend health is 0 then the dialog
    if (detectFriend == false) {
        if (friendHealth <= 0) {
            timer = timer - 0.5;
            friendHealth = 0;
        }
    }

    //This will work if the level and this is the logic
    if (level == 2) {
        if (timer <= -50) {
            health = 100;
            friend1.scale = (windowWidth + windowHeight) / 14000;
            followPlayer = true;
        }

        if (timer <= -80) {
            portal.x = windowWidth / 1.25;
            portal.y = windowHeight / 1.25;
            portal.visible = true;
            timer = 100;
            friendHealth = 100;
            detectFriend = true;
            canMove = true;
        }
    }

    //Summon Portal on level 3
    if (level == 3) {
        if (score >= 250) {
            portal.x = windowWidth / 1.25;
            portal.y = windowHeight / 1.25;
            portal.visible = true;
        }
    }

    //Summon key to summon the shield in level 4
    if (level == 4 && shield_up == false) {
        portal.x = 7400;
        portal.y = windowHeight / 1.25;
        //portal.visible = true;
    }

    //The shield will not move if the 
    if (shield.y <= windowHeight / 2){
        shield.velocityY = 0;
    }

    if (fire_wave.isTouching(player)) {
        if (frameCount % 150 === 0) {
            health = health - 5;
        }
    }

    // if (timer <= -75) {
    //     followPlayer = true;
    //     timer = 100;
        
    // }
}

function bulletDestroy() {

    if (followPlayer == false) { 

        if (friendBulletGroup.isTouching(bulletGroup)) {
            friendBulletGroup.destroyEach();
            bulletGroup.destroyEach();
        } else if (friendBulletGroup2.isTouching(bulletGroup)) {
            friendBulletGroup2.destroyEach();
            bulletGroup.destroyEach();
        } else if (friendBulletGroup3.isTouching(bulletGroup)) {
            friendBulletGroup3.destroyEach();
            bulletGroup.destroyEach();
        } else if (friendBulletGroup4.isTouching(bulletGroup)) {
            friendBulletGroup4.destroyEach();
            bulletGroup.destroyEach();
        }

        if (friendBulletGroup.isTouching(bulletGroup2)) {
            friendBulletGroup.destroyEach();
            bulletGroup2.destroyEach();
        } else if (friendBulletGroup2.isTouching(bulletGroup2)) {
            friendBulletGroup2.destroyEach();
            bulletGroup2.destroyEach();
        } else if (friendBulletGroup3.isTouching(bulletGroup2)) {
            friendBulletGroup3.destroyEach();
            bulletGroup2.destroyEach();
        } else if (friendBulletGroup4.isTouching(bulletGroup2)) {
            friendBulletGroup4.destroyEach();
            bulletGroup2.destroyEach();
        }

        if (friendBulletGroup.isTouching(bulletGroup3)) {
            friendBulletGroup.destroyEach();
            bulletGroup3.destroyEach();
        } else if (friendBulletGroup2.isTouching(bulletGroup3)) {
            friendBulletGroup2.destroyEach();
            bulletGroup3.destroyEach();
        } else if (friendBulletGroup3.isTouching(bulletGroup3)) {
            friendBulletGroup3.destroyEach();
            bulletGroup3.destroyEach();
        } else if (friendBulletGroup4.isTouching(bulletGroup3)) {
            friendBulletGroup4.destroyEach();
            bulletGroup3.destroyEach();
        }

        if (friendBulletGroup.isTouching(bulletGroup4)) {
            friendBulletGroup.destroyEach();
            bulletGroup4.destroyEach();
        } else if (friendBulletGroup2.isTouching(bulletGroup4)) {
            friendBulletGroup2.destroyEach();
            bulletGroup4.destroyEach();
        } else if (friendBulletGroup3.isTouching(bulletGroup4)) {
            friendBulletGroup3.destroyEach();
            bulletGroup4.destroyEach();
        } else if (friendBulletGroup4.isTouching(bulletGroup4)) {
            friendBulletGroup4.destroyEach();
            bulletGroup4.destroyEach();
        }
    }
}

function FollowPlayer() {
    if (followPlayer == true) {
        if (detectFriend == true) {
            if (player.velocityX == 7) {
                friend1.velocity.x = (player.x - 25 - friend1.position.x) * 0.15;
            } else if (player.velocityX == -7){
                friend1.velocity.x = (player.x + 25 - friend1.position.x) * 0.15;
            } else {
                friend1.velocity.x = (player.x - friend1.position.x) * 0.15;
            }

            friend1.velocity.y = (player.y - 100 - friend1.position.y) * 0.2;
        }
    }
}

function ParticleRun() {
    for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
      }

    for (let i = particles.length - 1; i >= 0; i--) {
        if (detectFriend == false) {
            particles[i].updateOne();
        } else {
            particles[i].updateTwo();
        }
        particles[i].show();
        if (particles[i].finished()) {
          // remove this particle
          particles.splice(i, 1);
        }
    }
}

function MouseOver() {
    if (mouseIsOver(playButton)) {
        mouse.addImage("mouse", mouseImg2);
        mouse.rotation = 0;
    } else {
        mouse.addImage("mouse", mouseImg);
        mouse.rotation = 20;
    }
    
    if (gameState == "PLAY") {
        if (mouseIsOver(pauseButton)) {
            cursor("cell");
            // mouse.addImage("mouse", mouseImg2);
            // mouse.rotation = 0;
        } else {
            cursor("crosshair");
        }
    }
    
}

function Hide() {
    player.visible = false;
    pauseButton.visible = false;
    friend1.visible = false;
    ground.visible = false;
    wallone.visible = false;
    //fire_wave.visible = false;
    hiddenOne.visible = false;
}

function UnHide() {
    player.visible = true;
    pauseButton.visible = true;
    //friend1.visible = true;
    ground.visible = true;
    wallone.visible = true;
}

function LevelFinish() {
    if (player.isTouching(portal)) {
        if (level == 1) {
            LevelTwo();
        }

        if (level == 2) {
            LevelThree();
        }

        if (level == 3) {
            LevelFour();
            level = 2.5;
            
        }

        if (level != 4) {
            level = level + 1;
            portal.x = 1000000;
            portal.y = 1000000;
        }

        if (level == 4) {
            portal.x = 1000000;
            portal.y = 1000000;
            shield_up = true;
        }

        if (level == 4 && shield.y !== windowHeight / 2) {
            shield.y = windowHeight / 2;
        }
        
    }
}