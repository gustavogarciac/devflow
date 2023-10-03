import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col gap-16 overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden xl:w-[330px]">
      <div>
        <h2 className="h2-bold text-dark300_light900">Hot Network</h2>
        <nav className="mt-6 flex flex-col gap-8">
          <Link href={"#"} className="group flex items-start gap-2">
            <p className="text-dark500_light700 body-regular flex-1 hover:opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam at
              distinctio voluptates totam commodi nemo
            </p>
            <ChevronRight
              className="text-dark500_light700 transition-all duration-200 group-hover:translate-x-1 group-hover:scale-125"
              width={20}
              height={20}
            />
          </Link>
          <Link href={"#"} className="group flex items-start gap-2">
            <p className="text-dark500_light700 body-regular flex-1 hover:opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam at
              distinctio voluptates totam commodi nemo
            </p>
            <ChevronRight
              className="text-dark500_light700 transition-all duration-200 group-hover:translate-x-1 group-hover:scale-125"
              width={20}
              height={20}
            />
          </Link>
          <Link href={"#"} className="group flex items-start gap-2">
            <p className="text-dark500_light700 body-regular flex-1 hover:opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam at
              distinctio voluptates totam commodi nemo
            </p>
            <ChevronRight
              className="text-dark500_light700 transition-all duration-200 group-hover:translate-x-1 group-hover:scale-125"
              width={20}
              height={20}
            />
          </Link>
          <Link href={"#"} className="group flex items-start gap-2">
            <p className="text-dark500_light700 body-regular flex-1 hover:opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam at
              distinctio voluptates totam commodi nemo
            </p>
            <ChevronRight
              className="text-dark500_light700 transition-all duration-200 group-hover:translate-x-1 group-hover:scale-125"
              width={20}
              height={20}
            />
          </Link>
        </nav>
      </div>

      <div>
        <h2 className="h2-bold text-dark300_light900">Popular Tags</h2>
        <ul className="mt-6 flex flex-col gap-4">
          <Link href={"#"} className="flex items-center justify-between">
            <Button className="background-light800_dark300 small-regular text-light400_light500 uppercase">
              javascript
            </Button>
            <span className="text-dark500_light700 small-regular">20152+</span>
          </Link>
          <Link href={"#"} className="flex items-center justify-between">
            <Button className="background-light800_dark300 small-regular text-light400_light500 uppercase">
              next.js
            </Button>
            <span className="text-dark500_light700 small-regular">20152+</span>
          </Link>
          <Link href={"#"} className="flex items-center justify-between">
            <Button className="background-light800_dark300 small-regular text-light400_light500 uppercase">
              react.js
            </Button>
            <span className="text-dark500_light700 small-regular">20152+</span>
          </Link>
          <Link href={"#"} className="flex items-center justify-between">
            <Button className="background-light800_dark300 small-regular text-light400_light500 uppercase">
              python
            </Button>
            <span className="text-dark500_light700 small-regular">20152+</span>
          </Link>
          <Link href={"#"} className="flex items-center justify-between">
            <Button className="background-light800_dark300 small-regular text-light400_light500 uppercase">
              azure
            </Button>
            <span className="text-dark500_light700 small-regular">20152+</span>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default RightSidebar;
