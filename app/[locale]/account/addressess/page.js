import React from 'react'

function page() {
  return (
    <>
     <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>
          <li className="breadcrumb-item" aria-current="page">Account</li>
          <li className="breadcrumb-item" aria-current="page">Addressess</li>
        </ol>
      </nav>
    </div>

    <section className="account container">
      <div className="account_info personal_info">
        <div className="part1">
          <ul>
            <li><a href="profile.html">My Profile</a></li>
            <li><a href="myServices.html ">My services</a></li>
            <li><a href="Prmoted.html">Promotion</a></li>
            <li><a href="myOrders.html">My Orders</a></li>
            <li>
              <a href="profile_Addressess.html" className="active">Addresses</a>
            </li>
            <li><a href="">Log out</a></li>
          </ul>
        </div>
        <div className="Profile">
          <h2 className="cart_title2">Addresses</h2>
          <form className="">
            <div className="box1 address_page">
              <div className="myAddress">
                <img src="./images/address.svg" alt="address" />
                <div className="about_address">
                  <p>
                    66 Youssef Ghaly Street, Miami , Alexandria. Appointment No.
                    22 Floor No.4
                  </p>
                  <p>+20 154 256 1235</p>
                </div>
              </div>
              <a href="profile_NewAddress.html" className="addAddress">
                <h5>+</h5>
                <h6>Add New Address</h6>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default page