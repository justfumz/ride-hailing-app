const roles = [
  {
    title: 'For Working Parents',
    desc: 'Easily schedule school pickups and drop-offs. Stay informed with real-time updates.',
  },
  {
    title: 'For Schools',
    desc: 'Streamline transport for students with scheduling and approval workflows.',
  },
  {
    title: 'For Corporate HR',
    desc: 'Provide safe and timely rides for employees. Manage bookings from a single dashboard.',
  },
];

const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Who We Serve</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="border p-6 rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
            <p className="text-gray-600">{role.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
