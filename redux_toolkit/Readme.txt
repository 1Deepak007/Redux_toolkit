
npx create-react-app@latest redux_toolkit

Redux --> npm i react-redux
npm i @reduxjs/toolkit

1.Create store
2.Wrap Main.js in provider,store. So that every component can access store.
3.Create Slice features/counter/counterSlice.jsx

To get hands-on experience with Redux Toolkit, you should learn the following concepts step by step:

1. Redux Basics (Fundamentals)
   What is state management?
   Why use Redux? (Problem it solves)
   Core concepts: Store, Actions, Reducers, Dispatch
   Redux vs Redux Toolkit (Why RTK is preferred)
2. Setting Up Redux Toolkit in a Project
   Installing @reduxjs/toolkit and react-redux
   Creating a Redux store (configureStore)
   Providing the store using <Provider> in React
3. Slices (Core Concept in RTK)
   Creating a slice using createSlice()
   Defining state, reducers, and actions inside the slice
   Using reducers to modify the state
   Exporting actions and reducer from the slice
4. Using Redux State in React Components
   Selecting state using useSelector()
   Updating state using useDispatch()
   Dispatching actions inside event handlers
5. Async Logic with Redux Toolkit (RTK Query & Thunks)
   What is async state management?
   Using createAsyncThunk() for API calls
   Handling pending, fulfilled, and rejected states
   Introduction to RTK Query (simpler alternative for fetching data)
6. Middleware in Redux Toolkit
   What are middlewares?
   Using built-in middleware (thunk for async actions)
   Adding custom middleware if needed
7. Structuring a Redux Toolkit Project
   Organizing slices in a features/ folder
   Keeping a separate store.js
   Best practices for scalability
8. Advanced Concepts
   Normalizing state using createEntityAdapter()
   Memoizing selectors with createSelector()
   Persisting Redux state with redux-persist
   Debugging Redux state using Redux DevTools
9. Integrating Redux Toolkit with Next.js
   Using Redux Toolkit with Next.js
   Server-side rendering (SSR) considerations
