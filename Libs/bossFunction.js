function bossShoot() {
    BossBHurt();
    BBHurtOthers();
    if (bossHealth >= 0) {
        BossHurt()
    }


    if (boo.scale == 5) {
        if (bossHealth >= 0) {
            if (frameCount % 50 === 0) {
                var rand = Math.round(random(1,2));
                switch(rand) {
                    case 1: bossBulletOne()
                            break;
                    case 2: bossBulletTwo()
                            break;
                    default: break;
                }
            }
        }
    }
}

function bossBulletOne() {
    var BBOne = createSprite(10000, 10000, 10, 10);
    BBOne.addAnimation("Fbullet1", booS);
    BBOne.setCollider("circle", 100, 0, 100);
    BBOne.x = boo.x, BBOne.y = boo.y;
    BBOne.scale = (displayWidth + displayHeight) / 2100;
    //BBOne.rotateToDirection = true;
    //FriendB1.debug = true;
    BBOne.maxSpeed = 500;
    BBOne.attractionPoint(12, player.x, player.y);
    BBOne.lifetime = 200;
    BossBGroup1.add(BBOne);
}

function bossBulletTwo() {
    var BBTwo = createSprite(10000, 10000, 10, 10);
    BBTwo.addAnimation("Fbullet1", booS);
    BBTwo.setCollider("circle", 100, 0, 100);
    BBTwo.x = boo.x, BBTwo.y = boo.y;
    BBTwo.scale = (displayWidth + displayHeight) / 2100;
    //BBTwo.rotateToDirection = true;
    //FriendB1.debug = true;
    BBTwo.maxSpeed = 500;
    BBTwo.attractionPoint(12, player.x, player.y);
    BBTwo.lifetime = 200;
    BossBGroup2.add(BBTwo);
}

function BossBHurt() {
    if (bulletGroup.collide(BossBGroup1)) {
        bulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (bulletGroup.collide(BossBGroup2)) {
        bulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (bulletGroup2.collide(BossBGroup1)) {
        bulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (bulletGroup2.collide(BossBGroup2)) {
        bulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (bulletGroup3.collide(BossBGroup1)) {
        bulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (bulletGroup3.collide(BossBGroup2)) {
        bulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (bulletGroup4.collide(BossBGroup1)) {
        bulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (bulletGroup4.collide(BossBGroup2)) {
        bulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (friendBulletGroup.collide(BossBGroup1)) {
        friendBulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (friendBulletGroup.collide(BossBGroup2)) {
        friendBulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (friendBulletGroup2.collide(BossBGroup1)) {
        friendBulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (friendBulletGroup2.collide(BossBGroup2)) {
        friendBulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (friendBulletGroup3.collide(BossBGroup1)) {
        friendBulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (friendBulletGroup3.collide(BossBGroup2)) {
        friendBulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup2.destroyEach();

    }

    if (friendBulletGroup4.collide(BossBGroup1)) {
        friendBulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        BossBGroup1.destroyEach();

    } else if (friendBulletGroup4.collide(BossBGroup2)) {
        friendBulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
         BossBGroup2.destroyEach();
    }
}

function BBHurtOthers() {
    if (BossBGroup1.collide(player)) {
        health = health - Math.round(random(10, 15));
        BossBGroup1.destroyEach();

    } else if (BossBGroup2.collide(player)) {
        health = health - Math.round(random(10, 15));
        BossBGroup2.destroyEach();

    }

    if (BossBGroup1.collide(friend1)) {
        friendHealth = friendHealth - Math.round(random(10, 15));
        BossBGroup1.destroyEach();

    } else if (BossBGroup2.collide(friend1)) {
        friendHealth = friendHealth - Math.round(random(10, 15));
        BossBGroup2.destroyEach();

    }
}

function BossHurt() {
    if (bulletGroup.collide(boo)) {
        bulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    }

    if (bulletGroup2.collide(boo)) {
        bulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    }

    if (bulletGroup3.collide(boo)) {
        bulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    } 

    if (bulletGroup4.collide(boo)) {
        bulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    } 

    if (friendBulletGroup.collide(boo)) {
        friendBulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    } 

    if (friendBulletGroup2.collide(boo)) {
        friendBulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    } 

    if (friendBulletGroup3.collide(boo)) {
        friendBulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    } 

    if (friendBulletGroup4.collide(boo)) {
        friendBulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        bossHealth = bossHealth - Math.round(random(10, 15));

    } 
}