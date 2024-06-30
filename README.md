Stopwatch 
A simple stopwatch app built using JavaScript, HTML, and CSS.

Features
Start, pause, and reset the stopwatch
Lap times are recorded and displayed in a list
Time is displayed in hours, minutes, and seconds format
How to Use
Click the "Start" button to start the stopwatch.
Click the "Pause" button to pause the stopwatch.
Click the "Reset" button to reset the stopwatch to 0.
Click the "Lap" button to record the current time and add it to the lap times list.
Code Structure
The code is organized into the following sections:

Variable declarations: hours, minutes, seconds, intervalId, isRunning, and lapTimes are declared at the top of the file.
Element selections: The HTML elements are selected using document.getElementById and stored in variables.
Event listeners: Event listeners are added to the start, pause, reset, and lap buttons.
Functions: The startStopwatch, pauseStopwatch, resetStopwatch, lapTime, and updateTime functions are defined to handle the stopwatch logic.
Functionality
startStopwatch: Starts the stopwatch by setting an interval to update the time every second.
pauseStopwatch: Pauses the stopwatch by clearing the interval.
resetStopwatch: Resets the stopwatch to 0 and clears the lap times list.
lapTime: Records the current time and adds it to the lap times list.
updateTime: Updates the time display every second.
