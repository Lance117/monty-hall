## What is This?
This app is a Monty Hall game and simulator. Demo: https://lancesanity.github.io/monty-hall/

The **Monty Hall problem** is an interesting stats puzzle named after the tv host of [Let's Make a Deal](https://en.wikipedia.org/wiki/Let%27s_Make_a_Deal#The_Monty_Hall_Problem). In this game, there are three doors: a car is behind one door and goats are behind the other two doors. After the contestant chooses a door, the host reveals one door with a goat. Now there are two doors, two choices: do you stay with your choice or switch?

<img src="https://media.giphy.com/media/WqdIn6O7jON4PrKBKR/giphy.gif" width="720">

Do you think that the odds are now 50-50 because there are now two doors instead of three?
That idea seems to make sense, but is incorrect! Brief explanation: the odds of choosing
the winning door are 1/3, so the odds of that door losing are 2/3. Even though one door is opened,
the odds of initially choosing the winning door don't change. Therefore, switching
gives you the best odds of winning.

<img src="https://upload.wikimedia.org/wikipedia/en/b/be/Probability_diagram_for_Monty_Hall_problem.gif">

## Setup
```
$ git clone https://github.com/LanceSanity/monty-hall
$ npm install
$ npm run start
```

## Features
- 3 door game and simulator for N rounds
- Switch/stay stats saved in LocalStorage

## Language and Libraries
- [JavaScript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [chart.js](https://www.chartjs.org/)
