import React from "react";
import Image from "next/image";

type Props = {};

export const EmptyFavourites = (props: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src={"/empty-favourites.svg"}
        alt={"Empty"}
        height={140}
        width={140}
      />
      <h2 className="mt-6 text-2xl font-semibold">No favourite boards!</h2>
      <p className="text-muted-foreground">Try favouriting a board</p>
    </div>
  );
};
