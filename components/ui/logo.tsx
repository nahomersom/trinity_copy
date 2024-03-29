import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/public/images/logo_main.svg";
import headerLogo from "@/public/images/logo_sm.svg";
import darkLogo from "@/public/images/logo_dark.svg";

export default function Logo(props: any) {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        className={`${props.className} `}
        src={ props.type == "dark"?darkLogo: props.size === "big" ? mainLogo : headerLogo}
        alt="Thrinity Fellowship"
        width={props.width}
        height={props.height}
      />

      {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
            <stop stopColor="#4FD1C5" offset="0%" />
            <stop stopColor="#81E6D9" offset="25.871%" />
            <stop stopColor="#338CF5" offset="100%" />
          </radialGradient>
        </defs>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
      </svg> */}
    </Link>
  );
}
