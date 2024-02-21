"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import EmptyOrg from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

type DashboardPageProps = {
  searchParams: {
    search?: string;
    favourites?: string;
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();

  return (
    <main className="h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </main>
  );
}
