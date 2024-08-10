# Token Generator Application

## Overview

Token Generator Application is built to generate customisable tokens. It leverages React to generate 2 types of tokens with Prefix value.

## Features

- We can generate Red abd Blue coloured tokens, numbered from 1 and increments serially
- We can have prefix value for tokens (String)
- We can define how many tokens to be generated per row.

## Getting Started
Make sure you have Node.js and npm installed. Create a new React project and install Material-UI.

-- npx create-react-app token-generator

-- cd token-generator

-- npm install @mui/material @emotion/react @emotion/styled

## Component Generation 
-- State Management: We use React’s useState to manage the state of the form fields and the generated tokens.

-- Form Handling: The form fields are controlled components, and their values are updated in the state on change.

-- Token Generation: generateTokens creates tokens based on user input and updates the display area.

-- Token Display: Tokens are chunked into rows based on user input and displayed with appropriate styling.

-- Clear Functionality: Clears all the fields and token displays.

## Running the Application
-- use the command `npm start` to run the application locally
