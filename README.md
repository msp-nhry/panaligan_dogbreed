#Dog Breed Image API

This is a simple web application that allows users to fetch and view images of various dog breeds using the Dog CEO's Dog API. The application is built using plain HTML, CSS, and JavaScript, and demonstrates basic API integration and responsive design.

## Features

- Dropdown menu to select a dog breed.
- Fetches and displays a random image of the selected breed.
- Responsive design for various screen sizes.

## Setup and Running the Application

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge).

### Steps to Set Up

1. **Create Project Folder**

   Create a folder for your project, e.g., `dogbreedpicture_api`.

2. **Add Files**

   Inside the project folder, create the following files:
   
   - `index.html`
   - `styles.css`
   - `script.js`

3. **Populate Files**

   Copy the respective code snippets into these files:
   
   - **`index.html`**: Contains the HTML structure.
   - **`styles.css`**: Contains the CSS for styling.
   - **`script.js`**: Contains the JavaScript for functionality.

4. **Open in Browser**

   Open the `index.html` file in your web browser to view the application.

### How to Use

1. Select a dog breed from the dropdown menu.
2. Click the "Fetch Breed Image" button to display a random image of the selected breed.

## API Information

### Dog CEO's Dog API

- **Base URL**: `https://dog.ceo/api/`
- **Endpoints**:
  - **List of Breeds**: `/breeds/list/all`
  - **Breed Image**: `/breed/{breed}/images/random`
- **No API Key Required**

## Assumptions

- No API key is required for accessing the Dog CEO's Dog API.
- The application does not handle extensive error cases or provide advanced features like pagination due to its simplicity.

## Limitations

- The application fetches only a single random image per request.
- Does not include advanced features like filtering or sorting.
