
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, Upload, CreditCard, CheckCircle, FileText, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Admission = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    studentDob: '',
    studentGender: '',
    classApplying: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    previousSchool: '',
    studentInterests: '',
    parentOccupation: '',
    emergencyContact: '',
    termsAccepted: false,
  });
  const [files, setFiles] = useState({
    photo: null as File | null,
    birthCertificate: null as File | null,
    previousSchoolDocs: null as File | null,
    parentIdProof: null as File | null,
    addressProof: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [previewFile, setPreviewFile] = useState<string | null>(null);

  const handleFileChange = (field: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const previewDocument = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewFile(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setLoading(true);
    setStep(2);

    try {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        toast.success('Application submitted successfully!');
      }, 3000);
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast.success('Payment completed successfully!');
      setStep(3);
    }, 3000);
  };

  if (submitted && step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center border-0 shadow-2xl">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Your admission application has been submitted successfully. You will receive a confirmation email shortly.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Application ID: ADM-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
                <p className="text-sm text-emerald-600">Admission Portal</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                    step >= i ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i < 3 && <div className={`w-20 h-1 ${step > i ? 'bg-emerald-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">
                  Step {step} of 3: {
                    step === 1 ? 'Application Form' :
                    step === 2 ? 'Payment' : 'Confirmation'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Step 1: Application Form */}
          {step === 1 && (
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Admission Application Form</CardTitle>
                <p className="text-emerald-100">Please fill in all the required information carefully</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Student Information */}
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-emerald-600" />
                      Student Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="studentName">Student Full Name *</Label>
                        <Input
                          id="studentName"
                          value={formData.studentName}
                          onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                          required
                          placeholder="Enter student's full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="studentDob">Date of Birth *</Label>
                        <Input
                          id="studentDob"
                          type="date"
                          value={formData.studentDob}
                          onChange={(e) => setFormData({...formData, studentDob: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="studentGender">Gender *</Label>
                        <Select value={formData.studentGender} onValueChange={(value) => setFormData({...formData, studentGender: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="classApplying">Class Applying For *</Label>
                        <Select value={formData.classApplying} onValueChange={(value) => setFormData({...formData, classApplying: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nursery">Nursery</SelectItem>
                            <SelectItem value="lkg">LKG</SelectItem>
                            <SelectItem value="ukg">UKG</SelectItem>
                            <SelectItem value="1">Class 1</SelectItem>
                            <SelectItem value="2">Class 2</SelectItem>
                            <SelectItem value="3">Class 3</SelectItem>
                            <SelectItem value="4">Class 4</SelectItem>
                            <SelectItem value="5">Class 5</SelectItem>
                            <SelectItem value="6">Class 6</SelectItem>
                            <SelectItem value="7">Class 7</SelectItem>
                            <SelectItem value="8">Class 8</SelectItem>
                            <SelectItem value="9">Class 9</SelectItem>
                            <SelectItem value="10">Class 10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="previousSchool">Previous School (if any)</Label>
                        <Input
                          id="previousSchool"
                          value={formData.previousSchool}
                          onChange={(e) => setFormData({...formData, previousSchool: e.target.value})}
                          placeholder="Enter previous school name"
                          className="mt-1"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="studentInterests">Student's Interests & Hobbies</Label>
                        <Textarea
                          id="studentInterests"
                          value={formData.studentInterests}
                          onChange={(e) => setFormData({...formData, studentInterests: e.target.value})}
                          placeholder="e.g., Sports, Music, Art, Reading..."
                          rows={3}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Parent Information */}
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Parent/Guardian Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                        <Input
                          id="parentName"
                          value={formData.parentName}
                          onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                          required
                          placeholder="Enter parent/guardian name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="parentEmail">Email Address *</Label>
                        <Input
                          id="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                          required
                          placeholder="Enter email address"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="parentPhone">Phone Number *</Label>
                        <Input
                          id="parentPhone"
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                          required
                          placeholder="Enter phone number"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="parentOccupation">Occupation</Label>
                        <Input
                          id="parentOccupation"
                          value={formData.parentOccupation}
                          onChange={(e) => setFormData({...formData, parentOccupation: e.target.value})}
                          placeholder="Enter occupation"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
                        <Input
                          id="emergencyContact"
                          type="tel"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                          placeholder="Enter emergency contact"
                          className="mt-1"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Complete Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          required
                          placeholder="Enter complete address with pincode"
                          rows={3}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Required Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries({
                        photo: 'Student Photo',
                        birthCertificate: 'Birth Certificate',
                        previousSchoolDocs: 'Previous School Documents',
                        parentIdProof: 'Parent ID Proof',
                        addressProof: 'Address Proof'
                      }).map(([key, label]) => (
                        <div key={key} className="space-y-2">
                          <Label htmlFor={key}>{label} {key !== 'previousSchoolDocs' ? '*' : ''}</Label>
                          <div className="flex items-center space-x-2">
                            <Input
                              id={key}
                              type="file"
                              accept={key === 'photo' ? 'image/*' : '.pdf,.jpg,.jpeg,.png'}
                              onChange={(e) => handleFileChange(key, e.target.files?.[0] || null)}
                              required={key !== 'previousSchoolDocs'}
                              className="flex-1"
                            />
                            {files[key as keyof typeof files] && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => previewDocument(files[key as keyof typeof files]!)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="terms" 
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => setFormData({...formData, termsAccepted: checked as boolean})}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I hereby declare that the information provided above is true and correct. I accept the{' '}
                        <Link to="/terms" className="text-emerald-600 hover:underline font-medium">
                          Terms and Conditions
                        </Link>{' '}
                        and understand that the ₹500 application fee is non-refundable. I agree to abide by the school rules and regulations.
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 text-lg" disabled={loading}>
                    {loading ? 'Processing Application...' : 'Submit Application & Proceed to Payment'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <Card className="max-w-md mx-auto border-0 shadow-2xl">
              <CardHeader className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CreditCard className="h-16 w-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">Payment</CardTitle>
                <p className="text-emerald-100">Application Fee: ₹500 (Non-refundable)</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-800">Payment Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Application Fee</span>
                      <span>₹500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span>₹0</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-lg">
                      <span>Total Amount</span>
                      <span className="text-emerald-600">₹500</span>
                    </div>
                  </div>
                </div>
                <Button onClick={handlePayment} className="w-full bg-emerald-600 hover:bg-emerald-700 py-3" disabled={loading}>
                  {loading ? 'Processing Payment...' : 'Pay Now with Razorpay'}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  🔒 Secure payment powered by Razorpay<br />
                  Your payment information is encrypted and secure
                </p>
              </CardContent>
            </Card>
          )}

          {/* Document Preview Modal */}
          {previewFile && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Document Preview</h3>
                  <Button variant="ghost" onClick={() => setPreviewFile(null)}>✕</Button>
                </div>
                <div className="p-4">
                  <img src={previewFile} alt="Document preview" className="w-full h-auto" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admission;
