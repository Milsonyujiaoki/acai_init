import { GanttChart } from './components/GanttChart';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">2025 Product Roadmap</h1>
          <p className="text-slate-600">Plan and adjust your big ticket features for the year</p>
        </div>
        <GanttChart />
      </div>
    </div>
  );
}
