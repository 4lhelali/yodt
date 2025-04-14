<p align="center">
  <img src="public/images/logo-bg.png" alt="Logo">
</p>

<p align="center">
  <a href="https://www.instagram.com/yod_karabuk">
    <img src="https://img.shields.io/badge/Instagram-@yod_karabuk-E4405F" alt="Instagram">
  </a>
  <a href="https://youtube.com/channel/UCX1UbXi4sUWGD9axGqgPHGA">
    <img src="https://img.shields.io/badge/YouTube-YÖDK-FF0000" alt="YouTube">
  </a>
  <a href="https://www.facebook.com/Y.O.B.KARABUK">
    <img src="https://img.shields.io/badge/Facebook-Y.O.B.KARABUK-1877F2" alt="Facebook">
  </a>
</p>

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [TODO](#todo)

## About

YODT is the main website for the Yemeni students union in Karabuk University. It serves as a platform for students to connect, share resources, and stay updated on the latest news and events. The website provides various features including forums, event calendars, and resource libraries to support the academic and social needs of Yemeni students.

## Installation

To run the website locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YourRepo/yodt.git
   cd yodt
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Copy the `.env.example` file to `.env` and add the necessary environment variables.

   ```bash
   cp .env.example .env
   ```

4. **Set up the database using Neon:**

   - Create a Neon account and set up a new database.
   - Add the database connection string to the `.env` file.

5. **Run database migrations:**

   ```bash
   pnpm db:migrate
   ```

6. **Push database schema:**

   ```bash
   pnpm db:push
   ```

7. **Open database studio:**

   ```bash
   pnpm db:studio
   ```

8. **Run the development server:**

   ```bash
   pnpm dev
   ```

9. **Open your browser:**
   Navigate to `http://localhost:3000` to see the website in action.

## Usage

To use the website, follow these steps:

1. **Register an account:**

   - Go to the registration page and fill in the required details.
   - Verify your email address if required.

2. **Log in:**

   - Use your registered email and password to log in.

3. **Explore features:**

   - Navigate through the website to access forums, event calendars, and resource libraries.
   - Participate in discussions, register for events, and utilize available resources.

4. **Profile management:**

   - Update your profile information and preferences from the profile settings page.

5. **Stay updated:**
   - Check the latest news and announcements on the homepage or news section.

## Contributing

We welcome contributions from the community! To contribute, follow these steps:

1. **Fork the repository:**

   - Click the "Fork" button at the top right of the repository page.

2. **Clone your forked repository:**

   ```bash
   git clone https://github.com/alhaymex/yodt.git
   cd yodt
   ```

3. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes:**

   - Implement your feature or fix the bug.

5. **Commit your changes:**

   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

6. **Push to your branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a pull request:**
   - Go to the original repository and click the "New Pull Request" button.
   - Provide a clear description of your changes and submit the pull request.

## TODO

- [x] Setup The Project
- [x] Add Authentication with google
- [x] Create the database schema
- [x] Add the create post page
- [x] Create the rich text editor
- [x] Add the UI
- [x] Extend the session to include the user role
- [x] Add Authorization
- [x] Add mobile support
- [x] Create the dashboard page
- [x] Integrate uploadthing for the image uploads
- [ ] Finish the blog post UI
- [ ] Add Post & Event Deletion functionality
- [ ] Add Magic links authentication with Resend
- [ ] SEO
- [ ] Add multi-language support
