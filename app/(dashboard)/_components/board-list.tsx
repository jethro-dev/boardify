"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptySearch } from "./empty-search";
import { EmptyFavourites } from "./empty-favourites";
import { EmptyBoards } from "./empty-boards";

type Props = {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
};

export const BoardList = ({ orgId, query }: Props) => {
  const { organization } = useOrganization();
  //   TODO: Change to API call
  const data = [];

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favourites) {
    return <EmptyFavourites />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }

  return <div className="">Have boards</div>;
};
