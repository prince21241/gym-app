# 💪 Gym Fitness App

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)

> A modern, responsive fitness application built with React and Vite, designed to help users track workouts, discover exercises, and achieve their fitness goals.

## 🌟 Features

### Core Functionality

- **Exercise Library**: Browse through a comprehensive database of exercises with detailed instructions
- **Workout Tracking**: Create, customize, and track your workout sessions
- **Progress Monitoring**: Visual charts and statistics to monitor your fitness journey
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Fast Performance**: Lightning-fast loading times powered by Vite's hot module replacement

### User Experience

- **Intuitive Interface**: Clean, modern UI designed for ease of use
- **Search & Filter**: Quick exercise discovery with advanced filtering options
- **Exercise Categories**: Organized by muscle groups and equipment types
- **Personal Dashboard**: Centralized view of your fitness statistics and goals

## 🚀 Demo

[**Live Demo**](https://gym30day.netlify.app/)

## 📸 Screenshots

## 🛠️ Tech Stack

**Frontend:**

- **React 18** - Modern React with hooks and functional components
- **Vite** - Next-generation frontend tooling for blazing fast development
- **CSS3/SCSS** - Custom styling with modern CSS features
- **React Router** - Client-side routing for single-page application

**Development Tools:**

- **ESLint** - Code linting for consistent code quality
- **Prettier** - Code formatting for better readability
- **Husky** - Git hooks for pre-commit code quality checks

**APIs & Data:**

- **ExerciseDB API** - Comprehensive exercise database
- **Local Storage** - Client-side data persistence
- **REST API Integration** - Seamless data fetching and management

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/prince21241/gym-app.git
   cd gym-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Add your API keys and configuration:

   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   VITE_APP_NAME=Gym Fitness App
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action.

## 📁 Project Structure

```
gym-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── common/       # Shared components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI-specific components
│   ├── pages/            # Application pages/routes
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API services and data fetching
│   ├── utils/            # Utility functions
│   ├── assets/           # Images, icons, and other assets
│   ├── styles/           # Global styles and CSS modules
│   └── constants/        # Application constants
├── tests/                # Test files
└── docs/                 # Documentation
```

## 🎯 Key Features Implementation

### Exercise Search & Filtering

```javascript
// Advanced search functionality with real-time filtering
const useExerciseSearch = (exercises, searchTerm, filters) => {
  return useMemo(() => {
    return exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.bodyPart === "all" || exercise.bodyPart === filters.bodyPart)
    );
  }, [exercises, searchTerm, filters]);
};
```

### Workout Progress Tracking

```javascript
// Local storage integration for persistent data
const useWorkoutHistory = () => {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workoutHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const addWorkout = useCallback(
    (workout) => {
      const newWorkouts = [...workouts, { ...workout, id: Date.now() }];
      setWorkouts(newWorkouts);
      localStorage.setItem("workoutHistory", JSON.stringify(newWorkouts));
    },
    [workouts]
  );

  return { workouts, addWorkout };
};
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 🏗️ Build & Deployment

### Development Build

```bash
npm run build
```

### Production Build

```bash
npm run build:prod
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🔧 API Integration

This app integrates with ExerciseDB API for comprehensive exercise data:

```javascript
const fetchExercises = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises",
    options
  );
  return response.json();
};
```

## 📊 Performance Optimizations

- **Code Splitting**: Dynamic imports for route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Memoization**: React.memo and useMemo for expensive operations
- **Bundle Optimization**: Vite's built-in optimization and tree shaking

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Social features (sharing workouts, following friends)
- [ ] Nutrition tracking integration
- [ ] Wearable device connectivity
- [ ] Offline mode with service workers
- [ ] Advanced analytics and insights
- [ ] Custom workout plan generator
- [ ] Video exercise demonstrations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Prince Raval ** - [GitHub](https://github.com/prince21241) | [LinkedIn](https://www.linkedin.com/in/princeravaltech/)

## 🙏 Acknowledgments

- Exercise data provided by [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
- Icons by [Lucide React](https://lucide.dev/)
- Design inspiration from modern fitness applications

---

⭐ Star this repository if you found it helpful!

![GitHub stars](https://img.shields.io/github/stars/prince21241/gym-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/prince21241/gym-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/prince21241/gym-app)
![GitHub license](https://img.shields.io/github/license/prince21241/gym-app)
