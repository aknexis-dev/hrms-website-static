import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, Landmark, ClipboardList, Briefcase, Award } from 'lucide-react';

export function CompliancePage() {
    const certifications = [
        { title: 'ISO 9001:2015', subtitle: 'Quality Management System', description: 'Certified for excellence in manpower recruitment and deployment services.' },
        { title: 'MSME Registered', subtitle: 'Ministry of MSME', description: 'Recognized as a reliable small-scale enterprise under the Government of India.' },
        { title: 'NSIC Registered', subtitle: 'Marketing & Technical Support', description: 'Registered for government tender participation and operational quality.' },
        { title: 'ISO 45001:2018', subtitle: 'Occupational Health & Safety', description: 'Committed to the highest standards of safety for our deployed workforce.' },
    ];

    const regulations = [
        { icon: Landmark, title: 'Labour Law Compliance', items: ['Contract Labour (Regulation & Abolition) Act', 'Minimum Wages Act', 'Payment of Wages Act', 'Employees State Insurance Act (ESI)'] },
        { icon: ClipboardList, title: 'Statutory Registers', items: ['PF & ESI Registers', 'Attendance & Wage Slips', 'Form 11 & Form 12 Compliance', 'Professional Tax Documentation'] },
        { icon: FileCheck, title: 'Tax Compliance', items: ['GST Registration & Filings', 'TDS Documentation', 'Income Tax Compliance', 'Corporate Audit Reports'] },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container-responsive">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-6">
                        Regulatory Compliance
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6">
                        Gold Standard in Manpower Compliance
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We assume full legal responsibility for our deployed workforce, ensuring your business remains 100% risk-free from statutory liabilities.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl background-gradient text-white flex items-center justify-center mb-6 shadow-lg">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-black text-[#0F172A] mb-2">{cert.title}</h3>
                            <p className="text-[#2563EB] text-sm font-bold mb-4">{cert.subtitle}</p>
                            <p className="text-gray-500 text-sm">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Regulations Detail */}
                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    {regulations.map((reg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[40px] p-10 shadow-2xl border border-gray-50"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FACC15] to-yellow-600 flex items-center justify-center mb-8 shadow-xl">
                                <reg.icon className="w-8 h-8 text-[#0F172A]" />
                            </div>
                            <h3 className="text-2xl font-black text-[#0F172A] mb-6">{reg.title}</h3>
                            <ul className="space-y-4">
                                {reg.items.map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                                        <span className="text-gray-700 font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Compliance Protection */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] rounded-[48px] p-12 lg:p-20 text-white relative overflow-hidden"
                >
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                                Zero-Risk Partnership <br /> Guarantee
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Our internal audit team conducts monthly compliance reviews to ensure every single workforce member's PF, ESI, and wages are settled precisely as per the legal requirements of India.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <ShieldCheck className="w-8 h-8 text-[#FACC15] mb-4" />
                                <h4 className="font-bold mb-2">Liability Shield</h4>
                                <p className="text-xs text-gray-400">Protecting your business from statutory claims.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <Briefcase className="w-8 h-8 text-[#FACC15] mb-4" />
                                <h4 className="font-bold mb-2">Audit Ready</h4>
                                <p className="text-xs text-gray-400">Complete documentation for your internal audits.</p>
                            </div>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full -ml-32 -mb-32" />
                </motion.div>
            </div>
        </div>
    );
}
