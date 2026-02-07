// components/Header/Logo.tsx
import Image from "next/image";
import Link from "next/link";

interface LogoProps{
  sticky: boolean;
}

const Logo:React.FC<LogoProps> = ({sticky}) => {
  return (
    <div className="ml-[-1.5rem] w-60 max-w-full xl:mr-12">
      <Link
        href="/"
        className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : ""
          } `}
      >
     <Image
  src="/images/logo/logo.png"
  alt="logo"
  width={150}
  height={70}
  className="w-auto dark:hidden"
  style={{ height: "100px" }}
/>
<Image
  src="/images/logo/logo.png"
  alt="logo"
  width={150}
  height={70}
  className="hidden w-auto dark:block"
  style={{ height: "100px" }}
/>



      </Link>
    </div>
  );
};

export default Logo;
