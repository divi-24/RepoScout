# Repo Scout 🚀

A modern GitHub repository search tool with amazing UI effects and powerful search capabilities.

## Features ✨

- Beautiful, modern UI with glassmorphism effects
- Real-time GitHub repository search
- Advanced filtering options
- Responsive design
- Smooth animations and transitions
- Pagination support
- Error handling with visual feedback

## Tech Stack 💻

- React.js
- Tailwind CSS
- GitHub API
- Vercel (deployment)

## Prerequisites 📋

- Node.js (v14 or higher)
- npm or yarn
- GitHub Personal Access Token

## Setup 🛠️

1. Clone the repository:
```bash
git clone https://github.com/yourusername/repo-scout.git
cd repo-scout
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your GitHub Personal Access Token to the `.env` file:
```
REACT_APP_GITHUB_TOKEN=your_github_personal_access_token_here
```

5. Start the development server:
```bash
npm start
# or
yarn start
```

## Deployment on Vercel 🌐

1. Fork this repository

2. Create an account on [Vercel](https://vercel.com) if you haven't already

3. Create a new project on Vercel and import your forked repository

4. Add the following environment variable in your Vercel project settings:
   - Name: `REACT_APP_GITHUB_TOKEN`
   - Value: Your GitHub Personal Access Token

5. Deploy! Vercel will automatically build and deploy your project

## Environment Variables 🔐

- `REACT_APP_GITHUB_TOKEN`: Your GitHub Personal Access Token (required)
- `REACT_APP_API_URL`: GitHub API URL (optional, defaults to GitHub API)

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- GitHub API
- React.js community
- Tailwind CSS team
- Vercel for hosting
