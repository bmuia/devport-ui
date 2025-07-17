import React, { useState } from 'react';
import { createAppsService } from '../../services/AppService';
import { X } from 'lucide-react';

function CreateApp({ onAppCreated, onClose }) {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setLoading(true);
      await createAppsService({ title: title });
      setTitle('');
      onAppCreated();    
      onClose();         
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-4 rounded-lg shadow-md relative">
      <button
        onClick={onClose}
        type="button"
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <X className="w-5 h-5" />
      </button>
      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block text-sm font-medium">Name for your App:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="e.g. My Cool App"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Creating...' : 'Create App'}
        </button>
      </form>
    </div>
  );
}

export default CreateApp;
