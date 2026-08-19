import { useEffect, useState } from 'react';
import { api, type CareerBenefit, type Job } from '@/lib/api';

function CareersAdmin() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [benefits, setBenefits] = useState<CareerBenefit[]>([]);
  const [jobForm, setJobForm] = useState<Partial<Job> | null>(null);
  const [error, setError] = useState('');

  const load = async () => {
    const [j, b] = await Promise.all([api.adminJobs(), api.adminBenefits()]);
    setJobs(j.jobs);
    setBenefits(b.benefits);
  };

  useEffect(() => {
    load().catch((e) => setError(e.message));
  }, []);

  const saveJob = async () => {
    if (!jobForm?.title) return;
    if (jobForm.id) await api.adminUpdateJob(jobForm.id, jobForm);
    else
      await api.adminCreateJob({
        title: jobForm.title,
        location: jobForm.location || '',
        department: jobForm.department || '',
        description: jobForm.description || '',
        isActive: jobForm.isActive !== false,
      });
    setJobForm(null);
    await load();
  };

  return (
    <div>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Careers</h1>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}

      <h2 style={{ color: '#14146e' }}>Jobs</h2>
      <button
        type="button"
        onClick={() => setJobForm({ title: '', location: '', department: '', description: '', isActive: true })}
        style={{ marginBottom: 12, background: '#14146e', color: '#fff', border: 'none', padding: '8px 12px' }}
      >
        Add job
      </button>
      <ul>
        {jobs.map((j) => (
          <li key={j.id} style={{ marginBottom: 8 }}>
            <strong>{j.title}</strong> — {j.location} ({j.isActive ? 'active' : 'inactive'}){' '}
            <button type="button" onClick={() => setJobForm({ ...j })}>
              Edit
            </button>{' '}
            <button
              type="button"
              onClick={async () => {
                if (j.id && confirm('Delete?')) {
                  await api.adminDeleteJob(j.id);
                  await load();
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {jobForm ? (
        <div style={{ background: '#fff', padding: 16, borderRadius: 8, marginBottom: 24, display: 'grid', gap: 8 }}>
          {(['title', 'location', 'department', 'description'] as const).map((f) => (
            <label key={f}>
              {f}
              <input
                value={String(jobForm[f] ?? '')}
                onChange={(e) => setJobForm({ ...jobForm, [f]: e.target.value })}
                style={{ display: 'block', width: '100%', padding: 8 }}
              />
            </label>
          ))}
          <label>
            <input
              type="checkbox"
              checked={jobForm.isActive !== false}
              onChange={(e) => setJobForm({ ...jobForm, isActive: e.target.checked })}
            />{' '}
            Active
          </label>
          <div>
            <button type="button" onClick={saveJob}>
              Save job
            </button>{' '}
            <button type="button" onClick={() => setJobForm(null)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      <h2 style={{ color: '#14146e' }}>Benefit cards</h2>
      {benefits.map((b) => (
        <div key={b.id} style={{ background: '#fff', padding: 12, marginBottom: 8, borderRadius: 6 }}>
          <label>
            Title (\n for line break)
            <input
              defaultValue={b.title}
              onBlur={async (e) => {
                await api.adminUpdateBenefit(b.id, { ...b, title: e.target.value });
                await load();
              }}
              style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>
          <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
            Image: {b.image} · class: {b.cardClass}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AdminCareersPage() {
  return <CareersAdmin />;
}
