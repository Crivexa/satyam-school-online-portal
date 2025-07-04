
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
                <p className="text-sm text-gray-600">Privacy Policy</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <p className="text-sm text-gray-500 mb-6">
                <strong>Last Updated:</strong> January 2024
              </p>
              <p className="mb-6">
                Satyam Public School ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and admission application system.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h3>
              
              <h4 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h4>
              <p className="mb-4">We collect the following personal information:</p>
              <ul className="space-y-2 mb-4">
                <li>• Student's full name, date of birth, and gender</li>
                <li>• Parent/Guardian's name, email address, and phone number</li>
                <li>• Residential address and contact details</li>
                <li>• Academic information and previous school records</li>
                <li>• Identification documents and photographs</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">Technical Information</h4>
              <ul className="space-y-2">
                <li>• IP address and browser information</li>
                <li>• Device information and operating system</li>
                <li>• Website usage data and cookies</li>
                <li>• Log files and access times</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="space-y-2">
                <li>• Processing admission applications and evaluating candidates</li>
                <li>• Communicating with parents/guardians regarding the admission process</li>
                <li>• Maintaining student records and academic administration</li>
                <li>• Sending important notifications and updates</li>
                <li>• Improving our website and services</li>
                <li>• Complying with legal and regulatory requirements</li>
                <li>• Protecting the safety and security of our students and staff</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing and Disclosure</h3>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="space-y-2">
                <li>• With educational authorities as required by law</li>
                <li>• With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>• When required by law, court order, or legal process</li>
                <li>• To protect the rights, safety, and security of our students and staff</li>
                <li>• With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h3>
              <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
              <ul className="space-y-2">
                <li>• Encryption of sensitive data during transmission</li>
                <li>• Secure servers and database protection</li>
                <li>• Access controls and authentication systems</li>
                <li>• Regular security audits and updates</li>
                <li>• Staff training on data protection practices</li>
                <li>• Backup and recovery procedures</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Data Retention</h3>
              <ul className="space-y-2">
                <li>• Admission application data is retained for a minimum of 3 years</li>
                <li>• Student records are maintained as per educational regulations</li>
                <li>• Unsuccessful application data may be deleted after 1 year</li>
                <li>• Payment information is retained as per financial compliance requirements</li>
                <li>• You may request deletion of your data subject to legal requirements</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Your Rights</h3>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="space-y-2">
                <li>• Right to access your personal information</li>
                <li>• Right to correct inaccurate or incomplete information</li>
                <li>• Right to request deletion of your information (subject to legal requirements)</li>
                <li>• Right to object to certain processing of your information</li>
                <li>• Right to data portability where applicable</li>
                <li>• Right to withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking</h3>
              <p className="mb-4">Our website uses cookies to enhance your browsing experience:</p>
              <ul className="space-y-2">
                <li>• Essential cookies for website functionality</li>
                <li>• Analytics cookies to understand website usage</li>
                <li>• Preference cookies to remember your settings</li>
                <li>• You can control cookie settings through your browser</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Third-Party Services</h3>
              <p className="mb-4">We may use third-party services for:</p>
              <ul className="space-y-2">
                <li>• Payment processing (with secure payment gateways)</li>
                <li>• Email communication services</li>
                <li>• Website analytics and performance monitoring</li>
                <li>• Cloud storage and backup services</li>
                <li>• These services have their own privacy policies and terms</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h3>
              <ul className="space-y-2">
                <li>• We are committed to protecting the privacy of children</li>
                <li>• Parent/Guardian consent is required for children under 18</li>
                <li>• We do not knowingly collect information from children without parental consent</li>
                <li>• Parents can review and request changes to their child's information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">10. Changes to This Policy</h3>
              <ul className="space-y-2">
                <li>• We may update this privacy policy from time to time</li>
                <li>• Changes will be posted on our website with the updated date</li>
                <li>• Significant changes will be communicated via email</li>
                <li>• Continued use of our services constitutes acceptance of changes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Information</h3>
              <p className="mb-4">For any questions about this Privacy Policy or to exercise your rights, please contact:</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Data Protection Officer</strong></p>
                <p><strong>Email:</strong> privacy@satyamschool.in</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Address:</strong> Near Shastri Circle, Jodhpur, Rajasthan</p>
                <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
