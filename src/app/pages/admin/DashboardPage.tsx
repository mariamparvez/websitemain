import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCMS } from '../../contexts/CMSContext';
import {
  LogOut,
  MessageSquare,
  FileText,
  Briefcase,
  Wrench,
  Award,
  Palette,
  Home
} from 'lucide-react';
import { useEffect } from 'react';

export function DashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const {
    testimonials,
    blogs,
    caseStudies,
    services,
    certifications,
    artworks
  } = useCMS();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const stats = [
    {
      label: 'Testimonials',
      value: testimonials.length,
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      link: '/admin/testimonials'
    },
    {
      label: 'Blogs',
      value: blogs.length,
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      link: '/admin/blogs'
    },
    {
      label: 'Case Studies',
      value: caseStudies.length,
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
      link: '/admin/case-studies'
    },
    {
      label: 'Services',
      value: services.length,
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      link: '/admin/services'
    },
    {
      label: 'Certifications',
      value: certifications.length,
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      link: '/admin/certifications'
    },
    {
      label: 'Artworks',
      value: artworks.length,
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      link: '/admin/artworks'
    }
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            >
              <Home className="w-5 h-5" />
              View Website
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
          <p className="text-gray-600">Manage your portfolio content from here</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <button
              key={stat.label}
              onClick={() => navigate(stat.link)}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-orange-200 group text-left"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <button
                key={`action-${stat.label}`}
                onClick={() => navigate(stat.link)}
                className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all"
              >
                <stat.icon className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-gray-900">Manage {stat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
