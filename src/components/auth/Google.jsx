import React from 'react'

function Google() {

    const handleSubmit = () => {
  window.location.href = "http://localhost:8000/api/auth/google/"
}

  return (
    <div>
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium hover:bg-gray-100 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </div>
  )
}

export default Google
