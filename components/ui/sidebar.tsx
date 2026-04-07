"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const SidebarContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

export function SidebarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const isMobile = useMobile()

  React.useEffect(() => {
    if (!isMobile) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [isMobile])

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-40 flex w-full max-w-xs flex-col border-r bg-sidebar-background text-sidebar-foreground transition-transform duration-300 ease-in-out",
  {
    variants: {
      open: {
        true: "translate-x-0",
        false: "-translate-x-full",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
)

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({ className, ...props }, ref) => {
  const { open } = useSidebar()

  return <aside ref={ref} className={cn(sidebarVariants({ open }), className)} {...props} />
})
Sidebar.displayName = "Sidebar"

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(({ className, ...props }, ref) => {
  const { setOpen } = useSidebar()
  const isMobile = useMobile()

  return (
    <div ref={ref} className={cn("flex h-14 items-center gap-2 border-b px-4", className)} {...props}>
      {props.children}
      {isMobile && (
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      )}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex-1 overflow-auto", className)} {...props} />
})
SidebarContent.displayName = "SidebarContent"

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("py-2", className)} {...props} />
})
SidebarGroup.displayName = "SidebarGroup"

export interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarGroupLabel = React.forwardRef<HTMLDivElement, SidebarGroupLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("px-4 py-2 text-xs font-medium text-sidebar-foreground/70", className)} {...props} />
    )
  },
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

export interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarGroupContent = React.forwardRef<HTMLDivElement, SidebarGroupContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("", className)} {...props} />
  },
)
SidebarGroupContent.displayName = "SidebarGroupContent"

export interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

export const SidebarMenu = React.forwardRef<HTMLUListElement, SidebarMenuProps>(({ className, ...props }, ref) => {
  return <ul ref={ref} className={cn("", className)} {...props} />
})
SidebarMenu.displayName = "SidebarMenu"

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(({ className, ...props }, ref) => {
  return <li ref={ref} className={cn("", className)} {...props} />
})
SidebarMenuItem.displayName = "SidebarMenuItem"

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, asChild = false, isActive = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

export interface SidebarRailProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarRail = React.forwardRef<HTMLDivElement, SidebarRailProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("absolute inset-y-0 right-0 w-px bg-sidebar-border", className)} {...props} />
})
SidebarRail.displayName = "SidebarRail"

export interface SidebarInsetProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarInset = React.forwardRef<HTMLDivElement, SidebarInsetProps>(({ className, ...props }, ref) => {
  const { open } = useSidebar()
  const isMobile = useMobile()

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-1 flex-col transition-[margin] duration-300 ease-in-out",
        open && !isMobile && "md:ml-[16rem]",
        className,
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, ...props }, ref) => {
    const { setOpen } = useSidebar()

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("md:hidden", className)}
        onClick={() => setOpen(true)}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <span className="sr-only">Open sidebar</span>
      </Button>
    )
  },
)
SidebarTrigger.displayName = "SidebarTrigger"
