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
  ChevronDown,
  ShieldCheck,
  Star,
  Clock,
  Repeat,
  Heart,
  Check
} from 'lucide-react';
import { cn } from './lib/utils';
// @ts-ignore
import cartoonPoop from './assets/images/cartoon_element_poop_1781742490341.jpg';

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

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  benefits, 
  pricing, 
  features, 
  price, 
  image,
  detailedInfo 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  benefits: string[],
  pricing: string[],
  features: string[],
  price: string,
  image: string,
  detailedInfo: {
    title: string,
    content: string
  }
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      whileHover={{ y: -5 }}
      className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-brand-earth/5 flex flex-col h-full group transition-all duration-300"
    >
      <div className="h-64 overflow-hidden relative shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-black text-brand-earth shadow-sm uppercase tracking-widest">
          {price} Base
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-brand-sage/10 rounded-xl text-brand-sage">
            <Icon size={24} />
          </div>
          <h3 className="font-serif font-bold text-2xl text-brand-earth">{title}</h3>
        </div>
        <p className="text-brand-earth/60 mb-6 leading-relaxed text-sm">
          {description}
        </p>

        {/* Highlights List */}
        <div className="mb-8 p-4 bg-brand-cream/40 rounded-2xl border border-brand-earth/5">
          <h4 className="text-[10px] font-black text-brand-earth/40 uppercase tracking-[0.2em] mb-3">Key Highlights</h4>
          <ul className="grid grid-cols-1 gap-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 text-xs font-medium text-brand-earth/70">
                <div className="w-1 h-1 bg-brand-sage rounded-full" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-brand-earth/30 uppercase tracking-[0.2em] border-b border-brand-earth/5 pb-2">Pricing</h4>
            <ul className="space-y-3">
              {pricing.map((item, i) => (
                <li key={i} className="text-sm font-bold text-brand-earth flex items-start gap-2">
                  <span className="text-brand-sage font-black">/</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-brand-earth/30 uppercase tracking-[0.2em] border-b border-brand-earth/5 pb-2">Included</h4>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-brand-earth/50 leading-snug">
                  <CheckCircle2 size={12} className="text-brand-sage/40 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-3 rounded-xl border-2 border-brand-sage/20 text-brand-sage font-bold flex items-center justify-center gap-2 hover:bg-brand-sage/5 transition-all"
          >
            {isExpanded ? 'Hide Details' : 'View Full Details'}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown size={18} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-brand-earth/5 space-y-3">
                  <h4 className="text-sm font-bold text-brand-earth">{detailedInfo.title}</h4>
                  <p className="text-xs text-brand-earth/60 leading-relaxed italic">
                    {detailedInfo.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <a 
            href="#booking" 
            className="block w-full py-4 rounded-xl bg-brand-earth text-white font-bold text-center hover:bg-brand-earth/90 hover:shadow-xl hover:shadow-brand-earth/20 transition-all"
          >
            Book Service
          </a>
        </div>
      </div>
    </motion.div>
  );
};

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

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-earth/10 rounded-2xl overflow-hidden bg-brand-cream/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-cream/50 transition-colors"
      >
        <span className="font-bold text-brand-earth">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-brand-sage"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-brand-earth/70 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: ['Individual Dog Walking'] as string[],
    petType: 'Dog',
    frequency: 'One-time',
    walkDuration: '30-min',
    yardSize: 'Small',
    date: '',
    details: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const calculateTotal = () => {
    let total = 0;
    const walkCost = formData.walkDuration === '15-min' ? 10 : (formData.walkDuration === '30-min' ? 20 : 30);
    const yardCost = formData.yardSize === 'Small' ? 15 : 25;

    if (formData.services.includes('Weekly Full-Care Package')) {
      const pkgCost = formData.walkDuration === '15-min' ? 75 : (formData.walkDuration === '30-min' ? 125 : 175);
      return pkgCost;
    }

    if (formData.services.includes('Individual Dog Walking')) {
      total += walkCost;
    }
    if (formData.services.includes('Group Dog Walking')) {
      total += walkCost;
    }
    if (formData.services.includes('Backyard Playtime')) {
      total += walkCost;
    }
    if (formData.services.includes('Poop Cleanup')) {
      total += yardCost;
    }

    // 10% Bundle Discount if multiple services are selected
    if (formData.services.length > 1) {
      total = total * 0.9;
    }

    // 10% Frequency Discount for recurring care
    if (formData.frequency !== 'One-time') {
      total = total * 0.9;
    }

    return total;
  };

  const handleBooking = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.services.length === 0) {
      setError("Please select at least one service requested.");
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedDate = new Date(formData.date);
      const todayDate = new Date(today);

      if (selectedDate < todayDate) {
        setError("Please select a date that is today or in the future.");
        setIsSubmitting(false);
        return;
      }

      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));

      let serviceDetails = '';
      if (formData.services.includes('Weekly Full-Care Package')) {
        serviceDetails = `Weekly Full-Care Package (${formData.walkDuration} Walks + 1 ${formData.yardSize} Clean/week)`;
      } else {
        const parts: string[] = [];
        if (formData.services.includes('Individual Dog Walking')) parts.push(`Individual Walk (${formData.walkDuration})`);
        if (formData.services.includes('Group Dog Walking')) parts.push(`Group Walk (${formData.walkDuration})`);
        if (formData.services.includes('Backyard Playtime')) parts.push(`Backyard Playtime (${formData.walkDuration})`);
        if (formData.services.includes('Poop Cleanup')) parts.push(`Poop Cleanup (${formData.yardSize} Yard)`);
        serviceDetails = parts.join(' & ');
      }

      const message = `Hi Henry! I'd like to book a session.%0D%0A%0D%0AName: ${formData.name}%0D%0AServices: ${serviceDetails} (${formData.frequency})%0D%0APet Type: ${formData.petType}%0D%0APreferred Start Date: ${formData.date}%0D%0AAbout my pet: ${formData.details}%0D%0AEstimate: $${calculateTotal().toFixed(2)}`;
      
      // Attempt to open SMS app
      window.location.href = `sms:+12035411396?body=${message}`;
      
      setIsSuccess(true);
      
      // Reset form success state after some time if they want to book again
      setTimeout(() => setIsSuccess(false), 10000);
    } catch (err) {
      console.error("Booking error:", err);
      setError("Something went wrong while trying to open your messaging app. Please try again or text Henry directly at 203-541-1396.");
    } finally {
      setIsSubmitting(false);
    }
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
            <ServiceCard 
              icon={Dog}
              title="Dog Walking"
              description="Timed, energetic walks around Darien's best neighborhoods and paths. We ensure your dog gets the exercise and social stimulation they need."
              price="$10"
              image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
              benefits={[
                "Tailored exercise for high-energy breeds",
                "Safe, familiar neighborhood routes",
                "Hydration and treat check after walk"
              ]}
              pricing={[
                "15-min walk: $10",
                "30-min walk: $20",
                "45-min walk: $30"
              ]}
              features={[
                "Fresh water refill & treats",
                "Photo updates to your phone",
                "Available daily or weekly"
              ]}
              detailedInfo={{
                title: "Our Standard Routes & Procedures",
                content: "We utilize local favorites like Tilley Pond Park, Cherry Lawn, and the quiet residential lanes of Tokeneke for varied sensory experiences. Each walk begins with a secure collar/harness check and ends with a hydration refill. We now offer Social Group Walks at the same price as individual walks—a great way for your dog to make local friends! We maintain a 1:1 walker-to-dog ratio for new clients to ensure maximum safety."
              }}
            />
            <ServiceCard 
              icon={Heart}
              title="Backyard Playtime"
              description="Perfect for dogs who prefer to play, fetch, or run around in the safety and comfort of your own backyard. Fully customized activities!"
              price="$10"
              image="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800"
              benefits={[
                "Focused 1-on-1 direct playtime",
                "Safe play in your secure backyard",
                "Custom play style (fetch, tug-of-war, etc.)"
              ]}
              pricing={[
                "15-min play: $10",
                "30-min play: $20",
                "45-min play: $30"
              ]}
              features={[
                "Custom toys and play styles",
                "Fresh water bowl refill",
                "Photo & status updates",
                "Ideal for puppy socializing"
              ]}
              detailedInfo={{
                title: "Our Backyard Safety & Fun Guarantee",
                content: "We customize each backyard session to your pet's energy levels and favorite games, whether that's chasing a tennis ball, playing tug, or working on basic tricks. We carefully inspect gate locks before and after playtime to guarantee absolute security. Backyard playtime is perfect for older dogs, puppies, or any pet that thrives on personal attention over walks."
              }}
            />
            <ServiceCard 
              icon={Trash2}
              title="Poop Cleanup"
              description="Keep your yard pristine and your family safe. We provide thorough waste removal for residential yards, with pricing based on your yard size."
              price="$15"
              image={cartoonPoop}
              benefits={[
                "Thorough perimeter-to-perimeter sweep",
                "Safe removal of all pet waste",
                "Eco-friendly disposal methods"
              ]}
              pricing={[
                "Small yard: $15+",
                "Large yard: $25+"
              ]}
              features={[
                "Full yard perimeter sweep",
                "Waste disposal included",
                "One-time or recurring"
              ]}
              detailedInfo={{
                title: "Sanitation & Yard Safety Protocol",
                content: "Our team performs a grid-pattern sweep of your entire property, including under decks and along fence lines. We use bio-degradable bags and dispose of waste off-site to prevent odors. After every cleanup, we double-check that all gates are securely latched and locked. We can also provide a non-toxic, pet-safe enzymatic sanitizing spray for high-traffic areas upon request."
              }}
            />
          </div>

          <div className="mt-12">
            <div className="bg-brand-sage/5 rounded-[40px] border border-brand-sage/20 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/3 h-64 rounded-[32px] bg-brand-sage/10 border border-brand-sage/20 flex flex-col items-center justify-center relative overflow-hidden group shadow-inner shrink-0">
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-sage/5 rounded-full blur-2xl group-hover:bg-brand-sage/10 transition-all duration-500" />
                <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-brand-earth/5 rounded-full blur-2xl group-hover:bg-brand-earth/10 transition-all duration-500" />
                
                <div className="relative flex items-center justify-center">
                  {/* Outer spinning/repeat ring background */}
                  <div className="absolute w-28 h-28 border border-brand-sage/20 rounded-full animate-spin-slow flex items-center justify-center">
                    <div className="absolute -top-1 w-2 h-2 rounded-full bg-brand-sage" />
                    <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-brand-sage/60" />
                  </div>
                  
                  {/* Main Icon Frame */}
                  <div className="w-20 h-20 rounded-[24px] bg-white border border-brand-sage/10 shadow-md flex items-center justify-center relative transform group-hover:scale-105 transition-all duration-500">
                    <Calendar size={38} className="text-brand-sage" strokeWidth={2} />
                    
                    {/* Repeat/Recurring emblem on top corner */}
                    <div className="absolute -bottom-2 -right-2 bg-brand-earth text-white p-2 rounded-full shadow-lg border border-white">
                      <Repeat size={14} className="animate-pulse" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center z-10">
                  <span className="text-[10px] font-black uppercase text-brand-sage/80 tracking-widest block">Darien Dog Squad</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="inline-flex items-center gap-2 bg-brand-sage/20 text-brand-sage px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <Repeat size={14} />
                  Most Popular Choice
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-earth mb-4">Recurring Squad Care</h3>
                <p className="text-brand-earth/70 text-lg mb-8 max-w-2xl leading-relaxed">
                  Set it and forget it! Most of our Darien neighbors prefer a weekly or bi-weekly schedule. We'll show up on your chosen days like clockwork, ensuring your dog is exercised and your yard is spotless without you ever having to text us.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-brand-earth/5 flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-sage" />
                    <span className="font-bold text-brand-earth">Weekly Walks</span>
                  </div>
                  <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-brand-earth/5 flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-sage" />
                    <span className="font-bold text-brand-earth">Bi-Weekly Cleanup</span>
                  </div>
                  <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-brand-earth/5 flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-sage" />
                    <span className="font-bold text-brand-earth">Save 10% on Bundles</span>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-brand-sage text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-sage/20 transition-all"
                >
                  Schedule Recurring Care
                </button>
              </div>
            </div>
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
              role="13 Years Old • Owner of Ranger"
              bio="Patrick is a 13 year old dog lover who is our dog walking pro. His dog, Ranger, is 8 and Patrick has been surrounded by dogs his entire life."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Common Questions</h2>
            <p className="text-brand-earth/60 uppercase tracking-widest text-xs font-bold">Everything you need to know about our services</p>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="How do I schedule a service?" 
              answer="It's easy! Just fill out the booking form below or text Henry at 203-541-1396. We usually respond in under 2 hours to confirm your request and coordinate the best time." 
            />
            <FAQItem 
              question="What happens if the weather is bad?" 
              answer="Depending on the weather, we can do whatever the client would like us to do and we can reschedule." 
            />
            <FAQItem 
              question="Do you walk multiple dogs at once?" 
              answer="We do walk multiple dogs, but if you would prefer to request a private walk, that is absolutely fine—just let us know!" 
            />
            <FAQItem 
              question="How do I handle payment?" 
              answer="We accept cash or Venmo. Most clients prefer Venmo for simplicity. Payment is typically due after each visit or at the end of the week for recurring clients." 
            />
            <FAQItem 
              question="Are you local to Darien?" 
              answer="Yes! We are all local residents and students in Darien. We love our community and take pride in helping our neighbors keep their pets and yards happy." 
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
                      <p className="font-bold">happypups@dariendogsquad.com</p>
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
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 bg-brand-sage/10 rounded-full flex items-center justify-center text-brand-sage">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h4 className="font-serif text-3xl font-bold text-brand-earth mb-2">Message Ready!</h4>
                      <p className="text-brand-earth/60 max-w-sm mx-auto">
                        Your messaging app should have opened with your request. If it didn't, please click "Send Message" again or text us directly!
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-brand-sage font-bold hover:underline"
                    >
                      Wait, let me fix something
                    </button>
                    <button 
                      onClick={() => window.location.reload()}
                      className="bg-brand-earth text-white px-8 py-3 rounded-xl font-bold"
                    >
                      Done for now
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleBooking} 
                    className="space-y-6"
                  >
                    {error && !formData.date && (
                      <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                        <X size={16} />
                        {error}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Your Name</label>
                        <input 
                          required
                          disabled={isSubmitting}
                          type="text" 
                          placeholder="John Smith" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all disabled:opacity-50" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Email Address</label>
                        <input 
                          required
                          disabled={isSubmitting}
                          type="email" 
                          placeholder="john@example.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all disabled:opacity-50" 
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1 block">Services Requested (Select all that apply)</label>
                          <div className="space-y-2">
                            {[
                              { id: 'Individual Dog Walking', label: 'Individual Dog Walking', desc: 'Personalized neighborhood walk', priceText: '$10 - $30' },
                              { id: 'Group Dog Walking', label: 'Group Dog Walking', desc: 'Social adventure with trail buddies', priceText: '$10 - $30' },
                              { id: 'Backyard Playtime', label: 'Backyard Playtime', desc: '1-on-1 games (fetch, play) in yard', priceText: '$10 - $30' },
                              { id: 'Poop Cleanup', label: 'Poop Cleanup', desc: 'Yard waste removal and sanitizing', priceText: '$15 - $25' },
                              { id: 'Weekly Full-Care Package', label: 'Weekly Full-Care Package', desc: '5 daily walks + 1 poop cleanup/wk', priceText: '$75 - $175', isPack: true },
                            ].map((serviceItem) => {
                              const isChecked = formData.services.includes(serviceItem.id);
                              return (
                                <button
                                  key={serviceItem.id}
                                  type="button"
                                  disabled={isSubmitting}
                                  onClick={() => {
                                    if (error) setError(null);
                                    let updatedServices = [...formData.services];
                                    if (serviceItem.id === 'Weekly Full-Care Package') {
                                      if (isChecked) {
                                        updatedServices = [];
                                      } else {
                                        updatedServices = ['Weekly Full-Care Package'];
                                      }
                                    } else {
                                      updatedServices = updatedServices.filter(s => s !== 'Weekly Full-Care Package');
                                      if (isChecked) {
                                        updatedServices = updatedServices.filter(s => s !== serviceItem.id);
                                      } else {
                                        updatedServices.push(serviceItem.id);
                                      }
                                    }
                                    setFormData({
                                      ...formData,
                                      services: updatedServices,
                                      frequency: serviceItem.id === 'Weekly Full-Care Package' && !isChecked ? 'Weekly' : formData.frequency
                                    });
                                  }}
                                  className={cn(
                                    "w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3",
                                    isChecked 
                                      ? "bg-brand-sage/5 border-brand-sage shadow-sm" 
                                      : "bg-brand-cream/30 border-brand-earth/10 hover:border-brand-sage/30 hover:bg-white"
                                  )}
                                >
                                  <div className={cn(
                                    "w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all",
                                    isChecked 
                                      ? "border-brand-sage bg-brand-sage text-white" 
                                      : "border-brand-earth/20 bg-white"
                                  )}>
                                    {isChecked && <Check size={10} strokeWidth={3} />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline gap-2">
                                      <span className={cn(
                                        "text-xs font-bold transition-colors",
                                        isChecked ? "text-brand-earth" : "text-brand-earth/70"
                                      )}>
                                        {serviceItem.label}
                                      </span>
                                      <span className="text-[9px] font-black text-brand-sage uppercase bg-brand-sage/10 px-1.5 py-0.5 rounded shrink-0">
                                        {serviceItem.priceText}
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-brand-earth/50 leading-snug mt-0.5">{serviceItem.desc}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          <div className="mt-4 space-y-2">
                            <label className="text-[10px] font-black text-brand-earth/35 uppercase tracking-[0.2em] px-1 block">Service Frequency</label>
                            <div className="flex bg-brand-cream/50 p-1 rounded-xl border border-brand-earth/10">
                              {['One-time', 'Weekly', 'Bi-weekly', '5x Week'].map((freq) => (
                                <button
                                  key={freq}
                                  type="button"
                                  disabled={formData.services.includes('Weekly Full-Care Package')}
                                  onClick={() => setFormData({...formData, frequency: freq})}
                                  className={cn(
                                    "flex-1 py-1.5 text-xs font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                    formData.frequency === freq 
                                      ? "bg-brand-earth text-white shadow-md shadow-brand-earth/20" 
                                      : "text-brand-earth/40 hover:text-brand-earth/60"
                                  )}
                                >
                                  {freq}
                                </button>
                              ))}
                            </div>
                            {formData.frequency !== 'One-time' && !formData.services.includes('Weekly Full-Care Package') && (
                              <p className="text-[10px] text-brand-sage font-bold px-1 animate-pulse">
                                ✨ 10% Discount applied to recurring care!
                              </p>
                            )}
                          </div>

                          {/* Walk / Play Duration selection option */}
                          <AnimatePresence>
                            {(formData.services.some(s => s.includes('Walking') || s === 'Backyard Playtime' || s === 'Weekly Full-Care Package')) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-3"
                              >
                                <div className="p-3 bg-brand-cream/50 rounded-xl border border-brand-earth/10">
                                  <label className="text-[10px] font-black text-brand-earth/40 uppercase tracking-widest px-1 block mb-2">
                                    Session / Walk Duration
                                  </label>
                                  <div className="flex gap-2">
                                    {['15-min', '30-min', '45-min'].map((dur) => {
                                      const isPack = formData.services.includes('Weekly Full-Care Package');
                                      let priceLabel = '';
                                      if (isPack) {
                                        priceLabel = dur === '15-min' ? '$75/wk' : (dur === '30-min' ? '$125/wk' : '$175/wk');
                                      } else {
                                        priceLabel = dur === '15-min' ? '$10' : (dur === '30-min' ? '$20' : '$30');
                                      }
                                      return (
                                        <button
                                          key={dur}
                                          type="button"
                                          onClick={() => setFormData({...formData, walkDuration: dur})}
                                          className={cn(
                                            "flex-1 py-1.5 text-xs font-bold rounded-lg transition-all border",
                                            formData.walkDuration === dur 
                                              ? "bg-brand-sage text-white border-brand-sage shadow-md" 
                                              : "bg-white text-brand-earth/60 border-brand-earth/10 hover:border-brand-sage/30"
                                          )}
                                        >
                                          {dur.replace('-min', ' Min')} ({priceLabel})
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Yard size choosing option for cleanup services */}
                          <AnimatePresence>
                            {(formData.services.includes('Poop Cleanup') || formData.services.includes('Weekly Full-Care Package')) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-3"
                              >
                                <div className="p-3 bg-brand-cream/50 rounded-xl border border-brand-earth/10">
                                  <label className="text-[10px] font-black text-brand-earth/40 uppercase tracking-widest px-1 block mb-2">Yard Size</label>
                                  <div className="flex gap-2">
                                    {['Small', 'Large'].map((size) => {
                                      const isPack = formData.services.includes('Weekly Full-Care Package');
                                      const priceLabel = isPack ? 'Included' : (size === 'Small' ? '$15' : '$25');
                                      return (
                                        <button
                                          key={size}
                                          type="button"
                                          onClick={() => setFormData({...formData, yardSize: size})}
                                          className={cn(
                                            "flex-1 py-1.5 text-xs font-bold rounded-lg transition-all border",
                                            formData.yardSize === size 
                                              ? "bg-brand-sage text-white border-brand-sage shadow-md" 
                                              : "bg-white text-brand-earth/60 border-brand-earth/10 hover:border-brand-sage/30"
                                          )}
                                        >
                                          {size} Yard ({priceLabel})
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Beautiful Consolidated Live Price Estimate Panel */}
                          <AnimatePresence>
                            {formData.services.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="p-4 bg-brand-sage/5 rounded-2xl border border-brand-sage/20 space-y-3 mt-4 overflow-hidden"
                              >
                                <div className="flex gap-2 items-center text-xs font-bold text-brand-earth">
                                  <Star className="text-brand-sage animate-spin-slow" size={14} />
                                  <span>Live Estimate Breakdown</span>
                                </div>

                                <div className="space-y-1.5 pt-1 border-t border-brand-sage/10 text-xs text-brand-earth/75 font-medium">
                                  {formData.services.includes('Weekly Full-Care Package') ? (
                                    <div className="flex justify-between">
                                      <span>Weekly Full-Care Package (5x Walks + Cleanup)</span>
                                      <span className="font-bold text-brand-earth">
                                        ${formData.walkDuration === '15-min' ? '75.00' : (formData.walkDuration === '30-min' ? '125.00' : '175.00')}
                                      </span>
                                    </div>
                                  ) : (
                                    <>
                                      {formData.services.includes('Individual Dog Walking') && (
                                        <div className="flex justify-between">
                                          <span>Individual Dog Walk ({formData.walkDuration.replace('-min', ' min')})</span>
                                          <span className="font-bold text-brand-earth">
                                            ${formData.walkDuration === '15-min' ? '10.00' : (formData.walkDuration === '30-min' ? '20.00' : '30.00')}
                                          </span>
                                        </div>
                                      )}
                                      {formData.services.includes('Group Dog Walking') && (
                                        <div className="flex justify-between">
                                          <span>Group Dog Walk ({formData.walkDuration.replace('-min', ' min')})</span>
                                          <span className="font-bold text-brand-earth">
                                            ${formData.walkDuration === '15-min' ? '10.00' : (formData.walkDuration === '30-min' ? '20.00' : '30.00')}
                                          </span>
                                        </div>
                                      )}
                                      {formData.services.includes('Backyard Playtime') && (
                                        <div className="flex justify-between">
                                          <span>Backyard Playtime ({formData.walkDuration.replace('-min', ' min')})</span>
                                          <span className="font-bold text-brand-earth">
                                            ${formData.walkDuration === '15-min' ? '10.00' : (formData.walkDuration === '30-min' ? '20.00' : '30.00')}
                                          </span>
                                        </div>
                                      )}
                                      {formData.services.includes('Poop Cleanup') && (
                                        <div className="flex justify-between">
                                          <span>Poop Cleanup ({formData.yardSize} Yard)</span>
                                          <span className="font-bold text-brand-earth">
                                            ${formData.yardSize === 'Small' ? '15.00' : '25.00'}
                                          </span>
                                        </div>
                                      )}
                                    </>
                                  )}

                                  {/* Multi-Service Bundle Discount (if not weekly full-care and counts > 1) */}
                                  {!formData.services.includes('Weekly Full-Care Package') && formData.services.length > 1 && (
                                    <div className="flex justify-between text-brand-sage font-bold">
                                      <span>Multi-Service Bundle Discount (-10%)</span>
                                      <span>
                                        -${(
                                          (() => {
                                            const walkCost = formData.walkDuration === '15-min' ? 10 : (formData.walkDuration === '30-min' ? 20 : 30);
                                            const yardCost = formData.yardSize === 'Small' ? 15 : 25;
                                            let sub = 0;
                                            if (formData.services.includes('Individual Dog Walking')) sub += walkCost;
                                            if (formData.services.includes('Group Dog Walking')) sub += walkCost;
                                            if (formData.services.includes('Backyard Playtime')) sub += walkCost;
                                            if (formData.services.includes('Poop Cleanup')) sub += yardCost;
                                            return sub * 0.1;
                                          })()
                                        ).toFixed(2)}
                                      </span>
                                    </div>
                                  )}

                                  {/* Frequency Discount */}
                                  {formData.frequency !== 'One-time' && !formData.services.includes('Weekly Full-Care Package') && (
                                    <div className="flex justify-between text-brand-sage font-bold">
                                      <span>Recurring Care Discount (-10%)</span>
                                      <span>
                                        -${(
                                          (() => {
                                            const walkCost = formData.walkDuration === '15-min' ? 10 : (formData.walkDuration === '30-min' ? 20 : 30);
                                            const yardCost = formData.yardSize === 'Small' ? 15 : 25;
                                            let sub = 0;
                                            if (formData.services.includes('Individual Dog Walking')) sub += walkCost;
                                            if (formData.services.includes('Group Dog Walking')) sub += walkCost;
                                            if (formData.services.includes('Backyard Playtime')) sub += walkCost;
                                            if (formData.services.includes('Poop Cleanup')) sub += yardCost;
                                            const totalServicesSelected = formData.services.length;
                                            if (totalServicesSelected > 1) {
                                              sub = sub * 0.9; // Apply bundle discount before frequency discount
                                            }
                                            return sub * 0.1;
                                          })()
                                        ).toFixed(2)}
                                      </span>
                                    </div>
                                  )}

                                  {/* Dynamic Total Sum line */}
                                  <div className="flex justify-between text-sm font-black text-brand-earth pt-2 border-t border-brand-earth/5">
                                    <span>
                                      {formData.services.includes('Weekly Full-Care Package') ? 'Weekly Package Total' : 'Total Estimate'}
                                    </span>
                                    <span className="text-brand-sage text-base">
                                      ${calculateTotal().toFixed(2)}
                                      {formData.services.includes('Weekly Full-Care Package') ? '/wk' : ''}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">
                            {formData.frequency === 'One-time' ? 'Preferred Date' : 'Preferred Start Date'}
                          </label>
                          <input 
                            required
                            disabled={isSubmitting}
                            type="date" 
                            min={today}
                            value={formData.date}
                            onChange={(e) => {
                              setFormData({...formData, date: e.target.value});
                              if (error) setError(null);
                            }}
                            className={cn(
                              "w-full bg-brand-cream/50 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all disabled:opacity-50",
                              error && !formData.date ? "border-red-500 ring-1 ring-red-500" : "border-brand-earth/10"
                            )} 
                          />
                          {error && (
                            <p className="text-red-500 text-xs font-bold px-1 animate-pulse">
                              {error}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Pet Type</label>
                        <select 
                          disabled={isSubmitting}
                          value={formData.petType}
                          onChange={(e) => setFormData({...formData, petType: e.target.value})}
                          className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all disabled:opacity-50"
                        >
                          <option>Dog</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-earth/50 uppercase tracking-widest px-1">Tell us about your pet(s)</label>
                        <textarea 
                          required
                          disabled={isSubmitting}
                          rows={1} 
                          placeholder="Name, age, breed..." 
                          value={formData.details}
                          onChange={(e) => setFormData({...formData, details: e.target.value})}
                          className="w-full bg-brand-cream/50 border border-brand-earth/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:bg-white transition-all disabled:opacity-50" 
                        />
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-brand-sage text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-sage/20 transition-all flex items-center justify-center gap-3",
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-brand-sage/90"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Send Booking Request"
                      )}
                    </button>

                    <div className="mt-8 flex gap-3 p-4 bg-brand-earth/5 rounded-2xl border border-brand-earth/10">
                      <Clock size={18} className="text-brand-earth/40 shrink-0 mt-0.5" />
                      <p className="text-xs text-brand-earth/60 leading-relaxed">
                        <span className="font-bold text-brand-earth/80">Availability Note:</span> While we do our best to accommodate your preferred time, some slots may be filled by prior bookings. If your requested time isn't available, Henry will text you immediately to find the next best time for your pet!
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Conflict Warning Section */}
      <section className="bg-brand-sage/5 py-12 border-t border-brand-earth/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-brand-earth/5 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sage/5 rounded-full -mr-16 -mt-16" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-16 h-16 bg-brand-sage/10 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="text-brand-sage" size={32} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif font-bold text-2xl text-brand-earth mb-3">
                  Live Schedule Coordination
                </h4>
                <p className="text-brand-earth/70 leading-relaxed max-w-2xl text-sm">
                  While we strive to meet every request, <span className="font-bold text-brand-earth">prior bookings and recurring schedules</span> occasionally cause small conflicts. We treat our 'Squad' members with priority on a first-come basis. If your selected time is busy, Henry will personally text you within 2 hours to coordinate the next best slot for your furry friend!
                </p>
              </div>
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
