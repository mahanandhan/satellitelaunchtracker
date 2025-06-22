import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://satellitelaunchtracker-1.onrender.com/api/user/me', {
          withCredentials: true, // ✅ If using cookies for auth
        });

        setProfile(response.data.user); // adjust based on your backend response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-white p-6">Loading profile...</p>;

  if (!profile) return <p className="text-red-400 p-6">Failed to load profile</p>;

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-3">
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        {/* Add other fields like createdAt, etc., if needed */}
      </div>
    </div>
  );
};

export default Profile;
