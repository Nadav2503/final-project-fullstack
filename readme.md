# Virtual Zoo Project

The Virtual Zoo is a dynamic web application designed to provide visitors with an engaging experience to explore zoo-related information. It offers features such as animal and exhibit management, user reviews, personalized visitor profiles, and administrative functionalities. This project seamlessly integrates backend and frontend technologies to deliver a robust and user-friendly platform.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features and Functionalities](#features-and-functionalities)
4. [Model Relationships](#model-relationships)
5. [Model Objects](#model-objects)
6. [API Endpoints and Permissions](#api-endpoints-and-permissions)
7. [Frontend Folder Structure](#frontend-folder-structure)
8. [Backend Folder Structure](#backend-folder-structure)
9. [Installation](#installation)

---

## 1. Project Overview

### Purpose
To create a platform where users can explore, review, and manage zoo exhibits and animals while offering personalized visitor interactions.

### Core Functionality
- **Animal and Exhibit Management**: Perform CRUD operations and maintain relationships between animals and exhibits.
- **Visitor Profiles**: Personalized profiles with interaction histories and saved preferences.
- **Reviews**: Visitors can leave feedback on animals or exhibits with ratings and comments.
- **Admin Controls**: Full control over visitors, reviews, exhibits, and animals.

---

## 2. Technologies Used

### Backend
- **Node.js**: Runtime environment for server-side execution.
- **Express**: Web framework for creating API endpoints.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ORM for MongoDB to manage schemas and relationships.
- **JWT**: For secure user authentication.
- **Joi**: Schema validation for request payloads.

### Frontend
- **React**: Component-based framework for the user interface.
- **Material-UI (MUI)**: For consistent and responsive design.
- **Axios**: To handle API requests.
- **React Router**: To manage application routing.

---

## 3. Features and Functionalities

### Pages & Components
- **Home**: Introduction to the zoo with action buttons for ticket purchasing.
- **About**: Information about the zoo's mission and exhibits.
- **Animals & Exhibits**: Comprehensive pages for exploring zoo offerings.
- **Reviews**: Enables visitors to leave feedback.
- **Profile**: Displays user details, preferences, and reviews.
- **Admin Dashboard**: Management interface for all resources.

### Authentication & Authorization
- Secure login and registration with JWT-based authentication.
- Role-based access control for permissions.

### CRUD Operations
- Visitors, reviews, animals, and exhibits can be created, updated, and deleted by authorized users.
- Public users can view data, while authenticated users gain additional interaction options.

---

## 4. Model Relationships

| **Relationship**       | **Description**                                          |
|------------------------|----------------------------------------------------------|
| Animal → Exhibit       | One-to-Many: An exhibit can contain multiple animals.    |
| Animal → Review        | One-to-Many: Animals can have multiple visitor reviews.  |
| Visitor → Review       | One-to-Many: A visitor can write multiple reviews.       |
| Visitor → Exhibit      | Many-to-Many: Visitors can explore multiple exhibits.   |
| Visitor → Animal       | Many-to-Many: Visitors can save animals as their favorites. |
| Review → Visitor       | One-to-Many: Each review is linked to a single visitor.  |
| Review → Animal/Exhibit| One-to-One/Optional: Reviews may reference a specific animal or exhibit. |

---

## 5. Model Objects

### Animal
Represents an individual animal.
- **Key Properties**: id, name, gender, age, diet, isEndangered, exhibitId.

### Exhibit
Defines a zoo exhibit and its animals.
- **Key Properties**: id, name, description, location, animals, status.

### Review
Represents visitor feedback on animals or exhibits.
- **Key Properties**: id, visitorId, animalId, exhibitId, rating, comment.

### Visitor
Represents users of the application.
- **Key Properties**: id, username, email, membershipTier, preferredAnimals.

---

## 6. API Endpoints and Permissions

### Animal Endpoints

| **Method** | **Endpoint**                           | **Description**                         | **Permission**                            |
|------------|----------------------------------------|-----------------------------------------|-------------------------------------------|
| POST       | /Zoo/animals                           | Create a new animal                     | Admins or Tier 4 - Safari Leaders         |
| GET        | /Zoo/animals/exhibit/:exhibitId       | Get all animals in a specific exhibit   | Public                                    |
| GET        | /Zoo/animals/:id                      | Retrieve a specific animal by ID        | Public                                    |
| PUT        | /Zoo/animals/:id                      | Update an animal by ID                 | Admin only                                |
| PATCH      | /Zoo/animals/:id/endangered           | Update endangered status of an animal  | Admin only                                |
| DELETE     | /Zoo/animals/:id                      | Delete an animal by ID                 | Admin only                                |

### Exhibit Endpoints

| **Method** | **Endpoint**   | **Description**                         | **Permission**                            |
|------------|----------------|-----------------------------------------|-------------------------------------------|
| POST       | /exhibits      | Create a new exhibit                    | Admins only                               |
| GET        | /exhibits      | Retrieve all exhibits                   | Public                                    |
| GET        | /exhibits/:id  | Retrieve a specific exhibit by ID       | Public                                    |
| PUT        | /exhibits/:id  | Update an exhibit by ID                 | Admins only                               |
| PATCH      | /exhibits/:id/animals | Update animals array in an exhibit | Admins only                               |
| DELETE     | /exhibits/:id  | Delete an exhibit by ID                 | Admins only                               |

### Review Endpoints

| **Method** | **Endpoint**                | **Description**                          | **Permission**                            |
|------------|-----------------------------|------------------------------------------|-------------------------------------------|
| POST       | /reviews                    | Create a new review                      | Tier 3 - Jungle King/Queen, Tier 4 - Safari Leader, Admins |
| GET        | /reviews/animal/            | Get all reviews for a specific animal    | Public                                    |
| GET        | /reviews/exhibit/           | Get all reviews for a specific exhibit   | Public                                    |
| GET        | /reviews/:id                | Get a specific review by ID              | Authenticated visitor – (register)       |
| GET        | /reviews/visitor/           | Get all reviews by a specific visitor    | Visitor or Admin                          |
| PUT        | /reviews/:id                | Update a specific review                 | Review owner or Admin                     |
| DELETE     | /reviews/:id                | Delete a specific review                 | Review owner or Admin                     |
| PATCH      | /reviews/:id/like           | Like or unlike a review                  | Tier 2 - Lionheart or above, Admin only   |

### Visitor Endpoints

| **Method** | **Endpoint**           | **Description**                           | **Permission**                            |
|------------|------------------------|-------------------------------------------|-------------------------------------------|
| POST       | /visitors/register      | Register a new visitor                    | Public                                    |
| POST       | /visitors/login         | Log in a visitor                          | Public                                    |
| GET        | /visitors               | Get all visitors                          | Admin only                                |
| GET        | /visitors/:id           | Get a specific visitor by ID              | Visitor (if accessing their own profile) or Admin |
| PUT        | /visitors/:id           | Update a specific visitor's profile       | Visitor (if updating their own profile) or Admin |
| DELETE     | /visitors/:id           | Delete a specific visitor                 | Admin only                                |
| PATCH      | /visitors/:id/like      | Like or unlike an animal for a visitor    | Tier 2 - Lionheart or above, Admin only   |

---

## 7. Frontend Folder Structure

### Main Folders and Their Contents

#### `animal`
Contains all components and functionality related to animals.
- **components**:
  - `card`: Contains animal-specific card components.
    - `AnimalActionBar.jsx`
    - `AnimalBody.jsx`
    - `AnimalCard.jsx`
    - `AnimalHeader.jsx`
  - `AnimalAddForm.jsx`
  - `AnimalEditForm.jsx`
  - `AnimalFeedback.jsx`
  - `Animals.jsx`
- **helpers**:
  - `initializeAnimal.js`
  - `mapAnimalToModel.js`
  - `normalizeAnimal.js`
- **hooks**:
  - `helpersHooks`: Custom hooks for animal-related operations.
    - `useDetailsAnimal.js`
  - `useCreateAnimal.js`
  - `useDeleteAnimal.js`
  - `useGetAnimalById.js`
  - `useGetAnimalByIdForProfilePage.js`
  - `useGetAnimalsByExhibit.js`
  - `useUpdateAnimal.js`
  - `useUpdateEndangeredStatus.js`
- **model**:
  - `animalSchema.js`
- **pages**:
  - `AddAnimalPage.jsx`
  - `AnimalDetailsPage.jsx`
  - `EditAnimalPage.jsx`

#### `exhibit`
Handles all components and functionality for exhibits.
- **components**:
  - `card`: Exhibit card components.
    - `ExhibitActionBar.jsx`
    - `ExhibitBody.jsx`
    - `ExhibitCard.jsx`
    - `ExhibitHeader.jsx`
  - `ExhibitFeedback.jsx`
  - `ExhibitForm.jsx`
  - `Exhibits.jsx`
- **helpers**:
  - `initializeExhibit.js`
  - `mapExhibitToModel.js`
  - `normalizeExhibit.js`
- **hooks**:
  - `helpersHooks`: Custom hooks for exhibit-related operations.
    - `useGetExhibitById.js`
    - `useGetExhibits.js`
  - `useCreateExhibit.js`
  - `useDeleteExhibit.js`
  - `useUpdateExhibit.js`
  - `useUpdateExhibitAnimals.js`
- **model**:
  - `exhibitSchema.js`
- **pages**:
  - `AddExhibitPage.jsx`
  - `ExhibitDetailsPage.jsx`
  - `EditExhibitPage.jsx`

---

## 8. Backend Folder Structure

#### `animals`
Contains all logic related to animals.
- **crud**:
  - `animalCrud.js`
- **endpoints**:
  - `animalEndpoints.js`
- **model**:
  - `Animal.js`
- **validation**:
  - `joi`:
    - `createAnimal.js`
    - `updateAnimal.js`
  - `animalValidationService.js`

#### `auth`
Handles authentication logic.
- **providers**:
  - `jwt.js`
- **authService.js**

#### `config`
Contains configuration files.
- `default.json`
- `development.json`
- `production.json`

#### `DB`
Contains database connection files.
- **mongodb**:
  - `connectToAtlas.js`
  - `connectToMongodb.js`
- `dbService.js`

#### `exhibits`
Contains all logic related to exhibits.
- **crud**:
  - `exhibitCrud.js`
- **endpoints**:
  - `exhibitEndpoints.js`
- **model**:
  - `Exhibit.js`
- **validation**:
  - `joi`:
    - `createExhibit.js`
    - `updateAnimalsExhibit.js`
    - `updateExhibit.js`
  - `ExhibitValidationService.js`

#### `middlewares`
Contains middleware logic for the app.
- `cors.js`
- `errorHandler.js`
- `loggerService.js`

#### `models`
Contains utility models.
- `defaults.js`
- `image.js`
- `name.js`

#### `public`
Contains static files.
- **images**:
  - `placeHolderAnimalPicture.webp`
  - `placeHolderVisitorPicture.png`

#### `reviews`
Contains logic related to reviews.
- **crud**:
  - `reviewCrud.js`
- **endpoints**:
  - `reviewEndpoints.js`
- **model**:
  - `Review.js`
- **validation**:
  - `joi`:
    - `createReview.js`
    - `updateReview.js`
  - `reviewValidationService.js`

#### `router`
Contains the application's route handler.
- `router.js`

#### `utils`
Contains utility functions.
- **normalizing**:
  - `normalizeAnimal.js`
  - `normalizeExhibit.js`
  - `normalizeReview.js`
  - `normalizeReviewForUpdate.js`
  - `normalizeVisitor.js`
  - `normalizeVisitorForUpdate.js`
- `bcrypt.js`
- `timeHelper.js`

#### `visitors`
Contains all logic related to visitors.
- **crud**:
  - `visitorCrud.js`
- **endpoints**:
  - `visitorEndpoints.js`
- **model**:
  - `Visitor.js`
- **validation**:
  - `joi`:
    - `visitorLogin.js`
    - `visitorRegister.js`
    - `visitorUpdate.js`
  - `VisitorValidationService.js`

#### `app.js`

---

## 9. Installation

### Development Mode

1. Install backend dependencies:
   npm install

2. Run the backend server:
   npm run dev

3. Install frontend dependencies:
   cd .\frontside\
   npm install

4. Run the frontend development server:
   npm run dev

### Production Mode

1. Install backend dependencies:
   npm install

2. Run the backend server:
   npm start

3. Install frontend dependencies:
   cd .\frontside\
   npm run build

4. Run the frontend development server:
   npm start

for both modes:
create .env file in server and put there those variable:

# Port configuration
PORT=8181

# JWT secret for signing tokens
JWT_SECRET=your-secret-key

# MongoDB connection URIs
MONGODB_URI=mongodb://127.0.0.1:27017/Zoo
ATLAS_URI=your-atlas-connection-string(can be empty)
