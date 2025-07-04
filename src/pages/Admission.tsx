
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, Upload, CreditCard, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Admission = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    studentDob: '',
    studentGender: '',
    classApplying: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
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

  const handleSendOtp = async () => {
    if (!phone || phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }
    
    setLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
      toast.success('OTP sent successfully to your phone number');
    }, 2000);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter the complete OTP');
      return;
    }
    
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setOtpVerified(true);
      setLoading(false);
      toast.success('OTP verified successfully');
      setStep(2);
    }, 1500);
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setLoading(true);
    setStep(3);

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
      setStep(4);
    }, 3000);
  };

  if (submitted && step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Your admission application has been submitted successfully. You will receive a confirmation email shortly.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Application ID: ADM-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <Button asChild className="w-full">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
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
                <p className="text-sm text-gray-600">Admission Portal</p>
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
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i < 4 && <div className={`w-16 h-1 ${step > i ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Step {step} of 4: {
                    step === 1 ? 'Phone Verification' :
                    step === 2 ? 'Application Form' :
                    step === 3 ? 'Payment' : 'Confirmation'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Step 1: Phone Verification */}
          {step === 1 && (
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Phone Verification</CardTitle>
                <p className="text-gray-600">Enter your phone number to receive OTP</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    disabled={otpSent}
                  />
                </div>
                
                {!otpSent ? (
                  <Button onClick={handleSendOtp} className="w-full" disabled={loading}>
                    {loading ? 'Sending OTP...' : 'Send OTP'}
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="otp">Enter OTP</Label>
                      <div className="flex justify-center mt-2">
                        <InputOTP
                          maxLength={6}
                          value={otp}
                          onChange={(value) => setOtp(value)}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>
                    <Button onClick={handleVerifyOtp} className="w-full" disabled={loading}>
                      {loading ? 'Verifying...' : 'Verify OTP'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Application Form */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Admission Application Form</CardTitle>
                <p className="text-gray-600">Please fill in all the required information</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Student Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        required
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
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentGender">Gender *</Label>
                      <Select value={formData.studentGender} onValueChange={(value) => setFormData({...formData, studentGender: value})}>
                        <SelectTrigger>
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
                        <SelectTrigger>
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
                  </div>

                  {/* Parent Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Parent Email *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Required Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="photo">Student Photo *</Label>
                        <Input
                          id="photo"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange('photo', e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="birthCertificate">Birth Certificate *</Label>
                        <Input
                          id="birthCertificate"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('birthCertificate', e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="previousSchoolDocs">Previous School Documents (if any)</Label>
                        <Input
                          id="previousSchoolDocs"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('previousSchoolDocs', e.target.files?.[0] || null)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="parentIdProof">Parent ID Proof *</Label>
                        <Input
                          id="parentIdProof"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('parentIdProof', e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="addressProof">Address Proof *</Label>
                        <Input
                          id="addressProof"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange('addressProof', e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => setFormData({...formData, termsAccepted: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I accept the{' '}
                      <Link to="/terms" className="text-blue-600 hover:underline">
                        Terms and Conditions
                      </Link>{' '}
                      and understand that the ₹500 application fee is non-refundable.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Processing...' : 'Proceed to Payment'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <CreditCard className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Payment</CardTitle>
                <p className="text-gray-600">Application Fee: ₹500 (Non-refundable)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Summary</h4>
                  <div className="flex justify-between">
                    <span>Application Fee</span>
                    <span>₹500</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span>₹500</span>
                  </div>
                </div>
                <Button onClick={handlePayment} className="w-full" disabled={loading}>
                  {loading ? 'Processing Payment...' : 'Pay Now'}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Secure payment powered by Razorpay
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admission;
