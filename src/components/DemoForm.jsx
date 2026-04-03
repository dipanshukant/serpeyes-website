import { useState } from 'react';

export default function DemoForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    website: '',
    service: '',
    budget: '',
    goal: '',
    timeline: '',
    portfolioSize: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isBusiness = form.type === 'business';
  const isAgencyOrFreelancer = form.type === 'agency' || form.type === 'freelancer';

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.type) e.type = 'Please select your role';
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const params = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => {
        if (typeof value === 'string' && value.trim()) {
          params.set(key, value.trim());
        }
      });

      const response = await fetch(`/api/contact?${params.toString()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        let errorMessage = 'Submission failed';
        try {
          const data = await response.json();
          if (data?.error) {
            errorMessage = data.error;
          }
        } catch {
          // ignore JSON parse issues and keep fallback message
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Could not send your form right now. Please try again in a moment.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inp = (field) => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 10,
    border: `1px solid ${errors[field] ? '#ef4444' : '#e2e8f0'}`,
    fontSize: 15,
    color: '#0f172a',
    outline: 'none',
    background: 'white',
    fontFamily: 'Sora, sans-serif',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s'
  });

  const helper = {
    fontSize: 13,
    color: '#64748b',
    margin: '6px 0 0'
  };

  if (submitted) {
    const isBusinessSubmission = form.type === 'business';
    return (
      <div className="animate-on-scroll" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: '48px 32px', textAlign: 'center', fontFamily: 'Sora, sans-serif' }}>
        <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28 }}>✅</div>
        <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 24, fontWeight: 700, color: '#166534', margin: '0 0 12px' }}>
          {isBusinessSubmission ? 'Enquiry Received!' : 'Enquiry Received!'}
        </h2>
        <p style={{ fontSize: 16, color: '#15803d', lineHeight: 1.7, margin: 0 }}>
          Thank you, {form.name.split(' ')[0]}. We will get back to you within one business day with the right next step.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-on-scroll" style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: 20, padding: 'clamp(24px, 5vw, 48px)', fontFamily: 'Sora, sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { label: 'Full Name *', field: 'name', type: 'text', placeholder: 'Your full name' },
          { label: 'Email *', field: 'email', type: 'email', placeholder: 'you@example.com' },
          { label: 'Company Name', field: 'company', type: 'text', placeholder: 'Your agency or business name' },
        ].map(({ label, field, type, placeholder }) => (
          <div key={field}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>{label}</label>
            <input
              style={inp(field)}
              type={type}
              placeholder={placeholder}
              value={form[field]}
              onChange={e => setForm({ ...form, [field]: e.target.value })}
              onFocus={e => e.target.style.borderColor = '#1B4FD8'}
              onBlur={e => e.target.style.borderColor = errors[field] ? '#ef4444' : '#e2e8f0'}
            />
            {errors[field] && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4, margin: '4px 0 0' }}>{errors[field]}</p>}
          </div>
        ))}
        
        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 10 }}>I am a... *</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
            {[
              { value: 'business', label: 'Business Owner' },
              { value: 'agency', label: 'Marketing Agency' },
              { value: 'freelancer', label: 'Freelancer' }
            ].map(role => (
              <button
                key={role.value}
                type="button"
                onClick={() => setForm({ ...form, type: role.value })}
                style={{
                  borderRadius: 10,
                  border: `1px solid ${form.type === role.value ? '#1B4FD8' : '#cbd5e1'}`,
                  background: form.type === role.value ? '#dbeafe' : '#e2e8f0',
                  color: form.type === role.value ? '#1e3a8a' : '#334155',
                  padding: '12px 14px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {role.label}
              </button>
            ))}
          </div>
          {errors.type && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4, margin: '4px 0 0' }}>{errors.type}</p>}
        </div>

        {isBusiness && (
          <>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Website URL</label>
              <input
                style={inp('website')}
                type="text"
                placeholder="https://yourbusiness.com"
                value={form.website}
                onChange={e => setForm({ ...form, website: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                onBlur={e => e.target.style.borderColor = errors.website ? '#ef4444' : '#e2e8f0'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Service Needed</label>
              <select
                style={{ ...inp('service'), color: form.service ? '#0f172a' : '#94a3b8' }}
                value={form.service}
                onChange={e => setForm({ ...form, service: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                onBlur={e => e.target.style.borderColor = errors.service ? '#ef4444' : '#e2e8f0'}
              >
                <option value="" disabled>Select service</option>
                <option value="full-seo">Full SEO Management</option>
                <option value="local-seo">Local SEO (Google Maps)</option>
                <option value="content-seo">Content SEO</option>
                <option value="technical-seo">Technical SEO Fixes</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Monthly Budget</label>
                <select
                  style={{ ...inp('budget'), color: form.budget ? '#0f172a' : '#94a3b8' }}
                  value={form.budget}
                  onChange={e => setForm({ ...form, budget: e.target.value })}
                  onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                  onBlur={e => e.target.style.borderColor = errors.budget ? '#ef4444' : '#e2e8f0'}
                >
                  <option value="" disabled>Select range</option>
                  <option value="lt-1k">Under SGD 1,000</option>
                  <option value="1k-3k">SGD 1,000 - 3,000</option>
                  <option value="3k-6k">SGD 3,000 - 6,000</option>
                  <option value="6k-plus">Above SGD 6,000</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Timeline</label>
                <select
                  style={{ ...inp('timeline'), color: form.timeline ? '#0f172a' : '#94a3b8' }}
                  value={form.timeline}
                  onChange={e => setForm({ ...form, timeline: e.target.value })}
                  onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                  onBlur={e => e.target.style.borderColor = errors.timeline ? '#ef4444' : '#e2e8f0'}
                >
                  <option value="" disabled>Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Primary Goal</label>
              <select
                style={{ ...inp('goal'), color: form.goal ? '#0f172a' : '#94a3b8' }}
                value={form.goal}
                onChange={e => setForm({ ...form, goal: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                onBlur={e => e.target.style.borderColor = errors.goal ? '#ef4444' : '#e2e8f0'}
              >
                <option value="" disabled>Select goal</option>
                <option value="more-leads">Generate more leads</option>
                <option value="more-calls">Get more calls/enquiries</option>
                <option value="more-sales">Increase online sales</option>
                <option value="better-visibility">Improve local visibility</option>
              </select>
            </div>
          </>
        )}

        {isAgencyOrFreelancer && (
          <>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>What are you interested in?</label>
              <select
                style={{ ...inp('interest'), color: form.interest ? '#0f172a' : '#94a3b8' }}
                value={form.interest}
                onChange={e => setForm({ ...form, interest: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                onBlur={e => e.target.style.borderColor = errors.interest ? '#ef4444' : '#e2e8f0'}
              >
                <option value="" disabled>Select option</option>
                <option value="platform-demo">Platform demo</option>
                <option value="white-label">White-label collaboration</option>
                <option value="partnership">Strategic partnership</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>How many clients/sites do you manage?</label>
              <input
                style={inp('portfolioSize')}
                type="text"
                placeholder="e.g. 8 active clients"
                value={form.portfolioSize}
                onChange={e => setForm({ ...form, portfolioSize: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#1B4FD8'}
                onBlur={e => e.target.style.borderColor = errors.portfolioSize ? '#ef4444' : '#e2e8f0'}
              />
            </div>
          </>
        )}

        <p style={helper}>
          {isBusiness
            ? 'Business owner flow selected: we will tailor recommendations around your goals and budget.'
            : isAgencyOrFreelancer
              ? 'Agency/freelancer flow selected: we will focus on demo and collaboration fit.'
              : 'Select your role so we can show the right questions.'}
        </p>
        
        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Anything else you want us to know?</label>
          <textarea
            style={{ ...inp('message'), resize: 'vertical', minHeight: 100 }}
            placeholder="Tell us about your current SEO challenges or goals..."
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            onFocus={e => e.target.style.borderColor = '#1B4FD8'}
            onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : '#e2e8f0'}
          />
        </div>
        
        <button
          className="btn-primary"
          style={{
            padding: '15px',
            borderRadius: 10,
            fontSize: 16,
            width: '100%',
            fontFamily: 'Sora, sans-serif',
            opacity: isSubmitting ? 0.7 : 1,
            pointerEvents: isSubmitting ? 'none' : 'auto'
          }}
          onClick={handleSubmit}
        >
          {isSubmitting
            ? 'Submitting...'
            : isBusiness
              ? 'Submit Business Enquiry'
              : 'Request My Demo'}
        </button>
        {submitError && <p style={{ fontSize: 12, color: '#ef4444', textAlign: 'center', margin: 0 }}>{submitError}</p>}
        <p style={{ fontSize: 12, color: '#94a3b8', textAlign: 'center', margin: 0 }}>We respond within one business day. No spam, ever.</p>
      </div>
    </div>
  );
}
