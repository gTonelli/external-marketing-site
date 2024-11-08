export const MELANIE_GUEST_PRICING = {
  BANNER: {
    header: 'Are You Ready to Empower Yourself & Create A Life You’ll Love?',
    copy: (
      <>
        Lock in your exclusive one-time offer before it leaves:{' '}
        <strong>$47 per month for LIFE – a 50% discount off the regular price</strong>. It’s the
        perfect time to finally take control of your life and relationships with the groundbreaking
        approach and powerful platform that will radically power up everything you want. You can
        cancel at any time with no commitment.
      </>
    ),
    pricing: {
      originalPrice: '$97',
      newPrice: '$47',
      timePeriod: 'per month',
      ctaLabel: 'PAY $47 & SAVE 50%',
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
      discountedCost: '$47',
      discountSubtext: 'Up to 85% off the valued price',
    },
  },
}
