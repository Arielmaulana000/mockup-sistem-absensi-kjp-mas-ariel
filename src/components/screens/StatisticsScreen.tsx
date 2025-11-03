import { ArrowLeft, Home, BarChart3, Bell, Award, User, Users, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export function StatisticsScreen() {
  const chartData = [
    { name: 'Jan', hadir: 4, tidak: 0 },
    { name: 'Feb', hadir: 3, tidak: 1 },
    { name: 'Mar', hadir: 4, tidak: 0 },
    { name: 'Apr', hadir: 3, tidak: 1 },
  ];

  const stats = [
    { label: 'Total Peserta', value: '124', icon: Users, color: 'bg-blue-500' },
    { label: 'Hadir Minggu Ini', value: '98', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Total Kajian', value: '16', icon: Calendar, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 pt-12 pb-8 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Laporan Kegiatan</h2>
        </div>
      </div>

      <div className="px-6 py-6 pb-24">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-md border-0">
                <CardContent className="p-4 text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 ${stat.color} rounded-xl mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                  <p className="text-gray-600 text-xs leading-tight">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Chart */}
        <Card className="shadow-md border-0 mb-6">
          <CardContent className="p-6">
            <h3 className="text-gray-900 mb-4">Grafik Kehadiran 4 Bulan Terakhir</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Bar dataKey="hadir" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="tidak" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-600 text-sm">Hadir</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600 text-sm">Tidak Hadir</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detail Recap */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900">Rekap Detail Peserta</h3>
              <button className="text-teal-600 text-sm">Lihat Semua</button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Ahmad Fauzi', attendance: '14/16', percentage: '87%' },
                { name: 'Fatimah Zahra', attendance: '16/16', percentage: '100%' },
                { name: 'Muhammad Ali', attendance: '12/16', percentage: '75%' },
              ].map((person, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-gray-900 text-sm">{person.name}</div>
                      <div className="text-gray-500 text-xs">{person.attendance} kajian</div>
                    </div>
                  </div>
                  <div className="text-teal-600">{person.percentage}</div>
                </div>
              ))}
            </div>
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
          <button className="flex flex-col items-center gap-1 text-teal-600">
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
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
