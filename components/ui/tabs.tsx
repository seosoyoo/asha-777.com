"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

// Add this helper function at the top of the file, before the component definitions
function generateSafeId(prefix: string, value: string): string {
  // Remove any special characters and replace with safe alternatives
  return `${prefix}-${value.replace(/[^a-zA-Z0-9]/g, "-")}`
}

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-hidden">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex h-14 items-center rounded-md bg-zinc-800 p-1 text-zinc-200 overflow-x-auto scrollbar-hide whitespace-nowrap", // Ditingkatkan bg-muted menjadi bg-zinc-800 dan text-muted-foreground menjadi text-zinc-200
        className,
      )}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      {...props}
    />
  </div>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  // Generate safe IDs for aria-controls
  const safeId = props.value ? generateSafeId("content", props.value as string) : undefined

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className,
      )}
      {...props}
      aria-controls={safeId}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
