import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

function MyProfile() {
  const { userData, setUserData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(true);
  const [loading, setLoading] = useState(false);
const token = localStorage.getItem('token');
  if (!userData) return <div>Loading profile...</div>;

const handleSave = async () => {
  setLoading(true);

  try {
    const formData = new FormData();

    // Append simple fields
    formData.append('name', userData.name);
    formData.append('phone', userData.phone);
    formData.append('dob', userData.dob);
    formData.append('gender', userData.gender);
    formData.append('address', userData.address);

    // Combine address into a string (flattened)


    // Append image file if available
    if (userData.imageFile) {
      formData.append('image', userData.imageFile);
    }

    const token = localStorage.getItem('token');

    const response = await axios.put(
      'http://localhost:4000/api/user/update-profile',
      formData,
      {
        headers: {
          token: token,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.data.success) {
      alert('Profile updated successfully!');
      setIsEdit(false);
    } else {
      alert(response.data.message || 'Failed to update profile.');
    }

  } catch (error) {
    console.error('Error updating profile:', error);
    alert('An error occurred while updating your profile.');
  } finally {
    setLoading(false);
  }
};


  const safeAddress = userData.address || { line1: '', line2: '' };

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="Profile" />

      {
      isEdit ? (
        <input
          className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
          type="text"
          value={userData.name}
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      )}

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>

          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className='text-blue-400'>{userData.phone}</p>
          )}

          <p className='font-medium'>Address:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="text"
              value={userData.address}
              onChange={e => setUserData(prev => ({ ...prev, address: e.target.value }))}
            />
          ) : (
            <p className='text-blue-400'>{userData.address}</p>
          )}

{/* <p className='font-medium'>Address:</p>
{isEdit ? (
  <input
    className='bg-gray-50 w-full'
    type="text"
    value={userData.address || ''}
    onChange={e =>
      setUserData(prev => ({
        ...prev,
        address: e.target.value
      }))
    }
  />
) : (
  <p className='text-gray-500'>{userData.address}</p>
)} */}


        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {isEdit ? (
            <select
              className='max-w-20 bg-gray-100'
              value={userData.gender}
              onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className='text-gray-400'>{userData.gender}</p>
          )}

          <p className='font-medium'>Birthday:</p>
          {isEdit ? (
            <input
              className='max-w-28 bg-gray-100'
              type="date"
              value={userData.dob}
              onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p className='text-gray-400'>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className='mt-10'>
        {isEdit ? (
          <button
            disabled={loading}
            className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50'
            onClick={handleSave}
          >
            {loading ? 'Saving...' : 'Save information'}
          </button>
        ) : (
          <button
            className='border hover:bg-blue-500 border-blue-500 px-8 py-2 rounded-full hover:text-white transition-all'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
