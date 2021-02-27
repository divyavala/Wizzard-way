function Words() {

    if (level == 1) {
        textSize(25);
        textFont(font);
        fill("white");
        text("Reminder:\n You can use the key [A] or \n the [Left Arrow] Key to move left!\n You can use the key [D] or \n the [Right Arrow] Key to move left! \n You can Jump by using the [Space Bar]", windowWidth / 8, windowHeight / 3);
    }

    if (level == 2) {
        textSize(25);
        textFont(font);
        fill("white");
        text("Left Click to Shoot!", windowWidth / 8, windowHeight / 2);
    }

    if (detectFriend == false) {
        textSize(25);
        textFont(font);
        fill("white");
        //textStyle("Bold Italic");
        text("Health:"+ health, 25, 35);
        text("Mana:" + mana, 25, 70);
        text("Score:" + score, 25, 105);
        text("Level:" + level, 25, 140);
        //text("Timer:" + textTimer, 500, 35)
    }
    
    if (detectFriend == true) {
        if (level !== 4) {
            textSize(25);
            textFont(font);
            fill("white");
            //textStyle("Bold Italic");
            text("Health:"+ health, 25, 35);
            text("Friend Health:"+ friendHealth, 25, 70);
            text("Score:" + score, 25, 105);
            text("Mana:" + mana, 25, 140);
            text("Level:" + level, 25, 175);
            //text("Timer:" + textTimer, 500, 35)
        }

        if (level == 4) {
            textSize(25);
            textFont(font);
            fill("white");
            //textStyle("Bold Italic");
            text("Health:"+ health, camera.x - 935, 35);
            text("Friend Health:"+ friendHealth, camera.x - 935, 70);
            text("Score:" + score, camera.x - 935, 105);
            text("Mana:" + mana, camera.x - 935, 140);
            text("Level:" + level, camera.x - 935, 175);
            text("RUN!!!!!!!", windowWidth / 4, windowHeight / 2);
            //text("Player X:" + player.x, camera.x - 935, 210);
        }
    }

    if (level == 2) {
        if (timer <= 50 && timer >= -46) {
            //detectFriend = true;
            textSize(22);
            textFont(font);
            fill("white");
            if (stopTimer == false) {
                if (textTimer >= 0 && textTimer <= 84) {
                    textTimer = textTimer + 1;
                }
            }

            if (textTimer >= 84) {
                stopTimer = true;
            }

            if (stopTimer == true && textTimer >= -26) {
                textTimer = textTimer - 1;
            }

            if (textTimer <= -26) {
                stopTimer = false;
                textTimer = 0;
            }

            text(FD1.substring(0, textTimer), friend1.x - 200, friend1.y - 250)
            //text(source, friend1.x - 200, friend1.y - 250);
        }

        if (timer <= -46 && timer >= -75) {
            //detectFriend = true;
            textSize(22);
            textFont(font);
            fill("white");
            text(FD2.substring(0, textTimer), friend1.x - 200, friend1.y - 200);

            if (stopTimer == false) {
                if (textTimer >= 0 && textTimer <= 45) {
                    textTimer = textTimer + 1;
                }
            }

            if (textTimer >= 45) {
                stopTimer = true;
            }

            if (stopTimer == true && textTimer >= -25) {
                textTimer = textTimer - 3;
            }
        }       
    }

    if (level == 5) {
        if (textTimer >= 50 && textTimer <= 125) {
            textSize(22);
            textFont(font);
            fill("white");
            text("Hahahahahaha", boo.x - 100, boo.y - 75);
        }

        if (textTimer >= 135 && textTimer <= 210) {
            textSize(22);
            textFont(font);
            fill("white");
            text("You tried to steal the jem.\nNow I am going to destory you.", boo.x - 200, boo.y - 125);
        }

        if (boo.scale == 5) {
            textSize(44);
            textFont(font);
            fill("white");
            text("Boo Health", windowWidth / 2 - 175 , windowHeight / 2 - 400);
        }
        
    }
}
