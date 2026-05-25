import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const plans = [
  {
    name: 'Tiny Tots 🐣',
    price: '$49',
    period: '/month',
    color: 'from-kidYellow to-kidOrange',
    border: 'border-kidYellow',
    bgLight: 'bg-yellow-50',
    popular: false,
    features: [
      '✅ 3 Classes per week',
      '✅ Art & Craft activities',
      '✅ Story time sessions',
      '✅ Playground access',
      '✅ Monthly progress report',
      '❌ Private tutoring',
      '❌ Weekend classes',
    ]
  },
  {
    name: 'Super Star ⭐',
    price: '$89',
    period: '/month',
    color: 'from-kidPurple to-kidPink',
    border: 'border-kidPurple',
    bgLight: 'bg-purple-50',
    popular: true,
    features: [
      '✅ 5 Classes per week',
      '✅ All art & creative activities',
      '✅ Math & science classes',
      '✅ Music & dance sessions',
      '✅ Weekly progress reports',
      '✅ 1 Private tutoring/month',
      '❌ Weekend classes',
    ]
  },
  {
    name: 'Champion 🏆',
    price: '$149',
    period: '/month',
    color: 'from-kidBlue to-kidTeal',
    border: 'border-kidBlue',
    bgLight: 'bg-blue-50',
    popular: false,
    features: [
      '✅ Unlimited classes',
      '✅ All activities included',
      '✅ Advanced STEM program',
      '✅ Music & performing arts',
      '✅ Daily progress reports',
      '✅ 4 Private tutoring/month',
      '✅ Weekend special classes',
    ]
  }
]

export default function Pricing() {
  const [billing, setBilling] = React.useState('monthly')

  return (
    <div>
      <PageHero title="Pricing Plans" subtitle="Choose the perfect plan for your little superstar!" emoji="💰" bg="bg-gradient-to-r from-kidGreen to-kidTeal" />

      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-xl border-4 border-kidGreen flex">
              {['monthly', 'yearly'].map(type => (
                <button
                  key={type}
                  onClick={() => setBilling(type)}
                  className={`font-fredoka px-6 py-2 rounded-full capitalize transition-all duration-300 text-sm ${
                    billing === type
                      ? 'bg-kidGreen text-white shadow-md'
                      : 'text-gray-600 hover:text-kidGreen'
                  }`}
                >
                  {type} {type === 'yearly' ? '🎉 Save 20%!' : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-3xl shadow-xl border-4 ${plan.border} overflow-hidden transition-all duration-300 hover:scale-105 ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-kidPurple to-kidPink text-white font-fredoka text-sm text-center py-2">
                    ⭐ Most Popular!
                  </div>
                )}
                {/* Header */}
                <div className={`bg-gradient-to-br ${plan.color} p-8 text-center`}>
                  <h3 className="font-fredoka text-2xl text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="font-fredoka text-6xl text-white">
                      {billing === 'yearly' ? `$${parseInt(plan.price.slice(1)) * 10}` : plan.price}
                    </span>
                    <span className="font-baloo text-white/80 text-sm pb-3">{billing === 'yearly' ? '/year' : plan.period}</span>
                  </div>
                  {billing === 'yearly' && (
                    <span className="inline-block bg-white/30 font-baloo text-white text-xs px-3 py-1 rounded-full mt-2">Save 2 months free! 🎉</span>
                  )}
                </div>
                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className={`font-baloo text-sm ${feature.startsWith('✅') ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`block text-center font-fredoka text-lg py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-kidPurple to-kidPink text-white shadow-lg hover:shadow-xl'
                      : `bg-gradient-to-r ${plan.color} text-white shadow-md hover:shadow-lg`
                  }`}>
                    🚀 Get Started!
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Money back guarantee */}
          <div className="mt-12 bg-white rounded-3xl p-8 text-center shadow-xl border-4 border-dashed border-kidGreen max-w-2xl mx-auto">
            <div className="text-5xl mb-3">🛡️</div>
            <h3 className="font-fredoka text-2xl text-kidPurple mb-2">30-Day Happy Guarantee!</h3>
            <p className="font-nunito text-gray-600">If your child isn't absolutely in love with Kidoria in 30 days, we'll refund every single penny! That's our promise! 💯</p>
          </div>
        </div>
      </section>
    </div>
  )
}
