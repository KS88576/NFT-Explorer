import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Image 
          src="/logo-main.svg"
          alt="NFT Explorer"
          width={200}
          height={50}
          className="header-logo"
        />
      </div>
    </header>
  )
} 