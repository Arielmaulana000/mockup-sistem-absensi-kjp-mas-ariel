import { Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import type { AttendanceRecord } from '../App';

interface AttendanceStatsProps {
  records: AttendanceRecord[];
}

export function AttendanceStats({ records }: AttendanceStatsProps) {
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();
  
  const monthRecords = records.filter(record => {
    const recordDate = new Date(record.date);
    return recordDate.getMonth() === thisMonth && recordDate.getFullYear() === thisYear;
  });

  const presentCount = monthRecords.filter(r => r.status === 'present').length;
  const lateCount = monthRecords.filter(r => r.status === 'late').length;
  const totalDays = monthRecords.length;

  const stats = [
    {
      label: 'Total Hari',
      value: totalDays,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Tepat Waktu',
      value: presentCount,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Terlambat',
      value: lateCount,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      label: 'Tidak Hadir',
      value: 0,
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm mt-0.5">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
