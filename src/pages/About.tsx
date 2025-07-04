
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Satyam Public School</h1>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-blue-600 font-semibold">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-blue-600 transition-colors">Notices</Link>
              <Link to="/admission" className="text-gray-700 hover:text-blue-600 transition-colors">Admission</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Satyam Public School</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premier educational institution committed to nurturing young minds and fostering excellence in education
          </p>
        </section>

        {/* Principal's Message */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Principal M.R. Prajapat" 
                    className="w-44 h-44 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Principal's Message</h3>
                <p className="text-lg text-gray-600 mb-4">
                  "Welcome to Satyam Public School, where we believe in nurturing not just academic excellence, but also the character and values that will guide our students throughout their lives."
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  "Our mission is to foster confidence, curiosity, and compassion in every student. We are committed to providing a holistic education that prepares our students for the challenges of tomorrow while instilling in them the values of integrity, respect, and social responsibility."
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  "At Satyam Public School, we encourage our students to dream big, work hard, and always strive for excellence. Together, we are building a brighter future for our community and our nation."
                </p>
                <div className="text-right">
                  <p className="text-xl font-semibold text-gray-800">M.R. Prajapat</p>
                  <p className="text-gray-600">Principal, Satyam Public School</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Eye className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a leading educational institution that empowers students to become confident, compassionate, and competent global citizens who contribute positively to society while maintaining their cultural roots and values.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide quality education that nurtures academic excellence, character development, and life skills. We are committed to fostering an environment of learning, innovation, and personal growth for every student.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We foster empathy and kindness, teaching students to care for others and contribute to their community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Curiosity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We encourage questioning, exploration, and lifelong learning to develop critical thinking skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build self-esteem and leadership qualities to help students face challenges with courage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* School History */}
        <section className="mb-16">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-800">Our History</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Established with the vision of providing quality education to the children of Jodhpur, Satyam Public School has been a beacon of academic excellence and character development. Since our inception, we have been committed to creating an environment where students can thrive academically, socially, and personally.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our school follows the RBSE (Rajasthan Board of Secondary Education) curriculum, ensuring that our students receive education that is both comprehensive and aligned with state standards. We have consistently maintained high academic standards while also focusing on the holistic development of our students.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Over the years, we have built a strong reputation in the community for our dedicated faculty, modern teaching methods, and commitment to student success. Our alumni have gone on to achieve success in various fields, carrying forward the values and education they received at Satyam Public School.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Satyam Public School?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Experienced Faculty</h4>
              <p className="text-gray-600">Our dedicated teachers bring years of experience and passion for education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-3">RBSE Curriculum</h4>
              <p className="text-gray-600">We follow the latest RBSE guidelines with modern teaching methodologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Holistic Development</h4>
              <p className="text-gray-600">Focus on academic, cultural, and social development of every student.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
