# Workshop 1

- Welcome to our first workshop of our react bootcamp, its a pleasure to be here.
- The topics for today are Core concepts, styling and intro to testing.
- I am martin molinero, swe at wizeline for almost a year and I have more than two years of experience working with react in real life projects.
- This is our first workshop and it is intended that you already have covered these topics by your own

### Hello component

JSX

- Syntax extension to javascript.
- Describes how the UI should look like
- Allows functions of js to be used.
  - conditional rendering.
  - loops.
- After being transpiled, the react code produces react elements. That can be interpreted and inserted into the react dom.

### Person component

- React is a UI library that helps us render components.
- You write components as js functions and pass them to react, which translates them markup representing how the page should look like.
- After it creates the view structure and renders the page, it stops, its not waiting for something to happen, so its not updated automatically.
- A render cycle happens by default when the component is mounted.
- React doesn't rerenders if its not triggered.
- React rerenders when you trigger it. These triggers happen when the state or props of a component are updated.
- ++ Trigger a re render changing props of person.
- In order to React not impacting performance, it decides which parts of the DOM should be updated by comparing the previous state and props of a specific component. If any component has a change in these, only that part of the DOM is updated.
- React also doesnt manage styles, as in any website or web application, CSS is in charge of doing this.

### Functional component vs class component

- Functional component (in code)
  - Simply a function
  - Uses hooks in order to change the internal state and set behaviors when changes are triggered.
  - Cleaner and preferred way to write react applications nowadays.
- Class component (in slide)
  - Creating classes extending React Component.
  - As any class, they have a constructor in which you can set the props and also any initial value of the internal state.
  - Both have specific a lifecycle which are intended to be equivalent.
  - Previous way of writing React.

## Project structure and overview:

- Start thinking in components. Mention atomic design.

- Atoms: Smallest unit possible, they can have many states and usages.
- Molecules: 1+ Atoms. Can have own properties and functionality.
- Organisms: Independent, portable and reusable components.
- Templates: Relationships between organisms, manage positions and placement patterns.
- Pages: Navigation parts of the application.

++ open youtube and explain:

- video thumbnail, video title, channel image and name are atoms.

- which are organized into the video information molecule.

- A video card can be seen as an _organism_ that can be reused across multiple pages in our application ++ visit a video in order to see related videos

- _video information molecule_ will _control which atoms_ are visible or not depending on where they are shown.

- In our application we can see we have different pages like home or video page, each of them handle the template creation and structure. For example, when we navigate to home, we can see a sidebar and a grid, while in the video page we see the video visualizer and the related videos.

### F1 example coding.

- Create components folder
- Create Driver card component (which receives title, text1, text2, accentColor)
- Create Driver list component (which receives title, items, filter)
- Destructure props (explain concept)
- import mocked data into app js
- import DriversList into app js and populate its props
