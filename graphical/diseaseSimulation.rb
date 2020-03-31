#adds Ruby2d to project (used for drawing to screen)
require 'ruby2d'

#Should be fairly obvious
set background: 'black'
#set FPS
set fps_cap: 5;
#set title
set title: "Diesease spread simulation"



#Grid size is used to set the size of the grid based on screen size
GRID_SIZE = 20

#creating the class of person
class Person
  #When initialize the initial x and y position on the screen is set
  def initialize (posX, posY, healthStatus)
    @position = [posX,posY]
    @health = healthStatus
  end

  #draws a square to the screen using the initial x and y coordinates
  def draw
    Square.new(
       x:@position[0]*GRID_SIZE,
       y:@position[1]*GRID_SIZE,
       size: GRID_SIZE - 1,
       color: 'white'
     )
  end

  def moveRandom
    @direction = rand(4)
    case @direction
    when 1
      #direction = right
      @position[0] +=1
    when 2
      #direction = down
      @position[1] +=1
    when 3
      #direction = left
      @position[0] -=1
    when 4
      #direction = up
      @position[1] -=1
    end
  end

  def contains?
      #direction = right
      if contains? (@position[0]+1) == true
        puts "colission dected"
      end
      @position[0] +1
      #direction = down
      @position[1] +1
      #direction = left
      @position[0] -1
      #direction = up
      @position[1] -1

  end
end




#------------------------------------------------------------------------------#
#Simulation variables
infectionDistance = 1
infectionChance = 0.5
simulatedAmount = 100

#Array creates and stored simlated amount of people
personObjectsArray = Array.new(simulatedAmount) {Person.new(rand(20),rand(20),"healthy")}


#------------------------------------------------------------------------------#
#Screen generation


#runs each frame
update do
  #clears the screen
  clear
  #moves all persons in a random direction
  personObjectsArray.each { |person|
    person.moveRandom
    #person.contains?
    person.draw
  }
end

show
