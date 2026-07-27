import { useState } from 'react';

export default function DemoForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    website: '',
    budget: '',
    timeline: '',
    goal: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.projectType) e.projectType = 'Please select what you need';
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
    return (
      <div className="animate-on-scroll" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: '48px 32px', textAlign: 'center', fontFamily: 'Sora, sans-serif' }}>
        <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 24, fontWeight: 700, color: '#166534', margin: '0 0 12px' }}>
          Enquiry Received!
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
          { label: 'Company Name', field: 'company', type: 'text', placeholder: 'Your business name' },
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
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 10 }}>What do you need? *</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
            {[
              { value: 'website', label: 'Website / eCommerce' },
              { value: 'app', label: 'Mobile App' },
              { value: 'seo-marketing', label: 'SEO, AEO & Marketing' },
              { value: 'not-sure', label: 'Not Sure Yet' }
            ].map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => setForm({ ...form, projectType: option.value })}
                style={{
                  borderRadius: 10,
                  border: `1px solid ${form.projectType === option.value ? '#1B4FD8' : '#cbd5e1'}`,
                  background: form.projectType === option.value ? '#dbeafe' : '#e2e8f0',
                  color: form.projectType === option.value ? '#1e3a8a' : '#334155',
                  padding: '12px 14px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          {errors.projectType && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4, margin: '4px 0 0' }}>{errors.projectType}</p>}
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Current Website URL (if any)</label>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Budget Range</label>
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
            <option value="new-website">Launch a new website or app</option>
            <option value="more-sales">Increase online sales</option>
            <option value="better-visibility">Improve search and AI visibility</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Anything else you want us to know?</label>
          <textarea
            style={{ ...inp('message'), resize: 'vertical', minHeight: 100 }}
            placeholder="Tell us about your project or current challenges..."
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
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>
        {submitError && <p style={{ fontSize: 12, color: '#ef4444', textAlign: 'center', margin: 0 }}>{submitError}</p>}
        <p style={helper}>We respond within one business day. No spam, ever.</p>
      </div>
    </div>
  );
}
