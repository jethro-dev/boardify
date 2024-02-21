import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};

export const EmptyBoards = (props: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src={"/note.svg"} alt={"Empty"} height={110} width={110} />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="text-muted-foreground">
        Start by creatinga board for your organization
      </p>
      <div className="mt-6">
        <Button size={"lg"}>Create board</Button>
      </div>
    </div>
  );
};
