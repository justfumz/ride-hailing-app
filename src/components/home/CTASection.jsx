import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 text-center bg-blue-700 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Simplify Your Transportation?
      </h2>
      <p className="text-lg mb-6">
        Start booking safe, reliable rides today for your family, school, or
        company.
      </p>
      <Link to="/book">
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Book a Ride Now
        </button>
      </Link>
    </section>
  );
};

export default CTASection;
