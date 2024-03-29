import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function OurPartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
    <main className="grow font-raleway">
      {children}
    </main>
    </>
  )
}
