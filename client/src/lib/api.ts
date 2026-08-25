const API_BASE = import.meta.env.VITE_API_URL || '';

export type ApiError = { error: string };

function authHeaders(): HeadersInit {
  const token = sessionStorage.getItem('cms_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      ...(init?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...authHeaders(),
      ...init?.headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as ApiError).error || `Request failed (${res.status})`);
  }
  return data as T;
}

export const api = {
  getPage: (slug: string) => request<{ slug: string; data: unknown }>(`/api/pages/${slug}`),
  getLeadership: () =>
    request<{ executiveBoard: LeadershipMember[]; leadershipTeam: LeadershipMember[] }>(
      '/api/leadership',
    ),
  getOffices: () => request<{ offices: Office[] }>('/api/offices'),
  getJobs: () => request<{ jobs: Job[] }>('/api/jobs'),
  getCareerBenefits: () => request<{ benefits: CareerBenefit[] }>('/api/career-benefits'),
  submitContact: (body: {
    source?: string;
    name: string;
    email: string;
    message?: string;
    phone_alt?: string;
  }) =>
    request<{ ok: boolean }>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  submitCareer: (formData: FormData) =>
    request<{ ok: boolean }>('/api/careers/apply', {
      method: 'POST',
      body: formData,
      headers: authHeaders(),
    }),

  login: (email: string, password: string) =>
    request<{ token: string; user: AdminUser }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  me: () => request<{ user: AdminUser }>('/api/auth/me'),

  adminStats: () =>
    request<{
      pages: number;
      members: number;
      unreadContacts: number;
      unreadApplications: number;
      jobs: number;
    }>('/api/admin/stats'),
  adminPages: () => request<{ pages: { id: number; slug: string; updatedAt: string }[] }>('/api/admin/pages'),
  adminUpdatePage: (slug: string, data: unknown) =>
    request(`/api/admin/pages/${slug}`, { method: 'PUT', body: JSON.stringify({ data }) }),
  adminLeadership: () => request<{ members: LeadershipMember[] }>('/api/admin/leadership'),
  adminCreateLeadership: (member: Partial<LeadershipMember>) =>
    request('/api/admin/leadership', { method: 'POST', body: JSON.stringify(member) }),
  adminUpdateLeadership: (id: number, member: Partial<LeadershipMember>) =>
    request(`/api/admin/leadership/${id}`, { method: 'PUT', body: JSON.stringify(member) }),
  adminDeleteLeadership: (id: number) =>
    request(`/api/admin/leadership/${id}`, { method: 'DELETE' }),
  adminOffices: () => request<{ offices: Office[] }>('/api/admin/offices'),
  adminUpdateOffice: (id: number, office: Partial<Office>) =>
    request(`/api/admin/offices/${id}`, { method: 'PUT', body: JSON.stringify(office) }),
  adminJobs: () => request<{ jobs: Job[] }>('/api/admin/jobs'),
  adminCreateJob: (job: Partial<Job>) =>
    request('/api/admin/jobs', { method: 'POST', body: JSON.stringify(job) }),
  adminUpdateJob: (id: number, job: Partial<Job>) =>
    request(`/api/admin/jobs/${id}`, { method: 'PUT', body: JSON.stringify(job) }),
  adminDeleteJob: (id: number) => request(`/api/admin/jobs/${id}`, { method: 'DELETE' }),
  adminBenefits: () => request<{ benefits: CareerBenefit[] }>('/api/admin/career-benefits'),
  adminUpdateBenefit: (id: number, benefit: Partial<CareerBenefit>) =>
    request(`/api/admin/career-benefits/${id}`, { method: 'PUT', body: JSON.stringify(benefit) }),
  adminContacts: () => request<{ items: ContactSubmission[] }>('/api/admin/inbox/contacts'),
  adminApplications: () =>
    request<{ items: CareerApplication[] }>('/api/admin/inbox/applications'),
  adminMarkContactRead: (id: number) =>
    request(`/api/admin/inbox/contacts/${id}/read`, { method: 'PATCH' }),
  adminMarkApplicationRead: (id: number) =>
    request(`/api/admin/inbox/applications/${id}/read`, { method: 'PATCH' }),
  adminDeleteContact: (id: number) =>
    request(`/api/admin/inbox/contacts/${id}`, { method: 'DELETE' }),
  adminDeleteApplication: (id: number) =>
    request(`/api/admin/inbox/applications/${id}`, { method: 'DELETE' }),
};

export type AdminUser = { id: number; email: string; name: string };
export type LeadershipMember = {
  id?: number;
  name: string;
  role: string;
  shortDesc: string;
  fullDesc: string[];
  image: string;
  alt: string;
  group: string;
  sortOrder?: number;
};
export type Office = {
  id: number;
  officeKey: string;
  name: string;
  country: string;
  mapImage?: string | null;
  lineImage?: string | null;
  address: string[];
  defaultOpen: boolean;
  sortOrder: number;
};
export type Job = {
  id?: number;
  title: string;
  location: string;
  department: string;
  description: string;
  isActive: boolean;
  sortOrder?: number;
};
export type CareerBenefit = {
  id: number;
  title: string;
  image: string;
  cardClass: string;
  sortOrder: number;
};
export type ContactSubmission = {
  id: number;
  source: string;
  name: string;
  email: string;
  message: string | null;
  isRead: boolean;
  createdAt: string;
};
export type CareerApplication = {
  id: number;
  name: string;
  email: string;
  cvPath: string;
  isRead: boolean;
  createdAt: string;
};
