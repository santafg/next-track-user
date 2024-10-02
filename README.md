# Next.js User Tracker Application with Tailwind CSS and TypeScript

This project is a user tracker application built with Next.js, React js, styled using Tailwind CSS, and handles API calls using TanStack Query. Here's an overview of the structure and main features:

## Folder Structure & Organization

### API Handling:
- **axios instance**: Manages API requests and error handling.
- **endpoints**: Contains the defined API routes.
- **functions**: Holds the logic for API interactions.

### Components:
- **Layout**: General layout of the app.
- **Navbar**: Navigation bar component.
- **Wrapper**: Additional wrappers, including tracking providers.

### TypeScript Interfaces:
- A dedicated folder for storing all TypeScript interfaces and types for easy reference.

### Lib Folder:
- **Hooks**: A custom hook named `useTrackEvents` is created for event tracking.
- **Utils**: Contains utility functions such as device info retrieval.

## Tracking Features

### TrackingProvider Component:
- Found in the **Wrapper** folder.
- Wraps the app through `app.tsx` and tracks events like page visits and redirections.

### Event Tracking:
- For tracking user interactions (clicks on components, buttons, or links), use the `useTrackEvents` hook.
- Simply pass the event name to track any specific action.

## API Endpoint for Event Tracking
A simple POST API is created using Next.js to receive tracking events through the `useTrackEvents` hook.  
The tracking data is sent in a structured format, and the API returns a response with a message: **"Track successful"**.

## Front-End Error Handling
When clicking on the links of the navbar, the visit page event won’t trigger since the user is on the same page. However, if the page is reloaded or visited initially, the event is recorded once.
