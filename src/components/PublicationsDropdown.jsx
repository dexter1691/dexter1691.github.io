import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useStore } from "@nanostores/react";
import { category } from "./stores/category";

function filterPublications(category) {
    document.querySelectorAll('.publication').forEach((el) => {
        el.style.display = 
            category === "All" || el.dataset.category.split(',').includes(category) ? "" : "none";
    });
    
    // Update active filter button styling
    document.querySelectorAll('.filter-btn').forEach((el) => {
        if (el.dataset.category === category) {
            el.classList.add('bg-[#18bc9c]', 'text-white');
            el.classList.remove('bg-gray-100', 'text-black');
        } else {
            el.classList.remove('bg-[#18bc9c]', 'text-white');
            el.classList.add('bg-gray-100', 'text-black');
        }
    });
}

export function PublicationsDropdown() {
    const publicationsCategory = useStore(category);
    return (
        <DropdownMenu className="max-w-1/3">
            <DropdownMenuTrigger asChild className="p-2 bg-gray-100 rounded px-4 mr-2">
                <div className="flex flex-row max-w-1/3 items-center">
                    <Button variant="ghost">{publicationsCategory}</Button>
                    <ChevronDownIcon className="ml-auto h-4 w-4" />    
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
                <DropdownMenuRadioGroup 
                    id="publications-dropdown"
                    className="w-full" 
                    value={publicationsCategory}
                    onValueChange={(value) => {
                        category.set(value);
                        filterPublications(value);
                    }}
                >
                    <DropdownMenuRadioItem data-category="All" value="All">All</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem data-category="Embodied Agents" value="Embodied Agents">Embodied Agents</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem data-category="Vision & Language" value="Vision & Language">Vision & Language</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem data-category="Reasoning" value="Reasoning">Reasoning</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem data-category="ML Systems" value="ML Systems">ML Systems</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function ChevronDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }