"use client";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  triggerClassName,
  contentClassName,
  calendarClassName,
  disableWeekends = true,
  fromDate,
}) {
  const disabledMatcher = (currentDate) => {
    if (fromDate && currentDate < fromDate) {
      return true;
    }

    if (disableWeekends && isWeekend(currentDate)) {
      return true;
    }

    return false;
  };

  const calendarClassNames = {
    day_button:
      "text-blue-50 hover:bg-blue-500/25 hover:text-blue-50 focus-visible:bg-blue-500/25 focus-visible:text-blue-50 data-[selected-single=true]:!bg-blue-600 data-[selected-single=true]:!text-white data-[selected-single=true]:hover:!bg-blue-600 data-[selected-single=true]:focus-visible:!bg-blue-600 data-[range-start=true]:!bg-blue-600 data-[range-start=true]:!text-white data-[range-end=true]:!bg-blue-600 data-[range-end=true]:!text-white",
    today: "bg-blue-700/25 text-blue-50",
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "h-11 w-full justify-between border-blue-300/35 bg-blue-950/25 px-3 text-left text-sm font-normal text-blue-50 hover:bg-blue-900/35 hover:text-blue-50 focus-visible:bg-blue-950/25 focus-visible:text-blue-50 data-[state=open]:bg-blue-900/35",
            !date && "text-blue-100/75",
            triggerClassName,
          )}
        >
          <span>{date ? dateFormatter.format(date) : placeholder}</span>
          <CalendarIcon className="h-4 w-4 text-blue-100/85" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={8}
        className={cn(
          "z-[90] w-auto rounded-xl border border-blue-300/35 bg-blue-950/95 p-2 text-blue-50 shadow-2xl",
          contentClassName,
        )}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          disabled={disabledMatcher}
          modifiers={disableWeekends ? { weekend: isWeekend } : undefined}
          classNames={calendarClassNames}
          modifiersClassNames={
            disableWeekends
              ? {
                  weekend:
                    "opacity-70 saturate-75 blur-[0.2px] text-blue-200/85 pointer-events-none",
                }
              : undefined
          }
          className={cn(
            "rounded-md bg-transparent text-blue-50",
            calendarClassName,
          )}
        />
      </PopoverContent>
    </Popover>
  );
}
