// components/register/JobCard.tsx

import { cn } from "@/lib/utils"

type JobCardProps = {
  label: string
  icon?: string
  selected: boolean
  onClick: () => void
}

export function JobCard({ label, icon = "💼", selected, onClick }: JobCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg border text-center transition-all cursor-pointer",
        selected
          ? "bg-blue-600 text-white border-blue-700 shadow-md"
          : "bg-white hover:bg-gray-50"
      )}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </button>
  )
}
