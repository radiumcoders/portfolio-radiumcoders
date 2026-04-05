"use client"

import { useEffect, useState } from "react"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/kibo-ui/contribution-graph"
import { cn } from "@/lib/utils"

export function GithubGraph() {
  const [data, setData] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/radiumcoders"
        )
        const json = await res.json()

        if (json.contributions) {
          // The API returns contributions for all years. We can slice it or pass it directly.
          // The ContributionGraph component handles the data appropriately, usually focusing on the latest year or providing all.
          // Filtering for the last 9 months to keep the graph from overflowing too much
          const today = new Date()
          const nineMonthsAgo = new Date()
          nineMonthsAgo.setMonth(nineMonthsAgo.getMonth() - 9)

          const recentContributions = json.contributions.filter(
            (c: Activity) => {
              const date = new Date(c.date)
              return date >= nineMonthsAgo && date <= today
            }
          )

          setData(recentContributions)
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContributions()
  }, [])

  if (isLoading) {
    return (
      <div className="flex h-32 w-full items-center justify-center rounded-xl border border-border bg-muted/20">
        <div className="animate-pulse text-sm text-muted-foreground">
          Loading contributions...
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex h-32 w-full items-center justify-center rounded-xl border border-border bg-muted/20">
        <div className="text-sm text-muted-foreground">
          No contributions found.
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ContributionGraph data={data}>
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={activity}
              className={cn(
                'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
              )}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter className="mt-4 flex w-full items-center justify-between">
          <ContributionGraphTotalCount className="text-[11px]" />
          <ContributionGraphLegend className="text-[11px]">
            {({ level }) => (
              <svg height={12} width={12} key={level}>
                <rect
                  className={cn(
                    'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                    'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                    'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                    'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                    'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                  )}
                  data-level={level}
                  height={12}
                  rx={2}
                  ry={2}
                  width={12}
                />
              </svg>
            )}
          </ContributionGraphLegend>
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  )
}
