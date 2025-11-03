import { Bell, CheckCircle, AlertTriangle, Info, ArrowLeft, Home, BarChart3, Award, User } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export function NotificationScreen() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle,
      title: 'Kehadiran Tercatat',
      message: 'Kehadiran Jumat ini telah tercatat. Jazakallahu khairan!',
      time: '2 jam yang lalu',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 2,
      type: 'warning',
      icon: AlertTriangle,
      title: 'Reminder Absensi',
      message: 'Anda belum melakukan absensi minggu ini. Jangan lupa hadir!',
      time: '1 hari yang lalu',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      id: 3,
      type: 'info',
      icon: Info,
      title: 'Kajian Minggu Depan',
      message: 'Tema kajian: "Sabar dalam Menghadapi Ujian". Ustadz Ahmad Zainuddin',
      time: '2 hari yang lalu',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 4,
      type: 'success',
      icon: CheckCircle,
      title: 'Sertifikat Tersedia',
      message: 'Sertifikat kehadiran bulan lalu sudah bisa diunduh',
      time: '3 hari yang lalu',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 pt-12 pb-8 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Notifikasi</h2>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-6 pb-24">
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card key={notification.id} className="shadow-md border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${notification.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 mb-1">{notification.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                      <p className="text-gray-400 text-xs">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State Alternative */}
        {notifications.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">Belum Ada Notifikasi</h3>
            <p className="text-gray-600">Notifikasi akan muncul di sini</p>
          </div>
        )}
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
          <button className="flex flex-col items-center gap-1 text-teal-600">
            <Bell className="w-6 h-6" />
            <span className="text-xs">Notifikasi</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Award className="w-6 h-6" />
            <span className="text-xs">Sertifikat</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
