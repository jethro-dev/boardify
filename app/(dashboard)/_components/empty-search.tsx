import React from "react";
import Image from "next/image";

type Props = {};

export const EmptySearch = (props: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src={"/empty-search.svg"} alt={"Empty"} height={140} width={140} />
      <h2 className="mt-6 text-2xl font-semibold">No result!</h2>
      <p className="text-muted-foreground">Try searching for something else</p>
    </div>
  );
};
