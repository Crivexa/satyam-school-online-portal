
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Download, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const StudentCorner = () => {
  const { data: studentContent, isLoading } = useQuery({
    queryKey: ['student_content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('student_content')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

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
                <p className="text-sm text-gray-600">Student Corner</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-blue-600 transition-colors">Notices</Link>
              <Link to="/rbse-corner" className="text-gray-700 hover:text-blue-600 transition-colors">RBSE Corner</Link>
              <Link to="/student-corner" className="text-blue-600 font-semibold">Student Corner</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Corner</h2>
            <p className="text-xl text-gray-600">Resources, activities, and updates for our students</p>
          </div>

          {/* Student Resources */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              Student Resources
            </h3>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : studentContent && studentContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentContent.map((content) => (
                  <Card key={content.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-800">{content.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {content.content && (
                        <p className="text-gray-600 mb-4 line-clamp-3">{content.content}</p>
                      )}
                      
                      {content.file_url && (
                        <div className="mb-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => window.open(content.file_url, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download {content.file_type?.toUpperCase() || 'File'}
                          </Button>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(content.created_at).toLocaleDateString()}
                        </div>
                        {content.file_type && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            {content.file_type.toUpperCase()}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No student resources available</h3>
                <p className="text-gray-500">Check back later for study materials and resources</p>
              </div>
            )}
          </section>

          {/* Student Guidelines */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Student Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Academic Guidelines</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Attend all classes regularly and punctually</li>
                    <li>• Complete homework and assignments on time</li>
                    <li>• Participate actively in classroom discussions</li>
                    <li>• Maintain proper study schedule at home</li>
                    <li>• Seek help from teachers when needed</li>
                    <li>• Prepare thoroughly for examinations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Code of Conduct</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Respect teachers, staff, and fellow students</li>
                    <li>• Maintain discipline in school premises</li>
                    <li>• Wear proper school uniform daily</li>
                    <li>• Keep school environment clean</li>
                    <li>• Follow safety rules and regulations</li>
                    <li>• Report any issues to concerned authorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Quick Links for Students</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to="/notices">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Notice Board</h4>
                    <p className="text-gray-600 text-sm">Check latest notices and announcements</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to="/rbse-corner">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">RBSE Corner</h4>
                    <p className="text-gray-600 text-sm">Board exam resources and updates</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to="/gallery">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Gallery</h4>
                    <p className="text-gray-600 text-sm">View school events and activities</p>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to="/contact">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <p className="text-gray-600 text-sm">Get in touch with school administration</p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
