# Gotta Do App

A spicy and saucy ToDo App

## Developer Decisions

### Redux vs Context

Using Redux over context for performant reasons, this comes down to 2 core issues:

1. `useState` no having a bail out of rendering to stop children from re-rendering unnecessarily
2. `useContext` doesn't allow observer subscription without re-rendering

Read more here:

- [Provide more ways to bail out inside Hooks](https://github.com/facebook/react/issues/14110)
- [React-Redux Roadmap: v6, Context, Subscriptions, and Hooks](https://github.com/reduxjs/react-redux/issues/1177)
- [Investigate use of context + observedBits for performance optimization](https://github.com/reduxjs/react-redux/issues/1018)

### Typescript

Safety, find bugs at compile time!
