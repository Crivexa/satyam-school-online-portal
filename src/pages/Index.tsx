import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award, MapPin, Phone, Mail, BookOpen, Bell, FileText, ChevronDown, Trophy, Lightbulb, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-12 w-12 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Satyam Public School</h1>
                <p className="text-sm text-emerald-600">Excellence in Education</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Notices</Link>
              <Link to="/admission" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Admission</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-teal-900/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nurturing Excellence<br />
            <span className="text-emerald-300">Since 1999</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Empowering young minds with quality education, values, and innovation for a brighter tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Link to="/admission">Apply for Admission</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full shadow-xl backdrop-blur-sm">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1200+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">85</h3>
              <p className="text-gray-600">Expert Teachers</p>
            </div>
            <div className="text-center group">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Years Excellence</p>
            </div>
            <div className="text-center group">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Satyam Public School?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a holistic learning environment that prepares students for success in academics and life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  CBSE affiliated curriculum with innovative teaching methods and personalized attention for every student
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Faculty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Highly qualified and experienced teachers dedicated to nurturing each student's potential
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Modern Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art facilities including smart classrooms, laboratories, and digital learning resources
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Holistic Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Focus on character building, values, and life skills alongside academic achievement
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sports & Activities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive sports programs and extracurricular activities for overall personality development
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Individual Attention</h3>
                <p className="text-gray-600 leading-relaxed">
                  Small class sizes ensuring personalized guidance and mentorship for every student
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our campus is equipped with modern amenities to provide the best learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Smart Classrooms"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Smart Classrooms</h3>
                  <p className="text-sm opacity-90">Interactive digital learning environment</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="Science Laboratory"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Science Labs</h3>
                  <p className="text-sm opacity-90">Advanced laboratory facilities</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Library"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Library</h3>
                  <p className="text-sm opacity-90">Extensive collection of books and resources</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Sports Complex"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Sports Complex</h3>
                  <p className="text-sm opacity-90">Multi-sport facilities and playground</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Art Studio"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Art & Music</h3>
                  <p className="text-sm opacity-90">Creative arts and music rooms</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80"
                alt="Computer Lab"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Computer Lab</h3>
                  <p className="text-sm opacity-90">Modern computing and coding facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Hear from our students, parents, and faculty</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Parent</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Satyam Public School has been instrumental in my child's overall development. The teachers are caring and the facilities are excellent."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Arjun Patel</h4>
                    <p className="text-sm text-gray-600">Student, Class 10</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "The learning environment here is amazing. Teachers help us grow not just academically but also as individuals."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-cyan-600 font-bold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">Faculty</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Working at Satyam has been fulfilling. The supportive environment allows us to innovate and excel in teaching."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards your child's bright future. Apply for admission today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl">
              <Link to="/admission">Start Application</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-8 w-8 text-emerald-400" />
                <h3 className="text-xl font-bold">Satyam Public School</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Nurturing excellence in education with a focus on holistic development and character building.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link to="/admission" className="text-gray-400 hover:text-emerald-400 transition-colors">Admissions</Link></li>
                <li><Link to="/notices" className="text-gray-400 hover:text-emerald-400 transition-colors">Notices</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Academic</h4>
              <ul className="space-y-3">
                <li><Link to="/student-corner" className="text-gray-400 hover:text-emerald-400 transition-colors">Student Corner</Link></li>
                <li><Link to="/rbse-corner" className="text-gray-400 hover:text-emerald-400 transition-colors">RBSE Corner</Link></li>
                <li><Link to="/auth" className="text-gray-400 hover:text-emerald-400 transition-colors">Student Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-emerald-400" /> Near Shastri Circle, Jodhpur</p>
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2 text-emerald-400" /> +91-9876543210</p>
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2 text-emerald-400" /> info@satyamschool.in</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Satyam Public School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
