import ItemCourse from '@/components/ItemCourse'
import Link from 'next/link'
import React from 'react'

function page() {

  

  return (
   <>
    <div className="container breadcrumbDetails">
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">Home</li>

          <li className="breadcrumb-item" aria-current="page">Categories</li>
          <li className="breadcrumb-item" aria-current="page">Repairs</li>
          <li className="breadcrumb-item" aria-current="page">Sub category</li>
          <li className="breadcrumb-item" aria-current="page">Services</li>
        </ol>
      </nav>
    </div>

    <section className="current_Service container m90">
      <img
        src="/images/ServiceDetails1.webp"
        className="img_current"
        alt="Service"
      />
      <div className="about_current_Service">
        <div className="head">
          <h3>Alloy Wheel Repairs Derby</h3>
          <div className="Star">
            <img src="/images/star.svg" alt="star" />
            <p>4.8</p>
          </div>
        </div>
        <ul>
          <li>
            <img src="/images/Time-Circle.svg" alt="Time-Circle" />
            <p>9:00 AM to 10:00 PM</p>
          </li>
          <li>
            <img src="/images/Location.svg" alt="Location" />
            <p>sidi bisher, alex</p>
          </li>
        </ul>
        <div className="salary_Service">
          <p>2000 EGP</p>
        </div>
        <div className="bookNow_Fav">
          <Link href="/checkOut" className="btn_page">Book Now</Link>
          <div
            className="fav"
            style={{backgroundImage: "url(/images/love.svg)"}}
          ></div>
        </div>
      </div>
    </section>

    <section className="provider container m90">
      <h2 className="headtitle">Provider Details</h2>
      <div className="part1">
        <img src="/images/person.webp" className="person" alt="person" />
        <div className="about_Provider">
          <h3>Muhammed Ahmed</h3>
          <p>Alexandria , Egypt</p>
          <p
            style={{direction:"ltr", textDecoration: "underline"}}
            id="myPhoneNumber"
          >
            +123 456-7890
          </p>
        </div>
      </div>
      <div className="part2">
        <div className="rat_cus">
          <div className="rating rat_cus_same">
            <h3>Provider Rating</h3>
            <div className="Star">
              <p>4.8</p>
              <img src="/images/star.svg" alt="star" />
            </div>
            <p><span>79% </span> Positive Ratings</p>
          </div>
          <div className="customers rat_cus_same">
            <h3>Customers</h3>
            <h4>249K+</h4>
            <p>During the last 90 days</p>
          </div>
        </div>
        <div className="all_Rating">
          <ul>
            <li>
              <div className="headRating">
                <div className="allStars">
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                </div>
                <p>12/11/2022</p>
              </div>
              <h3>He’s so Professional</h3>
              <h4>By: Ahmed</h4>
            </li>
            <li>
              <div className="headRating">
                <div className="allStars">
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                </div>
                <p>12/11/2022</p>
              </div>
              <h3>He’s so Professional</h3>
              <h4>By: Ahmed</h4>
            </li>
            <li>
              <div className="headRating">
                <div className="allStars">
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                  <img src="/images/star.svg" alt="star" />
                </div>
                <p>12/11/2022</p>
              </div>
              <h3>He’s so Professional</h3>
              <h4>By: Ahmed</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="ServicesProvider services container m90">
      <h2 className="headtitle">All Services by this provider</h2>
      <div className="owl-carousel allServices">
        <div className="item">
           <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              oldsalary="2000"
              newsalary="1000"
              image="1"
            />
        </div>
        <div className="item">
          <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="2"
              
            />
        </div>
        <div className="item">
        <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="3"
            />
        </div>
        <div className="item">
          <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              oldsalary="2000"
              newsalary="1000"
              image="1"
            />
        </div>
        <div className="item">
        <ItemCourse
              title="Alloy Wheel Repairs Derby"
              star="4.8"
              loc="sidi bisher, alex"
              timeFrom="9:00 AM"
              timeTo="10:00 PM"
              newsalary="2000"
              image="3"
            />
        </div>
      </div>
    
    </section>

   </>
  )
}

export default page