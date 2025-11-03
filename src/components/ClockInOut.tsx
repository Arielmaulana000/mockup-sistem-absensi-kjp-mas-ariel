import { Clock, LogIn, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { AttendanceRecord } from '../App';

interface ClockInOutProps {
  currentTime: Date;
  todayAttendance: AttendanceRecord | null;
  onClockIn: () => void;
  onClockOut: () => void;
}

export function ClockInOut({ currentTime, todayAttendance, onClockIn, onClockOut }: ClockInOutProps) {
  const timeString = currentTime.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  const hasClockedIn = todayAttendance !== null;
  const hasClockedOut = todayAttendance?.clockOut !== undefined;

  return (
    <Card className="border-none shadow-lg bg-gradient-to-br from-blue-500 to-purple-600">
      <CardContent className="p-8">
        <div className="text-center text-white space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm">
            <Clock className="h-10 w-10" />
          </div>
          
          <div>
            <div className="text-5xl sm:text-6xl tracking-wider mb-2">
              {timeString}
            </div>
            <div className="text-blue-100">
              {currentTime.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
          </div>

          {hasClockedIn && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-blue-100 text-sm mb-1">Masuk</div>
                  <div className="text-2xl">{todayAttendance.clockIn}</div>
                </div>
                <div>
                  <div className="text-blue-100 text-sm mb-1">Keluar</div>
                  <div className="text-2xl">{todayAttendance.clockOut || '--:--'}</div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 justify-center pt-2">
            {!hasClockedIn ? (
              <Button
                onClick={onClockIn}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 rounded-full shadow-lg"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Clock In
              </Button>
            ) : !hasClockedOut ? (
              <Button
                onClick={onClockOut}
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 rounded-full shadow-lg"
              >
                <LogOut className="mr-2 h-5 w-5" />
                Clock Out
              </Button>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                ✓ Absensi hari ini selesai
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
