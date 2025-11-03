import { Clock, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface AttendanceHeaderProps {
  currentTime: Date;
}

export function AttendanceHeader({ currentTime }: AttendanceHeaderProps) {
  const dateString = currentTime.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-blue-500">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-blue-500 text-white">
              <User className="h-8 w-8" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-gray-900">Sistem Absensi</h1>
            <p className="text-gray-600 mt-1">Budi Santoso</p>
          </div>
        </div>
        
        <div className="text-right hidden sm:block">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{dateString}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
