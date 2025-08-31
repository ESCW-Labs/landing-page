import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/escwlabs-logo.svg`}
        alt="logo"
        width={160}
        height={50}
        style={{ width: "150px", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
