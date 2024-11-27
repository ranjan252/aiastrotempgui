import React, { useState } from 'react';

const UserProfileDataCollection = ({ onUserProfileUpdate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthHour, setBirthHour] = useState('');
    const [birthMinute, setBirthMinute] = useState('');
    const [birthSecond, setBirthSecond] = useState('');
    const [birthAMPM, setBirthAMPM] = useState('');
    const [birthLocation, setBirthLocation] = useState('');
    const [birthLatitude, setBirthLatitude] = useState('');
    const [birthLongitude, setBirthLongitude] = useState('');
    const [birthTimezone, setBirthTimezone] = useState('');
    const [birthDST, setBirthDST] = useState('');
    const [language, setLanguage] = useState('');
    const [religion, setReligion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userProfile = {
            name,
            email,
            birthDate,
            birthTime: `${birthHour}:${birthMinute}:${birthSecond} ${birthAMPM}`,
            birthLocation,
            birthLatitude,
            birthLongitude,
            birthTimezone,
            birthDST,
            language,
            religion,
        };
        onUserProfileUpdate(userProfile);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-green-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Let's Get Started</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthDate" className="block font-medium mb-1">
                            Birth Date:
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthTime" className="block font-medium mb-1">
                            Birth Time:
                        </label>
                        <div className="birth-time-inputs flex space-x-2">
                            <input
                                type="number"
                                id="birthHour"
                                value={birthHour}
                                onChange={(e) => setBirthHour(e.target.value)}
                                min="1"
                                max="12"
                                className="border border-gray-400 p-2 rounded w-1/4"
                                required
                            />
                            <span>:</span>
                            <input
                                type="number"
                                id="birthMinute"
                                value={birthMinute}
                                onChange={(e) => setBirthMinute(e.target.value)}
                                min="0"
                                max="59"
                                className="border border-gray-400 p-2 rounded w-1/4"
                                required
                            />
                            <span>:</span>
                            <input
                                type="number"
                                id="birthSecond"
                                value={birthSecond}
                                onChange={(e) => setBirthSecond(e.target.value)}
                                min="0"
                                max="59"
                                className="border border-gray-400 p-2 rounded w-1/4"
                                required
                            />
                            <select
                                id="birthAMPM"
                                value={birthAMPM}
                                onChange={(e) => setBirthAMPM(e.target.value)}
                                className="border border-gray-400 p-2 rounded w-1/4"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="birthLocation" className="block font-medium mb-1">
                            Birth Location:
                        </label>
                        <input
                            type="text"
                            id="birthLocation"
                            value={birthLocation}
                            onChange={(e) => setBirthLocation(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthLatitude" className="block font-medium mb-1">
                            Birth Latitude:
                        </label>
                        <input
                            type="text"
                            id="birthLatitude"
                            value={birthLatitude}
                            onChange={(e) => setBirthLatitude(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthLongitude" className="block font-medium mb-1">
                            Birth Longitude:
                        </label>
                        <input
                            type="text"
                            id="birthLongitude"
                            value={birthLongitude}
                            onChange={(e) => setBirthLongitude(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthTimezone" className="block font-medium mb-1">
                            Birth Timezone:
                        </label>
                        <input
                            type="text"
                            id="birthTimezone"
                            value={birthTimezone}
                            onChange={(e) => setBirthTimezone(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthDST" className="block font-medium mb-1">
                            Birth DST:
                        </label>
                        <input
                            type="text"
                            id="birthDST"
                            value={birthDST}
                            onChange={(e) => setBirthDST(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="language" className="block font-medium mb-1">
                            Language:
                        </label>
                        <select
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        >
                            <option value="">Select Language</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="religion" className="block font-medium mb-1">
                            Religion:
                        </label>
                        <select
                            id="religion"
                            value={religion}
                            onChange={(e) => setReligion(e.target.value)}
                            className="border border-gray-400 p-2 rounded w-full"
                            required
                        >
                            <option value="">Select Religion</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Atheist">Atheist</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfileDataCollection;