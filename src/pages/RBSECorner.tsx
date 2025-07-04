
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Download, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const RBSECorner = () => {
  const { data: rbseContent, isLoading } = useQuery({
    queryKey: ['rbse_content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('rbse_content')
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
                <p className="text-sm text-gray-600">RBSE Corner</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-blue-600 transition-colors">Notices</Link>
              <Link to="/rbse-corner" className="text-blue-600 font-semibold">RBSE Corner</Link>
              <Link to="/student-corner" className="text-gray-700 hover:text-blue-600 transition-colors">Student Corner</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">RBSE Corner</h2>
            <p className="text-xl text-gray-600">Rajasthan Board of Secondary Education Resources and Updates</p>
          </div>

          {/* RBSE Content */}
          <section>
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
            ) : rbseContent && rbseContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rbseContent.map((content) => (
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
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
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
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No RBSE content available</h3>
                <p className="text-gray-500">Check back later for updates and resources</p>
              </div>
            )}
          </section>

          {/* RBSE Information */}
          <section className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About RBSE</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  The Rajasthan Board of Secondary Education (RBSE) is the state board of education for the state of Rajasthan, India. 
                  It is responsible for conducting secondary and senior secondary examinations and regulating the education system in Rajasthan.
                </p>
                <p className="mb-4">
                  At Satyam Public School, we follow the RBSE curriculum and ensure that our students are well-prepared for board examinations. 
                  Our experienced faculty provides comprehensive guidance and support to help students excel in their academic pursuits.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Key Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Comprehensive curriculum coverage</li>
                      <li>• Regular assessment and evaluation</li>
                      <li>• Experienced faculty guidance</li>
                      <li>• Updated study materials</li>
                      <li>• Exam preparation support</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Our Commitment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Quality education delivery</li>
                      <li>• Individual student attention</li>
                      <li>• Regular parent-teacher meetings</li>
                      <li>• Continuous improvement</li>
                      <li>• Academic excellence focus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RBSECorner;
