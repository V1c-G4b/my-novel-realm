"use client";

import { getNovels, Novel, searchNovels } from "@/_lib/api/novelsApi";
import { useEffect, useState } from "react";
import NovelsSection from "./_components/NovelsSection";

export default function NovelsIndex() {
  const [novels, setNovels] = useState<Novel[]>([]);

  useEffect(() => {
    const fetchNovels = async () => {
      try {
        const data = await getNovels();
        setNovels(data.novels);
      } catch (error) {
        console.error("Failed to fetch novels:", error);
      }
    };
    fetchNovels();
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchNovels(query);
      setNovels(data.novels);
    } catch (error) {
      console.error("Failed to search novels:", error);
    }
  };

  return (
    <div>
      <NovelsSection novels={novels} onSearch={handleSearch} />
    </div>
  );
}
