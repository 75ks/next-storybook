"use client";

import { CustomButton } from "./components/Button/CustomButton";

export const Home: React.FC = () => {
  const handleClick = (): void => {
    console.log("Click!");
  }

  return (
    <div className="p-4">
      <div className="pb-8 text-5xl text-center">Next.js App</div>
      <div className="pb-8 text-center">
        <CustomButton label="ボタン" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Home;
