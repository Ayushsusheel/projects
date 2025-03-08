from turtle import Turtle,Screen
import random


screen = Screen()

screen.setup(width= 500, height= 500)

userBet = screen.textinput(title="MAKE YOUR BET !!!", prompt= "Which tutle will win the race ? \n Enter color : ")

print("\n" + userBet +"\n")

# PRINT----------

# CREATING 6 DIFFERENT OBJECTS + VARIABLES + LENGTH CODE + TIME WASTE !!!!!!!!!!!!!!!!1

# timmy1 = Turtle("turtle")
# timmy1.color("red")
# timmy1.penup()
# timmy1.goto(-230,-100)
# #timmy1.write("Timmy the Tortoise", font=("Arial"))
# timmy1.write("player 1")



# timmy2 = Turtle("turtle")
# timmy2.color("blue")
# timmy2.penup()
# timmy2.goto(-230,-50)
# timmy2.write("player 2")



# timmy3 = Turtle("turtle")
# timmy3.color("green")
# timmy3.penup()
# timmy3.goto(-230,0)
# timmy3.write("player 3")




# timmy4 = Turtle("turtle")
# timmy4.color("yellow")
# timmy4.penup()
# timmy4.goto(-230,50)
# timmy4.write("player 4")




# timmy5 = Turtle("turtle")
# timmy5.color("orange")
# timmy5.penup()
# timmy5.goto(-230,100)
# timmy5.write("player 5")



# timmy6 = Turtle("turtle")
# timmy6.color("pink")
# timmy6.penup()
# timmy6.goto(-230,150)
# timmy6.write("player 6")


# SAME THING DONE USING FOR LOOP !!!!!!!!!!!

colors = ["red","blue","orange","yellow","green","pink"]

y_positions= [-100, -50 , 0 , 50 , 100 , 150 ]

is_race_on = False

all_turtles = []  #in this list my objects will be stored as individual entity



for i in range(0,6):
        timmy = Turtle("turtle")

        timmy.color(colors[i])
        timmy.penup() # ye ni use krege toh turtles jab apni postions mei jaare hoge toh line draw hoti chli jaaegi sabme !!
        timmy.goto(-230,y_positions[i])
        timmy.write("Player " + str(i + 1))
        all_turtles.append(timmy)
        timmy.speed(10) #SET THE SPEED OF THE TURTLES HERE (can be set from object only....)


if userBet:
    is_race_on = True


while is_race_on:
      
    for i in all_turtles:
      
      if i.xcor() > 230 :
            is_race_on = False
        #    print(turtle.color()) 
            winning_color = i.pencolor()

            if winning_color == userBet:
                 print(f"\nYou're the winner! \n{userBet} turtle won the race :-))\n")
                 screen.clear()
            else:
                 print(f"Sorry you have lost the game\nWinner is {winning_color} turtle\n")
                 screen.clear()
      
      random_distance = random.randint(0,10)
      i.forward(random_distance)
      

      



screen.exitonclick()
