import { motion } from 'motion/react';
import { Scale, FileText, Globe, AlertCircle, CheckCircle } from 'lucide-react';

export function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-6">
                        Terms of Service
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
                        Service Agreements & Terms
                    </h1>
                    <p className="text-xl text-gray-600">
                        Effective Date: January 1, 2026
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Acceptance of Terms</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            By accessing our website and utilizing the services of HRMS Manpower Solutions, you agree to be bound by these Terms of Service and all applicable laws and regulations in India. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Scope of Services</h2>
                        </div>
                        <p className="text-gray-600 mb-4">HRMS Manpower Solutions provides:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Recruitment and deployment of skilled, semi-skilled, and unskilled workforce</li>
                            <li>Contractual and temporary staffing solutions</li>
                            <li>Statutory compliance management for deployed personnel</li>
                            <li>Background verification and screening services</li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Client Obligations</h2>
                        </div>
                        <p className="text-gray-600 mb-4">As a client, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Provide accurate job specifications and safety requirements</li>
                            <li>Ensure a safe working environment at procurement sites</li>
                            <li>Adhere to the agreed-upon payment schedules and billing cycles</li>
                            <li>Report any performance or attendance issues promptly</li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Compliance & Liability</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            HRMS Manpower Solutions maintains 100% compliance with Indian labour laws (EPF, ESI, GST, Professional Tax). However, the client is solely responsible for operational safety and on-site training specific to their facility.
                        </p>
                    </section>

                    <section className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-xl background-gradient text-white flex items-center justify-center">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h2 className="large-text">Governing Law</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws of Maharashtra, India, and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
