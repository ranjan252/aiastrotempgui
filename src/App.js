import React, { useState } from 'react';
import UserProfileDataCollection from './components/UserProfileDataCollection';
import VedicAstrology from './components/VedicAstrology';
import ChakraAssessment from './components/ChakraAssessment';
import MaruthBalancing from './components/MaruthBalancing';
import HabitTracker from './components/HabitTracker';
import PersonalEvolution from './components/PersonalEvolution';

const App = () => {
    const [userProfile, setUserProfile] = useState(null);

    const handleUserProfileUpdate = (updatedProfile) => {
        setUserProfile(updatedProfile);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Astraflow AI Human Flow</h1>
            </header>

            <main>
                {!userProfile && (
                    <UserProfileDataCollection onUserProfileUpdate={handleUserProfileUpdate} />
                )}

                {userProfile && (
                    <>
                        <VedicAstrology userProfile={userProfile} />
                        <ChakraAssessment userProfile={userProfile} />
                        <MaruthBalancing userProfile={userProfile} />
                        <HabitTracker userProfile={userProfile} />
                        <PersonalEvolution userProfile={userProfile} />
                    </>
                )}
            </main>

            <footer>
                <p>&copy; 2024 Astraflow AI Human Evolution</p>
            </footer>
        </div>
    );
};

export default App;