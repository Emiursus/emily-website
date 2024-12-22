
import Tabs from "./components/tabs.jsx";
import { promises as fs } from "fs";
import path from "path";


interface Project {
  projectName: string;
  techSkills: string;
  images?: string[];
}

interface QaPair {
  title: string;
  content: string;
  projects?: Project[];
}

interface Data {
  qaPairs: QaPair[];
}

async function getData() {
  const filePath = path.join(process.cwd(), "public", "data", "data.json");
  console.log(filePath);
  const file = await fs.readFile(filePath, "utf8");
  const data: Data = JSON.parse(file);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="relative mx-auto size-9/12 ">
      {data.qaPairs.map((qaPair, i) => (
        <div className="relative top-10 mb-20 " key={i}>
          <h1 className="bg-cstGrey absolute z-10 w-32 left-8">
            {qaPair.title}
          </h1>
          <div className=" border-cstGrey border-2  relative h-fit top-3 ">
            {qaPair.projects ? (
              <div className="relative h-fit">
                <div className=" p-8  whitespace-pre-line">
                  {qaPair.content}
                </div>
                <div className="">
                  <Tabs items={qaPair.projects} />
                </div>
              </div>
            ) : (
              <div className=" p-8 whitespace-pre-line">{qaPair.content}</div>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}
