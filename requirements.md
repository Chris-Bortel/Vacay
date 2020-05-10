# Software Requirements
## Vision
Provide an outlet for travel daydreaming and a way to limit the vast amount of world destinations down to a few realistic future trips.

## Pain Points
- Limit the paradox of choice
- Allow an escape for current quarantine blues

## Why Should We Care?
- Because it solves the pain points listed above
- Provides a pleasant daydream from the current pandemic
- In these trying times, we only have each-other... 

## Scope
### In
To get people excited about traveling after the quarantine is lifted, we propose a travel planning app. By answering a few questions about priorities and preferences, the user will form a description of his/her dream vacay. Our app will ingest the user preferences and return a recommended destination with information to help the user plan a trip to that destination. Users will be directed to pick criteria most important to them.  Our team will ensure that every combination of criteria results in at least one specific destination recommendation with accompanying destination info, pro tips, helpful links. Our team will also ensure the user has the ability to browse all of our destination pages rather than enter specific preferred criteria.
### Out
- Not a complete travel agency service. You still have to find your flight etc.
    - Provides some information, but doesn't provide booking assistance or a way to reserve any amenities associated with your chosen destination.

## MVP
1. Engaging Landing Page (homepage) that functions as the starting point for our preference quiz.  Minimum 2 preferences must be chosen.  Quiz can be radio buttons, series of questions, word cloud that accepts clicks, tiled pictures that accept clicks, etc.  Must contain a way to skip the quiz and browse all of our destinations if the user chooses (drop-down of locations, categories based on quiz criteria, etc).
1. JavaScript that handles a user-driven event (click/submit), iterates through a group of destinations (objects with properties), identifies the destination that meets the conditions set by the user-driven event, and loads the correct destination page. 
1. An HTML/CSS template page that displays useful information about the recommended destination (including events, avg temp).
1. Using local storage, we will provide the User the ability to revisit previous suggested destinations.

## Stretch Goals
1. Return 2 recommendations that fit the criteria: One that is budget & planning friendly (US destination) and one that is passport req & money is no object (another country, exotic)
1. Link all destination pages in a category so the User can view and move between pages vs having to go back to the LP to navigate to other pages.

## Functional Requirements
- User has the option to save a username for local-storage purposes
- User has the option to view saved destinations once saved username is established 
- User can search all possible travel destinations
- User can take a quiz for customized travel suggestions

## Data Flow
User lands on the homepage and chooses between 1) view saved destinations, 2) take quiz, or 3) browse by destination. If 1) user is prompted to enter username and directed to saved destination page. If 2), user picks their priorities from the given criteria. After submit button is clicked, page will return a recommended travel destination. Then user will be prompted to save username to allow for local storage. This would allow option 1) to be chosen in the future. If user does not want to take quiz (is indecisive for example) then they can choose option 3) and simply browse all travel destinations.