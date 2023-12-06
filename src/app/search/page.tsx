import { redirect } from "next/navigation";
import PostList from "@/components/post/post-list";
import { FetchPostBySearchTerm } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => FetchPostBySearchTerm(term)} />
    </div>
  );
}
