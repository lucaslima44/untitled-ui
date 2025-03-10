import { ArrowRight } from "lucide-react";

export function TagFeature() {
    return (
        <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-2xl">
            <span className="inline-block g-6 bg-white px-[10px] rounded-2xl text-xs/6 xl:text-sm/6 font-medium text-brand-700">New feature</span>
            <a href="#" className="flex items-center gap-1 text-xs/6 xl:text-sm/6 font-medium text-brand-700 hover:opacity-50 transition-opacity">Check out the team dashboard <ArrowRight width={18} height={18} className="ml-1"/></a>
        </div>
    )
}