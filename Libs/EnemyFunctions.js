function FloatingEnemy1() {
    var FloatingE1 = createSprite(10000, 10000, 10, 10);
    FloatingE1.addAnimation("Fb1", floatingEnemyS);
    FloatingE1.setCollider("circle", 0, 0, 10);

    FloatingE1.x = Math.ceil(random(windowWidth)), FloatingE1.y = Math.round(random(windowHeight / 250, windowHeight / 4));

    if (FloatingE1.x > player.x) {
        FloatingE1.mirrorX(-1);
    } else {
        FloatingE1.mirrorX(1);
    }

    FloatingE1.scale = (displayWidth + displayHeight) / 750;
    //FloatingE1.rotateToDirection = true;
    //FloatingE1.debug = true;
    FloatingE1.maxSpeed = 500;

    var rand = Math.round(random(1,2));
    switch(rand) {
        case 1: FloatingE1.attractionPoint(18, player.x, player.y);
                break;
        case 2: FloatingE1.attractionPoint(18, friend1.x, friend1.y);
                break;
        default: break;
    }

    FloatingE1.lifetime = 200;
    FloatingGroup1.add(FloatingE1);       
}

function FloatingEnemy2() {
    var FloatingE2 = createSprite(10000, 10000, 10, 10);
    FloatingE2.addAnimation("Fb2", floatingEnemyS);
    FloatingE2.setCollider("circle", 0, 0, 10);

    FloatingE2.x = Math.ceil(random(windowWidth)), FloatingE2.y = Math.round(random(windowHeight / 250, windowHeight / 4));

    if (FloatingE2.x > player.x) {
        FloatingE2.mirrorX(-1);
    } else {
        FloatingE2.mirrorX(1);
    }

    FloatingE2.scale = (displayWidth + displayHeight) / 750;
    //FloatingE2.rotateToDirection = true;
    //FriendB1.debug = true;
    FloatingE2.maxSpeed = 500;

    var rand = Math.round(random(1,2));
    switch(rand) {
        case 1: FloatingE2.attractionPoint(18, player.x, player.y);
                break;
        case 2: FloatingE2.attractionPoint(18, friend1.x, friend1.y);
                break;
        default: break;
    }

    FloatingE2.lifetime = 200;
    FloatingGroup2.add(FloatingE2);
}

function FloatingEnemy3() {
    var FloatingE3 = createSprite(10000, 10000, 10, 10);
    FloatingE3.addAnimation("Fb3", floatingEnemyS);
    FloatingE3.setCollider("circle", 0, 0, 10);

    FloatingE3.x = Math.round(random(windowWidth)), FloatingE3.y = Math.round(random(windowHeight / 250, windowHeight / 4));
    
    if (FloatingE3.x > player.x) {
        FloatingE3.mirrorX(-1);
    } else {
        FloatingE3.mirrorX(1);
    }

    FloatingE3.scale = (displayWidth + displayHeight) / 750;
    //FloatingE3.rotateToDirection = true;
    //FriendB1.debug = true;
    FloatingE3.maxSpeed = 500;

    var rand = Math.round(random(1,2));
    switch(rand) {
        case 1: FloatingE3.attractionPoint(18, player.x, player.y);
                break;
        case 2: FloatingE3.attractionPoint(18, friend1.x, friend1.y);
                break;
        default: break;
    }
    FloatingE3.lifetime = 200;
    FloatingGroup3.add(FloatingE3);
}

function spawnEnemies() {
    if (level == 3) {
        FEnemyHurt();
        FEHurtOthers();
        if (score <= 250) {
            if (frameCount % 50 === 0) {
                var rand = Math.round(random(1,3));
                switch(rand) {
                    case 1: FloatingEnemy1()
                            break;
                    case 2: FloatingEnemy2()
                            break;
                    case 3: FloatingEnemy3()
                            break;
                    default: break;
                }
                //FloatingEnemy1();
            }
        }
    }
}

// Floating Enemies Get Hurt by player or friends bullet
function FEnemyHurt() {
    if (bulletGroup.collide(FloatingGroup1)) {
        bulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (bulletGroup.collide(FloatingGroup2)) {
        bulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (bulletGroup.collide(FloatingGroup3)) {
        bulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (bulletGroup2.collide(FloatingGroup1)) {
        bulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (bulletGroup2.collide(FloatingGroup2)) {
        bulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (bulletGroup2.collide(FloatingGroup3)) {
        bulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (bulletGroup3.collide(FloatingGroup1)) {
        bulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (bulletGroup3.collide(FloatingGroup2)) {
        bulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (bulletGroup3.collide(FloatingGroup3)) {
        bulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (bulletGroup4.collide(FloatingGroup1)) {
        bulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (bulletGroup4.collide(FloatingGroup2)) {
        bulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (bulletGroup4.collide(FloatingGroup3)) {
        bulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (friendBulletGroup.collide(FloatingGroup1)) {
        friendBulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (friendBulletGroup.collide(FloatingGroup2)) {
        friendBulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (friendBulletGroup.collide(FloatingGroup3)) {
        friendBulletGroup.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (friendBulletGroup2.collide(FloatingGroup1)) {
        friendBulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (friendBulletGroup2.collide(FloatingGroup2)) {
        friendBulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (friendBulletGroup2.collide(FloatingGroup3)) {
        friendBulletGroup2.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (friendBulletGroup3.collide(FloatingGroup1)) {
        friendBulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (friendBulletGroup3.collide(FloatingGroup2)) {
        friendBulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (friendBulletGroup3.collide(FloatingGroup3)) {
        friendBulletGroup3.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }

    if (friendBulletGroup4.collide(FloatingGroup1)) {
        friendBulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup1.destroyEach();

    } else if (friendBulletGroup4.collide(FloatingGroup2)) {
        friendBulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup2.destroyEach();

    } else if (friendBulletGroup4.collide(FloatingGroup3)) {
        friendBulletGroup4.destroyEach();
        score = score + Math.round(random(5, 10));
        FloatingGroup3.destroyEach();
    }
}

// Floating Enemies Hurt Others
function FEHurtOthers() {
    if (FloatingGroup1.collide(player)) {
        health = health - Math.round(random(10, 15));
        FloatingGroup1.destroyEach();

    } else if (FloatingGroup2.collide(player)) {
        health = health - Math.round(random(10, 15));
        FloatingGroup2.destroyEach();

    } else if (FloatingGroup3.collide(player)) {
        health = health - Math.round(random(10, 15));
        FloatingGroup3.destroyEach();
    }

    if (FloatingGroup1.collide(friend1)) {
        friendHealth = friendHealth - Math.round(random(10, 15));
        FloatingGroup1.destroyEach();

    } else if (FloatingGroup2.collide(friend1)) {
        friendHealth = friendHealth - Math.round(random(10, 15));
        FloatingGroup2.destroyEach();

    } else if (FloatingGroup3.collide(friend1)) {
        friendHealth = friendHealth - Math.round(random(10, 15));
        FloatingGroup3.destroyEach();
    }
}