import { ArrowLeft, Home, BarChart3, Bell, Award, User, Download, QrCode } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export function CertificateScreen() {
  return (
    <div className="min-h-full bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 pt-12 pb-8 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Sertifikat</h2>
        </div>
      </div>

      <div className="px-6 py-6 pb-24">
        {/* Certificate Card */}
        <Card className="shadow-2xl border-0 overflow-hidden mb-6">
          <CardContent className="p-0">
            {/* Certificate Design */}
            <div className="bg-gradient-to-br from-white via-amber-50 to-teal-50 p-8 border-8 border-double border-yellow-600/20">
              {/* Decorative Corner */}
              <div className="text-center mb-6">
                <div className="inline-block">
                  <svg className="w-16 h-16 text-teal-600 mb-2" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 8l-8 8v4h16v-4l-8-8z"/>
                    <path d="M12 24h40v28H12z"/>
                    <rect x="28" y="36" width="8" height="16" fill="white"/>
                    <circle cx="20" cy="32" r="2" fill="white"/>
                    <circle cx="44" cy="32" r="2" fill="white"/>
                    <path d="M8 52h48v4H8z"/>
                  </svg>
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-teal-600 to-transparent mx-auto"></div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <h2 className="text-teal-600 mb-2">Sertifikat Kehadiran</h2>
                <div className="h-0.5 w-32 bg-yellow-600/30 mx-auto"></div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4 mb-6">
                <p className="text-gray-600 text-sm">Diberikan kepada:</p>
                <h3 className="text-gray-900">Ahmad Fauzi</h3>
                
                <div className="py-4">
                  <p className="text-gray-600 text-sm mb-2">
                    Telah mengikuti Kajian Jumat Pagi (KJP)
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    dengan kehadiran
                  </p>
                  <div className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full">
                    14 dari 16 Pertemuan
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-gray-600 text-sm">Periode: Januari - April 2025</p>
                  <p className="text-gray-600 text-sm">Persentase Kehadiran: 87.5%</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="flex justify-between items-end text-center text-xs text-gray-600 pt-4 border-t border-gray-200">
                <div className="flex-1">
                  <p className="mb-8">Ketua Panitia</p>
                  <div className="h-px w-20 bg-gray-400 mx-auto mb-1"></div>
                  <p>Ustadz Abdullah</p>
                </div>
                <div className="flex-1">
                  <p className="mb-8">Tanggal</p>
                  <p>3 November 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
            <Download className="w-5 h-5 mr-2" />
            Unduh Sertifikat
          </Button>
          <Button variant="outline" className="w-full h-12 border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl">
            Bagikan
          </Button>
        </div>
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
          <button className="flex flex-col items-center gap-1 text-teal-600">
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
