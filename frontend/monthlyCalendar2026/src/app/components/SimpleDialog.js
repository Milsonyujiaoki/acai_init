import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
export function SimpleDialog({ open, onOpenChange, title, children }) {
    const dialogRef = useRef(null);
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog)
            return;
        if (open) {
            dialog.showModal();
        }
        else {
            dialog.close();
        }
    }, [open]);
    const handleClose = () => {
        onOpenChange(false);
    };
    const handleBackdropClick = (e) => {
        const dialog = dialogRef.current;
        if (!dialog)
            return;
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            handleClose();
        }
    };
    return (_jsx("dialog", { ref: dialogRef, onClick: handleBackdropClick, className: "backdrop:bg-black/50 bg-white rounded-lg p-0 max-w-lg w-full shadow-lg", onClose: handleClose, children: _jsxs("div", { className: "relative", children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [_jsx("h2", { children: title }), _jsxs("button", { onClick: handleClose, className: "rounded-sm opacity-70 hover:opacity-100 transition-opacity p-1 hover:bg-gray-100", children: [_jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }), _jsx("span", { className: "sr-only", children: "Close" })] })] }), _jsx("div", { className: "p-6", children: children })] }) }));
}
//# sourceMappingURL=SimpleDialog.js.map