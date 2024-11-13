import { fetchTaskListService } from "@/apis/server-side-apis/tasks_service";
import { NewTaskButton } from "@/components/tasks/NewTaskButton";
import { HighPriority } from "@/containers/HighPriority";
import { LowPriority } from "@/containers/LowPriority";
import { MediumPriority } from "@/containers/MediumPriority";

const Tasks: React.FC = async () => {
  const tasks = await fetchTaskListService();
  return (
      <div className="p-4 bg-[#fdcfd0] ">
      <div className="flex gap-x-4 h-fit mb-2">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <NewTaskButton />
      </div>
      <div className="grid gap-y-4  min-h-[calc(100vh-200px)]">
        <div className="border border-white p-2 rounded-md ">
          <h2 className="text-lg font-semibold mb-2">high priority</h2>
          <HighPriority tasks={tasks?.items}/>
        </div>
        <div className="border border-white p-2 rounded-md ">
          <h2 className="text-lg font-semibold mb-2">medium priority</h2>
          <MediumPriority tasks={tasks?.items}/>
        </div>
        <div className="border border-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-2">low priority</h2>
          <LowPriority tasks={tasks?.items}/>
        </div>
      </div>
    </div>
  );
};
export default Tasks;
