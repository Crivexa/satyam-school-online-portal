
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail, Clock, Users, Award, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <GraduationCap className="h-10 w-10 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Satyam Public School</h1>
                <p className="text-sm text-emerald-600">Get in Touch</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-emerald-600 transition-colors">Notices</Link>
              <Link to="/admission" className="text-gray-700 hover:text-emerald-600 transition-colors">Admission</Link>
              <Link to="/contact" className="text-emerald-600 font-semibold">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2834&q=80"
                alt="School Building"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-5xl font-bold mb-4">Visit Our Campus</h2>
                  <p className="text-xl opacity-90">Experience excellence in education at Satyam Public School</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-emerald-600 font-medium">+91-9876543210</p>
                <p className="text-emerald-600 font-medium">+91-9876543211</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-emerald-600 font-medium text-sm">info@satyamschool.in</p>
                <p className="text-emerald-600 font-medium text-sm">admission@satyamschool.in</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">Mon-Fri: 8AM-4PM</p>
                <p className="text-gray-600 text-sm">Sat: 8AM-12PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">Near Shastri Circle</p>
                <p className="text-gray-600 text-sm">Jodhpur, Rajasthan</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">School Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Satyam Public School<br />
                        Near Shastri Circle<br />
                        Jodhpur, Rajasthan - 342001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Phone Numbers</h4>
                      <p className="text-gray-600">Office: +91-9876543210</p>
                      <p className="text-gray-600">Admission: +91-9876543211</p>
                      <p className="text-gray-600">Principal: +91-9876543212</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email Addresses</h4>
                      <p className="text-gray-600">General: info@satyamschool.in</p>
                      <p className="text-gray-600">Admissions: admission@satyamschool.in</p>
                      <p className="text-gray-600">Principal: principal@satyamschool.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Office Timings</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                      <p className="text-emerald-600 text-sm mt-2">*Admission counseling available during office hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* School Stats */}
              <Card className="border-0 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Award className="h-6 w-6 mr-3" />
                    School at a Glance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                      <p className="text-2xl font-bold">1200+</p>
                      <p className="text-sm opacity-90">Students</p>
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-80" />
                      <p className="text-2xl font-bold">85</p>
                      <p className="text-sm opacity-90">Teachers</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-8 w-8 mx-auto mb-2 opacity-80" />
                      <p className="text-2xl font-bold">25+</p>
                      <p className="text-sm opacity-90">Years Legacy</p>
                    </div>
                    <div className="text-center">
                      <Heart className="h-8 w-8 mx-auto mb-2 opacity-80" />
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-sm opacity-90">Success Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Find Us on Map</CardTitle>
                  <p className="text-gray-600">Located in the heart of Jodhpur, easily accessible from all parts of the city</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-xl overflow-hidden shadow-inner" style={{ height: '400px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113794.57392836033!2d72.95175485!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eea6c2a91%3A0x8db14c4b6b7e3c9f!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1635789123456!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Transportation */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">How to Reach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">By Bus</h4>
                    <p className="text-gray-600 text-sm">City buses available from Jodhpur Railway Station and Airport</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">By Auto/Taxi</h4>
                    <p className="text-gray-600 text-sm">Just mention "Shastri Circle" - all drivers know the location</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">School Transport</h4>
                    <p className="text-gray-600 text-sm">Bus facility available for students across Jodhpur</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Join Our School Family?</h3>
                <p className="text-xl opacity-90 mb-8">Schedule a visit to see our facilities and meet our dedicated faculty</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/admission" 
                    className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Apply for Admission
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
