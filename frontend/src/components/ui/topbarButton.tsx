import { TopBarButtonProps } from "@/types/components/topbar";

export function TopBarButton({children, text, onClick}: TopBarButtonProps) {
    return (
        <button className=" bg-ctp-mantle p-4 rounded-md text-lg font-semibold cursor-pointer" onClick={onClick}>
            {text}
            {children}
        </button>
    )
}