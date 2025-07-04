
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
                <p className="text-sm text-gray-600">Terms & Conditions</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Terms & Conditions</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Admission Application Terms</h3>
              <ul className="space-y-2">
                <li>• The admission application form is valid only for the academic session 2025-2026.</li>
                <li>• Applicants must select the correct class for admission. No changes will be allowed after submission.</li>
                <li>• The application fee of ₹500 is non-refundable under any circumstances.</li>
                <li>• Submission of the application form does not guarantee admission to the school.</li>
                <li>• All information provided in the application must be accurate and truthful.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Age Requirements</h3>
              <ul className="space-y-2">
                <li>• Students must meet the age requirements as per the National Education Policy (NEP) guidelines.</li>
                <li>• Age proof documents must be submitted as part of the application.</li>
                <li>• The school reserves the right to verify age documentation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Document Submission</h3>
              <ul className="space-y-2">
                <li>• All required documents must be uploaded during the application process.</li>
                <li>• Documents must be clear, legible, and in the specified format.</li>
                <li>• Original documents will be required for verification if the student is selected.</li>
                <li>• False or fraudulent documents will result in immediate disqualification.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Payment Terms</h3>
              <ul className="space-y-2">
                <li>• The application fee of ₹500 must be paid online through the secure payment gateway.</li>
                <li>• Payment confirmation is required to complete the application process.</li>
                <li>• No refunds will be provided for any reason after payment confirmation.</li>
                <li>• Failed payment transactions will not be considered as completed applications.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Selection Process</h3>
              <ul className="space-y-2">
                <li>• The school reserves the right to conduct interviews or assessments as part of the selection process.</li>
                <li>• Selection will be based on merit, availability of seats, and school policies.</li>
                <li>• The school's decision on admission is final and binding.</li>
                <li>• No correspondence will be entertained regarding the selection process.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Communication</h3>
              <ul className="space-y-2">
                <li>• All communication regarding the application will be through the provided email and phone number.</li>
                <li>• Applicants are responsible for providing accurate contact information.</li>
                <li>• The school will not be responsible for failed communication due to incorrect contact details.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Privacy and Data Protection</h3>
              <ul className="space-y-2">
                <li>• Personal information provided will be used solely for admission purposes.</li>
                <li>• The school is committed to protecting the privacy of applicants.</li>
                <li>• Information will not be shared with third parties without consent.</li>
                <li>• Applicants have the right to request correction of their personal information.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Liability</h3>
              <ul className="space-y-2">
                <li>• The school is not liable for any technical issues during the online application process.</li>
                <li>• Applicants are advised to complete their applications well before the deadline.</li>
                <li>• The school reserves the right to extend or modify deadlines if necessary.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Modifications</h3>
              <ul className="space-y-2">
                <li>• The school reserves the right to modify these terms and conditions at any time.</li>
                <li>• Any changes will be communicated through the school website.</li>
                <li>• Continued use of the application system constitutes acceptance of modified terms.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">10. Contact Information</h3>
              <p>For any queries regarding these terms and conditions, please contact:</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> info@satyamschool.in</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Address:</strong> Near Shastri Circle, Jodhpur, Rajasthan</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> By submitting the admission application form, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
