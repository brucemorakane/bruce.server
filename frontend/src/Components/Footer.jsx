import React from 'react'
const Footer = () => {
  return (
    <div class="mt-5 pt-5 pb-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <h2>Heading</h2>
            <p class="pr-5 text-dark-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
            <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <div className='social_media'>
              <li><a href="https://www.facebook.com/TwoOceansAquarium/">Facebook</a>
              </li>
              <li><a href="https://twitter.com/2OceansAquarium">Twitter</a></li>
              <li><a href="https://www.instagram.com/2oceansaquarium/">Instagram</a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </div>
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
            <p>Protea Glen Ext 27 burweed street</p>
            <p class="mb-0"><i class="fa fa-phone mr-3"></i>(011) 754-3010</p>
            <p><i class="fa fa-envelope-o mr-3"></i>Bruce Mulungana12@gmail.com</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col copyright">
            <p class=""><small class="text-dark-50">© 2023. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer