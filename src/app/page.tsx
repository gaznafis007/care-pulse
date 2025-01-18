import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";


export default function Home() {
  const btnFuncs = () =>{
    console.log('btnFuncs')
  }
  return (
    <main className="m-6">
      <h2 className="text-4xl text-center text-indigo-500 capitalize">Hello car pulse</h2>
      <InputField label={'name'} labelClass={'capitalize'} className={'focus:border-indigo-500'} type={'text'} name={'text'} placeholder={'Enter your name'}/>
      <Button className={'shadow-lg shadow-indigo-500'}>
        <span>Hello Button</span>
      </Button>
    </main>
  );
}
