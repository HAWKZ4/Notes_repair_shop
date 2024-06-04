# System For Repair Shop Store

![technotes04 onrender com_dash (1](https://github.com/HAWKZ4/Notes_repair_shop/assets/108879264/f18eb085-1040-478f-ae54-1ea5722f65dd)
![technotes04 onrender com_dash (2)](https://github.com/HAWKZ4/Notes_repair_shop/assets/108879264/8d8cce76-4ba0-4613-a0e2-a675a53318ae)


A Full MERN Stack Application for a repair shop store designed to replace the old system of using sticky notes.
This application supports multiple users, enabling team-based workflows and real-time collaboration.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Frontend Dependencies](#frontend-dependencies)
- [Backend Repository](#backend-repository)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Roles**: Each user has it's own privileges.
- **User Authentication**: Secure authentication using JWT.
- **Real-Time Collaboration**: Enable team-based workflows with real-time updates.
- **Password Handling**: Secure password management with bcrypt.
- **Rate Limiting**: Prevent abuse with rate limiting.
- **CORS Support**: Cross-origin resource sharing enabled.
- **Environment Variable Management**: Use dotenv for managing environment variables.
- **Data Management**: Efficient data handling with MongoDB and Mongoose.
- **UUID Generation**: Unique identifiers with UUID.
- **Date Handling**: Manage dates effectively with date-fns.


## Technologies Used

- **Frontend**: React, Redux Toolkit, React Router DOM, React Spinners
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt

## Setup

### Frontend

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/repair-shop-store-frontend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd repair-shop-store-frontend
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables:
    ```env
    REACT_APP_API_URL=your_backend_api_url
    ```

5. Start the development server:
    ```sh
    npm start
    ```

### Backend

You can find the backend part of the application [here](https://github.com/HAWKZ4/Notes_Repair_Shop_API).

## Frontend Dependencies

```json
{
  "@fortawesome/fontawesome-svg-core": "^6.5.1",
  "@fortawesome/free-solid-svg-icons": "^6.5.1",
  "@fortawesome/react-fontawesome": "^0.2.0",
  "@fvilers/disable-react-devtools": "^1.3.0",
  "@reduxjs/toolkit": "^2.0.1",
  "jwt-decode": "^4.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-redux": "^9.0.4",
  "react-router-dom": "^6.21.1",
  "react-spinners": "^0.13.8"
}
```

## Backend Repository

The backend part of this application is available at:
[Backend Repository](https://github.com/HAWKZ4/Notes_Repair_Shop_API)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to modify or expand this template to better suit your project's needs.
