import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Layout } from './components/Layout';
import { ClaimsDashboard } from './components/ClaimsDashboard';
import { NewClaimForm } from './components/NewClaimForm';
import { PreAuthorizationForm } from './components/PreAuthorizationForm';
import { ClaimTracker } from './components/ClaimTracker';
import { ClaimDetails } from './components/ClaimDetails';
export default function App() {
    const [appState, setAppState] = useState({
        currentScreen: 'dashboard'
    });
    const navigateToScreen = (screen, claimId) => {
        setAppState({
            currentScreen: screen,
            selectedClaimId: claimId
        });
    };
    const handleScreenChange = (screenId) => {
        const screenMap = {
            'dashboard': 'dashboard',
            'new-claim': 'new-claim',
            'tracker': 'tracker'
        };
        navigateToScreen(screenMap[screenId] || 'dashboard');
    };
    const renderCurrentScreen = () => {
        switch (appState.currentScreen) {
            case 'dashboard':
                return (_jsx(ClaimsDashboard, { onViewClaim: (claimId) => navigateToScreen('claim-details', claimId) }));
            case 'new-claim':
                return (_jsx(NewClaimForm, { onShowPreAuth: () => navigateToScreen('pre-auth'), onBack: () => navigateToScreen('dashboard') }));
            case 'pre-auth':
                return (_jsx(PreAuthorizationForm, { onBack: () => navigateToScreen('new-claim'), onSubmit: () => {
                        // Show success message and redirect to tracker
                        alert('Pre-authorization request submitted successfully! You will receive a notification within 48-72 hours.');
                        navigateToScreen('tracker');
                    } }));
            case 'tracker':
                return (_jsx(ClaimTracker, { onViewClaim: (claimId) => navigateToScreen('claim-details', claimId), onBack: () => navigateToScreen('dashboard') }));
            case 'claim-details':
                return (_jsx(ClaimDetails, { claimId: appState.selectedClaimId || 'CLM-001', onBack: () => navigateToScreen('dashboard') }));
            default:
                return (_jsx(ClaimsDashboard, { onViewClaim: (claimId) => navigateToScreen('claim-details', claimId) }));
        }
    };
    return (_jsx(Layout, { currentScreen: appState.currentScreen, onScreenChange: handleScreenChange, children: renderCurrentScreen() }));
}
//# sourceMappingURL=App.js.map