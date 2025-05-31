import React from 'react'

export default function ComingSoon() {
  return (
    <>
      <div className="coming-soon d-flex align-items-center justify-content-center text-white text-center">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className="display-3 fw-bold">🚧 Coming Soon!</h1>
            <p className="lead mt-3">
              We’re working hard to bring you something amazing. Stay tuned!
            </p>
            <div className="mt-4">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
