import Image from 'next/image'
import Link from 'next/link'

function Logo() {
    return (
        <Link href={"/"} className="mt-2 flex items-center flex-grow sm:flex-grow-0 mx-4">
            <Image
                src="https://links.papareact.com/f90"
                width={120}
                height={30}
                alt="logo"
                className="cursor-pointer"
            />
        </Link>
    )
}

export default Logo