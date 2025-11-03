import { ArrowLeft, Home, BarChart3, Bell, Award, User, Mail, Phone, MapPin, Calendar, LogOut, Settings, HelpCircle, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export function ProfileScreen() {
  const menuItems = [
    { icon: Settings, label: 'Pengaturan', color: 'text-gray-700' },
    { icon: HelpCircle, label: 'Bantuan & FAQ', color: 'text-gray-700' },
    { icon: Shield, label: 'Privasi & Keamanan', color: 'text-gray-700' },
    { icon: LogOut, label: 'Keluar', color: 'text-red-600' },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 pt-12 pb-20 px-6">
        <div className="flex items-center gap-4 mb-8">
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Profil Saya</h2>
        </div>
      </div>

      <div className="px-6 -mt-12 pb-24">
        {/* Profile Card */}
        <Card className="shadow-xl border-0 mb-6">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-gray-900 mb-1">Ahmad Fauzi</h3>
              <p className="text-gray-600 text-sm">Peserta Aktif</p>
              <div className="inline-block mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                ✓ Terverifikasi
              </div>
            </div>

            <Separator className="my-6" />

            {/* Profile Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs mb-0.5">Email</p>
                  <p className="text-gray-900 truncate">ahmad.fauzi@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs mb-0.5">No. Telepon</p>
                  <p className="text-gray-900">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs mb-0.5">Alamat</p>
                  <p className="text-gray-900">Jakarta Selatan, DKI Jakarta</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs mb-0.5">Bergabung Sejak</p>
                  <p className="text-gray-900">Januari 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl text-teal-600 mb-1">14</div>
              <p className="text-gray-600 text-xs">Kehadiran</p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl text-yellow-600 mb-1">87%</div>
              <p className="text-gray-600 text-xs">Persentase</p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-2xl text-purple-600 mb-1">2</div>
              <p className="text-gray-600 text-xs">Sertifikat</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <Card className="shadow-md border-0">
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <span className={`flex-1 text-left ${item.color}`}>{item.label}</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {index < menuItems.length - 1 && <Separator />}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs">Statistik</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Bell className="w-6 h-6" />
            <span className="text-xs">Notifikasi</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Award className="w-6 h-6" />
            <span className="text-xs">Sertifikat</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-teal-600">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
