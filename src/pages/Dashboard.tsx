
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, User, CreditCard, FileText, LogOut, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setUser(session.user);
    };
    getUser();
  }, [navigate]);

  const { data: userProfile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const { data: feePayments } = useQuery({
    queryKey: ['fee_payments', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('fee_payments')
        .select('*')
        .eq('student_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

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

  const isAdmin = userProfile?.role === 'admin';

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
                <p className="text-sm text-gray-600">
                  {isAdmin ? 'Admin Dashboard' : 'Student Dashboard'}
                </p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {userProfile?.full_name || user.email}</span>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to your Dashboard
            </h2>
            <p className="text-gray-600">
              {isAdmin 
                ? 'Manage school operations and content from here' 
                : 'Access your academic information and school resources'
              }
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {isAdmin ? (
              <>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to="/admin">
                    <CardContent className="p-6 text-center">
                      <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Admin Panel</h3>
                      <p className="text-gray-600 text-sm">Manage content and admissions</p>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to="/notices">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Notices</h3>
                      <p className="text-gray-600 text-sm">View and manage notices</p>
                    </CardContent>
                  </Link>
                </Card>
              </>
            ) : (
              <>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to="/notices">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Notices</h3>
                      <p className="text-gray-600 text-sm">View latest notices</p>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to="/rbse-corner">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">RBSE Corner</h3>
                      <p className="text-gray-600 text-sm">RBSE resources</p>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to="/student-corner">
                    <CardContent className="p-6 text-center">
                      <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Student Corner</h3>
                      <p className="text-gray-600 text-sm">Student resources</p>
                    </CardContent>
                  </Link>
                </Card>
              </>
            )}
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Full Name</label>
                  <p className="text-gray-800">{userProfile?.full_name || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <p className="text-gray-800">{userProfile?.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Role</label>
                  <p className="text-gray-800 capitalize">{userProfile?.role || 'Student'}</p>
                </div>
              </CardContent>
            </Card>

            {/* Fee Payment History (for students) */}
            {!isAdmin && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Fee Payment History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {feePayments && feePayments.length > 0 ? (
                    <div className="space-y-4">
                      {feePayments.slice(0, 5).map((payment) => (
                        <div key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{payment.fee_type || 'School Fee'}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(payment.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{payment.amount}</p>
                            <p className={`text-sm ${
                              payment.payment_status === 'paid' ? 'text-green-600' : 
                              payment.payment_status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {payment.payment_status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No payment history available</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
