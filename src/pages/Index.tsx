
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Award, MapPin, Phone, Mail, BookOpen, Bell, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const { data: announcements } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('is_active', true)
        .order('priority', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  const { data: notices } = useQuery({
    queryKey: ['notices'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-10 w-10 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Satyam Public School</h1>
                <p className="text-sm text-slate-600">Excellence in Education</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">About</Link>
              <Link to="/notices" className="text-slate-700 hover:text-emerald-600 transition-colors">Notices</Link>
              <Link to="/admission" className="text-slate-700 hover:text-emerald-600 transition-colors">Admission</Link>
              <Link to="/gallery" className="text-slate-700 hover:text-emerald-600 transition-colors">Gallery</Link>
              <Link to="/contact" className="text-slate-700 hover:text-emerald-600 transition-colors">Contact</Link>
              {user ? (
                <Link to="/dashboard" className="text-slate-700 hover:text-emerald-600 transition-colors">Dashboard</Link>
              ) : (
                <Link to="/auth" className="text-slate-700 hover:text-emerald-600 transition-colors">Login</Link>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&crop=center" 
            alt="School Building" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-teal-600/30"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Welcome to Satyam Public School
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nurturing young minds with excellence in education, fostering confidence, curiosity, and compassion in every student. Join us in building a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/admission">Apply for Admission</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features with Images */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-16">Why Choose Satyam Public School?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop" 
                    alt="Expert Faculty" 
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-emerald-600/20 rounded-lg"></div>
                </div>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-slate-800">Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">Dedicated and experienced teachers committed to student success with personalized attention</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop" 
                    alt="Excellence in Education" 
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-emerald-600/20 rounded-lg"></div>
                </div>
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-slate-800">Excellence in Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">Proven track record of academic achievements and holistic development for every student</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544531586-fbd96cedf4d8?w=400&h=250&fit=crop" 
                    alt="Modern Curriculum" 
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-emerald-600/20 rounded-lg"></div>
                </div>
                <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-slate-800">Modern Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">RBSE aligned curriculum with focus on practical learning and innovation for future readiness</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Facilities Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-16">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=300&h=200&fit=crop" 
                alt="Science Laboratory" 
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Science Laboratory</h4>
              <p className="text-slate-600 text-sm">Well-equipped labs for hands-on learning</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop" 
                alt="Computer Lab" 
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Computer Lab</h4>
              <p className="text-slate-600 text-sm">Modern technology for digital literacy</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" 
                alt="Sports Facilities" 
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Sports Complex</h4>
              <p className="text-slate-600 text-sm">Comprehensive sports and fitness facilities</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop" 
                alt="Library" 
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Library</h4>
              <p className="text-slate-600 text-sm">Vast collection of books and resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      {announcements && announcements.length > 0 && (
        <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center text-slate-800 mb-16 flex items-center justify-center gap-3">
              <Bell className="h-8 w-8 text-emerald-600" />
              Latest Announcements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-800">{announcement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 line-clamp-3 leading-relaxed">{announcement.content}</p>
                    <p className="text-sm text-slate-500 mt-3">
                      {new Date(announcement.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-16">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm group">
              <Link to="/notices">
                <CardContent className="p-8 text-center">
                  <FileText className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold mb-3 text-slate-800">Notice Board</h4>
                  <p className="text-slate-600">View latest notices and updates</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm group">
              <Link to="/rbse-corner">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold mb-3 text-slate-800">RBSE Corner</h4>
                  <p className="text-slate-600">RBSE related updates and resources</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm group">
              <Link to="/student-corner">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold mb-3 text-slate-800">Student Corner</h4>
                  <p className="text-slate-600">Resources and updates for students</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/90 backdrop-blur-sm group">
              <Link to="/admission">
                <CardContent className="p-8 text-center">
                  <GraduationCap className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold mb-3 text-slate-800">Admission</h4>
                  <p className="text-slate-600">Apply for admission online</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-slate-800 mb-16">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-6">
                <MapPin className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-slate-800">Address</h4>
              <p className="text-slate-600 leading-relaxed">Near Shastri Circle, Jodhpur, Rajasthan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-6">
                <Phone className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-slate-800">Phone</h4>
              <p className="text-slate-600">+91-9876543210</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-6">
                <Mail className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-slate-800">Email</h4>
              <p className="text-slate-600">info@satyamschool.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-400" />
                <h4 className="text-xl font-bold">Satyam Public School</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">Excellence in Education since inception</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link to="/admission" className="text-slate-300 hover:text-emerald-400 transition-colors">Admission</Link></li>
                <li><Link to="/notices" className="text-slate-300 hover:text-emerald-400 transition-colors">Notices</Link></li>
                <li><Link to="/gallery" className="text-slate-300 hover:text-emerald-400 transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/rbse-corner" className="text-slate-300 hover:text-emerald-400 transition-colors">RBSE Corner</Link></li>
                <li><Link to="/student-corner" className="text-slate-300 hover:text-emerald-400 transition-colors">Student Corner</Link></li>
                <li><Link to="/terms" className="text-slate-300 hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-slate-300 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-300">
                <p>Near Shastri Circle, Jodhpur</p>
                <p>+91-9876543210</p>
                <p>info@satyamschool.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2024 Satyam Public School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
