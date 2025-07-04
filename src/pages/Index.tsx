
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award, MapPin, Phone, Mail, BookOpen, Bell, FileText, ChevronDown, Trophy, Lightbulb, Heart, Star, ArrowRight, Calendar, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <GraduationCap className="h-14 w-14 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="h-2 w-2 text-yellow-800" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Satyam Public School
                </h1>
                <p className="text-sm text-blue-600 font-medium">Excellence in Education Since 1999</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 px-2">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-blue-50">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-blue-50">Notices</Link>
              <Link to="/admission" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-blue-50">Admission</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-blue-50">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with Slideshow */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`School Campus ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                🎓 Admissions Open for 2024-25
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Nurturing</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Excellence
              </span>
              <span className="block text-4xl md:text-5xl font-medium mt-4 text-blue-200">
                Since 1999
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
              Where dreams take flight and futures are built. Join our community of excellence, innovation, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:scale-105 border-2 border-blue-400">
                <Link to="/admission" className="flex items-center gap-3">
                  Apply Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-3 border-white/80 text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-xl font-semibold rounded-full shadow-2xl backdrop-blur-sm hover:shadow-white/25 transition-all">
                <Link to="/about" className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  Explore Campus
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Enhanced Quick Stats */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "1200+", label: "Happy Students", color: "from-blue-500 to-blue-600", bg: "bg-blue-100" },
              { icon: BookOpen, number: "85", label: "Expert Teachers", color: "from-green-500 to-green-600", bg: "bg-green-100" },
              { icon: Award, number: "25+", label: "Years Excellence", color: "from-purple-500 to-purple-600", bg: "bg-purple-100" },
              { icon: Trophy, number: "98%", label: "Success Rate", color: "from-yellow-500 to-yellow-600", bg: "bg-yellow-100" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`${stat.bg} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <stat.icon className={`h-12 w-12 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Key Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Excellence in Every Aspect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide a holistic learning environment that prepares students for success in academics and life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description: "CBSE affiliated curriculum with innovative teaching methods and personalized attention for every student",
                color: "from-blue-500 to-blue-600",
                bg: "from-blue-50 to-blue-100"
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Highly qualified and experienced teachers dedicated to nurturing each student's potential",
                color: "from-green-500 to-green-600",
                bg: "from-green-50 to-green-100"
              },
              {
                icon: Lightbulb,
                title: "Modern Infrastructure",
                description: "State-of-the-art facilities including smart classrooms, laboratories, and digital learning resources",
                color: "from-purple-500 to-purple-600",
                bg: "from-purple-50 to-purple-100"
              },
              {
                icon: Heart,
                title: "Holistic Development",
                description: "Focus on character building, values, and life skills alongside academic achievement",
                color: "from-red-500 to-red-600",
                bg: "from-red-50 to-red-100"
              },
              {
                icon: Trophy,
                title: "Sports & Activities",
                description: "Comprehensive sports programs and extracurricular activities for overall personality development",
                color: "from-yellow-500 to-yellow-600",
                bg: "from-yellow-50 to-yellow-100"
              },
              {
                icon: Star,
                title: "Individual Attention",
                description: "Small class sizes ensuring personalized guidance and mentorship for every student",
                color: "from-indigo-500 to-indigo-600",
                bg: "from-indigo-50 to-indigo-100"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm group overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`bg-gradient-to-br ${feature.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-10 w-10 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Campus
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our campus is equipped with modern amenities to provide the best learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                title: "Smart Classrooms",
                description: "Interactive digital learning environment with modern technology"
              },
              {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
                title: "Science Laboratories",
                description: "Advanced laboratory facilities for hands-on experiments"
              },
              {
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Library & Resources",
                description: "Extensive collection of books and digital resources"
              },
              {
                image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                title: "Sports Complex",
                description: "Multi-sport facilities and expansive playground areas"
              },
              {
                image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Art & Music Studios",
                description: "Dedicated spaces for creative arts and music education"
              },
              {
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80",
                title: "Computer Labs",
                description: "Modern computing facilities with latest technology"
              }
            ].map((facility, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-blue-900/90 transition-all duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Hear from our students, parents, and faculty</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Parent",
                avatar: "P",
                color: "from-pink-400 to-pink-600",
                text: "Satyam Public School has been instrumental in my child's overall development. The teachers are caring and the facilities are excellent. I'm impressed by their holistic approach to education."
              },
              {
                name: "Arjun Patel",
                role: "Student, Class 10",
                avatar: "A",
                color: "from-blue-400 to-blue-600",
                text: "The learning environment here is amazing. Teachers help us grow not just academically but also as individuals. The facilities and extracurricular activities are top-notch."
              },
              {
                name: "Rajesh Kumar",
                role: "Faculty Member",
                avatar: "R",
                color: "from-green-400 to-green-600",
                text: "Working at Satyam has been fulfilling. The supportive environment allows us to innovate and excel in teaching. The school's commitment to excellence is truly inspiring."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center text-white relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Ready to Join Our School Family?</h2>
            <p className="text-2xl mb-12 opacity-90 leading-relaxed">
              Take the first step towards your child's bright future. Experience excellence in education with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all transform hover:scale-105">
                <Link to="/admission" className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  Start Application
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-xl font-semibold rounded-full backdrop-blur-sm hover:shadow-white/25 transition-all">
                <Link to="/contact" className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="h-10 w-10 text-blue-400" />
                <h3 className="text-2xl font-bold">Satyam Public School</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nurturing excellence in education with a focus on holistic development and character building since 1999.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <span className="text-sm font-bold">y</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-8 text-blue-400">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Admissions", path: "/admission" },
                  { name: "Notices", path: "/notices" },
                  { name: "Gallery", path: "/gallery" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-8 text-blue-400">Academic</h4>
              <ul className="space-y-4">
                {[
                  { name: "Student Corner", path: "/student-corner" },
                  { name: "RBSE Corner", path: "/rbse-corner" },
                  { name: "Student Portal", path: "/auth" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-8 text-blue-400">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>Near Shastri Circle, Jodhpur, Rajasthan</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>+91-9876543210</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>info@satyamschool.in</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Satyam Public School. All rights reserved. | Made with ❤️ for education</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
