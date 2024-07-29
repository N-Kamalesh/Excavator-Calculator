import Form from "./Form";
import img from "./assets/excavator.png";
function App() {
  return (
    <main className="flex h-screen w-screen items-center justify-evenly gap-4 bg-yellow-300 p-4">
      <div className="hidden size-[40vw] rounded-full bg-orange-500 lg:inline-block">
        <img src={img} alt="excavator" />
      </div>
      <Form />
    </main>
  );
}

export default App;
