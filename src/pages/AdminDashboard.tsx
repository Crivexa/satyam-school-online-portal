
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Users, FileText, Upload, Eye, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('notices');
  const [newNoticeData, setNewNoticeData] = useState({
    title: '',
    content: '',
    is_pinned: false,
  });
  const [newAnnouncementData, setNewAnnouncementData] = useState({
    title: '',
    content: '',
    priority: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setUser(session.user);
    };
    checkAuth();
  }, [navigate]);

  const { data: admissionQueries } = useQuery({
    queryKey: ['admission_queries'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('admission_queries')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const handleCreateNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('notices')
        .insert([{
          title: newNoticeData.title,
          content: newNoticeData.content,
          is_pinned: newNoticeData.is_pinned,
          created_by: user?.id,
        }]);

      if (error) throw error;
      
      toast.success('Notice created successfully!');
      setNewNoticeData({ title: '', content: '', is_pinned: false });
    } catch (error) {
      toast.error('Failed to create notice');
    }
  };

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('announcements')
        .insert([{
          title: newAnnouncementData.title,
          content: newAnnouncementData.content,
          priority: newAnnouncementData.priority,
          created_by: user?.id,
        }]);

      if (error) throw error;
      
      toast.success('Announcement created successfully!');
      setNewAnnouncementData({ title: '', content: '', priority: 1 });
    } catch (error) {
      toast.error('Failed to create announcement');
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Failed to logout');
    } else {
      toast.success('Logged out successfully');
      navigate('/');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

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
                <p className="text-sm text-gray-600">Admin Dashboard</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Admin Panel</span>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
            <p className="text-gray-600">Manage school content, notices, and admission queries</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Total Admissions</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {admissionQueries?.length || 0}
                    </p>
                  </div>
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Pending Reviews</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {admissionQueries?.filter(q => q.status === 'submitted').length || 0}
                    </p>
                  </div>
                  <FileText className="h-12 w-12 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Paid Applications</p>
                    <p className="text-2xl font-bold text-green-600">
                      {admissionQueries?.filter(q => q.payment_status === 'paid').length || 0}
                    </p>
                  </div>
                  <Upload className="h-12 w-12 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex space-x-4 border-b">
              <button
                onClick={() => setActiveTab('notices')}
                className={`pb-2 px-4 ${activeTab === 'notices' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
              >
                Manage Notices
              </button>
              <button
                onClick={() => setActiveTab('announcements')}
                className={`pb-2 px-4 ${activeTab === 'announcements' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
              >
                Manage Announcements
              </button>
              <button
                onClick={() => setActiveTab('admissions')}
                className={`pb-2 px-4 ${activeTab === 'admissions' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
              >
                View Admissions
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'notices' && (
            <Card>
              <CardHeader>
                <CardTitle>Create New Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateNotice} className="space-y-4">
                  <div>
                    <Label htmlFor="noticeTitle">Title</Label>
                    <Input
                      id="noticeTitle"
                      value={newNoticeData.title}
                      onChange={(e) => setNewNoticeData({...newNoticeData, title: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="noticeContent">Content</Label>
                    <Textarea
                      id="noticeContent"
                      value={newNoticeData.content}
                      onChange={(e) => setNewNoticeData({...newNoticeData, content: e.target.value})}
                      rows={5}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="pinned"
                      checked={newNoticeData.is_pinned}
                      onChange={(e) => setNewNoticeData({...newNoticeData, is_pinned: e.target.checked})}
                    />
                    <Label htmlFor="pinned">Pin this notice</Label>
                  </div>
                  <Button type="submit">Create Notice</Button>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === 'announcements' && (
            <Card>
              <CardHeader>
                <CardTitle>Create New Announcement</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                  <div>
                    <Label htmlFor="announcementTitle">Title</Label>
                    <Input
                      id="announcementTitle"
                      value={newAnnouncementData.title}
                      onChange={(e) => setNewAnnouncementData({...newAnnouncementData, title: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="announcementContent">Content</Label>
                    <Textarea
                      id="announcementContent"
                      value={newAnnouncementData.content}
                      onChange={(e) => setNewAnnouncementData({...newAnnouncementData, content: e.target.value})}
                      rows={5}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Input
                      id="priority"
                      type="number"
                      min="1"
                      max="10"
                      value={newAnnouncementData.priority}
                      onChange={(e) => setNewAnnouncementData({...newAnnouncementData, priority: parseInt(e.target.value)})}
                    />
                  </div>
                  <Button type="submit">Create Announcement</Button>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === 'admissions' && (
            <Card>
              <CardHeader>
                <CardTitle>Admission Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {admissionQueries && admissionQueries.length > 0 ? (
                  <div className="space-y-4">
                    {admissionQueries.map((query) => (
                      <div key={query.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{query.student_name}</h4>
                            <p className="text-sm text-gray-600">Class: {query.class_applying}</p>
                            <p className="text-sm text-gray-600">Parent: {query.parent_name}</p>
                            <p className="text-sm text-gray-600">Email: {query.parent_email}</p>
                            <p className="text-sm text-gray-600">Phone: {query.parent_phone}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded text-xs ${
                              query.payment_status === 'paid' ? 'bg-green-100 text-green-800' :
                              query.payment_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {query.payment_status}
                            </span>
                            <p className="text-sm text-gray-600 mt-1">
                              {new Date(query.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No admission applications yet.</p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
