"use client";

import { getNovels, Novel } from "@/_lib/api/novelsApi";
import NovelsSection from "./_components/NovelsSection";
import { useState } from "react";
import { useEffect } from "react";

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

  return (
    <div>
      <NovelsSection novels={novels} />
    </div>
  );
}
