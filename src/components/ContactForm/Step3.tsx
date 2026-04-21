import React, { useState } from 'react'
import { FormData } from './ContactForm'

interface Step3Props {
  data: FormData
  updateData: (fields: Partial<FormData>) => void
  onSubmit: () => void
  onBack: () => void
  isSubmitting: boolean
}

const Step3: React.FC<Step3Props> = ({ data, updateData, onSubmit, onBack, isSubmitting }) => {
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!agreed) {
      setError('Please agree to the privacy policy to continue.')
      return
    }
    onSubmit()
  }

  return (
    <div className="form-step active">
      <h3 className="step-title">Final Review</h3>
      <p className="step-subtitle">Almost there! Add any final details and submit your request.</p>

      <div className="review-summary">
        <div className="review-item">
          <span className="review-label">Enquiry Type</span>
          <span className="review-value">{data.enquiry_type.charAt(0).toUpperCase() + data.enquiry_type.slice(1)}</span>
        </div>
        <div className="review-item">
          <span className="review-label">Contact</span>
          <span className="review-value">{data.first_name} {data.last_name} ({data.email})</span>
        </div>
        {data.enquiry_type === 'quote' && (
          <div className="review-item">
            <span className="review-label">Service</span>
            <span className="review-value">{data.service_type} in {data.location}</span>
          </div>
        )}
      </div>

      <div className="field-group">
        <label className="field-label">Additional Comments <span className="optional">(optional)</span></label>
        <textarea 
          className="field-textarea" 
          placeholder="Is there anything else we should know? Special access requirements, specific timing, etc…" 
          rows={4}
          value={data.comments}
          onChange={e => updateData({ comments: e.target.value })}
        />
      </div>

      <div className="field-group">
        <label className="checkbox-field">
          <input 
            type="checkbox" 
            checked={agreed}
            onChange={e => {
              setAgreed(e.target.checked)
              if (e.target.checked) setError('')
            }}
          />
          <span className="checkbox-text">
            I agree to the <a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a> and consent to being contacted regarding this enquiry.
          </span>
        </label>
        {error && <div className="field-error visible" style={{ marginTop: '0.5rem' }}>{error}</div>}
      </div>

      <div className="form-nav">
        <button type="button" className="btn-back" onClick={onBack} disabled={isSubmitting}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <button 
          type="button" 
          className={`btn-submit ${isSubmitting ? 'loading' : ''}`} 
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          {!isSubmitting && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
        </button>
      </div>

      <p className="privacy-note">
        Your data is secure. We never share your information with third parties.
      </p>
    </div>
  )
}

export default Step3
