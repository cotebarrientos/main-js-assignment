# JS Main Assignment: Rock, Paper or Scissors?

## Brainnest: Frontend Development Industry Training

This repository contains 1 assignment about JavaScript for the **Frontend Development industry training program**
taught by [**Brainnest**](https://www.brainnest.consulting/).

**You can visit this website by clicking [here](https://cotebarrientos.github.io/main-js-assignment/).**

---

## Contents

1. [**Project Purpose**](#project-purpose)
2. [**Technologies Used**](#technologies-used)
3. [**Deployment**](#deployment)
4. [**Testing**](#testing)
5. [**Credits**](#credits)

---

## Project Purpose

The project consists of a **rock-paper-scissors game**, which you can play from
the browser console. The game has 5 rounds where you will confront the
computer. Can you beat the computer, or is it superior to you?

**Attention:** The index page is completely empty, you will have to play using the prompt
window that will appear, and remember, don't forget to **OPEN THE DEVTOOLS BEFORE OF VISIT THE WEBSITE** to
check the console and consult the results. To open the developer console window on Chrome, use the keyboard
shortcut **Ctrl + Shift + J** (on Windows) or **Command + Option + J** (on Mac). Alternatively, you can use
the Chrome menu in the browser window, select the option "More Tools," and then select "Developer Tools."

|                                                  **Game example**                                                   |
| :-----------------------------------------------------------------------------------------------------------------: |
| ![Game Example](https://github.com/cotebarrientos/main-js-assignment/blob/main/img/console_screeshoot.jpg?raw=true) |

## Technologies Used

### Languages

- HTML 5
- JavaScript

### Tools Used

- VS Code
- GitHub
- Git

## Deployment

### Clone Project from GitHub Website 📁

1. Follow this link to the [Project GitHub repository](https://github.com/cotebarrientos/main-css-assignment).
2. Scroll to the top of this repository and click on the "clone or download button".
3. Decide whether you want to clone the project using HTTPS or an SSH key and do the following:
   - HTTPS: click on the checklist icon to the right of the URL.
   - SSH key: first click on 'Use SSH' then click on the same icon as above.

### Clone Project from terminal 💻

1.  Open the 'Terminal'.
2.  Choose the location for the cloned directory.
3.  Type `git clone`, and then paste the clone URL.

        $ git clone https://github.com/USERNAME/REPOSITORY

4.  Press 'Enter' to create your local clone.
5.  Well done!, you've cloned this repository.

### Deploy this Project using GitHub pages ✅

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/cotebarrientos/main-js-assignment), the following steps were taken:

1. Log into GitHub.
2. Open the 'Settings' section of the project repository in GitHub.
3. Scroll down to the GitHub Pages section.
4. Under Source click the drop-down menu labelled None and select Master Branch or Marter Branch/docs folder.
5. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
6. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.
7. Well done!, you've deployed this project.

## Testing

### Validation Services

#### HTML 5

I used <a href="https://validator.w3.org/" target="_blank">W3C HTML Validator</a> to validate my HTML files by direct input.

- my index **.html** file was tested and no errors were found.

#### JavaScript

I used <a href="https://jshint.com/" target="_blank">JShint</a> to validate my JS files by direct input.

- The app **.js** file was checked, no error were found.
  - Metrics:
    - There are 11 functions in this file.
    - Function with the largest signature take 4 arguments, while the median is 1.
    - Largest function has 12 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 8 while the median is 1.

### Game test

- I tested this game several times, checking that it returned correct answers.
- The game doesn't allow the user to enter empty strings.
- The player is not allowed to enter options other than those allowed in the game, and if that happens, the game will not permit the user to advance until a valid option is entered.
- The player cannot stop the game, until he completes 5 rounds.

This game shows 2 types of messages and are as follows:

|                                                 Message 1                                                  |                                                  Message 2                                                  |
| :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
| ![First message](https://github.com/cotebarrientos/main-js-assignment/blob/main/img/message1.jpg?raw=true) | ![Second Message](https://github.com/cotebarrientos/main-js-assignment/blob/main/img/message2.jpg?raw=true) |
|                         As initial message and when a player types an empty string                         |                           When a player types something not allowed in this game                            |

### Further improvements

- Add css styling and create a game with graphical interface.

## Credits

These websites were really useful to troubleshooting the issues I faced:

- [w3schools](https://www.w3schools.com/)
- [Stackoverflow](https://stackoverflow.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)

[**Back to top**](#contents)

---
