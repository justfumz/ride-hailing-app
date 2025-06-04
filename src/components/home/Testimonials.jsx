const testimonials = [
  {
    name: 'Ada, Parent',
    text: 'I finally have peace of mind knowing my kids get to and from school safely. RideXpress is a lifesaver!',
  },
  {
    name: 'Mr. James, HR Manager',
    text: "Our staff love the convenience. It's helped improve punctuality and morale significantly.",
  },
  {
    name: 'Mrs. Okafor, School Admin',
    text: "Managing transportation used to be a nightmare. Now, it's organized and stress-free!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        What People Are Saying
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-semibold text-blue-700">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
