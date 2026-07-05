import { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Card } from './ui/card';

interface Feature {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  color: string;
}

const COLORS = [
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#f59e0b', // amber
  '#10b981', // emerald
  '#6366f1', // indigo
  '#f97316', // orange
  '#06b6d4', // cyan
];

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const getInitialFeatures = (): Feature[] => [
  {
    id: '1',
    name: 'User Authentication & Onboarding',
    startDate: new Date(2025, 0, 1),
    endDate: new Date(2025, 2, 1),
    color: COLORS[0],
  },
  {
    id: '2',
    name: 'Core Platform Infrastructure',
    startDate: new Date(2025, 1, 1),
    endDate: new Date(2025, 4, 15),
    color: COLORS[1],
  },
  {
    id: '3',
    name: 'Mobile App Development',
    startDate: new Date(2025, 3, 1),
    endDate: new Date(2025, 7, 1),
    color: COLORS[2],
  },
  {
    id: '4',
    name: 'AI Integration & Analytics',
    startDate: new Date(2025, 5, 1),
    endDate: new Date(2025, 9, 15),
    color: COLORS[3],
  },
  {
    id: '5',
    name: 'Enterprise Features',
    startDate: new Date(2025, 8, 1),
    endDate: new Date(2025, 11, 31),
    color: COLORS[4],
  },
];

export function GanttChart() {
  const [features, setFeatures] = useState<Feature[]>(getInitialFeatures());
  const [draggedFeature, setDraggedFeature] = useState<string | null>(null);
  const [dragMode, setDragMode] = useState<'move' | 'resize-start' | 'resize-end' | null>(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [originalDates, setOriginalDates] = useState<{ start: Date; end: Date } | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const yearStart = new Date(2025, 0, 1);
  const yearEnd = new Date(2025, 11, 31);
  const totalDays = 365; // 2025 is not a leap year

  const getPositionFromDate = (date: Date): number => {
    const dayOfYear = Math.floor((date.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24));
    return (dayOfYear / totalDays) * 100;
  };

  const getDateFromPosition = (percentage: number): Date => {
    const days = Math.floor((percentage / 100) * totalDays);
    const date = new Date(yearStart);
    date.setDate(date.getDate() + days);
    return date;
  };

  const handleMouseDown = (e: React.MouseEvent, featureId: string, mode: 'move' | 'resize-start' | 'resize-end') => {
    e.preventDefault();
    const feature = features.find(f => f.id === featureId);
    if (!feature) return;

    setDraggedFeature(featureId);
    setDragMode(mode);
    setDragStartX(e.clientX);
    setOriginalDates({ start: feature.startDate, end: feature.endDate });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggedFeature || !dragMode || !timelineRef.current || !originalDates) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const deltaX = e.clientX - dragStartX;
      const deltaPercentage = (deltaX / rect.width) * 100;
      const deltaDays = Math.round((deltaPercentage / 100) * totalDays);

      setFeatures(prev => prev.map(feature => {
        if (feature.id !== draggedFeature) return feature;

        if (dragMode === 'move') {
          const newStart = new Date(originalDates.start);
          newStart.setDate(newStart.getDate() + deltaDays);
          const newEnd = new Date(originalDates.end);
          newEnd.setDate(newEnd.getDate() + deltaDays);

          // Constrain to year bounds
          if (newStart < yearStart || newEnd > yearEnd) return feature;

          return { ...feature, startDate: newStart, endDate: newEnd };
        } else if (dragMode === 'resize-start') {
          const newStart = new Date(originalDates.start);
          newStart.setDate(newStart.getDate() + deltaDays);

          // Ensure start is before end and within bounds
          if (newStart >= feature.endDate || newStart < yearStart) return feature;

          return { ...feature, startDate: newStart };
        } else if (dragMode === 'resize-end') {
          const newEnd = new Date(originalDates.end);
          newEnd.setDate(newEnd.getDate() + deltaDays);

          // Ensure end is after start and within bounds
          if (newEnd <= feature.startDate || newEnd > yearEnd) return feature;

          return { ...feature, endDate: newEnd };
        }

        return feature;
      }));
    };

    const handleMouseUp = () => {
      setDraggedFeature(null);
      setDragMode(null);
      setOriginalDates(null);
    };

    if (draggedFeature) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedFeature, dragMode, dragStartX, originalDates, totalDays, yearStart, yearEnd]);

  const addFeature = () => {
    const newFeature: Feature = {
      id: Date.now().toString(),
      name: 'New Feature',
      startDate: new Date(2025, 0, 1),
      endDate: new Date(2025, 2, 1),
      color: COLORS[features.length % COLORS.length],
    };
    setFeatures([...features, newFeature]);
  };

  const removeFeature = (id: string) => {
    setFeatures(features.filter(f => f.id !== id));
  };

  const updateFeatureName = (id: string, name: string) => {
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, name } : f));
  };

  const formatDate = (date: Date): string => {
    return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
  };

  const getMonthPositions = () => {
    return MONTHS.map((month, index) => {
      const monthStart = new Date(2025, index, 1);
      const position = getPositionFromDate(monthStart);
      return { month, position };
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Timeline Header */}
        <div className="relative h-12 border-b border-slate-200">
          <div className="relative h-full" ref={timelineRef}>
            {getMonthPositions().map(({ month, position }) => (
              <div
                key={month}
                className="absolute top-0 h-full border-l border-slate-200"
                style={{ left: `${position}%` }}
              >
                <span className="text-slate-600 ml-2">{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Timeline */}
        <div className="space-y-3">
          {features.map((feature) => {
            const startPos = getPositionFromDate(feature.startDate);
            const endPos = getPositionFromDate(feature.endDate);
            const width = endPos - startPos;

            return (
              <div key={feature.id} className="relative h-10">
                <div className="absolute inset-0">
                  {/* Month markers */}
                  {getMonthPositions().map(({ position }, idx) => (
                    <div
                      key={idx}
                      className="absolute top-0 bottom-0 border-l border-slate-100"
                      style={{ left: `${position}%` }}
                    />
                  ))}
                </div>

                <div
                  className="absolute top-1 bottom-1 rounded cursor-move hover:opacity-90 transition-opacity group"
                  style={{
                    left: `${startPos}%`,
                    width: `${width}%`,
                    backgroundColor: feature.color,
                  }}
                  onMouseDown={(e) => handleMouseDown(e, feature.id, 'move')}
                >
                  {/* Resize handle - start */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/20"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      handleMouseDown(e, feature.id, 'resize-start');
                    }}
                  />

                  {/* Resize handle - end */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/20"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      handleMouseDown(e, feature.id, 'resize-end');
                    }}
                  />

                  <div className="px-2 py-1 text-white text-sm truncate flex items-center gap-1 h-full">
                    <GripVertical className="size-3 opacity-0 group-hover:opacity-100 flex-shrink-0" />
                    <span className="truncate">{feature.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Names Editor */}
        <div className="border-t border-slate-200 pt-6 mt-8">
          <h3 className="text-slate-700 mb-4">Features</h3>
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded flex-shrink-0"
                  style={{ backgroundColor: feature.color }}
                />
                <Input
                  value={feature.name}
                  onChange={(e) => updateFeatureName(feature.id, e.target.value)}
                  className="flex-1"
                />
                <div className="w-48 flex-shrink-0 text-sm text-slate-600">
                  {formatDate(feature.startDate)} - {formatDate(feature.endDate)}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFeature(feature.id)}
                  className="flex-shrink-0"
                >
                  <Trash2 className="size-4 text-slate-400 hover:text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Add Feature Button */}
        {features.length < 8 && (
          <Button
            variant="outline"
            onClick={addFeature}
            className="w-full"
          >
            <Plus className="size-4 mr-2" />
            Add Feature
          </Button>
        )}
      </div>
    </Card>
  );
}