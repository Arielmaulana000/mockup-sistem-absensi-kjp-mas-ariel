import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { IPhoneMockup } from './components/IPhoneMockup';
import { LoginScreen } from './components/screens/LoginScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { NotificationScreen } from './components/screens/NotificationScreen';
import { StatisticsScreen } from './components/screens/StatisticsScreen';
import { CertificateScreen } from './components/screens/CertificateScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-gray-900 mb-2">Sistem Absensi Digital KJP</h1>
          <p className="text-gray-600">Mockup Design - Islamic Modern UI</p>
        </div>

        <Tabs value={activeScreen} onValueChange={setActiveScreen} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-white shadow-sm">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="notification">Notifikasi</TabsTrigger>
            <TabsTrigger value="statistics">Statistik</TabsTrigger>
            <TabsTrigger value="certificate">Sertifikat</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          <div className="flex justify-center">
            <TabsContent value="login" className="mt-0">
              <IPhoneMockup>
                <LoginScreen />
              </IPhoneMockup>
            </TabsContent>

            <TabsContent value="dashboard" className="mt-0">
              <IPhoneMockup>
                <DashboardScreen />
              </IPhoneMockup>
            </TabsContent>

            <TabsContent value="notification" className="mt-0">
              <IPhoneMockup>
                <NotificationScreen />
              </IPhoneMockup>
            </TabsContent>

            <TabsContent value="statistics" className="mt-0">
              <IPhoneMockup>
                <StatisticsScreen />
              </IPhoneMockup>
            </TabsContent>

            <TabsContent value="certificate" className="mt-0">
              <IPhoneMockup>
                <CertificateScreen />
              </IPhoneMockup>
            </TabsContent>

            <TabsContent value="profile" className="mt-0">
              <IPhoneMockup>
                <ProfileScreen />
              </IPhoneMockup>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
