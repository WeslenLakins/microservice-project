# Timestamp Microservice Project

![Timestamp Microservice UI](https://firebasestorage.googleapis.com/v0/b/mern-blog-530c9.appspot.com/o/Screenshot%202024-05-06%20132602.png?alt=media&token=30be797f-ca16-47ec-b2f9-dc91cc94c0b8)

This is a timestamp microservice project built with Node.js, Express, and Netlify Functions. The service provides several API endpoints to handle timestamps and a special surprise ;)

## Live Demo

The live demo of the timestamp microservice can be found at:
- [https://wtl-timestamp-microservice.netlify.app/](https://wtl-timestamp-microservice.netlify.app/)

## GitHub Repository

The source code for this project is available on GitHub:
- [https://github.com/WeslenLakins/microservice-project](https://github.com/WeslenLakins/microservice-project)

## Endpoints

### `/api/timestamp`

- **Method:** `GET`
- **Description:** Returns the current timestamp in both Unix and EST formats.
- **Response:**
    ```json
    {
        "unix": 1623848400000,
        "utc": "Mon, 21 Jun 2021 10:00:00 GMT",
        "est": "06/21/2021, 06:00:00"
    }
    ```

### `/api/timestamp/:dateParam`

- **Method:** `GET`
- **Description:** Returns the timestamp for a specific date provided as a parameter. The date can be either a Unix timestamp or an ISO date string.
- **Response:**
    ```json
    {
        "unix": 1623848400000,
        "utc": "Mon, 21 Jun 2021 10:00:00 GMT",
        "est": "06/21/2021, 06:00:00"
    }
    ```

### `/api/easteregg`

- **Method:** `GET`
- **Description:** Returns an Easter egg message.
- **Response:**
    ```json
    {
        "greeting": "Oh, you've found this! Well, congrats! :p"
    }
    ```

## How to Use

1. **Installation**:
    - Clone the repository.
    - Run `npm install` to install dependencies.

2. **Development**:
    - Run `npm run dev` to start the development server.

3. **Build**:
    - Run `npm run build` to create a production build.

4. **Deployment**:
    - The project is set up for deployment on Netlify. The build command is `npm run build` and the publish directory is `public`.
    - Set the functions directory to `functions` for Netlify Functions.

## Technologies Used

- **Node.js**
- **Express**
- **Netlify Functions**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
