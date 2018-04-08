#Table Tennis Tournament Generator

This challenge was set by DevelopMe_ on the 29th March for completion by the 8th April.
The final version of the app can be found at http://vikki.developme.space/

## The Brief
The exercise is to create a tool which randomly creates pairings for a table tennis tournament from a list of names collected from the user.

Optional advanced features might include:
ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs
continued rounds until the final (last 2 players who have won all matches to date play each other)

There were no limits to the technology we could use in order to achieve this. 

##Setup Prerequisites
Installation of yarn on local machine

##Setup Install
cd to local desired folder

git clone git@github.com:vbro1293/ttt-generator.git

yarn install (This should run the package.json file and install all the relevant devpendencies to get the app running locally)

##Run app
yarn start (View on localhost:3000)

yarn watch-css (Starts watching on sass files)

#The Project
Initially I set out the initial stages of the project and gave each a rough timeline. These were 

1. Research, Functional Specifications/User Story, Scamping/Wireframe, Technology, Logic, Setup/Documentation/Git, File System Planning,  MVP, Testing

These were to help give me some structure over the 10 days so that I utilise my time efficiently.

The following is some more detail about each of these steps

##Research
This is some information that I collected from other tournament generators and images of tournament structures.

Input for the tournament name

1. Seeding (ranking of players) or completely random.
2. Option to rank, dependent on order of inputted into list.
3. Single elimination/knockout, round-robin
4. Player names input
5. Visual of tournament pairings
a) Initial pairings with names and then structure of later matches.
b) Option of indicating who wins each match and passing them to next round
c) Option of recording each games scores 
d) Structure direction - horizontal left->right, horizontal inwards, downwards
6. Button to “generate tournament” once all players have been added
7. Set number of games in a match
8. Byes required for odd numbered players
a) https://www.printyourbrackets.com/how-byes-work-in-a-tournament.html
b) Only in first round of tournament. Some teams would skip first round to second, depending on maths above.
9. Remove individual names

##Functional Specifications/User Stories
Tournament creator - want to specify the players competing in a tournament and be able to see a who will play who in each match, with no limit to number of players.

Tournament player - know who they are playing against

1. Add name of every player competing in the tournament, minimum of 2, no maximum
2. Show the initial matches, with player names
3. Show the following structure of matches to the final (no names)
Extra Features
1. Indicate the winner of each match and carry name forward into next round
2. Indicate players score/games -> winner
3. All players play each other -> resulting two highest winners create final
4. Add seeding/ranking to players
5. Reset button
6. Option for doubles
a) Input all players, create pairs and set up tournament.
b) Minimum 4 players, only for even number of players.

##Scamping/Wireframe
I created a few scamps which were very rough sketchs on the basic design and functionality for my MVP of the app.

I then created a wireframe which had more detailed functionality on. (Unfortunately these are probably not legible enough for anyone to comprehend). But they included 

1. input box - add name
2. add button - onClick adds the name to a list
3. a list of list items containing the players names that had been added to the tournament
4. generate button - onClick collects the names and randomises them
5. a table-like format that shows pairings of the players on a round-by-round basis
6. I set it up in a 2page format so that the first page would be 1-4 (collecting of players) and the second page would be 5 (displaying of the matches in each round)

##Technology
I chose to use React and Redux for this project. It was the last topic covered on the course and I found it really good to work with and there were definately areas that I wanted more practice with. I thought it was an appropriate technology for the app aswell.

##Logic
This was a very high-level overview of the logic that I thought my MVP should have. This just helped me to get a better understanding of the steps on how to initially set up the app. 

1. Collect all inputs of player names
2. “generate” button when all names have been added
3. Count the number of players
4. Create structure dependent on number of names
5. Randomise names into position
6. Remove name one by one as been placed in position
7. Render out onto page in pairings

##Setup/Github/Documentation
1. Setup gitbhub page
2. Setup local folder to store app
3. create-react-app ttt-generator
4. git init, git remote add origin …, git add *, git commit -m “initial commit”, git push origin master
5. Create development branch to keep inline with GitFlow workflow
6. Created feature branches in order to commit work to and used pull requests, code reviews to merge branches into development. Create versions to release work onto master.
7. To startup app - yarn start, app runs on localhost:3000
8. Using yarn as the dependency manager
8. Additional libraries added using yarn add "library"
    react-router-dom (ability to create and navigate between routes), immutable (create immutable Map and List), redux (state kept in store, data can be passed as props and dispatches can be passed as props in order to update the state), react-redux (connect react and redux), node-sass-chokidar (used react documentation to enable the css preprocessor Sass, run "yarn watch-css")

##File System Planning
I created a rough plan of the file system, in order to have clear places to stores specific parts of the app. This helped when having to find these files again and knowing where the best place to save them was. I used this plan as a good starting point as it helped me to remember to set up the initial files and folders ensuring that nothing was forgotten. 

In the app/src folder: 

components/ [contains just the ui, minimal logic, no hard data - just passed in data]

components/collect/ [contains components used in collect page]

components/show/ [contains components used in show page]

components/ [other non specific components ( header, 404, common components to both show and collect )]

containers/ [contains wrapped components, enabling dispatching]

data/ [all the data - actions, initial, reducer, store]

styles/ [all the styling files]

styles/scss [contains sass files]

styles/css [contains css files created from scss]

app.css [contains import of css file which was created priginally from sass files]

index.css [contains css of the general page styling - minimal]

index.js [contains the wrapped App.js with Provider (connecting components with store) and Router (allows routing withing app)]

##MVP
The planning of what and how I was coding was made easier by the previous planning that I had done. It limited the decisions that needed to be made whilst creating it. 

###Work flow/Work Process
I chose to use Gitflow in order to do my work. Working a master branch, development branch and feature branches. 
The master was only merged into a limited amout of times. 
The development was the primary branch of focus as feature branches were created off of it in order to do specific pieces of work. I generally committed multiple times on the branch in order to track of my work with commenting the commits. I then created pull requests for them and merged them back into development.  This allowed a controlled and smooth work flow. After a significant number of feature branches, I merged development into master and tagged each version.

The general way in which I worked was to note down on a google doc each branche that I was going to create and before starting, think about the exact stages in each of those (usually culmintaing in a commit and marking off as completed on my doc), this helped breakdown what I was doing and give me achievable and less frustrating short goals.

I tried to reguarly comment my code as I went through for clarity and myself. I believe I kept fairly tidy code for the most part. 

###My Approach
The following are some of the primary factors in my approach on the app

####Tidy code and simplicity
In general, I tried short components in order to keep them more simple and tidy. I tried to implement seperation of concerns wherever possible, however in the tournament component I had quite a lot of logic.

####MVP and One feature at a time
The first aim was getting the MVP done which I broke down into smaller stages (as seen in my branches and commits).
With adding features I feel I was much more disciplined with this than I have been before. My google doc of planned branches helped a lot and I think it was particualy useful for a shorter deadline. There would be a few times where I would have more than one feature branch or have to incorporate onto the existing one (for time efficiency), but I believe commented this specifically if it occurred.

####Test reguarly
I would reguarly test the development branch in Chrome when merging into from a feature branch to ensure minimal bugs in my code and these could be dealt with instantly and in a more efficient way.

####Functionaltiy
I certainly concentrated a lot of my time in the first few days on functionality and getting the logic right for a MVP, then looked at adding in features.

####Then style
After doing the MVP functionality I then looked at the style. I used SASS as a CSS preprocessor as I find it a nice way to write styling and used the node-sass-chokidar library in order to create the CSS files, this was fairly well documented, so not overly difficult to set-up.


##What I would do if I had more time
I would have very much liked to implement more features, especially one which allowed clicking through each winner of each round. I unfortunately had very little time at the end to attempt this. I think after attempting to do it with no changes to the store and doing it all in local state,I think that it was more difficult to implement it in the remaining time I had due to the current way I was storing data. 

I would have liked to work on the styling/layout more. I believe I got a fairly responsive design by the way I styled to mobile first. It did mean that my desktop view probably could have been worked on slightly more. I also realise the chosen background leads to some slightly poorly seen elements due to some of the text colors.

Some errors that I realised but did not have time to fix were, added A LOT of names, and flexbox would overflow the names. This could be fixed by adding horizontal scroll or changing the direction of the tournament.

I would definately look into some more testing. As the only testing I did was manually inputting names, reszing browser on Chrome, device viewing on Chrome Dev Tools and one test of the live app on mobile. I would do cross-browser testing to ensure everything worked the same and more mobile testing. I would also have liked to do some speed tests WAVE accesibility tests as I believe there were probably many areas that could be improved in both aspects.

###What I found difficult
Before I started, I certainly found some of the concepts with Redux more difficult to understand, primaily action dispatching and how data can be retrieved from child components. This project gave me more practice with React and redux in general, as I made mistakes and learnt from them and although would need to look back on this project for guidance, I feel that I could follow through it with more ease.

###What I learnt and would change if I did it again
If I did this project again, I think that I would have planned the redux store slightly differently, in order to be able to create a winner feature. Adding on to that I believe the way I saved the players to the store could have tidied up some of the code, as I think some of the logic present in the components could have been cleaner in the reducer.

I thought the planning I did was certainly beneficial for me, as it gave me more structure, especially with the coding of the app. Ideally I would have liked to spend more time on this documentation as although I had a lot of saved information on planning and spent a considerable amount of time on the coding, this last part I had less time than I had planned.

Overall, I have definatly increased my understanding of React, redux and improved my JS, so this project has been invaluable. Also, working on a larger independent project has been a great challenge as well as a big accomplishment.