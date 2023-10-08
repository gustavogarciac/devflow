"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HomePageFilters } from "@/constants/filters";

interface Filter {
  name: string;
  value: string;
}

interface FilterProps {
  filters: Filter[];
  otherClasses?: string;
  containerClasses?: string;
}

const RenderFilter = ({
  filters,
  otherClasses,
  containerClasses,
}: FilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {HomePageFilters.map((filter) => (
              <SelectItem
                key={filter.value}
                value={filter.value}
                className="background-light800_dark300 text-dark500_light700"
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RenderFilter;
