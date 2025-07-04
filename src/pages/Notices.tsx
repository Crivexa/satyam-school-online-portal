
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Search, Calendar, Pin, FileText, Download, Bell, BookOpen, Trophy, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample notices data
  const sampleNotices = [
    {
      id: '1',
      title: 'Annual Sports Day 2024',
      content: 'Annual Sports Day will be held on March 15, 2024. All students are required to participate. Events include track and field, swimming, basketball, and football competitions.',
      created_at: '2024-02-20T10:00:00Z',
      file_url: null,
      file_type: null,
      is_pinned: true
    },
    {
      id: '2',
      title: 'Parent-Teacher Meeting Notice',
      content: 'Parent-Teacher meetings scheduled for March 5-7, 2024. Please book your slots through the school app or contact the office.',
      created_at: '2024-02-18T14:30:00Z',
      file_url: '/sample-meeting-schedule.pdf',
      file_type: 'pdf',
      is_pinned: true
    },
    {
      id: '3',
      title: 'Science Exhibition 2024',
      content: 'Annual Science Exhibition will be conducted on April 20, 2024. Students from classes 6-10 are encouraged to participate with innovative projects.',
      created_at: '2024-02-15T09:15:00Z',
      file_url: null,
      file_type: null,
      is_pinned: false
    },
    {
      id: '4',
      title: 'School Fee Payment Reminder',
      content: 'Friendly reminder that school fees for the third quarter are due by March 1, 2024. Late fees will be applicable after the due date.',
      created_at: '2024-02-12T11:00:00Z',
      file_url: '/fee-structure-2024.pdf',
      file_type: 'pdf',
      is_pinned: false
    },
    {
      id: '5',
      title: 'Cultural Program Auditions',
      content: 'Auditions for the annual cultural program will be held on February 28, 2024. Students interested in dance, music, drama, and poetry are welcome to participate.',
      created_at: '2024-02-10T16:20:00Z',
      file_url: null,
      file_type: null,
      is_pinned: false
    },
    {
      id: '6',
      title: 'Mathematics Olympiad Registration',
      content: 'Registration for National Mathematics Olympiad is now open. Last date for registration is March 10, 2024. Contact math department for details.',
      created_at: '2024-02-08T13:45:00Z',
      file_url: '/math-olympiad-form.pdf',
      file_type: 'pdf',
      is_pinned: false
    }
  ];

  // Sample announcements data
  const sampleAnnouncements = [
    {
      id: '1',
      title: 'School Reopening After Winter Break',
      content: 'School will reopen on March 1, 2024, after winter break. All students must report in proper uniform.',
      created_at: '2024-02-25T08:00:00Z',
      priority: 3,
      is_active: true
    },
    {
      id: '2',
      title: 'New COVID-19 Guidelines',
      content: 'Updated COVID-19 safety protocols are now in effect. Masks are recommended for all students and staff.',
      created_at: '2024-02-20T12:00:00Z',
      priority: 2,
      is_active: true
    }
  ];

  const filteredNotices = sampleNotices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <p className="text-sm text-emerald-600">Notice Board</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</Link>
              <Link to="/notices" className="text-emerald-600 font-semibold">Notices</Link>
              <Link to="/admission" className="text-gray-700 hover:text-emerald-600 transition-colors">Admission</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80"
                alt="Notice Board"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Bell className="h-16 w-16 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold mb-2">Notice Board</h2>
                  <p className="text-xl opacity-90">Stay updated with the latest announcements and notices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
          </div>

          {/* Announcements Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
              Important Announcements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sampleAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="border-l-4 border-l-red-500 bg-red-50/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      {announcement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{announcement.content}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(announcement.created_at).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Notices Section */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="h-6 w-6 text-emerald-600 mr-2" />
              Latest Notices
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotices.map((notice) => (
                <Card key={notice.id} className="hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm border-0 shadow-lg group">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800 flex items-start justify-between">
                      <span className="flex-1 group-hover:text-emerald-600 transition-colors">{notice.title}</span>
                      {notice.is_pinned && <Pin className="h-4 w-4 text-red-500 ml-2 flex-shrink-0" />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{notice.content}</p>
                    
                    {notice.file_url && (
                      <div className="mb-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full hover:bg-emerald-50 hover:border-emerald-300"
                          onClick={() => window.open(notice.file_url, '_blank')}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download {notice.file_type?.toUpperCase() || 'File'}
                        </Button>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(notice.created_at).toLocaleDateString()}
                      </div>
                      {notice.file_type && (
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">
                          {notice.file_type.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotices.length === 0 && (
              <div className="text-center py-16">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No notices found</h3>
                <p className="text-gray-500">
                  {searchTerm ? 'Try adjusting your search terms' : 'Check back later for updates'}
                </p>
              </div>
            )}
          </section>

          {/* Notice Categories */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Notice Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-0 shadow-md cursor-pointer group">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800">Academic</h4>
                  <p className="text-sm text-gray-600 mt-1">Exam schedules, results</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-0 shadow-md cursor-pointer group">
                <CardContent className="p-6">
                  <Trophy className="h-10 w-10 text-yellow-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800">Events</h4>
                  <p className="text-sm text-gray-600 mt-1">Sports, cultural programs</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-0 shadow-md cursor-pointer group">
                <CardContent className="p-6">
                  <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800">Important</h4>
                  <p className="text-sm text-gray-600 mt-1">Urgent announcements</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-0 shadow-md cursor-pointer group">
                <CardContent className="p-6">
                  <Bell className="h-10 w-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800">General</h4>
                  <p className="text-sm text-gray-600 mt-1">School updates, news</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notices;
