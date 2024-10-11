'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import axios, { AxiosResponse, AxiosError } from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "@/styles/Navbar.css";
import "@/styles/profile.css";

interface User {
  name: string;
  lastName: string;
  zipCode: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [initialData, setInitialData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<null, AxiosResponse<User> | AxiosError<Error>>('http://localhost:3000/users/1acb8ebc');
        if ('data' in response) {
          const userData = response.data; // Asumiendo que hay solo un usuario por ahora
          setInitialData(cloneDeep(userData));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: initialData ? initialData.name : '',
      lastName: initialData ? initialData.lastName : '',
      zipCode: initialData ? initialData.zipCode : ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('First Name is required'),
      lastName: Yup.string()
        .required('Last Name is required'),
      zipCode: Yup.string()
        .required('ZIP Code is required')
        .matches(/^[0-9]{5}$/, 'ZIP Code must be exactly 5 digits')
    }),
    onSubmit: (values) => {
      // Aquí iría la lógica para guardar los cambios
      setIsEditing(false);
    }
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    if (initialData) {
      formik.setValues(cloneDeep(initialData));
    }
    setIsEditing(false);
  };

  return (
    <><Navbar /><div className="container">



      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/account">Account</a> / <span>Profile</span>
      </div>

      <h1 className="title">PROFILE</h1>

      <div className="gridContainer">
        <aside className="sidebar">
          <ul>
            <li><a href="#">Account Dashboard</a></li>
            <li>Purchases
              <ul>
                <li><a href="#">Purchase History</a></li>
                <li><a href="#">Paint Purchase History</a></li>
                <li><a href="#">Subscriptions</a></li>
              </ul>
            </li>
            <li>Payment Methods
              <ul>
                <li><a href="#">Cards & Accounts</a></li>
                <li><a href="#">Home Depot Credit Cards</a></li>
                <li><a href="#">Instant Checkout</a></li>
              </ul>
            </li>
            <li>Account Settings
              <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Addresses</a></li>
                <li><a href="#">Military Discount Benefit</a></li>
                <li><a href="#">Security & Password</a></li>
                <li><a href="#">Communication Preferences</a></li>
              </ul>
            </li>
            <li>Plan Your Projects
              <ul>
                <li><a href="#">Product Lists</a></li>
                <li><a href="#">Window Treatments</a></li>
              </ul>
            </li>
          </ul>
        </aside>

        <main className="mainContent">
          <section className="section">
            <h2 className="sectionTitle">PERSONAL DETAILS</h2>
            {isEditing ? (
              <form onSubmit={formik.handleSubmit} className="detailsRow">
                <div className="details">
                  <label>
                    First Name
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="error">{formik.errors.name}</div>
                    ) : null}
                  </label>
                  <label>
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </label>
                  <label>
                    ZIP Code
                    <input
                      type="text"
                      name="zipCode"
                      value={formik.values.zipCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} />
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                      <div className="error">{formik.errors.zipCode}</div>
                    ) : null}
                  </label>
                </div>
                <div className="editButtonContainer">
                  <button type="button" onClick={handleCancelClick} className="cancelButton">Cancel</button>
                  <button type="submit" className="saveButton">Save Changes</button>
                </div>
              </form>
            ) : (
              <div className="detailsRow">
                <div className="details">
                  <p><strong>First Name:</strong> {formik.values.name}</p>
                  <p><strong>Last Name:</strong> {formik.values.lastName}</p>
                  <p><strong>ZIP Code:</strong> {formik.values.zipCode}</p>
                </div>
                <div className="editButtonContainer">
                  <a href="#" className="editLink" onClick={handleEditClick}>Edit</a>
                </div>
              </div>
            )}
          </section>

          <section className="section">
            <h2 className="sectionTitle">YOUR STORE</h2>
            <div className="detailsRow">
              <div className="details">
                <p><strong>Brownsville, #6521</strong></p>
                <p>4551 Padre Island Hwy</p>
                <p>Brownsville, TX 78521</p>
                <p>Phone: 956-544-5466</p>
                <p>Pro Phone: 956-550-4204</p>
                <p>Mon - Sat: 6:00 a.m. - 10:00 p.m.</p>
                <p>Sun: 8:00 a.m. - 8:00 p.m.</p>
              </div>
              <div className="changeStoreButtonContainer">
                <a href="#" className="changeStore">Change Your Store</a>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="sectionTitle">TAX EXEMPT ID</h2>
            <p>You don't have a Home Depot Tax Exempt ID associated with this account.</p>
            <a href="#">More information</a>
          </section>

          <section className="section">
            <h2 className="sectionTitle">ACCOUNT CLOSURE</h2>
            <a href="#">Close Account</a>
            <p>Closing this account will not delete your personal information that was collected, but you can submit a request to access and delete your information. <a href="#">Exercise your privacy rights.</a></p>
          </section>
        </main>

        <aside className="proXtraBox">
          <h3>Join the Pro Xtra Program</h3>
          <p>Shopping for your business? Convert to a Pro Xtra Account to save time, save money, and get rewarded through members-only benefits and business tools.</p>
          <a href="#" className="proXtraButton">Convert to Pro Xtra Account</a>
        </aside>
      </div>
    </div></>
  );
};

export default Profile;