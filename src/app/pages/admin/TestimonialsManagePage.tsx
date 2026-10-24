import { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { useCMS } from '../../contexts/CMSContext';
import { Plus, Edit, Trash2 } from 'lucide-react';

export function TestimonialsManagePage() {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useCMS();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    quote: '',
    avatar: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateTestimonial(isEditing, formData);
    } else {
      addTestimonial(formData);
    }
    setFormData({ name: '', designation: '', company: '', quote: '', avatar: '' });
    setIsEditing(null);
  };

  const handleEdit = (testimonial: typeof testimonials[0]) => {
    setFormData({
      name: testimonial.name,
      designation: testimonial.designation,
      company: testimonial.company,
      quote: testimonial.quote,
      avatar: testimonial.avatar
    });
    setIsEditing(testimonial.id);
  };

  return (
    <AdminLayout title="Manage Testimonials">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Designation</label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Avatar URL</label>
                <input
                  type="url"
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Quote</label>
                <textarea
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none resize-none"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  {isEditing ? 'Update' : 'Add'} Testimonial
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(null);
                      setFormData({ name: '', designation: '', company: '', quote: '', avatar: '' });
                    }}
                    className="px-6 py-3 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              All Testimonials ({testimonials.length})
            </h2>

            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-4 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.designation} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3 italic">"{testimonial.quote}"</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm font-semibold"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this testimonial?')) {
                          deleteTestimonial(testimonial.id);
                        }
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-semibold"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
