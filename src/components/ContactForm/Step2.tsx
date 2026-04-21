import React, { useState } from 'react'
import { FormData } from './ContactForm'

interface Step2Props {
  data: FormData
  updateData: (fields: Partial<FormData>) => void
  onNext: () => void
  onBack: () => void
}

const Step2: React.FC<Step2Props> = ({ data, updateData, onNext, onBack }) => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (data.enquiry_type === 'quote') {
      if (!data.service_type) newErrors.service_type = 'Please select a service type'
      if (!data.location.trim()) newErrors.location = 'Please enter the site location'
    } else if (data.enquiry_type === 'franchise') {
      if (!data.franchise_region) newErrors.franchise_region = 'Please select a preferred region'
    } else if (data.enquiry_type === 'jobs') {
      if (!data.job_role) newErrors.job_role = 'Please select a position of interest'
      if (!data.job_location) newErrors.job_location = 'Please select a preferred location'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) {
      onNext()
    }
  }

  return (
    <div className="form-step active">
      {/* QUOTE FIELDS */}
      {data.enquiry_type === 'quote' && (
        <div className="conditional-fields visible">
          <h3 className="step-title">Service Details</h3>
          <p className="step-subtitle">Tell us about your cleaning requirements.</p>

          <div className="field-group">
            <label className="field-label">Service Type <span className="required">*</span></label>
            <div className={`service-type-grid ${errors.service_type ? 'error-ring' : ''}`} role="radiogroup">
              {[
                { value: 'Medical Cleaning', label: 'Medical', icon: <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/><path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4"/><line x1="2" y1="6" x2="19" y2="6"/><line x1="2" y1="10" x2="5" y2="10"/> },
                { value: 'Office Cleaning', label: 'Office', icon: <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/> },
                { value: 'School Cleaning', label: 'School', icon: <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/> },
                { value: 'Childcare Cleaning', label: 'Childcare', icon: <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 00-16 0"/> },
                { value: 'Industrial Cleaning', label: 'Industrial', icon: <path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z"/> },
                { value: 'Other', label: 'Other', icon: <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/> }
              ].map(opt => (
                <label key={opt.value} className="service-type-option">
                  <input 
                    type="radio" 
                    name="service_type" 
                    value={opt.value} 
                    checked={data.service_type === opt.value}
                    onChange={e => updateData({ service_type: e.target.value })}
                  />
                  <div className="service-type-card">
                    <div className="service-type-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{opt.icon}</svg>
                    </div>
                    <span className="service-type-name">{opt.label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.service_type && <div className="field-error visible">{errors.service_type}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Cleaning Frequency</label>
            <div className="radio-pills">
              {['daily', '3-5x-week', 'weekly', 'fortnightly', 'one-off', 'not-sure'].map(freq => (
                <label key={freq} className="radio-pill">
                  <input 
                    type="radio" 
                    name="frequency" 
                    value={freq} 
                    checked={data.frequency === freq}
                    onChange={e => updateData({ frequency: e.target.value })}
                  />
                  <span className="radio-pill-label">{freq.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field-row">
            <div className="field-group">
              <label className="field-label">Site Location <span className="required">*</span></label>
              <input 
                type="text" 
                className={`field-input ${errors.location ? 'error' : ''}`}
                placeholder="e.g. Richmond, VIC…" 
                value={data.location}
                onChange={e => updateData({ location: e.target.value })}
              />
              <div className="field-hint">Suburb or city of the property</div>
              {errors.location && <div className="field-error visible">{errors.location}</div>}
            </div>
            <div className="field-group">
              <label className="field-label">Approx. Floor Area <span className="optional">(optional)</span></label>
              <input 
                type="text" 
                className="field-input" 
                placeholder="e.g. 500 sqm…" 
                value={data.approx_sqm}
                onChange={e => updateData({ approx_sqm: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* FRANCHISE FIELDS */}
      {data.enquiry_type === 'franchise' && (
        <div className="conditional-fields visible">
          <h3 className="step-title">Franchise Interest</h3>
          <p className="step-subtitle">Tell us about your interest in a Namoli franchise.</p>

          <div className="field-group">
            <label className="field-label">Preferred Region <span className="required">*</span></label>
            <select 
              className={`field-select ${errors.franchise_region ? 'error' : ''}`}
              value={data.franchise_region}
              onChange={e => updateData({ franchise_region: e.target.value })}
            >
              <option value="" disabled>Select a region…</option>
              <option value="Brisbane">Brisbane &amp; QLD</option>
              <option value="Melbourne">Melbourne &amp; VIC</option>
              <option value="Sydney">Sydney &amp; NSW</option>
              <option value="Other">Other / Flexible</option>
            </select>
            {errors.franchise_region && <div className="field-error visible">{errors.franchise_region}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Investment Budget <span className="optional">(optional)</span></label>
            <select 
              className="field-select"
              value={data.franchise_investment}
              onChange={e => updateData({ franchise_investment: e.target.value })}
            >
              <option value="" disabled>Select a range…</option>
              <option value="under-30k">Under $30,000</option>
              <option value="30k-60k">$30,000 – $60,000</option>
              <option value="60k-100k">$60,000 – $100,000</option>
              <option value="100k-plus">$100,000+</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </div>

          <div className="field-group">
            <label className="field-label">Relevant Experience <span className="optional">(optional)</span></label>
            <textarea 
              className="field-textarea" 
              placeholder="Tell us about your background and what interests you about a cleaning franchise…" 
              rows={3}
              value={data.franchise_experience}
              onChange={e => updateData({ franchise_experience: e.target.value })}
            />
          </div>
        </div>
      )}

      {/* JOBS FIELDS */}
      {data.enquiry_type === 'jobs' && (
        <div className="conditional-fields visible">
          <h3 className="step-title">Job Application</h3>
          <p className="step-subtitle">We're always looking for dedicated cleaning professionals.</p>

          <div className="field-group">
            <label className="field-label">Position of Interest <span className="required">*</span></label>
            <select 
              className={`field-select ${errors.job_role ? 'error' : ''}`}
              value={data.job_role}
              onChange={e => updateData({ job_role: e.target.value })}
            >
              <option value="" disabled>Select a role…</option>
              <option value="cleaner">Cleaner / Team Member</option>
              <option value="team-leader">Team Leader / Supervisor</option>
              <option value="area-manager">Area Manager</option>
              <option value="admin">Administration / Support</option>
              <option value="other">Other</option>
            </select>
            {errors.job_role && <div className="field-error visible">{errors.job_role}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Preferred Location <span className="required">*</span></label>
            <select 
              className={`field-select ${errors.job_location ? 'error' : ''}`}
              value={data.job_location}
              onChange={e => updateData({ job_location: e.target.value })}
            >
              <option value="" disabled>Select a location…</option>
              <option value="Brisbane">Brisbane &amp; QLD</option>
              <option value="Melbourne">Melbourne &amp; VIC</option>
              <option value="Sydney">Sydney &amp; NSW</option>
              <option value="Flexible">Flexible / Willing to Relocate</option>
            </select>
            {errors.job_location && <div className="field-error visible">{errors.job_location}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Upload CV / Resume <span className="optional">(optional)</span></label>
            <div className="upload-zone" tabIndex={0} role="button">
              <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={e => updateData({ cv_upload: e.target.files ? e.target.files[0] : null })}
              />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <div className="upload-zone-text">
                {data.cv_upload ? <strong>{data.cv_upload.name}</strong> : <><strong>Click to upload</strong> or drag and drop</>}
              </div>
              <div className="upload-zone-hint">PDF, DOC, DOCX — Max 10&nbsp;MB</div>
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Availability <span className="optional">(optional)</span></label>
            <select 
              className="field-select"
              value={data.job_availability}
              onChange={e => updateData({ job_availability: e.target.value })}
            >
              <option value="" disabled>When can you start?</option>
              <option value="immediately">Immediately</option>
              <option value="1-week">Within 1 Week</option>
              <option value="2-weeks">Within 2 Weeks</option>
              <option value="1-month">Within 1 Month</option>
              <option value="negotiable">Negotiable</option>
            </select>
          </div>
        </div>
      )}

      <div className="form-nav">
        <button type="button" className="btn-back" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <button type="button" className="btn-next" onClick={handleNext}>
          Next: Review &amp; Submit
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Step2
