import { History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import type { AttendanceRecord } from '../App';

interface AttendanceHistoryProps {
  records: AttendanceRecord[];
}

export function AttendanceHistory({ records }: AttendanceHistoryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; label: string }> = {
      present: { variant: 'default', label: 'Hadir' },
      late: { variant: 'secondary', label: 'Terlambat' },
      absent: { variant: 'destructive', label: 'Tidak Hadir' }
    };

    const config = variants[status] || variants.present;
    
    return (
      <Badge variant={config.variant} className="rounded-full">
        {config.label}
      </Badge>
    );
  };

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5 text-blue-600" />
          Riwayat Absensi
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {records.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              Belum ada riwayat absensi
            </div>
          ) : (
            records.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="text-gray-900">{formatDate(record.date)}</div>
                  <div className="text-gray-600 text-sm mt-1">
                    {record.clockIn} - {record.clockOut || 'Belum clock out'}
                    {record.duration && (
                      <span className="ml-2 text-gray-500">({record.duration})</span>
                    )}
                  </div>
                </div>
                <div>
                  {getStatusBadge(record.status)}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
