import { Mail, Lock, Moon } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function LoginScreen() {
  return (
    <div className="min-h-full bg-gradient-to-br from-teal-400 via-teal-300 to-white pt-16 px-6">
      {/* Logo & Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-lg mb-6">
          <div className="relative">
            {/* Mosque Icon */}
            <svg className="w-16 h-16 text-teal-600" viewBox="0 0 64 64" fill="currentColor">
              <path d="M32 8l-8 8v4h16v-4l-8-8z"/>
              <path d="M12 24h40v28H12z"/>
              <rect x="28" y="36" width="8" height="16" fill="white"/>
              <circle cx="20" cy="32" r="2" fill="white"/>
              <circle cx="44" cy="32" r="2" fill="white"/>
              <path d="M8 52h48v4H8z"/>
            </svg>
            <Moon className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" fill="currentColor" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-2">Sistem Absensi KJP</h2>
        <p className="text-teal-700">Kajian Jumat Pagi</p>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
        <div className="space-y-5">
          <div>
            <Label htmlFor="email" className="text-gray-700 mb-2 block">Email / Nama Peserta</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="text"
                placeholder="nama@email.com"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700 mb-2 block">Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-teal-500"
              />
            </div>
          </div>

          <Button className="w-full h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl shadow-lg mt-6">
            Login
          </Button>
        </div>

        <div className="mt-6 text-center">
          <button className="text-teal-600 hover:text-teal-700">
            Lupa Password?
          </button>
        </div>
      </div>

      <div className="text-center pb-8">
        <p className="text-gray-700">
          Belum punya akun?{' '}
          <button className="text-teal-600">
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}
