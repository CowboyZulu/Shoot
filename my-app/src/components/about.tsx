/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uAV1nMFC3Vu
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// Remove the duplicate import statement for the 'Button' component
// import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { PaintbrushIcon } from "lucide-react"

export function About() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <PaintbrushIcon className="h-6 w-6" />
          <span className="sr-only">Paintball Adventures</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Book Now
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          alt="Paintball Field"
          className="h-full w-full object-cover object-center"
          height={1080}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpIzxog6aAOAcKN-w2D6EVZO-TdyqCxtKt4YUTDoejg&s"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 sm:text-6xl">Welcome to Blast Squad</h1>
          <p className="text-lg mb-8 max-w-md">
            Experience the ultimate adrenaline rush at our state-of-the-art paintball field.
          </p>
          <Button variant="link">Book Now</Button>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <HistoryIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our History</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Paintball Pros was founded in 2010 with the goal of providing a safe and thrilling paintball experience
                for players of all skill levels. Over the years, we've grown to become one of the premier paintball
                destinations in the region, attracting players from near and far.
              </p>
            </div>
            <div>
              <GaugeIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Equipment and Gear</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We pride ourselves on providing top-of-the-line equipment and gear to ensure a safe and enjoyable
                experience for all our players. Our rental packages include the latest paintball markers, protective
                gear, and all the necessary accessories to get you out on the field.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <FireExtinguisherIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Safety First</h2>
              <p className="text-gray-600 dark:text-gray-400">
                At Paintball Pros, safety is our top priority. We have strict safety protocols in place, including
                mandatory safety briefings, regular equipment inspections, and on-site medical personnel to ensure a
                safe and enjoyable experience for all our players.
              </p>
            </div>
            <div>
              <RulerIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Rules</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To maintain a safe and fair environment, we have a set of rules that all players must follow. These
                include wearing the appropriate protective gear, following the directions of our staff, and respecting
                the boundaries of the playing field. We take these rules seriously to ensure everyone has a great time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
        <p className="text-xs">© 2024 Blast Squad. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </>
  )
}

function FireExtinguisherIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
      <path d="M9 18h8" />
      <path d="M18 3h-3" />
      <path d="M11 3a6 6 0 0 0-6 6v11" />
      <path d="M5 13h4" />
      <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
    </svg>
  )
}


function GaugeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function HistoryIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}


function RulerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}
