import { ReactNode } from 'react';

interface IPhoneMockupProps {
  children: ReactNode;
}

export function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: '375px' }}>
      {/* iPhone Frame */}
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ height: '812px' }}>
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-11 bg-transparent z-10 px-8 flex items-center justify-between text-xs">
            <span className="text-gray-900">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
                <rect x="0.5" y="0.5" width="15" height="11" rx="2" stroke="currentColor" className="text-gray-900"/>
                <rect x="16.5" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" className="text-gray-900"/>
                <rect x="2" y="2" width="11" height="8" rx="1" fill="currentColor" className="text-gray-900"/>
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 overflow-y-auto">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full opacity-50"></div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-0 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute left-0 top-40 w-1 h-16 bg-gray-800 rounded-l"></div>
        <div className="absolute left-0 top-60 w-1 h-16 bg-gray-800 rounded-l"></div>
        <div className="absolute right-0 top-44 w-1 h-20 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
}
