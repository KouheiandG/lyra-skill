import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/register/JobCard"

const jobCategories = [
  {
    name: "マーケティング",
    jobs: [
      { label: "広告運用", icon: "📣" },
      { label: "SEO・コンテンツ", icon: "🔍" },
      { label: "SNS運用", icon: "📱" },
      { label: "CRM・分析", icon: "📊" }
    ]
  },
  {
    name: "ディレクション",
    jobs: [
      { label: "Webディレクター", icon: "🗂️" },
      { label: "進行管理", icon: "📅" },
      { label: "PM", icon: "🛠️" },
      { label: "アカウント", icon: "💼" }
    ]
  },
  {
    name: "デザイン・クリエイティブ",
    jobs: [
      { label: "Webデザイナー", icon: "🎨" },
      { label: "UI/UX", icon: "📐" },
      { label: "バナー制作", icon: "🖼️" },
      { label: "映像", icon: "🎬" }
    ]
  },
  {
    name: "開発・ITエンジニア",
    jobs: [
      { label: "フロントエンド", icon: "💻" },
      { label: "バックエンド", icon: "🧠" },
      { label: "インフラ", icon: "🛡️" },
      { label: "データエンジニア", icon: "📈" }
    ]
  }
]

export default function RegisterPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem("selectedJob")
    if (saved) setSelectedJob(saved)
  }, [])

  const handleNext = () => {
    if (selectedJob) {
      localStorage.setItem("selectedJob", selectedJob)
      router.push("/chat")
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">あなたの職種を選んでください</h1>

      <div className="space-y-8">
        {jobCategories.map((category) => (
          <section key={category.name}>
            <h2 className="text-lg font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.jobs.map((job) => (
                <JobCard
                  key={job.label}
                  label={job.label}
                  icon={job.icon}
                  selected={selectedJob === job.label}
                  onClick={() => setSelectedJob(job.label)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button onClick={handleNext} disabled={!selectedJob}>
          チャット画面へ進む
        </Button>
      </div>
    </main>
  )
}
