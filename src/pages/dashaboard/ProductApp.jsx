import React, { useEffect, useState } from 'react';
import { createAppsService, fetchAppsService } from '../../services/AppService';
import { Copy, Check } from 'lucide-react';
import CreateApp from './CreateApp';

function ProductApp() {
  const [apps, setApps] = useState([]);
  const [copiedKeyId, setCopiedKeyId] = useState(null);
  const [copiedSecretId, setCopiedSecretId] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const fetchAllApps = async () => {
    try {
      const res = await fetchAppsService();
      setApps(res);
    } catch (error) {
      console.error("Error fetching apps:", error);
    }
  };

  useEffect(() => {
    fetchAllApps();
  }, []);

  const copyToClipboard = (text, type, id) => {
    navigator.clipboard.writeText(text);
    if (type === 'key') {
      setCopiedKeyId(id);
      setTimeout(() => setCopiedKeyId(null), 1500);
    } else {
      setCopiedSecretId(id);
      setTimeout(() => setCopiedSecretId(null), 1500);
    }
  };

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-4">
        <button
          onClick={handleOpenForm}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create an App
        </button>
      </div>

      {openForm && (
        <div>
          <CreateApp onAppCreated={fetchAllApps} onClose={handleCloseForm} />
        </div>
      )}

      {/* Show apps only if form is closed */}
      {!openForm && (
        <>
          {apps.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>No apps yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="bg-white border border-gray-200 shadow-md rounded-xl p-4 h-64 w-full overflow-auto"
                >
                  <h1 className="text-lg font-semibold text-gray-800 mb-2">{app.title}</h1>
                  <div className="text-sm text-gray-600 space-y-3">
                    <div>
                      <div className="font-medium">Consumer Key</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-blue-500 text-xs break-all w-full">
                          {app.consumer_key}
                        </span>
                        <button
                          onClick={() => copyToClipboard(app.consumer_key, 'key', app.id)}
                          className="hover:bg-gray-100 p-1 rounded transition"
                          title="Copy Consumer Key"
                        >
                          {copiedKeyId === app.id ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Consumer Secret</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-red-500 text-xs break-all w-full">
                          {app.consumer_secret}
                        </span>
                        <button
                          onClick={() => copyToClipboard(app.consumer_secret, 'secret', app.id)}
                          className="hover:bg-gray-100 p-1 rounded transition"
                          title="Copy Consumer Secret"
                        >
                          {copiedSecretId === app.id ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Created at: {new Date(app.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductApp;
