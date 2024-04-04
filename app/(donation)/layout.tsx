import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
    <Header hasUser={false}></Header>
    <main className="grow font-raleway">

      {children}

    </main>
    <Footer />
    </>
  )
}
