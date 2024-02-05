// src/components/ProfileUpdate.js
import React, { useState } from 'react';

const ProfileUpdate = () => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [currentResidency, setCurrentResidency] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');

  const handleFileUpload = (event) => {
    // Add your file upload logic here
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  };

  const handleSave = () => {
    // Add your save/update profile logic here
    console.log('Saving profile:', { fullName, dob, nationality, currentResidency, employmentStatus });
  };

  return (
    <div>
      <h2>Upload documents now</h2>
      <form>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <label>
          Nationality:
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        </label>
        <br />
        <label>
          Current Residency:
          <input type="text" value={currentResidency} onChange={(e) => setCurrentResidency(e.target.value)} />
        </label>
        <br />
        <label>
          Employment Status:
          <input type="text" value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} />
        </label>
        <br />
        <label>
          Upload Passport:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <br />
        <label>
          Upload Residence Permit:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <br />
        <label>
          Upload Passport Size Photo:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <br />
        <label>
          Upload Proof of Employment:
          <input type="file" onChange={handleFileUpload} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
