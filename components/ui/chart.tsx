"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"

import { cn } from "@/lib/utils"

interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, config, ...props }, ref) => {
    // Create CSS variables for chart colors
    const style = React.useMemo(() => {
      return Object.entries(config).reduce(
        (acc, [key, value]) => {
          if (value.color) {
            acc[`--color-${key}`] = value.color
          }
          return acc
        },
        {} as Record<string, string>,
      )
    }, [config])

    return (
      <div ref={ref} className={cn("h-80 w-full", className)} style={style} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  cursor?: boolean
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ className, content, cursor = true, ...props }, ref) => {
    return <div ref={ref} className={cn("rounded-lg border bg-background p-2 shadow-sm", className)} {...props} />
  },
)
ChartTooltip.displayName = "ChartTooltip"

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  payload?: Array<{
    name: string
    value: string | number
    payload: {
      [key: string]: any
    }
  }>
  label?: string
  hideLabel?: boolean
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, active, payload, label, hideLabel = false, ...props }, ref) => {
    if (!active || !payload?.length) {
      return null
    }

    return (
      <div ref={ref} className={cn("text-xs", className)} {...props}>
        {!hideLabel && <div className="mb-2 font-medium">{label}</div>}
        <div className="grid gap-1">
          {payload.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: `var(--color-${item.name})`,
                  }}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
