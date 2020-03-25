#adds Ruby2d to project (used for drawing to screen)
require 'ruby2d'

#Should be fairly obvious
set background: 'black'
#set FPS
set fps_cap: 10;
#Grid size is used to set the size of the grid based on screen size
GRID_SIZE = 20

#creating the class of person
class Person
  #When initialize the initial x and y position on the screen is set
  def initialize (posX, posY)
    @position = [posX,posY]
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

end



#creates a new "Person" object
person1 = Person.new(1,4)
#Draws the person object to the screen
person1.draw




#runs each frame
update do
  #clears the screen
  clear
  #moves the person in a random direction
  person1.moveRandom
  person1.draw
end

show
