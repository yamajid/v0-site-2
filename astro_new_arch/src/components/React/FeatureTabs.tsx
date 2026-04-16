'use client';

import { useState } from 'react';

interface Feature {
  name: string;
  description: string;
  v0Support: 'full' | 'partial' | 'none';
  competitorSupport: 'full' | 'partial' | 'none';
}

interface FeatureTabsProps {
  competitor?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    name: 'AI-Powered Generation',
    description: 'Generate UI components using natural language prompts with state-of-the-art AI models.',
    v0Support: 'full',
    competitorSupport: 'partial',
  },
  {
    name: 'React/Next.js Integration',
    description: 'Seamless integration with React and Next.js ecosystems for production-ready code.',
    v0Support: 'full',
    competitorSupport: 'partial',
  },
  {
    name: 'Tailwind CSS Support',
    description: 'Built-in Tailwind CSS styling for consistent, modern component design.',
    v0Support: 'full',
    competitorSupport: 'full',
  },
  {
    name: 'Custom Components',
    description: 'Create and save custom component templates for reuse across projects.',
    v0Support: 'full',
    competitorSupport: 'none',
  },
  {
    name: 'Team Collaboration',
    description: 'Share components and collaborate on UI development with your team.',
    v0Support: 'partial',
    competitorSupport: 'full',
  },
  {
    name: 'API Access',
    description: 'Programmatic access to generation capabilities via REST API.',
    v0Support: 'full',
    competitorSupport: 'none',
  },
];

const supportConfig = {
  full: { label: 'Full Support', color: 'bg-green-100 text-green-800' },
  partial: { label: 'Partial Support', color: 'bg-yellow-100 text-yellow-800' },
  none: { label: 'No Support', color: 'bg-red-100 text-red-800' },
};

export default function FeatureTabs({ competitor = 'Competitor', features = defaultFeatures }: FeatureTabsProps) {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Feature Comparison' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              v0 vs {competitor}: Quick Overview
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-primary-50 p-4">
                <p className="font-medium text-primary-900">v0 by Vercel</p>
                <ul className="mt-2 space-y-1 text-sm text-primary-700">
                  <li>✓ Native Next.js support</li>
                  <li>✓ Vercel deployment integration</li>
                  <li>✓ Latest AI models</li>
                  <li>✓ Free tier available</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="font-medium text-gray-900">{competitor}</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>✓ Multiple framework support</li>
                  <li>✓ Established user base</li>
                  <li>✗ Limited AI capabilities</li>
                  <li>✗ No free tier</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Feature Comparison</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Feature</th>
                    <th className="py-3 px-4 text-sm font-semibold text-primary-600">v0</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-600">{competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature) => (
                    <tr key={feature.name} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                        <p className="text-xs text-gray-500">{feature.description}</p>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${supportConfig[feature.v0Support].color}`}>
                          {supportConfig[feature.v0Support].label}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${supportConfig[feature.competitorSupport].color}`}>
                          {supportConfig[feature.competitorSupport].label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Pricing Comparison</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border-2 border-primary-500 p-6">
                <p className="text-lg font-semibold text-gray-900">v0 Pricing</p>
                <p className="mt-2 text-4xl font-bold text-primary-600">$20<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="mt-2 text-sm text-gray-600">Starting price for Pro plan</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• Free tier available</li>
                  <li>• Pay-as-you-go options</li>
                  <li>• Enterprise plans custom-priced</li>
                </ul>
                <a
                  href="https://v0.dev/pricing?ref=v0-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-lg bg-primary-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-primary-700"
                >
                  View v0 Pricing
                </a>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <p className="text-lg font-semibold text-gray-900">{competitor} Pricing</p>
                <p className="mt-2 text-4xl font-bold text-gray-900">$29<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="mt-2 text-sm text-gray-600">Starting price for Basic plan</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• No free tier</li>
                  <li>• Annual billing required for discounts</li>
                  <li>• Limited features on lower tiers</li>
                </ul>
                <button
                  disabled
                  className="mt-6 block w-full rounded-lg bg-gray-200 px-4 py-2 text-center font-medium text-gray-500 cursor-not-allowed"
                >
                  View {competitor} Pricing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
