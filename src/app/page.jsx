import AddTask from './component/AddTask';
import TodoList from './component/TodoList';
import tasksdb from './data';


export default function Home() {

  return (
    <main className="max-w-4xl mx-auto mt4" >
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">TODO LIST APP</h1>
        <AddTask/>
      </div>
      <TodoList tasks={tasksdb}/>

    </main>
  );
}
