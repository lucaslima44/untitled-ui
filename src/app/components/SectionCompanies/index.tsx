import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return (
    <section className="pt-0 xl:pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 mb-8 fonte-medium">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 xl:flex items-center justify-between gap-y-4 xl-gap-y-0 gap-x-10 xl:gap-x-0">
          <Image src="/layers.svg" width={146} height={48} alt="Layers" />
          <Image src="/sisyphus.svg" width={169} height={48} alt="Sisyphus" />
          <Image src="/circooles.svg" width={183} height={48} alt="Circooles" />
          <Image src="/catalog.svg" width={160} height={48} alt="Catalog" />
          <Image src="/quotient.svg" width={187} height={48} alt="Quotient" />
          <Image src="/hourglass-mobile.svg" width={187} height={48} alt="Hourglass" className="xl:hidden"/>
        </div>
        <hr className="mt-16 xl:mt-24 border-gray-200" />
      </GridContainer>
    </section>
  );
}
