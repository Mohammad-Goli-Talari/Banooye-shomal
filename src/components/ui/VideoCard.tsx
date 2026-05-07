// src/components/ui/VideoCard.tsx

import { Video } from "@/types/video";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function VideoCard({ title, thumbnail, duration }: Video) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />

      <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-white text-xs">
        {duration}
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition">
        <PlayArrowIcon sx={{ color: "white", fontSize: 48 }} />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
    </div>
  );
}
