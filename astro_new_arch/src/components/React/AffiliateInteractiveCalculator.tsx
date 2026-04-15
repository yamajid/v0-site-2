'use client';

import { useState } from 'react';

interface CalculatorTier {
  name: string;
  price: number;
  features: string[];
  recommended: boolean;
  affiliateLink: string;
}

const tiers: CalculatorTier[] = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Basic component generation',
      '10 generations per day',
      'Community support',
      'Standard models',
    ],
    recommended: false,
    affiliateLink: 'https://v0.dev?ref=v0affiliate',
  },
  {
    name: 'Pro',
    price: 20,
    features: [
      'Unlimited generations',
      'Priority access to new models',
      'Custom styling options',
      'Export to code',
      'Email support',
    ],
    recommended: true,
    affiliateLink: 'https://v0.dev/pricing?ref=v0affiliate',
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom model training',
      'API access',
      'Dedicated support',
      'SLA guarantee',
    ],
    recommended: false,
    affiliateLink: 'https://v0.dev/enterprise?ref=v0affiliate',
  },
];

export default function AffiliateInteractiveCalculator() {
  const [selectedTier, setSelectedTier] = useState<number>(1);
  const [monthlyUsage, setMonthlyUsage] = useState<number>(100);

  const estimatedSavings = Math.round(monthlyUsage * 0.15);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900">Calculate Your v0 ROI</h3>
      <p className="mt-2 text-gray-600">
        See how much time and money you can save with v0 by Vercel.
      </p>

      {/* Usage Slider */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Monthly Component Generations: {monthlyUsage}
        </label>
        <input
          type="range"
          min="10"
          max="1000"
          value={monthlyUsage}
          onChange={(e) => setMonthlyUsage(Number(e.target.value))}
          className="mt-2 w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>10</span>
          <span>1000</span>
        </div>
      </div>

      {/* Tier Selection */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {tiers.map((tier, index) => (
          <button
            key={tier.name}
            onClick={() => setSelectedTier(index)}
            className={`relative rounded-lg border-2 p-4 text-left transition-all ${
              selectedTier === index
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {tier.recommended && (
              <span className="absolute -top-2 right-2 rounded-full bg-primary-600 px-2 py-0.5 text-xs font-medium text-white">
                Recommended
              </span>
            )}
            <p className="text-lg font-semibold text-gray-900">{tier.name}</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              ${tier.price}<span className="text-sm font-normal text-gray-500">/mo</span>
            </p>
            <ul className="mt-3 space-y-1">
              {tier.features.map((feature) => (
                <li key={feature} className="text-xs text-gray-600">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      {/* ROI Display */}
      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Estimated Monthly Savings</p>
            <p className="text-3xl font-bold text-green-600">${estimatedSavings}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Time Saved</p>
            <p className="text-3xl font-bold text-primary-600">~{Math.round(monthlyUsage * 0.5)} hrs</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href={tiers[selectedTier].affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full rounded-lg bg-primary-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-primary-700"
      >
        Get Started with v0 {tiers[selectedTier].name}
      </a>

      <p className="mt-2 text-center text-xs text-gray-500">
        Affiliate disclosure: We may earn a commission when you sign up through our links.
      </p>
    </div>
  );
}
