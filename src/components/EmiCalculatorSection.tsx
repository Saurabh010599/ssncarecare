import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Banknote, 
  ArrowRight, 
  BadgePercent,
  Percent,
  Calendar,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_CONFIG } from '../data/mockData';

export const EmiCalculatorSection: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const [tenureMonths, setTenureMonths] = useState(48);
  const [interestRate, setInterestRate] = useState(9.5);

  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Financial Math
  const downPaymentAmount = Math.round((loanAmount * downPaymentPercent) / 100);
  const principal = loanAmount - downPaymentAmount;
  const monthlyRate = interestRate / 12 / 100;

  const emi =
    monthlyRate === 0
      ? Math.round(principal / tenureMonths)
      : Math.round(
          (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
            (Math.pow(1 + monthlyRate, tenureMonths) - 1)
        );

  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - principal;
  const principalSharePercent = Math.round((principal / totalPayable) * 100) || 75;

  const handleApplyLoan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantPhone) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
    });

    const msg = `*Best Car Deal - Car Loan Application*\n\n*Name:* ${applicantName || 'Guest'}\n*Phone:* ${applicantPhone}\n*Car Loan Amount:* ₹${loanAmount.toLocaleString('en-IN')}\n*Down Payment:* ${downPaymentPercent}% (₹${downPaymentAmount.toLocaleString('en-IN')})\n*Tenure:* ${tenureMonths} Months (${(tenureMonths / 12).toFixed(1)} Yrs)\n*Estimated EMI:* ₹${emi.toLocaleString('en-IN')}/mo\n\n_Please check instant pre-approval with partner banks._`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-[#090A0F] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Pre-Approved Financing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Smart Auto Loan &amp; <span className="gold-gradient-text">EMI Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Customize your loan tenure, down payment, and interest rates. Pre-approved offers from 18+ leading banks with zero processing charge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Area (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-[#12131C] border border-white/10 space-y-6 shadow-xl">
            
            {/* Slider 1: Total Vehicle Value */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-neutral-300">Vehicle Total Price:</label>
                <span className="font-black text-amber-400 text-sm font-mono-num">
                  ₹{(loanAmount / 100000).toFixed(2)} Lakh
                </span>
              </div>
              <input
                type="range"
                min="300000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono-num">
                <span>₹3L</span>
                <span>₹25L</span>
                <span>₹50L</span>
              </div>
            </div>

            {/* Slider 2: Down Payment */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-neutral-300">Down Payment ({downPaymentPercent}%):</label>
                <span className="font-bold text-white font-mono-num">
                  ₹{downPaymentAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono-num">
                <span>0% (Zero Down)</span>
                <span>25%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-neutral-300">Loan Tenure ({tenureMonths} Months):</label>
                <span className="font-bold text-white font-mono-num">
                  {(tenureMonths / 12).toFixed(0)} Years
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="84"
                step="12"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono-num">
                <span>1 Year</span>
                <span>4 Years</span>
                <span>7 Years</span>
              </div>
            </div>

            {/* Slider 4: Interest Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-neutral-300">Interest Rate (% p.a.):</label>
                <span className="font-bold text-emerald-400 font-mono-num">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="8.5"
                max="15.0"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono-num">
                <span>8.5% (Prime)</span>
                <span>11.5%</span>
                <span>15.0%</span>
              </div>
            </div>

            {/* Partner Bank Badges */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] text-neutral-400 mb-2">Our Banking &amp; Financing Partners:</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-neutral-300">
                {['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Kotak Mahindra', 'IDFC FIRST'].map(
                  (bank) => (
                    <span key={bank} className="px-2.5 py-1 rounded-lg bg-[#090A10] border border-white/5">
                      🏦 {bank}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>

          {/* EMI Result & Instant Loan Application (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#12131C] border border-amber-500/30 space-y-6 shadow-2xl">
            
            {/* Big EMI Highlight Box */}
            <div className="p-6 rounded-2xl bg-[#090A10] border border-amber-500/40 text-center space-y-1">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">
                Estimated Monthly EMI
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-heading font-mono-num">
                ₹{emi.toLocaleString('en-IN')}{' '}
                <span className="text-xs font-normal text-neutral-400">/ month</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-medium block">
                Zero foreclosure charges after 6 months
              </span>
            </div>

            {/* Financial Breakdown Grid */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Principal Loan Amount:</span>
                <strong className="text-white font-mono-num">₹{principal.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Total Interest Payable:</span>
                <strong className="text-amber-400 font-mono-num">₹{totalInterest.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between text-neutral-300 font-bold pt-2 border-t border-white/10">
                <span>Total Amount (Principal + Interest):</span>
                <strong className="text-white text-sm font-mono-num">₹{totalPayable.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Visual Ratio Bar */}
            <div className="space-y-1">
              <div className="h-3 w-full bg-[#1F202E] rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${principalSharePercent}%` }}
                  className="bg-amber-500 h-full"
                  title={`Principal: ${principalSharePercent}%`}
                />
                <div
                  style={{ width: `${100 - principalSharePercent}%` }}
                  className="bg-sky-500 h-full"
                  title={`Interest: ${100 - principalSharePercent}%`}
                />
              </div>
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  <span>Principal ({principalSharePercent}%)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                  <span>Interest ({100 - principalSharePercent}%)</span>
                </span>
              </div>
            </div>

            {/* Instant Pre-Approval Form */}
            <form onSubmit={handleApplyLoan} className="space-y-3 pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-white">
                Check Instant Loan Eligibility (30-Min Approval):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="p-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  className="p-2.5 rounded-xl bg-[#090A10] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>Get Pre-Approved In 30 Mins</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold text-center">
                ✓ Eligibility request submitted! Our banking specialist is reaching out.
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
