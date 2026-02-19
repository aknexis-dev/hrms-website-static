import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Bell } from 'lucide-react';

export function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-6">
                        Privacy Policy
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
                        Your Privacy Matters to Us
                    </h1>
                    <p className="text-xl text-gray-600">
                        Last updated: February 18, 2026
                    </p>
                </motion.div>

                <div className="space-y-12 transition-all">
                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Introduction</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            At HRMS Manpower Solutions, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Information We Collect</h2>
                        </div>
                        <p className="text-gray-600 mb-4">We collect personal information that you provide to us directly:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Contact details (name, email address, phone number)</li>
                            <li>Employment history and background verification data</li>
                            <li>Government-issued identification for compliance</li>
                            <li>Operational requirements for manpower requests</li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">How We Use Information</h2>
                        </div>
                        <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Provide and maintain our manpower services</li>
                            <li>Screen and verify candidates for deployment</li>
                            <li>Ensure statutory compliance with labour laws</li>
                            <li>Communicate with you regarding service updates</li>
                            <li>Improve our operational efficiency and website experience</li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <Bell className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Data Security</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Contact Us</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy, please contact our data protection officer at <span className="text-[#2563EB] font-bold">privacy@hrmsmanpower.com</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
