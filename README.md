# Crewfare Technical Test

A Vue 3 application for managing event creation and configuration, built with modern tooling and best practices.

## 🛠 Tech Stack

- Vue 3 with Composition API
- TypeScript
- Vite
- Tailwind CSS
- Vitest for Testing
- Storybook for Component Documentation
- Vue Datepicker

## 🚀 Features

- Multi-step event creation form
- Form validation
- Responsive design
- Date range selection
- Dynamic tax and fee management
- Image banner upload with overlay options
- Error handling and validation feedback

## 👋 Prerequisites

- Node.js (Latest LTS version recommended)
- Yarn (Project uses Yarn v4.6.0)

## 🔧 Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Craftmoon/crewfare-test-rep.git
   cd crewfare-test-rep
   ```

2. Install dependencies
   ```bash
   yarn install
   ```
3. Run the project and access the provided link
   ```bash
   yarn dev
   ```

## 📦 Other Available Scripts

```bash
# Start development server
yarn dev

# Run tests
yarn test

# Run tests with test UI
yarn test:ui

# Generate test coverage
yarn coverage

# Start Storybook
yarn storybook

```

## 🏷 Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Vue components
│   ├── atoms/      # Basic building blocks
│   ├── molecules/  # Composite components
│   ├── organisms/  # Complex components
│   ├── pages/      # Page components
│   └── templates/  # Layout templates
├── composables/    # Vue composables
├── domain/        # Domain types and constants
├── stories/       # Storybook stories
└── style.css     # Global styles
```

## 🧪 Testing

The project uses Vitest for unit testing. Tests are located alongside their components in `__tests__` directories. Run tests using:

```bash
yarn test
```

Test coverage (all atomic design components)
![Screenshot from 2025-02-28 00-24-46](https://github.com/user-attachments/assets/1179b16f-4a71-4317-b6f3-0fb4f54fec17)

## 📚 Storybook

Component documentation and development environment is available through Storybook. Run it using:

```bash
yarn storybook
```

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configuration including:

- Custom color palette
- Custom spacing
- Custom font family (Poppins)
- Responsive design utilities

Project screenshots

![Screenshot from 2025-02-27 18-02-01](https://github.com/user-attachments/assets/b95a4e88-8176-42b0-a892-6edcd7b82aed)

![Screenshot from 2025-02-27 22-00-42](https://github.com/user-attachments/assets/8332f0d2-0aba-4f51-a352-e7e100aeb0fd)

![Screenshot from 2025-02-27 22-03-18](https://github.com/user-attachments/assets/c8e81b5d-d366-4e4e-89f2-cc882d459ce2)
