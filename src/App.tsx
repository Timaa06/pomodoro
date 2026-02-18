
import Timer from "./components/Timer"

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <h1 className="text-5xl font-bold tracking-tight mb-2" style={{ color: '#FF6347', fontFamily: 'Georgia, serif' }}>
        Pomodoro
      </h1>
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent mb-12"></div>
      <Timer />
    </div>
  )
}

export default App