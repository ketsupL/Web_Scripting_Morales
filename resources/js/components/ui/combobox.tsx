import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxProps {
  items: { value: string; label: string }[]
  placeholder?: string
  onChange?: (value: string) => void
  name?: string
  value?: string
  className?: string
}


export function Combobox({ items, 
    placeholder = "Select item...",
    name,
    value: controlledValue,
    className, 
    onChange }: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const handleSelect = (currentValue: string) => {
        const newValue = currentValue === value ? "" : currentValue
        setValue(newValue)
        setOpen(false)
        onChange?.(newValue)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            >
            {value
                ? items.find((item) => item.value === value)?.label
                : placeholder}
            <ChevronsUpDown className="opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
            <CommandInput placeholder={`Search...`} className="h-9" />
            <CommandList>
                <CommandEmpty>No item found.</CommandEmpty>
                <CommandGroup>
                {items.map((item) => (
                    <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={handleSelect}
                    >
                    {item.label}
                    <Check
                        className={cn(
                        "ml-auto",
                        value === item.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    </CommandItem>
                ))}
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>

        {name && <input type="hidden" name={name} value={value ?? ""} />}
        </Popover>
    )
}
