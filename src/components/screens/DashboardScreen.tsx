import { QrCode, Home, BarChart3, Bell, Award, User, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export function DashboardScreen() {
  const attendanceData = [
    { week: 'Minggu 1', status: 'hadir' },
    { week: 'Minggu 2', status: 'hadir' },
    { week: 'Minggu 3', status: 'tidak' },
    { week: 'Minggu 4', status: 'hadir' },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 pt-12 pb-24 px-6 rounded-b-[3rem]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-teal-100 text-sm mb-1">Assalamu'alaikum,</p>
            <h2 className="text-white">Ahmad Fauzi</h2>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="px-6 -mt-16 pb-24">
        {/* QR Scan Card */}
        <Card className="mb-6 overflow-hidden shadow-lg border-0">
          <CardContent className="p-8 bg-gradient-to-br from-white to-teal-50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-2xl mb-4">
                <QrCode className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Scan QR Code</h3>
              <p className="text-gray-600 text-sm mb-6">Untuk melakukan absensi kajian</p>
              <Button className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
                Buka Scanner
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Recap */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-4">Rekap Kehadiran Bulan Ini</h3>
          <Card className="shadow-md border-0">
            <CardContent className="p-4">
              <div className="space-y-3">
                {attendanceData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">{item.week}</span>
                    {item.status === 'hadir' ? (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Hadir
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                        <XCircle className="w-3 h-3 mr-1" />
                        Tidak Hadir
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-3xl text-teal-600 mb-2">3/4</div>
              <p className="text-gray-600 text-sm">Kehadiran</p>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <div className="text-3xl text-yellow-600 mb-2">75%</div>
              <p className="text-gray-600 text-sm">Persentase</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-teal-600">
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
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
