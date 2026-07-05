import { useState } from 'react';
import { Layout } from './components/Layout';
import { ClaimsDashboard } from './components/ClaimsDashboard';
import { NewClaimForm } from './components/NewClaimForm';
import { PreAuthorizationForm } from './components/PreAuthorizationForm';
import { ClaimTracker } from './components/ClaimTracker';
import { ClaimDetails } from './components/ClaimDetails';

type Screen = 'dashboard' | 'new-claim' | 'pre-auth' | 'tracker' | 'claim-details';

interface AppState {
  currentScreen: Screen;
  selectedClaimId?: string;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    currentScreen: 'dashboard'
  });

  const navigateToScreen = (screen: Screen, claimId?: string) => {
    setAppState({
      currentScreen: screen,
      selectedClaimId: claimId
    });
  };

  const handleScreenChange = (screenId: string) => {
    const screenMap: { [key: string]: Screen } = {
      'dashboard': 'dashboard',
      'new-claim': 'new-claim',
      'tracker': 'tracker'
    };
    navigateToScreen(screenMap[screenId] || 'dashboard');
  };

  const renderCurrentScreen = () => {
    switch (appState.currentScreen) {
      case 'dashboard':
        return (
          <ClaimsDashboard 
            onViewClaim={(claimId) => navigateToScreen('claim-details', claimId)}
          />
        );
      
      case 'new-claim':
        return (
          <NewClaimForm 
            onShowPreAuth={() => navigateToScreen('pre-auth')}
            onBack={() => navigateToScreen('dashboard')}
          />
        );
      
      case 'pre-auth':
        return (
          <PreAuthorizationForm 
            onBack={() => navigateToScreen('new-claim')}
            onSubmit={() => {
              // Show success message and redirect to tracker
              alert('Pre-authorization request submitted successfully! You will receive a notification within 48-72 hours.');
              navigateToScreen('tracker');
            }}
          />
        );
      
      case 'tracker':
        return (
          <ClaimTracker 
            onViewClaim={(claimId) => navigateToScreen('claim-details', claimId)}
            onBack={() => navigateToScreen('dashboard')}
          />
        );
      
      case 'claim-details':
        return (
          <ClaimDetails 
            claimId={appState.selectedClaimId || 'CLM-001'}
            onBack={() => navigateToScreen('dashboard')}
          />
        );
      
      default:
        return (
          <ClaimsDashboard 
            onViewClaim={(claimId) => navigateToScreen('claim-details', claimId)}
          />
        );
    }
  };

  return (
    <Layout 
      currentScreen={appState.currentScreen} 
      onScreenChange={handleScreenChange}
    >
      {renderCurrentScreen()}
    </Layout>
  );
}