import React from 'react'
import "./FooterStyle.css";
import fb from "../assets/fb.png";
import yt from "../assets/icons8-youtube-40.png";
import ins from "../assets/ins.png";

function Footer() {
  return (
    <div className='footer'>
      <div className='section_padding'>
        <div className='footer-link'>
            <div className='footer-link-div'>
                <h4>Our Business</h4>
                <a href='#'>
                    <p>Product</p>
                </a>
                <a href='#'>
                    <p>Employee</p>
                </a>
                <a href='#'>
                    <p>Deadline</p>
                </a>
            </div>
            <div className='footer-link-div'>
                <h4>Useful Link</h4>
                <a href='#'>
                    <p>Account</p>
                </a>
                <a href='#'>
                    <p>About</p>
                </a>
                <a href='#'>
                    <p>Shop</p>
                </a>
            </div>
            <div className='footer-link-div'>
                <h4>Contact</h4>
                <a href='#'>
                    <p>Address: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</p>
                </a>
                <a href='#'>
                    <p>Phone: (028) 372 52002</p>
                </a>
                <a href='#'>
                    <p>Mail: info@uit.edu.vn</p>
                </a>
            </div>
            <div className='footer-link-div'>
                <div className='social-media'>
                <h4>Comming Soon</h4>
                <p><img src={fb}/></p>
                <p><img src={yt}/></p>
                <p><img src={ins}/></p>
                </div>
            </div>
        </div>
      </div>
      <hr></hr>

      <div className='footer-below'>
      <div className='footer-copyright'>
        <p>
            2023 MSIS207. All right reserved.
        </p>
        </div>
        <div className='footer-below-link'>
            <a href='#'><div><p>Terms & Conditions</p></div></a>
            <a href='#'><div><p>Security</p></div></a>
            <a href='#'><div><p>Privacy</p></div></a>
            <a href='#'><div><p>Cookie Declaration</p></div></a>
        </div>
      </div>
    </div>
  )
}
export default Footer
