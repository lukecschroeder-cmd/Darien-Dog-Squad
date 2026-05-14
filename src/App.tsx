import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dog, 
  Trash2, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-earth/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-sage p-2 rounded-lg">
            <Dog className="text-white w-6 h-6" />
          </div>
          <span className="font-serif font-bold text-xl text-brand-earth tracking-tight">
            Darien Dog Squad
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-earth/80">
          <a href="#services" className="hover:text-brand-sage transition-colors">Services</a>
          <a href="#team" className="hover:text-brand-sage transition-colors">The Team</a>
          <a href="#booking" className="bg-brand-earth text-white px-6 py-2.5 rounded-full hover:bg-brand-earth/90 transition-all flex items-center gap-2">
            Book a Walk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-brand-earth">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-earth/10 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 font-medium text-brand-earth">
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#team" onClick={() => setIsOpen(false)}>The Team</a>
              <a href="#booking" onClick={() => setIsOpen(false)} className="text-brand-sage font-bold">Book a Walk</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features, price, image }: { 
  icon: any, 
  title: string, 
  description: string, 
  features: string[],
  price: string,
  image: string
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-earth/5 flex flex-col h-full"
  >
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-earth shadow-sm">
        Starts at {price}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-brand-sage/10 rounded-lg text-brand-sage">
          <Icon size={24} />
        </div>
        <h3 className="font-serif font-bold text-2xl text-brand-earth">{title}</h3>
      </div>
      <p className="text-brand-earth/70 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-brand-earth/80">
            <CheckCircle2 size={16} className="text-brand-sage mt-0.5 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-xl border-2 border-brand-sage text-brand-sage font-bold hover:bg-brand-sage hover:text-white transition-all">
        Learn More
      </button>
    </div>
  </motion.div>
);

const TeamMember = ({ name, role, bio, image }: { name: string, role: string, bio: string, image?: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl bg-brand-sage/20 flex items-center justify-center">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      ) : (
        <span className="text-5xl font-serif font-bold text-brand-sage">{name[0]}</span>
      )}
    </div>
    <h4 className="font-serif font-bold text-xl text-brand-earth mb-1">{name}</h4>
    <p className="text-brand-sage font-medium text-sm mb-4 uppercase tracking-widest">{role}</p>
    <p className="text-brand-earth/70 text-sm leading-relaxed max-w-xs">{bio}</p>
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Dog Walking',
    details: ''
  });

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    const subject = `New Booking Request from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0ADetails: ${formData.details}`;
    window.location.href = `mailto:henryrsymons@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-earth selection:bg-brand-sage selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-sage/10 text-brand-sage px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <MapPin size={14} />
              Serving the Darien Area
            </div>
            <h1 className="font-serif text-5xl md:text-8xl font-bold text-brand-earth leading-[1.1] mb-8">
              Happy Tails, <br className="hidden md:block" />
              <span className="italic text-brand-sage">Spotless</span> Yards.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-earth/70 mb-12 leading-relaxed">
              We're local dog owners from the neighborhood. Henry, Brooks, and Patrick are here to make pet ownership in Darien a breeze. From energetic walks to yard cleanup, we treat your pets like our own family dogs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-brand-earth text-white px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-brand-earth/20 transition-all flex items-center gap-2 group">
                Book a Visit
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-brand-earth border border-brand-earth/10 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-brand-cream/50 transition-all">
                Our Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Visuals */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-sage/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-earth/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-brand-earth/60 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">Comprehensive Care for Your Four-Legged Friends</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ServiceCard 
              icon={Dog}
              title="Dog Walking"
              description="Timed, energetic walks around Darien's best neighborhoods and paths. We ensure your dog gets the exercise and social stimulation they need."
              price="$25/walk"
              image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
              features={[
                "30 or 60 minute options",
                "Fresh water refill & treats",
                "GPS tracked route updates",
                "Photo updates to your phone",
                "Available daily or weekly"
              ]}
            />
            <ServiceCard 
              icon={Trash2}
              title="Poop Cleanup"
              description="Keep your yard pristine and your family safe. We provide thorough waste removal for residential yards and commercial spaces."
              price="$15/visit"
              image="https://images.unsplash.com/photo-1598418018306-03f56e92ef94?auto=format&fit=crop&q=80&w=800"
              features={[
                "Full yard perimeter sweep",
                "Waste disposal included",
                "Sanitization service available",
                "One-time or recurring visits",
                "Gate reminder notifications"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-brand-earth py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-24 text-white/90">
          <div className="flex items-center gap-3">
            <Star className="text-yellow-400 fill-yellow-400" />
            <span className="font-bold tracking-tight">5-Star Local Support</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-brand-sage" />
            <span className="font-bold tracking-tight">Flexible Scheduling</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Meet the Squad</h2>
              <p className="text-brand-earth/70 text-lg">
                We're local entrepreneurs with one shared passion: making sure Darien's dogs are the happiest in Connecticut. Plus, we all have our own dogs at home!
              </p>
            </div>
            <a href="#booking" className="text-brand-sage font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Join our family <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <TeamMember 
              name="Henry"
              role="12 Years Old • Owner of Benny"
              bio="Henry, lifelong dog lover has been with dogs for his entire life. Henry has a dog named Benny who is 4 and is an aussie-doodle."
            />
            <TeamMember 
              name="Brooks"
              role="12 Years Old • Owner of Bailey"
              bio="Brooks is a 12 year old dog lover who has had 2 dogs and has been connected to them his whole life. He has a 5 year old bernedoodle named Bailey."
            />
            <TeamMember 
              name="Patrick"
              role="13 Years Old • Dog Walking Pro"
              bio="Patrick is a 13 year old dog lover who is our dog walking pro. He has a black lab named Ranger."
            />
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 bg-brand-sage/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-brand-earth/5 border border-brand-earth/5 overflow-hidden flex flex-col lg:flex-row">
            <div className="bg-brand-sage p-12 lg:w-2/5 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-4xl font-bold mb-6 italic">Ready to get started?</h3>
                <p className="text-white/80 mb-12">
                  Fill out the form and Henry will reach out. We usually respond in under 2 hours, unless we have a conflict.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase font-bold tracking-widest">Text or Call</p>
                      <p className="font-bold">203-541-1396</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase font-bold tracking-widest">Email Us</p>
                      <p className="font-bold">henryrsymons@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-sm text-white/50 border-t border-white/10 pt-8">
                © 2024 Darien Dog & Yard Squad. <br />
                Created with ❤️ for the dogs of CT.
              </div>
            </div>
            
            <div className="p-12 lg:w-3/5">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Smith" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Service Requested</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all"
                  >
                    <option>Dog Walking</option>
                    <option>Poop Cleanup</option>
                    <option>Both Services</option>
                    <option>Weekly Full-Care Package</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Tell us about your pet(s)</label>
                  <textarea 
                    required
                    rows={4} 
                    placeholder="Breed, name, energetic level, etc." 
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all" 
                  />
                </div>
                <button type="submit" className="w-full bg-brand-sage text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-sage/90 shadow-xl shadow-brand-sage/20 transition-all">
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-earth/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-sage/10 p-1.5 rounded-md">
              <Dog className="text-brand-sage w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-brand-earth">
              Darien Dog Squad
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-brand-earth/60">
            <a href="#" className="hover:text-brand-sage">Privacy Policy</a>
            <a href="#" className="hover:text-brand-sage">Terms of Service</a>
            <a href="#" className="hover:text-brand-sage">Community Safety</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-earth hover:bg-brand-sage hover:text-white transition-all cursor-pointer shadow-sm">
              <Mail size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-earth hover:bg-brand-sage hover:text-white transition-all cursor-pointer shadow-sm">
              <Phone size={18} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
