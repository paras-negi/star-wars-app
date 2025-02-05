import React from "react";
import { fetchCharacters } from "./actions/swapi";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  let params = await searchParams;

  const page = Number(params.page) || 1;
 
  
  const data = await fetchCharacters(page);

  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto p-4 min-h-[calc(100vh-12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.results.map((character: any) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(data.count / 10)}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}
