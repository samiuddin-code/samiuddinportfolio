import { px } from "framer-motion";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-auto select-auto">
      <Image
        src="/pass.png"
        alt="avatar"
        width={950}
        height={20}
        className="translate-z-1 mx-36 p-6 mt-6 w-full h-full  transition-transform scale-100"
      />
    </div>
  );
};

export default Avatar;
