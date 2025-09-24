import { FC } from "react";

const tools = [
  { name: "Image", desc: "Generate images with custom styles", badge: "", btn: "Open" },
  { name: "Video", desc: "Generate videos with Haiku, Pika", badge: "", btn: "Open" },
  { name: "Realtime", desc: "Realtime AI rendering", badge: "New", btn: "Open" },
  { name: "Enhancer", desc: "Upscale and enhance", badge: "", btn: "Open" },
  { name: "Edit", desc: "Edit generated images", badge: "", btn: "Open" },
  { name: "Video Lipsync", desc: "Sync any video", badge: "New", btn: "Open" },
  { name: "Motion Transfer", desc: "Transfer motion", badge: "", btn: "Open" },
  { name: "Train", desc: "Train AI models", badge: "", btn: "Open" },
];

const GenerateSection: FC = () => {
  return (
    <section className="mt-10 px-6 max-w-6xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-900">Generate</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {tools.map((tool, idx) => (
          <div key={idx} className="p-4 border rounded-xl flex flex-col gap-2 bg-white">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">{tool.name}</h4>
              {tool.badge && (
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
                  {tool.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{tool.desc}</p>
            <button className="mt-2 px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
              {tool.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenerateSection;
