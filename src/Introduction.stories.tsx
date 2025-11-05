import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '0. Introduction',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const IntroductionContent = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    {/* Header */}
    <div className="px-8 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        📦 Component Library
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
        A modern, production-ready React component library built with TypeScript, Tailwind CSS, ShadCN and Radix UI
      </p>
    </div>

    {/* Features Grid */}
    <div className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">✨ Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '🎯', title: '30+ Components', desc: 'Complete collection of UI components' },
          { icon: '♿', title: 'Fully Accessible', desc: 'Built on Radix UI with WAI-ARIA standards' },
          { icon: '📘', title: 'TypeScript', desc: 'Full type safety and IDE integration' },
          { icon: '🎨', title: 'Tailwind CSS', desc: 'Easy customization and consistent styling' },
          { icon: '📚', title: 'Storybook', desc: 'Interactive component documentation' },
          { icon: '⚡', title: 'Modern Stack', desc: 'React 19, Vite, and latest tooling' },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Component Categories */}
    <div className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">📦 Available Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            category: 'Form Components',
            items: ['Input', 'Textarea', 'Select', 'Checkbox', 'Radio Group', 'Switch', 'Label', 'Currency Input'],
          },
          {
            category: 'UI Components',
            items: ['Button', 'Badge', 'Avatar', 'Alert', 'Card', 'Loader', 'Progress', 'Stepper'],
          },
          {
            category: 'Data Display',
            items: ['Table', 'Dispatch Table', 'Tabs', 'Sort Icon', 'Error Fallback'],
          },
          {
            category: 'Navigation & Overlays',
            items: ['Drawer', 'Dropdown Menu', 'Dialog', 'Topbar', 'Tooltip'],
          },
          {
            category: 'Date & Time',
            items: ['Single Date Picker', 'Range Date Picker', 'Calendar Utilities'],
          },
          {
            category: 'Additional',
            items: ['Empty State', 'Stepper', 'Progress', 'Tooltip'],
          },
        ].map((section, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">{section.category}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-slate-300 flex items-center">
                  <span className="text-cyan-400 mr-2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Tech Stack */}
    <div className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">🏗️ Tech Stack</h2>
      <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { name: 'React 19', icon: '⚛️' },
          { name: 'TypeScript', icon: '📘' },
          { name: 'Vite', icon: '⚡' },
          { name: 'Tailwind CSS', icon: '🎨' },
          { name: 'Radix UI', icon: '🔧' },
          { name: 'Storybook', icon: '📚' },
          { name: 'Vitest', icon: '✅' },
          { name: 'Playwright', icon: '🎭' },
          { name: 'ESLint', icon: '🔍' },
          { name: 'TanStack Table', icon: '📊' },
        ].map((tech, index) => (
          <div key={index} className="text-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
            <div className="text-3xl mb-2">{tech.icon}</div>
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Getting Started */}
    <div className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🚀 Quick Start</h2>
      <div className="space-y-6">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Installation</h3>
          <code className="bg-slate-900 p-4 rounded block text-sm overflow-x-auto">npm install</code>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Development</h3>
          <code className="bg-slate-900 p-4 rounded block text-sm overflow-x-auto">npm run dev</code>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">Build</h3>
          <code className="bg-slate-900 p-4 rounded block text-sm overflow-x-auto">npm run build</code>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="px-8 py-16 text-center border-t border-slate-700">
      <p className="text-slate-400 mb-2">
        Explore the components in the sidebar to see interactive documentation and examples
      </p>
      <p className="text-slate-500 text-sm">
        Built with ❤️ using React, TypeScript, and modern web technologies
      </p>
    </div>
  </div>
);

export const Default: Story = {
  render: () => <IntroductionContent />,
};
