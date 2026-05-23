JimBot will be playing 2 games.

The board is Circuit Playground Express.  It is attached to an Adafruit Crikit board.

Motor1 is connected to 2 dc motors on the left side.
Motor2 is connected to 2 dc motors on the right side.

Jimbot only knows how to turn right.

It has all the usually abilities as specified by Adafruits webpages.

When powered on, Jimbot should flash 3 time all lights red, them yellow, and finally green.  There should be a 0.5 between the flashed and a slight pause when going between colors.

After each game, Jimbot should come to a complete stop and flash all lights green for 3 times.

Game #1:  
- when the A button is pressed.
  - Jimbot will roll forward at full speed for a predetermined number of seconds or milliseconds.
  - Jimbot will then execute a 180 degree turn.  We will need to be able to adjust the amount of time it takes for Jimbot to turn.
  - Jimbot will then roll forward the same number of predetermined seconds

Game #2:
- when the b button is pressed 
  - Jimbot will do the following 4 times
    - Jimbot will roll forward a pre-determined number of seconds.
    - Then Jimbot will turn 90 degrees to the right
  - We may need to adjust the timing on each of the 4 time for both the length of time rolling forward and the length time it takes to turn 90 degrees
