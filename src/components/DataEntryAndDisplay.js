import React, { useState } from 'react';

const DataEntryAndDisplay = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the back-end API to save the data
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                // Fetch the updated data from the back-end
                const updatedData = await response.json();
                setData(updatedData);

                // Clear the input fields
                setName('');
                setEmail('');
            } else {
                console.error('Error submitting data:', await response.text());
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Data Entry and Display</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
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

                <div className="mb-4">
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

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>

            <h3 className="text-xl font-bold mb-2">Data</h3>
            <ul className="space-y-2">
                {data.map((item, index) => (
                    <li key={index} className="bg-gray-100 p-2 rounded">
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataEntryAndDisplay;