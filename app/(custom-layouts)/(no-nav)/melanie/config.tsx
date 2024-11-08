export const MELANIE_GUEST_PRICING = {
  BANNER: {
    header: 'Are You Ready to Empower Yourself & Create A Life You’ll Love?',
    copy: (
      <>
        It’s time to finally take control of your life and relationships with the groundbreaking
        approach and powerful platform that will radically power up everything you want. Here’s your
        exclusive, special one-time offer to begin: <strong>$67 per month for LIFE</strong> – a 30%
        discount off the regular price. You can cancel at any time with no commitment.
      </>
    ),
    pricing: {
      originalPrice: '$97',
      newPrice: '$67',
      timePeriod: 'per month',
      ctaLabel: 'PAY $67 & SAVE 30%',
      subtext: '*Your discount coupon is auto-applied at checkout',
    },
  },
  TABLE: {
    columns: ["What You're Getting", 'Valued At', 'Included in Monthly Membership'],
    items: [
      { label: 'Daily Live Webinars and Q&As with Thais', cost: '$1200' },
      { label: 'Daily Support Groups with Trained Coaches', cost: '$300' },
      { label: 'Unlimited Access to 65+ Courses & Programs', cost: '$185' },
      { label: 'Interactive Workbooks and Exercises', cost: '$1550' },
      { label: 'Private Online Community Access', cost: '$500' },
      { label: 'Mobile App', cost: '$50' },
    ],
    total: {
      totalCost: '$3875',
      subtext: 'on average',
      discountedCost: '$67',
      discountSubtext: 'Up to 85% off the valued price',
    },
  },
}
