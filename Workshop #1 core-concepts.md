# Workshop 1 
### Person component
- Explain what is a functional component vs a class component
- Destructure props (explain concept)
## Counter example:
- UI is not updated automatically, there's not a process that is running in the background.
- React is a UI library that helps us render components.
- React rerenders when you trigger it.
- React doesn't rerenders if its not triggered. These triggers happen when the state or props of a component are updated.
- A render cycle occurs when the component is mounted.
- Explain about React dev tools chrome extension.
- Trigger a re render changing props of counter.
- Para que React no impacta en el performance, se evalúa y se actualiza el árbol del DOM solo para los elementos que cambian sus props o estado.
## F1 example overview:
- Explain the structure of the project.
- Start thinking in components. Mention atomic design.
### App component
- Create components folder
- Create Driver card component (which receives title, text1, text2, accentColor)
- Create Driver list component (which receives title, items, filter)
- import mocked data into app js
- import DriversList into app js and populate its props
- react encourage declarative programming, not imperative. It's cleaner.