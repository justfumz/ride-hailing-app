const steps = [
  {
    title: '1. Book Your Ride',
    desc: 'Choose your pickup/drop-off location and preferred time.',
  },
  {
    title: '2. Confirm & Track',
    desc: 'Get real-time updates and driver info after booking.',
  },
  {
    title: '3. Ride with Peace of Mind',
    desc: 'Our trained drivers ensure safety and punctuality.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
