# 🎨 PLP Task Manager - React.js, JSX, and Tailwind CSS

A modern, responsive React application built with Vite, Tailwind CSS, and React Router that demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

### ✅ Completed Assignment Requirements

- **✅ Project Setup**: Vite React application with Tailwind CSS
- **✅ Component Architecture**: Reusable UI components (Button, Card, Navbar, Footer, Layout)
- **✅ State Management**: TaskManager with useState, useEffect, useContext hooks
- **✅ Custom Hooks**: useLocalStorage for task persistence
- **✅ API Integration**: JSONPlaceholder data fetching with search and pagination
- **✅ Routing**: React Router for navigation between pages
- **✅ Responsive Design**: Mobile-first design with Tailwind CSS
- **✅ Dark Mode**: Theme switcher with system preference detection
- **✅ Animations**: Custom CSS animations and transitions

### 🎯 Key Components

1. **TaskManager**: Full-featured task management with CRUD operations
2. **ApiData**: Interactive API data explorer with multiple endpoints
3. **ThemeContext**: Global theme management with localStorage persistence
4. **Responsive Layout**: Mobile, tablet, and desktop optimized

## 🛠️ Technology Stack

- **React 19.2.0** - UI Library
- **Vite 7.1.10** - Build Tool & Dev Server
- **Tailwind CSS 3.4.18** - Utility-first CSS Framework
- **React Router DOM 7.9.4** - Client-side Routing
- **PostCSS & Autoprefixer** - CSS Processing

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-js-jsx-and-css-mastering-front-end-development-Ezra254
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.jsx       # Button component with variants
│   ├── Card.jsx         # Card layout component
│   ├── Navbar.jsx       # Navigation component
│   ├── Footer.jsx       # Footer component
│   ├── Layout.jsx       # Main layout wrapper
│   ├── TaskManager.jsx  # Task management component
│   └── ApiData.jsx      # API data explorer
├── contexts/            # React contexts
│   └── ThemeContext.jsx # Theme management context
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── Tasks.jsx        # Tasks page
│   └── ApiDataPage.jsx  # API data page
├── App.jsx              # Main app component
├── main.jsx             # Application entry point
└── index.css            # Global styles & Tailwind imports
```

## 🎨 Component Features

### Button Component
- **Variants**: Primary, Secondary, Danger, Success, Warning
- **Sizes**: Small, Medium, Large
- **States**: Disabled, Loading
- **Accessibility**: ARIA labels, keyboard navigation

### Card Component
- **Hover Effects**: Optional shadow transitions
- **Dark Mode**: Automatic theme adaptation
- **Flexible**: Customizable with className prop

### TaskManager Component
- **CRUD Operations**: Add, edit, delete, toggle tasks
- **Filtering**: All, Active, Completed tasks
- **Persistence**: localStorage integration
- **Statistics**: Task count and progress

### ApiData Component
- **Multiple Endpoints**: Posts, Users, Comments, Albums, Photos
- **Search Functionality**: Real-time filtering
- **Pagination**: Efficient data loading
- **Error Handling**: Loading states and error messages

## 🌙 Theme System

- **Automatic Detection**: System preference detection
- **Manual Toggle**: Theme switcher in navbar
- **Persistence**: localStorage theme saving
- **Smooth Transitions**: CSS transitions between themes

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl responsive design
- **Flexible Layout**: Grid and flexbox layouts
- **Touch Friendly**: Appropriate touch targets

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Assignment Completion Checklist

- [x] **Task 1**: Project Setup with Vite and Tailwind CSS
- [x] **Task 2**: Component Architecture (Button, Card, Navbar, Footer, Layout)
- [x] **Task 3**: State Management and Hooks (useState, useEffect, useContext, custom hook)
- [x] **Task 4**: API Integration (JSONPlaceholder with search and pagination)
- [x] **Task 5**: Styling with Tailwind CSS (responsive design, dark mode, animations)

## 🚀 Getting Started

1. **Home Page**: Overview of features and navigation
2. **Tasks Page**: Full task management functionality
3. **API Data Page**: Interactive data exploration

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Smooth Animations**: Fade-in, slide-up, and gentle bounce effects
- **Consistent Spacing**: Tailwind's spacing system
- **Typography**: Responsive text sizing
- **Color System**: Semantic color usage

## 📊 Performance Features

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Efficient component loading
- **Optimized Images**: Responsive image handling
- **Bundle Optimization**: Vite's built-in optimizations

## 🔒 Best Practices Implemented

- **Component Composition**: Reusable, composable components
- **PropTypes**: Type checking for component props
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO**: Meta tags and semantic HTML

## 📝 Notes

This project demonstrates modern React development practices including:
- Functional components with hooks
- Context API for state management
- Custom hooks for reusable logic
- Responsive design principles
- API integration patterns
- Component composition patterns

## 🤝 Contributing

This is an assignment project. For questions or improvements, please refer to the assignment guidelines.

---

**Built with ❤️ using React, Tailwind CSS, and Vite**