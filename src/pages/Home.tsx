import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Award, 
  Heart, 
  Star,
  Calendar,
  Brain,
  Users,
  Clock,
  Activity
} from 'lucide-react';
import clinicHero from '../img/clinic_hero.png';

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kumar",
      text: "Exceptional psychiatric care. Dr. Nirmal's diagnosis helped me overcome chronic insomnia and anxiety. I can finally sleep peacefully.",
      rating: 5,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Priya Sundar",
      text: "The counseling and de-addiction program is outstanding. The staff is highly supportive, extremely compassionate, and strictly respects patient confidentiality.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Anand Raj",
      text: "Excellent therapy sessions for work stress and anxiety. The clinic environment is incredibly calm and professional. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Brain, value: "10+", label: "Specialized Services" },
    { icon: Clock, value: "Mon-Sat", label: "6:00 PM - 9:30 PM" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <Brain className="h-4 w-4" />
                <span>Neuropsychiatry, De-addiction & Sexual Health</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Mental Health,{' '}
                <span className="text-indigo-600">Our Commited Priority</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience compassionate, evidence-based psychiatric and counseling care. 
                Led by Dr. Nirmal Kumar Seenan, we help you overcome anxiety, depression, addictions, 
                and stress in a completely confidential environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={clinicHero}
                alt="DS Clinic Consultation Room"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-full">
                    <Heart className="h-6 w-6 text-emerald-600 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">100%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Strict Confidentiality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-3 bg-indigo-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-indigo-700">
                  <stat.icon className="h-8 w-8 text-indigo-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Therapy Session at DS Clinic"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Why Choose DS Clinic?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of clinical expertise, DS Clinic is a trusted name in Avadi, Chennai, 
                for comprehensive mental healthcare. We combine medical expertise with compassionate counseling 
                to guide our patients towards holistic healing.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-emerald-100 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Confidentiality & Safety</h3>
                    <p className="text-gray-600">We prioritize patient privacy above all. Every therapy session and medical file is strictly confidential.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-100 rounded-full flex-shrink-0">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Psychiatric Care</h3>
                    <p className="text-gray-600">Led by Dr. Nirmal Kumar Seenan, MD in Psychiatry, specializing in neuropsychiatry and de-addiction.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Holistic & Patient-Centered</h3>
                    <p className="text-gray-600">Personalized mental health treatment plans incorporating medical therapy, CBT counseling, and lifestyle support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Key Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, highly confidential psychiatric and psychological counseling support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-3 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">De-addiction Care</h3>
              <p className="text-gray-600 mb-4">Evidence-based programs helping patients reclaim control over alcohol, chemical, and digital dependencies.</p>
              <div className="text-2xl font-bold text-indigo-600">₹500 / session</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-3 bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Anxiety & Depression</h3>
              <p className="text-gray-600 mb-4">Compassionate cognitive therapies and medical stabilization plans for mood disorders.</p>
              <div className="text-2xl font-bold text-indigo-600">₹300 / session</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sexual Health Concerns</h3>
              <p className="text-gray-600 mb-4">Confidential consulting and therapeutic assistance for erectile difficulties, loss of libido, and psychosexual anxiety.</p>
              <div className="text-2xl font-bold text-indigo-600">₹500 / session</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Take the First Step Towards Mental Wellbeing
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Book a confidential consultation today and explore specialized psychological therapies and care plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5 text-indigo-600" />
                Book Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-200"
              >
                Contact Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear about their recovery and healing journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{testimonial.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;