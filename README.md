# 1st part of FTR Coding Test

1. on the screen, the first line is used to input the amount of time (in seconds) for numbers and their frequency to be shown. It is mandatory. Besides, the prompt info also updated depend on what users enter. 
 > - <p>1.a if users enter invalid info, not a number ( a string, null ..) , the program will alert that "frequency value must be a number. Please enter again!" </p>
 > 
 > - <p>1.b if users skip this field, and move on to enter the number values, the program will alert that "Please enter the frequency value first" </p>
 > 
 > - <p>1.c if users enter the right value ( a number), the bottom will show that "The frequency entered is 1 (in seconds)" , for example. </p>

2. The second line is where users can enter number value many times as they want. It is optional. However, the prompt info also being updated depend on what users enter.
 > - <p>2.a if users enter invalid info, not a number ( a string, null ..) , the program will alert that "frequency value must be a number. Please enter again!" </p>
 > 
 > - <p>2.b when the first value entered, the program will alert that "Please enter the first number" </p>
 > 
 > - <p>2.c when the second value entered, the program will alert that "Please enter the second number" </p>
 > 
 > - <p>2.d Again, if users enter the right value ( a number), the bottom will show that "The frequency entered is 1 (in seconds)" , for example.</p>

3. when users enter a number as an input, the program will check if this value is in the Fibonacci sequence. However, when I calculated the first 1000th numbers in the Fibonacci sequence, it is extremely huge amount value, then I do not make a checking function for this feature. Therefore, this program only check if the value entered is in the Fibonacci sequence. If so, the program will show that "The first number is 8 - FIB" instead of "The first number is 8", just for example. So, FIB at the end to prompt users that this value is in the Fibonacci sequence.

4. This program has 4 buttons ( 4 states). Start / Halt / Resume / Quit

5. When the program on start, Start / Halt / Resume buttons will show off, but the Quit button is disabled. And the program will show that "The system has not started".

6. The program only allows to be into 'Start' state if all the field requied entered ( the amount value in seconds and at least the first value entered). If users press Start button, other buttons including Halt / Resume / Quit will be on. However, the Start button will be off in 'Start' state. And the programe will show that "The program has started". Then, all the number values will be sorted in descending order by their frequency. For example "8:3 , 11:2 , 1:1"

7. When the program starts, users can force the program to be into pause state with 'Halt' button. And the program will show that "The system has paused". In this state, only Resume & Quit buttons can be shown for clicking.

8. Whenever the users press "Resume" button, the program will show that "the system has resumed". In this state, only Halt & Quit buttons can be shown for clicking.

9. Users can enter new number value at all times even in Start , Halt or Resume state. The program will automatically generate the sequence in the format required.

10. The program can be terminated if users press Quit button. And the farewell message will be shown up as "Thanks for playing"

11. This program still in basic without UI design

#Thanks for reading






  
  
