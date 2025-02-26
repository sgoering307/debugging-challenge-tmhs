def on_pin_pressed_p0():
    for str2 in text_list:
        if str2 == "Cat":
            Cat_Image.scroll_image(1, 200)
        elif str2 == "Dog":
            Dog_Image.scroll_image(1, 200)
        elif str2 == "Egg":
            Egg_Image.scroll_image(1, 200)
        else:
            basic.show_icon(IconNames.HEART)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

# Button A:
# 
# When pressed the rotateDuck function is called. The function will rotate the around the screen. The duck starts facing the left, then roates pointing up, then rotates pointing to the right, and finishes where it starts.
# 
# There is a bug in the code, find it and fix it so the output is correct!
# 
# Key:
# 
# # --> on
# 
# . --> off
# 
# . . . . .       . . # . .       . # # # .       . . . . .
# 
# . # # . .       # # # # .       # # # # .       . # # . .
# 
# # # # . .  -->  # # # # .  -->  . . # # #  -->  # # # . .
# 
# . # # # #       # # . . .       . . # # .       . # # # #
# 
# . # # # .       . # . . .       . . . . .       . # # # .
# 
# -------------------------------------------------------------

def on_button_pressed_a():
    rotateDuck(5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global item
    item = randint(0, 2)
    if item == 0:
        rotateDuck(1)
    elif item == 1:
        basic.show_string("B")
    elif item == 2:
        basic.show_icon(IconNames.DUCK)
    elif False:
        basic.show_string("D")
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

"""

Button A 

When the button is pressed the rotateDuck function is called.

rotateDuck rotates a duck on the leds in the following order:

"""
def rotateDuck(num: number):
    for index in range(4):
        basic.show_leds("""
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            """)
        basic.show_leds("""
            . . # . .
            # # # # .
            # # # # .
            # # . . .
            . # . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            # # # # .
            . . # # #
            . . # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
item = 0
Egg_Image: Image = None
Dog_Image: Image = None
Cat_Image: Image = None
text_list: List[str] = []
text_list = ["Duck", "Cat", "Dog", "Egg"]
Cat_Image = images.create_big_image("""
    . # . # . . . . . #
    . # # # . . . . # #
    . # # # # # # # # .
    . . # # # # # . . .
    . . . # . . # . . .
    """)
Dog_Image = images.create_big_image("""
    . . # # . . . . . .
    . # # # . . . . # .
    . . # # # # # # # .
    . . # # # # # . . .
    . # # . . # # . . .
    """)
Ducks = images.create_big_image("""
    . # # . . . # # . .
    # # # . . # # # . .
    . # # # # . # # # #
    . # # # . . # # # .
    . . . . . . . . . .
    """)
Egg_Image = images.create_big_image("""
    . . . . # . . . . .
    . . . # # # . . . .
    . . # # # # # . . .
    . . # # # # # . . .
    . . . # # # . . . .
    """)