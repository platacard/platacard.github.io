import Image from 'next/image';
import Link from 'next/link';

import { StarIcon } from 'lucide-react';

import { Button } from '@plata/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@plata/ui/card';

import { ThemeModeToggle } from './_components/theme-provider/theme-mode-toggle';

export default async function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center gap-4">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Image src="/logo.png" alt="Plata" width={100} height={16} />
          <span className="text-xl sr-only font-bold ml-2">Plata</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
          <ThemeModeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="about"
          className="py-32 bg-[url('/hero.png')] min-h-[37.5rem] bg-cover bg-center text-white"
        >
          <div className="container px-4 md:px-6 space-y-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tech Is Our DNA
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Plata is a high-tech financial platform that is changing the way Mexicans interact
                with money.
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Open-Source Projects
              </h2>
              <p className="text-lg text-foreground/80">
                Check out our latest open-source projects and get involved!
              </p>
            </div>
            <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>platacard/mexo</CardTitle>
                  <CardDescription>Simple and powerful Micro Frontends framework.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Button variant="secondary" size="sm" asChild>
                      <Link
                        href="https://github.com/platacard/mexo"
                        prefetch={false}
                        target="_blank"
                      >
                        <StarIcon className="mr-2 h-4 w-4" />
                        Star
                      </Link>
                    </Button>
                    <Link href="https://github.com/platacard/mexo" target="_blank" prefetch={false}>
                      View on GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>platacard/verity</CardTitle>
                  <CardDescription>
                    Verity is a service that allows you to create new versions of various
                    applications and connect them to each other.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Button variant="secondary" size="sm" asChild>
                      <Link
                        href="https://github.com/platacard/verity"
                        prefetch={false}
                        target="_blank"
                      >
                        <StarIcon className="mr-2 h-4 w-4" />
                        Star
                      </Link>
                    </Button>
                    <Link
                      href="https://github.com/platacard/verity"
                      target="_blank"
                      prefetch={false}
                    >
                      View on GitHub
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-20 text-center">
              <p className="text-lg text-foreground/80">
                Want to contribute? Check out our open issues and join the community!
              </p>
              <Button asChild size="lg" className="mt-5">
                <Link href="https://github.com/platacard" prefetch={false} target="_blank">
                  Contribute
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-10 dark:bg-stone-900 bg-stone-100" id="contact">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          <div>
            <div className="space-x-10">
              <Link
                href="https://career.platacard.mx/get-to-know-us"
                className="text-base font-medium text-blue-400"
                prefetch={false}
                target="_blank"
              >
                Get to know us
              </Link>
              <Link
                href="https://career.platacard.mx/join-the-team"
                className="text-base font-medium text-blue-400"
                prefetch={false}
                target="_blank"
              >
                Join the team
              </Link>
            </div>
            <p className="mt-4">Tecnologías Diffiere, S.A.P.I. de C.V., Mariano Escobedo 476,</p>
            <p>First Floor, Anzures, Miguel Hidalgo, 11590, Mexico City</p>
            <p>
              <Link href="tel:+52 55 9990 8880">+52 55 9990 8880</Link>
            </p>
          </div>
          <div className="flex flex-row mt-6 md:mt-0 space-x-4">
            <Button size="icon" asChild className="bg-white" variant="link">
              <Link
                href="https://mx.linkedin.com/company/platacard"
                prefetch={false}
                target="_blank"
              >
                <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </Link>
            </Button>
            <Button size="icon" asChild className="bg-white" variant="link">
              <Link href="https://twitter.com/plata_card" prefetch={false} target="_blank">
                <Image src="/x.png" alt="Twitter" width={24} height={24} />
              </Link>
            </Button>
            <Button size="icon" asChild className="bg-white" variant="link">
              <Link href="https://www.facebook.com/platacard" prefetch={false} target="_blank">
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              </Link>
            </Button>
            <Button size="icon" asChild className="bg-white" variant="link">
              <Link href="https://www.instagram.com/platacard" prefetch={false} target="_blank">
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
