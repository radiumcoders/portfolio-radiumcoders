import * as React from "react"
import { cn } from "@/lib/utils"
import {
  MapPinIcon,
  PhoneIcon,
  LinkIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  UserIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react"
import { Corners } from "./corners"

export interface AboutInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AboutInfo({ className, ...props }: AboutInfoProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col border border-border bg-background",
        className
      )}
      {...props}
    >
      <Corners />
      {/* Top Info Section */}
      <div className="flex flex-col gap-6 border-b border-border p-6">
        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
                <MapPinIcon className="size-4" />
              </div>
              <span className="font-mono text-sm text-foreground">
                Indore ,India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
                <PhoneIcon className="size-4" />
              </div>
              <span className="font-mono text-sm text-foreground">
                +91 9074190746
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
                <LinkIcon className="size-4" />
              </div>
              <span className="font-mono text-sm text-foreground">
                radiumcoders.com
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
                <ClockIcon className="size-4" />
              </div>
              <span className="font-mono text-sm text-foreground">
                IST // UTC+5:30
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
                <EnvelopeSimpleIcon className="size-4" />
              </div>
              <span className="font-mono text-sm text-foreground">
                radiumcoders@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
                <UserIcon className="size-4" />
              </div>
              <span className="font-mono text-sm text-foreground">he/him</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <SocialLink
          name="X"
          icon="/icons/x.webp"
          href="#"
          className="border-border md:border-r"
        />
        <SocialLink
          name="GitHub"
          icon="/icons/github.webp"
          href="#"
          className="border-t border-border md:border-t-0 md:border-r"
        />
        <SocialLink
          name="Discord"
          icon="/icons/discord.webp"
          href="#"
          className="border-t border-border md:border-t-0"
        />
      </div>
    </div>
  )
}

function SocialLink({
  name,
  icon: Icon,
  href,
  className,
}: {
  name: string
  icon: any
  href: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group flex items-center justify-between p-4 transition-colors hover:bg-muted/20",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-xl">
          {typeof Icon === "string" ? (
            <img src={Icon} alt={name} className="size-full object-contain" />
          ) : (
            <Icon className="size-5" />
          )}
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

export default AboutInfo
