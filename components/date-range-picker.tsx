"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateRangePickerProps {
  defaultFrom?: string
  defaultTo?: string
  className?: string
}

export function DateRangePicker({
  defaultFrom,
  defaultTo,
  className,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(() => {
    const from = defaultFrom ? new Date(defaultFrom) : undefined
    const to = defaultTo ? new Date(defaultTo) : undefined
    return { from, to }
  })

  // Format dates for hidden input values (YYYY-MM-DD)
  const fromVal = date?.from ? format(date.from, "yyyy-MM-dd") : ""
  const toVal = date?.to ? format(date.to, "yyyy-MM-dd") : ""

  return (
    <div className={cn("grid gap-2", className)}>
      <input type="hidden" name="from" value={fromVal} />
      <input type="hidden" name="to" value={toVal} />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "h-11 w-full justify-start text-left font-medium bg-slate-50 border-slate-200 hover:bg-slate-100 dark:hover:bg-slate-200 text-slate-900",
              !date?.from && "text-slate-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-slate-500" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, yyyy")} -{" "}
                  {format(date.to, "LLL dd, yyyy")}
                </>
              ) : (
                format(date.from, "LLL dd, yyyy")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
