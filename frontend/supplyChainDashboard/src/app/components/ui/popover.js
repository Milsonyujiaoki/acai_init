"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "./utils";
function Popover({ ...props }) {
    return _jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
const PopoverTrigger = React.forwardRef(({ ...props }, ref) => (_jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ref: ref, ...props })));
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (_jsx(PopoverPrimitive.Portal, { children: _jsx(PopoverPrimitive.Content, { "data-slot": "popover-content", ref: ref, align: align, sideOffset: sideOffset, className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
const PopoverAnchor = React.forwardRef(({ ...props }, ref) => (_jsx(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ref: ref, ...props })));
PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName;
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
//# sourceMappingURL=popover.js.map