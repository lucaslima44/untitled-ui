import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return (
    <section className="pt-0 xl:pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 mb-8 fonte-medium">
          Join 4,000+ companies already growing
        </p>
        <div className="mx-auto w-full grid grid-cols-2 xl:flex items-center justify-between gap-y-4 xl-gap-y-0 gap-x-10 xl:gap-x-0">
          <Image
            src="/layers.webp"
            className="w-[102px] h-[34px] xl:w-[146px] xl:h-[48px]"
            width={146}
            height={48}
            alt="Layers"
          />
          <Image
            src="/sisyphus.webp"
            className="w-[118px] h-[34px] xl:w-[169px] xl:h-[48px]"
            width={169}
            height={48}
            alt="Sisyphus"
          />
          <Image
            src="/circooles.webp"
            className="w-[128px] h-[34px] xl:w-[183px] xl:h-[48px]"
            width={183}
            height={48}
            alt="Circooles"
          />
          <Image
            src="/catalog.webp"
            className="w-[112px] h-[34px] xl:w-[160px] xl:h-[48px]"
            width={160}
            height={48}
            alt="Catalog"
          />
          <Image
            src="/quotient.webp"
            className="w-[131px] h-[34px] xl:w-[187px] xl:h-[48px]"
            width={187}
            height={48}
            alt="Quotient"
          />
          <Image
            src="/hourglass.webp"
            className="xl:hidden w-[136px] h-[34px] xl:w-[175px] xl:h-[48px]"
            width={175}
            height={48}
            alt="Hourglass"
          />
        </div>
        <hr className="mt-16 xl:mt-24 border-gray-200" />
      </GridContainer>
    </section>
  );
}
