import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="footer bg-dark text-light py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4 class="text-uppercase fw-bold">Gym Pro</h4>
        <p>Your ultimate fitness destination. Join us and transform your body with expert trainers and state-of-the-art equipment.</p>
      </div>
      <div class="col-md-4">
        <h5 class="text-uppercase fw-bold">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Home</a></li>
          <li><a href="#" className="text-light text-decoration-none">About</a></li>
          <li><a href="#" className="text-light text-decoration-none">Classes</a></li>
          <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5 className="text-uppercase fw-bold">Contact Us</h5>
        <p><i className="fas fa-map-marker-alt"></i> 123 Fitness St, New York, USA</p>
        <p><i className="fas fa-phone"></i> +1 234 567 890</p>
        <p><i className="fas fa-envelope"></i> contact@gympro.com</p>
        <div>
          <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-light"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <hr class="bg-light"/>
    <div class="text-center">
      <p class="mb-0">&copy; 2025 Gym Pro. All Rights Reserved.</p>
    </div>
  </div>
</footer>



    </>
  )
}
