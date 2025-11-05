# 📦 Component Library

A modern, production-ready React component library built with TypeScript, Tailwind CSS, ShadCN and Radix UI. This library provides a comprehensive set of accessible, customizable, and well-documented UI components designed for enterprise applications.

## 🎯 Overview

This component library is a complete solution for building consistent user interfaces. It combines the power of React with the accessibility standards of Radix UI primitives, styled with Tailwind CSS, and documented with Storybook. Perfect for creating scalable applications with a unified design language.

## ✨ Key Features

- **30+ Production-Ready Components** - Comprehensive collection covering forms, tables, dialogs, dates, and more
- **Fully Accessible** - Built on Radix UI primitives following WAI-ARIA standards
- **TypeScript Support** - Full type safety and excellent IDE integration
- **Tailwind CSS Powered** - Easy customization and consistent styling
- **Storybook Integration** - Interactive component documentation and testing
- **Modern Stack** - React 19, Vite, and latest tooling for optimal performance

## 📦 Available Components

### Form Components
- **Input** - Text input with validation and states
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection with search
- **Checkbox** - Single and multiple selection
- **Radio Group** - Single selection from options
- **Switch** - Toggle control
- **Label** - Form labels with accessibility support
- **Currency Input** - Formatted currency input field

### UI Components
- **Button** - Primary, secondary, and variant button styles
- **Badge** - Status and data labels
- **Avatar** - User profile images with fallback
- **Alert** - Alert messages with different types
- **Card** - Container component with optional actions
- **Loader** - Loading spinner indicator
- **Progress** - Progress bar with percentage
- **Stepper** - Step indicator for multi-step workflows
- **Tooltip** - Contextual information on hover
- **Empty State** - Placeholder for empty data states

### Data Display
- **Table** - Data table with sorting and filtering
- **Dispatch Table** - Specialized table for dispatch operations
- **Tabs** - Tabbed content interface
- **Sort Icon** - Directional sorting indicator
- **Error Fallback** - Error state component

### Navigation & Overlays
- **Drawer** - Side panel navigation
- **Dropdown Menu** - Context and application menus
- **Dialog** - Modal dialogs for user interaction
- **Topbar** - Header/navigation bar component

### Date & Time
- **Single Date Picker** - Select a single date
- **Range Date Picker** - Select date ranges
- Calendar utilities powered by date-fns and dayjs

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

### Storybook

View and test components interactively:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to explore component documentation.

### Build

Build for production:

```bash
npm run build
```

### Testing & Linting

Run tests and lint:

```bash
npm run lint
```

## 🏗️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **Radix UI** | Accessible component primitives |
| **Storybook** | Component documentation |
| **Playwright** | End-to-end testing |
| **ESLint** | Code quality |
| **TanStack React Table** | Advanced table functionality |

## 📋 Usage Example

### Basic Component Usage

```tsx
import React, { useState } from 'react';
import { Button, Input, Card, Badge } from './components';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <Card>
      <h1>Welcome to Component Library</h1>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
      <Button onClick={() => console.log(value)}>
        Submit
      </Button>
      <Badge>Status: Active</Badge>
    </Card>
  );
}
```

### Form Example

```tsx
import { Input, Textarea, Select, Button, Checkbox } from './components';

export default function Form() {
  return (
    <form>
      <Input placeholder="Full Name" />
      <Textarea placeholder="Message" />
      <Select
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
      />
      <Checkbox label="I agree to terms" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## 📚 Project Structure

```
src/
├── components/          # All UI components
│   ├── button/         # Button component
│   ├── input/          # Input component
│   ├── table/          # Table component
│   ├── dialog/         # Dialog modal
│   └── ...             # Other components
├── lib/                # Utility functions
├── utils/              # Helper utilities
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎨 Styling

Components are styled with Tailwind CSS and support customization through:

- **Class utilities** - Leveraging Tailwind CSS classes
- **Variants** - Using class-variance-authority for component variants
- **Theming** - Consistent design tokens across components

## ♿ Accessibility

All components follow WAI-ARIA standards and are built on Radix UI primitives:

- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## 📖 Documentation

- **Storybook** - Interactive component explorer: `npm run storybook`
- **Component Stories** - `.stories.tsx` files with usage examples
- **TypeScript** - Full type definitions for all components

## 🔧 Configuration

- **tsconfig.json** - TypeScript configuration
- **vite.config.ts** - Vite build configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **eslint.config.js** - ESLint configuration

## 🤝 Contributing

This library is part of a personal portfolio and demonstrates:

- Modern React development practices
- TypeScript proficiency
- Component-driven architecture
- Accessible UI design
- Testing and code quality standards

## 📄 License

This project is part of a personal portfolio and learning project.

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
