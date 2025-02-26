/**
 * Debugging Challenge
 * 
 * There is code for the A and B buttons that have issues running correctly.
 * 
 *  
 * 
 * You need to fix the each to have the expected output. The expected output is in each of the comments above the code snippets that you'll be working with.
 * 
 * You must complete Button A and Button B. There is an OPTIONAL extension for Pin 0 that is a bit more challenging.
 * 
 * Tips and Tricks: 
 * 
 * - Use the expected outputs to identify what parts of the output are wrong.
 * 
 * - Bugs are often small mistakes in code.
 * 
 * - Statements in loops and conditionals are often the causes.
 */
/**
 * Button A 
 * 
 * When the button is pressed the rotateDuck function is called.
 * 
 * rotateDuck rotates a duck on the leds in the order below.
 * 
 * The function takes in a number, this number tells the function how many times to call the animation. 
 * 
 * It should only do ***exactly*** that number of animations. 
 * 
 * Whoever coded this button left a bunch of bugs in the code. Using the description of the code and the expected output find and fix the bugs.
 * 
 * Key:
 * 
 *  # --> on
 * 
 *  . --> off
 * 
 * Expected Output:
 * 
 *  . . . . .       . . # . .       . # # # .       . . . . .
 * 
 *  . # # . .       # # # # .       # # # # .       . # # . .
 * 
 *  # # # . .  -->  # # # # .  -->  . . # # #  -->  # # # . .
 * 
 *  . # # # #       # # . . .       . . # # .       . # # # #
 * 
 *  . # # # .       . # . . .       . . . . .       . # # # .
 */
/**
 * Button B 
 * 
 * When the button is pressed the variable "item" is set to a random number between 0 and 3 (i.e. 0, 1, 2, 3). 
 * 
 * Expected output:
 * 
 * If item is set to 0 show a heart icon.
 * 
 * If item is set to 1 show the word "Hello"
 * 
 * If item is set to 2 call the rotateDuck function once
 * 
 * If item is set to 3 show a smiling face. 
 * 
 * Whoever coded this button left a bunch of bugs in the code. Using the description of the code and the expected output find and fix the bugs.
 */
/**
 * Extending Debugging: 
 * 
 * When the microbit turns on a list is created with four animals and images are created to repsrent them. 
 * 
 * **Do not change the text_list or images**
 * 
 * When Pin 0 is pressed each of the images will show on the LEDs. However whoever coded this must have been in a big rush because none of the images match up correctly. Fix the code so the correct images show with the right animal names.
 */
input.onPinPressed(TouchPin.P0, function () {
    for (let str2 of text_list) {
        if (str2 == "Dog") {
            basic.showString(str2)
            Cat_Image.scrollImage(1, 200)
        } else if (str2 == "Egg") {
            basic.showString(str2)
            Dog_Image.scrollImage(1, 200)
        } else if (str2 == "Egg") {
            basic.showString(str2)
            Egg_Image.scrollImage(1, 200)
        } else {
            basic.showString(str2)
            basic.showIcon(IconNames.Heart)
        }
    }
})
// Button A:
// 
// When pressed the rotateDuck function is called. The function will rotate the around the screen. The duck starts facing the left, then roates pointing up, then rotates pointing to the right, and finishes where it starts.
// 
// There is a bug in the code, find it and fix it so the output is correct!
// 
// Key:
// 
// # --> on
// 
// . --> off
// 
// . . . . .       . . # . .       . # # # .       . . . . .
// 
// . # # . .       # # # # .       # # # # .       . # # . .
// 
// # # # . .  -->  # # # # .  -->  . . # # #  -->  # # # . .
// 
// . # # # #       # # . . .       . . # # .       . # # # #
// 
// . # # # .       . # . . .       . . . . .       . # # # .
// 
// -------------------------------------------------------------
input.onButtonPressed(Button.A, function () {
    rotateDuck(5)
})
input.onButtonPressed(Button.B, function () {
    item = randint(0, 2)
    if (item == 0) {
        rotateDuck(1)
    } else if (item == 1) {
        basic.showString("B")
    } else if (item == 2) {
        basic.showIcon(IconNames.Duck)
    } else if (false) {
        basic.showString("D")
    } else {
    	
    }
})
function rotateDuck (num: number) {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # .
            # # # # .
            # # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # .
            . . # # #
            . . # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
let item = 0
let Egg_Image: Image = null
let Dog_Image: Image = null
let Cat_Image: Image = null
let text_list: string[] = []
text_list = [
"Duck",
"Cat",
"Dog",
"Egg"
]
Cat_Image = images.createBigImage(`
    . # . # . . . . . #
    . # # # . . . . # #
    . # # # # # # # # .
    . . # # # # # . . .
    . . . # . . # . . .
    `)
Dog_Image = images.createBigImage(`
    . . # # . . . . . .
    . # # # . . . . # .
    . . # # # # # # # .
    . . # # # # # . . .
    . # # . . # # . . .
    `)
let Ducks = images.createBigImage(`
    . # # . . . # # . .
    # # # . . # # # . .
    . # # # # . # # # #
    . # # # . . # # # .
    . . . . . . . . . .
    `)
Egg_Image = images.createBigImage(`
    . . . . # . . . . .
    . . . # # # . . . .
    . . # # # # # . . .
    . . # # # # # . . .
    . . . # # # . . . .
    `)
