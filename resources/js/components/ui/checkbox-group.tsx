import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckboxOption {
  value: string
  label: string
}

interface CheckboxGroupProps {
  name: string
  options: CheckboxOption[]
  selected?: string[]
  onChange?: (values: string[]) => void
  className?: string
}

export function CheckboxGroup({
  name,
  options,
  selected = [],
  onChange,
  className,
}: CheckboxGroupProps) {
  const toggle = (val: string) => {
    const newSelected = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : [...selected, val]
    onChange?.(newSelected)
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2">
          <CheckboxPrimitive.Root
            checked={selected.includes(opt.value)}
            onCheckedChange={() => toggle(opt.value)}
            className="peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current transition-none">
              <CheckIcon className="size-3.5" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          <span>{opt.label}</span>

          <input
            type="hidden"
            name={name + "[]"}
            value={opt.value}
            disabled={!selected.includes(opt.value)}
          />
        </label>
      ))}
    </div>
  )
}
