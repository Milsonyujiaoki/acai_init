import React from 'react';
import { Input } from './ui/input';
import { Search, User } from 'lucide-react';

interface Teacher {
  id: number;
  name: string;
  status: 'available' | 'busy' | 'partially';
  color: string;
}

interface SidebarProps {
  teachers: Teacher[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Sidebar({ teachers, searchQuery, setSearchQuery }: SidebarProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'busy':
        return 'bg-red-500';
      case 'partially':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'busy':
        return 'Busy';
      case 'partially':
        return 'Partially Available';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search teachers or students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3">
            Teachers ({teachers.length})
          </h3>
          
          <div className="space-y-2">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3 flex-1">
                  <div className="relative">
                    <div className={`w-10 h-10 ${teacher.color} rounded-full flex items-center justify-center`}>
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div 
                      className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(teacher.status)} rounded-full border-2 border-white`}
                      title={getStatusText(teacher.status)}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">
                      {teacher.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {getStatusText(teacher.status)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="space-y-2">
            <h4 className="text-xs text-gray-500 uppercase tracking-wide">
              Status Legend
            </h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-xs text-gray-600">Partially Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-xs text-gray-600">Busy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}