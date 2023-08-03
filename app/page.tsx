import { CustomButton } from "./components/CustomButton";

export const Home: React.FC = () => {
  return (
    <div className="p-4">
      <div className="pb-8 text-5xl text-center">Next.js App</div>
      <div className="pb-8 text-center">
        <CustomButton label="ボタン" />
      </div>
    </div>
  )
}

export default Home;
